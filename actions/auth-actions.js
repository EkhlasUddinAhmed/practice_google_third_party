"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";

export const googleLoginAction = async () => {
  await signIn("google", { redirectTo: "/" });
};

const LoginZodValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid email address" })
    .max(254, { message: "Email is too long" })
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export async function credentialLoginAction(prevState, formData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  console.log("FRom credentialLoginAction :user email passwors is:", raw);

  const parsed = LoginZodValidationSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  // callbackUrl টা formData থেকে নাও
  const redirectURL = formData.get("redirectURL");
  console.log("prevState:--------------------------", prevState);
  console.log("redirectURL:---------------------------", redirectURL);
  console.log("formData:-----------------------------", formData);
  const NAVIGATE_TO = redirectURL || "/";

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: `${NAVIGATE_TO}`,
    });

    return { success: true, message: "Login Successful", data: {}, errors: {} };
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        success: false,
        message: "",
        data: {},
        errors: {
          general: ["Invalid email or password. Please try again...!!"],
        },
      };
    }
    throw error;
  }
}

const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .min(2, { message: "Name must be at least 2 characters" })
      .max(100, { message: "Name must be under 100 characters" })
      .regex(/^[\p{L}\p{M}\s'\-\.]+$/u, {
        message: "Enter a valid name",
      }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Enter a valid email address" })
      .max(254, { message: "Email is too long" })
      .toLowerCase()
      .trim(),

    phone: z
      .string()
      .min(1, { message: "Phone number is required" })
      .regex(/^(?:\+8801|8801|01)[3-9]\d{8}$/, {
        message: "Enter a valid Bangladeshi phone number",
      }),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "Password must contain at least one special character",
      }),

    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function registerAction(prevState, formData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const parsed = RegisterSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const newUser = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    password: parsed.data.password,
  };

  console.log("New User is:", newUser);
  try {
    // ⚠️ এখানে তোমার Express backend এ call করবে
    const res = await fetch(
      "http://localhost:5000/api/v1/users/create-student/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: parsed.data.password,
          student: {
            name: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone,
          },
        }),
      },
    );

    const data = await res.json();

    console.log({ data });

    return data;
  } catch (error) {
    return {
      success: false,
      errors: {
        general: ["Something went wrong in server. Please try again...!!"],
      },
    };
  }
}

// LOG OUT Action Function...............!!
export const LogOutActionHandler = async () => {
  await signOut({ redirectTo: "/login" });
};
