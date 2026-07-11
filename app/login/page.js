// app/(auth)/login/page.js

import CredentialLogin from "@/components/auth/CredentialLogin";
import SocialLogin from "@/components/auth/SocialLogin";

export const metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default async function LoginPage({searchParams}) {
  const {redirectURL}=await searchParams;
 console.log("From Log in page: Serach params is:>>>>>>>>>>>>>>",redirectURL)
  
  
 
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16 w-full max-w-5xl px-4">
        {/* LEFT SIDE — Branding */}
        <div className="text-center lg:text-left lg:flex-1">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary shadow-lg mb-5">
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-base-content leading-tight">
            Welcome back. <br />
            <span className="text-primary">Sign in</span> to continue.
          </h1>
          <p className="py-4 text-base-content/60 text-sm leading-relaxed max-w-sm">
            Access your workspace, manage your projects, and stay on top of
            everything — all in one place.
          </p>
        </div>

        {/* RIGHT SIDE — Login Card */}
        <div className="card bg-base-100 shadow-2xl w-full max-w-md shrink-0">
          <div className="card-body gap-6 p-8">
            <div>
              <h2 className="card-title text-xl font-bold text-base-content">
                Sign in to your account
              </h2>
              <p className="text-sm text-base-content/50 mt-1">
                Enter your credentials below
              </p>
            </div>

            {/* TODO: Credential Login Component */}
            <CredentialLogin  redirectURL={redirectURL}/>

            <div className="divider text-xs text-base-content/40 font-medium my-0">
              OR
            </div>

            {/* TODO: Social Login Component */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
