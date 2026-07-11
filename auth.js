// lib/auth.js

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

const refreshAccessToken = async (token) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/auth/body-refresh-token`,
      {
        method: "POST",
        body: JSON.stringify({ refreshToken: token.refreshToken }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const result = await res.json();
    if (result?.success) {
      return {
        ...token,
        accessToken: result?.data?.accessToken,
        refreshToken: result?.data?.refreshToken,
        error: null,
      };
    } else {
      console.log("Error Occoured in refreshing Accesstoken:");
      return {
        ...token,
        error: "RefreshTokenExpired",
      };
    }
  } catch (error) {
    console.log("Error Occoured in refreshing Accesstoken:", error?.message);
    return {
      ...token,
      error: "RefreshTokenExpired",
    };
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const loggedUserInfo = await fetch(
            "http://localhost:5000/api/v1/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              //  next: { revalidate: 0 },
            },
          );

          const loggedUser = await loggedUserInfo.json();
          // console.log("Logged User is:>>>>>>>>>>", loggedUser.data);
          if (loggedUser.success) {
            return {
              accessToken: loggedUser?.data.accessToken,
              refreshToken: loggedUser?.data.refreshToken,
              userInfo: { ...loggedUser?.data.userInfo },
              needsPasswordChange: loggedUser?.data.needsPasswordChange,
            };
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (token?.accessToken) {
        const decodedAccessToken = jwtDecode(token?.accessToken);
        const decodedRefreshToken = jwtDecode(token?.refreshToken);
        token.accessTokenExpiresAt = decodedAccessToken.exp * 1000;
        token.refreshTokenExpiresAt = decodedRefreshToken.exp * 1000;
      }

      if (user) {
        token.id = user.userInfo.email;
        token.role = user.userInfo.role;
        token.email = user.userInfo.email;
        token.name = user.name;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      // if (Date.now() >= token.refreshToken) {
      //   return {
      //     ...token,
      //     error: "RefreshTokenExpired",
      //   };
      // }

      // if (
      //   token.accessTokenExpiresAt <= Date.now() &&
      //   Date.now() < token.refreshToken
      // ) {
      //   return refreshAccessToken(token);
      // }

      if (Date.now() < token.accessTokenExpiresAt) {
        return token;
      }

      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.email = token.email;
        session.user.name = token.name;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.error = token.error;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});
