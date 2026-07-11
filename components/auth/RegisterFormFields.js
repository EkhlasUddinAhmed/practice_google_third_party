"use client";

import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { registerAction } from "@/actions/auth-actions";

const initialState = {
  success: false,
  message: "",
  data: {},
  errors: {},
};

const EyeIcon = () => (
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
);

const EyeOffIcon = () => (
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
);

export default function RegisterFormFields() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    registerAction,
    initialState,
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  console.log("FRom Registration Form Field client side:Dtate is:", state);

  useEffect(() => {
    if (state.success) {
      router.push("/login");
    }
  }, [state.success]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {/* General Error */}
      {state?.errors?.general && (
        <p className="text-sm text-error">{state.errors.general[0]}</p>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="label pb-0" htmlFor="name">
          <span className="label-text font-medium">Full Name</span>
        </label>
        <label
          className={`input input-bordered flex items-center gap-2 w-full ${
            state?.errors?.name ? "input-error" : ""
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            className="grow text-sm"
          />
        </label>
        {state?.errors?.name && (
          <p className="text-xs text-error mt-0.5">{state.errors.name[0]}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="label pb-0" htmlFor="email">
          <span className="label-text font-medium">Email Address</span>
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

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label className="label pb-0" htmlFor="phone">
          <span className="label-text font-medium">Phone Number</span>
        </label>
        <label
          className={`input input-bordered flex items-center gap-2 w-full ${
            state?.errors?.phone ? "input-error" : ""
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="01XXXXXXXXX"
            className="grow text-sm"
          />
        </label>
        {state?.errors?.phone && (
          <p className="text-xs text-error mt-0.5">{state.errors.phone[0]}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <label className="label pb-0" htmlFor="password">
          <span className="label-text font-medium">Password</span>
        </label>
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
            autoComplete="new-password"
            placeholder="Min 8 chars + special character"
            className="grow text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-base-content/40 hover:text-base-content transition"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </label>
        {state?.errors?.password && (
          <p className="text-xs text-error mt-0.5">
            {state.errors.password[0]}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-1.5">
        <label className="label pb-0" htmlFor="confirmPassword">
          <span className="label-text font-medium">Confirm Password</span>
        </label>
        <label
          className={`input input-bordered flex items-center gap-2 w-full ${
            state?.errors?.confirmPassword ? "input-error" : ""
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirm ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Re-enter your password"
            className="grow text-sm"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="text-base-content/40 hover:text-base-content transition"
          >
            {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </label>
        {state?.errors?.confirmPassword && (
          <p className="text-xs text-error mt-0.5">
            {state.errors.confirmPassword[0]}
          </p>
        )}
      </div>
      {!state?.success && (
        <p className=" text-red-600 mt-0.5">{state?.message}</p>
      )}
      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full mt-2"
      >
        {isPending ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
}
