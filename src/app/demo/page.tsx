import type { Metadata } from "next";
import DemoForm from "./DemoForm";
import { CheckCircle2, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "See CloudAnzen in action. Book a personalized 30-minute demo with our team.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — static content, stays a server component */}
          <div className="pt-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
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
              <span className="font-bold text-slate-900 text-lg">CloudAnzen</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              See CloudAnzen in 30 minutes
            </h1>
            <p className="text-lg text-slate-500 mb-10">
              We&apos;ll show you exactly how CloudAnzen works for your team&apos;s specific use
              case — no generic product tour.
            </p>
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: Clock,
                  title: "30-minute personalized demo",
                  desc: "Tailored to your frameworks, team size, and existing tools.",
                },
                {
                  icon: CheckCircle2,
                  title: "See your use case live",
                  desc: "SOC 2, ISO 27001, vendor risk, trust center — we demo what matters to you.",
                },
                {
                  icon: Users,
                  title: "Talk to a GRC expert",
                  desc: "Our team has real-world GRC experience and can answer technical questions.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — interactive form (client component) */}
          <DemoForm />
        </div>
      </div>
    </div>
  );
}
