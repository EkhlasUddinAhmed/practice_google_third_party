// components/auth/CredentialLogin.js

"use client";

import { useActionState, useState } from "react";
import { credentialLoginAction } from "@/actions/auth-actions";

const initialState = {
  success: false,
  message:"",
  data:{},
  errors: {},
};

export default function CredentialLogin({ redirectURL }) {
  const [state, formAction, isPending] = useActionState(
    credentialLoginAction,
    initialState
  );
  const [showPassword, setShowPassword] = useState(false);

  
  return (
    <div className="w-full flex flex-col gap-4">
      <form action={formAction} className="flex flex-col gap-4">
         {/* Hidden input হিসেবে callbackUrl পাঠাও */}
      <input type="hidden" name="redirectURL" value={redirectURL} />
        {/* Email Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <label className="label pb-0" htmlFor="email">
            <span className="label-text font-medium">Email address</span>
          </label>
          <label
            className={`input input-bordered flex items-center gap-2 w-full ${
              state?.errors?.email ? "input-error" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-base-content/40 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="grow text-sm"
            />
          </label>
          {state?.errors?.email && (
            <p className="text-xs text-error mt-0.5">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex justify-between items-center">
            <label className="label pb-0" htmlFor="password">
              <span className="label-text font-medium">Password</span>
            </label>
            
             <a href="/forgot-password"
              className="text-xs text-primary hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <label
            className={`input input-bordered flex items-center gap-2 w-full ${
              state?.errors?.password ? "input-error" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-base-content/40 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              className="grow text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-base-content/40 hover:text-base-content transition"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </label>
          {state?.errors?.password && (
            <p className="text-xs text-error mt-0.5">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        {/* General Error — Sign In button এর উপরে */}
        {state?.errors?.general && (
          <p className="text-sm text-error">{state.errors.general[0]}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="btn btn-primary w-full"
        >
          {isPending ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
}