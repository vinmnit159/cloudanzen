import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Compliance Automation", href: "/platform/compliance-automation" },
      { label: "Continuous Monitoring", href: "/platform/continuous-monitoring" },
      { label: "Risk Management", href: "/platform/risk-management" },
      { label: "Vendor Risk", href: "/platform/vendor-risk" },
      { label: "Policy Management", href: "/platform/policy-management" },
      { label: "Trust Center", href: "/platform/trust-center" },
      { label: "Integrations", href: "/platform/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Startups", href: "/solutions/startups" },
      { label: "For Scale-ups", href: "/solutions/scaleups" },
      { label: "For Enterprises", href: "/solutions/enterprise" },
      { label: "For SaaS", href: "/solutions/saas" },
      { label: "For Security Teams", href: "/solutions/security-teams" },
      { label: "For GRC Teams", href: "/solutions/grc-teams" },
    ],
  },
  {
    title: "Frameworks",
    links: [
      { label: "SOC 2", href: "/frameworks/soc2" },
      { label: "ISO 27001", href: "/frameworks/iso27001" },
      { label: "GDPR", href: "/frameworks/gdpr" },
      { label: "HIPAA", href: "/frameworks/hipaa" },
      { label: "PCI DSS", href: "/frameworks/pci-dss" },
      { label: "NIST CSF", href: "/frameworks/nist-csf" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Templates", href: "/resources/templates" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Compliance Checklists", href: "/resources/checklists" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Partners", href: "/company/partners" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
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
              <span className="font-bold text-white text-lg">CloudAnzen</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Continuous GRC for modern cloud teams. Automate compliance, monitor controls, manage risk.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} CloudAnzen, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Security", href: "/security" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
