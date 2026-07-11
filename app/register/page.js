// Server Component — "use client" নেই

import RegisterFormFields from "@/components/auth/RegisterFormFields";



export default function RegisterForm() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full max-w-md px-4">

        {/* Header — Server এ render হচ্ছে */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary shadow-lg mb-4">
            <svg
              className="w-7 h-7 text-primary-content"
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
          </div>
          <h1 className="text-3xl font-extrabold text-base-content">
            Create Account
          </h1>
          <p className="text-sm text-base-content/50 mt-1">
            Fill in the details to get started
          </p>
        </div>

        {/* Card — Server এ render হচ্ছে */}
        <div className="card bg-base-100 shadow-2xl w-full">
          <div className="card-body p-8 gap-4">

            {/* Form Fields — Client Component */}
            <RegisterFormFields />

            {/* Login Link — Server এ render হচ্ছে */}
            <p className="text-center text-xs text-base-content/40 mt-2">
              Already have an account?{" "}
              
               <a href="/login"
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </a>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}