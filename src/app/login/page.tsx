import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your CloudAnzen account.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                <path d="M15 50 Q50 8 85 50" />
                <path d="M85 50 Q50 92 15 50" />
                <line x1="26" y1="24" x2="20" y2="18" />
                <line x1="74" y1="24" x2="80" y2="18" />
                <line x1="26" y1="76" x2="20" y2="82" />
                <line x1="74" y1="76" x2="80" y2="82" />
                <path d="M25 50 Q50 18 75 50 Q50 82 25 50 Z" />
                <circle cx="50" cy="50" r="16" />
                <path d="M50 34 Q66 34 66 50 Q66 62 56 67" />
                <circle cx="50" cy="50" r="6.5" />
                <path d="M38 60 Q50 70 62 60" />
              </svg>
            </div>
            <span className="font-bold text-slate-900 text-xl">CloudAnzen</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Sign in to CloudAnzen</h1>
          <p className="text-slate-500 mt-1.5">Welcome back</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <form action="#" method="POST" className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="lEmail">Work email</label>
              <input id="lEmail" name="email" type="email" required autoComplete="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" />
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <label className="block text-sm font-medium text-slate-700" htmlFor="lPassword">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>
              <input id="lPassword" name="password" type="password" required autoComplete="current-password" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
              Sign in
            </button>
          </form>
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400">OR</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <button className="w-full py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            Continue with SSO
          </button>
        </div>
        <p className="text-center text-sm text-slate-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/demo" className="text-blue-600 hover:underline font-medium">Book a demo</Link>
        </p>
      </div>
    </div>
  );
}
