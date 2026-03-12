import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About CloudAnzen",
  description: "CloudAnzen was founded to make continuous GRC accessible to every team — not just those with large compliance budgets.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        badge="Company · About"
        title="Built by people who"
        titleHighlight="lived the problem"
        subtitle="CloudAnzen was founded by engineers and GRC professionals who spent years drowning in compliance spreadsheets — and decided there had to be a better way."
      />
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none mb-16">
            <p>CloudAnzen was founded on a simple belief: compliance should be a continuous, operational discipline — not a painful scramble before every audit.</p>
            <p>Most teams treat GRC as a project. They pull together evidence for three months, survive the audit, and repeat the cycle. Meanwhile, controls drift, risks accumulate, and no one quite knows the real state of their security posture.</p>
            <p>We built CloudAnzen to change that. By connecting to the systems your controls already depend on and continuously monitoring their health, we give security and compliance teams a real-time picture of where they stand — and the tools to fix gaps before they become findings.</p>
            <p>Our name reflects our mission: &ldquo;Cloud&rdquo; for modern infrastructure, and &ldquo;Anzen&rdquo; — the Japanese word for safety and security — for what we help you achieve.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-16 text-center">
            {[
              { stat: "2022", label: "Founded" },
              { stat: "500+", label: "Compliance frameworks mapped" },
              { stat: "100+", label: "Integrations available" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-4xl font-black text-blue-600 mb-2">{stat}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Join our team</h2>
            <p className="text-slate-400 mb-8">We&apos;re hiring engineers, GRC experts, and go-to-market talent who want to build the future of compliance automation.</p>
            <Link href="/company/careers" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
              View open roles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
