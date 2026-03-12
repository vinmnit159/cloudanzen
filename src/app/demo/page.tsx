import type { Metadata } from "next";
import { Shield, CheckCircle2, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "See CloudAnzen in action. Book a personalized 30-minute demo with our team.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="pt-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-slate-900 text-lg">CloudAnzen</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              See CloudAnzen in 30 minutes
            </h1>
            <p className="text-lg text-slate-500 mb-10">
              We&apos;ll show you exactly how CloudAnzen works for your team&apos;s specific use case — no generic product tour.
            </p>
            <div className="space-y-6 mb-12">
              {[
                { icon: Clock, title: "30-minute personalized demo", desc: "Tailored to your frameworks, team size, and existing tools." },
                { icon: CheckCircle2, title: "See your use case live", desc: "SOC 2, ISO 27001, vendor risk, trust center — we demo what matters to you." },
                { icon: Users, title: "Talk to a GRC expert", desc: "Our team has real-world GRC experience and can answer technical questions." },
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

          {/* Right — form */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 lg:p-10">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Request a demo</h2>
            <form className="space-y-5" action="#" method="POST">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jordan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Torres"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="jordan@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="company">
                  Company name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="role">
                  Your role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select your role</option>
                  <option>Founder / CEO</option>
                  <option>CTO / VP Engineering</option>
                  <option>CISO / Head of Security</option>
                  <option>GRC Manager</option>
                  <option>Compliance Lead</option>
                  <option>IT Manager</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="framework">
                  Primary framework of interest
                </label>
                <select
                  id="framework"
                  name="framework"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select a framework</option>
                  <option>SOC 2</option>
                  <option>ISO 27001</option>
                  <option>GDPR</option>
                  <option>HIPAA</option>
                  <option>PCI DSS</option>
                  <option>NIST CSF</option>
                  <option>Multiple frameworks</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
                  Anything specific you&apos;d like to cover?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="e.g., We're a 50-person SaaS company starting SOC 2 Type I..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm"
              >
                Request a demo
              </button>
              <p className="text-xs text-slate-400 text-center">
                We&apos;ll respond within one business day to schedule your session.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
