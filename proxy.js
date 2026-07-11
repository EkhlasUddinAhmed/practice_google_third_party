import { NextResponse } from "next/server";
import { auth, signOut } from "@/auth";
import {
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
  ROOT,
  LOGIN,
} from "./lib/public_private_routes";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  // return NextResponse.redirect(new URL('/', request.url))
  const session = await auth();

  const { nextUrl } = await request;

  const hasSession = request.cookies.has("authjs.session-token");
  console.log("From Middle ware: hasSession are:", hasSession);

  // Refresh token expired হলে login এ পাঠাও
  if (session?.error === "RefreshTokenExpired") {
    const response = NextResponse.redirect(new URL("/login", request.url));
    // কুকিগুলো ডিলিট করে দিন
    response.cookies.delete("authjs.session-token");
    response.cookies.delete("authjs.csrf-token");
    response.cookies.delete("authjs.callback-url");

    // return NextResponse.redirect(new URL("/login", nextUrl));
    return response;
  }

  const isAuthenticated = !!session?.user?.email;

  const isPublicRoute =
    (PUBLIC_ROUTES.some((route) => nextUrl.pathname.startsWith(route)) ||
      nextUrl.pathname === ROOT) &&
    !PRIVATE_ROUTES.some((route) => nextUrl.pathname.includes(route));

  // console.log({ isAuthenticated, isPublicRoute });

  if (!isPublicRoute && !isAuthenticated) {
    const redirectUrl = new URL(LOGIN, nextUrl);

    redirectUrl.searchParams.set("redirectURL", nextUrl.pathname);

    return NextResponse.redirect(redirectUrl);
  }
}

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
