"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const platformLinks = [
  { label: "Platform Overview", href: "/platform", desc: "See the full platform" },
  { label: "Compliance Automation", href: "/platform/compliance-automation", desc: "Map controls, collect evidence automatically" },
  { label: "Continuous Monitoring", href: "/platform/continuous-monitoring", desc: "Track control health in real time" },
  { label: "Risk Management", href: "/platform/risk-management", desc: "Log, prioritize, and remediate risks" },
  { label: "Vendor Risk Management", href: "/platform/vendor-risk", desc: "Standardized vendor oversight workflows" },
  { label: "Policy Management", href: "/platform/policy-management", desc: "Centralize policies and approvals" },
  { label: "Audit Readiness", href: "/platform/audit-readiness", desc: "Streamline auditor collaboration" },
  { label: "Trust Center", href: "/platform/trust-center", desc: "Share your security posture proactively" },
  { label: "Questionnaire Automation", href: "/platform/questionnaire-automation", desc: "Respond to security reviews faster" },
  { label: "Integrations", href: "/platform/integrations", desc: "Connect 100+ systems" },
];

const solutionLinks = [
  { label: "For Startups", href: "/solutions/startups", desc: "SOC 2 fast-track for early-stage teams" },
  { label: "For Scale-ups", href: "/solutions/scaleups", desc: "Scale your GRC program" },
  { label: "For Enterprises", href: "/solutions/enterprise", desc: "Enterprise-grade compliance" },
  { label: "For Security Teams", href: "/solutions/security-teams", desc: "Continuous control monitoring" },
  { label: "For GRC Teams", href: "/solutions/grc-teams", desc: "Purpose-built GRC workflows" },
  { label: "For SaaS Companies", href: "/solutions/saas", desc: "Win enterprise deals faster" },
];

const frameworkLinks = [
  { label: "SOC 2", href: "/frameworks/soc2" },
  { label: "ISO 27001", href: "/frameworks/iso27001" },
  { label: "GDPR", href: "/frameworks/gdpr" },
  { label: "HIPAA", href: "/frameworks/hipaa" },
  { label: "PCI DSS", href: "/frameworks/pci-dss" },
  { label: "NIST CSF", href: "/frameworks/nist-csf" },
  { label: "Custom Frameworks", href: "/frameworks/custom" },
];

type DropdownKey = "platform" | "solutions" | "frameworks" | null;

export default function Navbar() {
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(key);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span
                className={cn(
                  "font-bold text-xl tracking-tight",
                  scrolled ? "text-slate-900" : "text-white"
                )}
              >
                CloudAnzen
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {(
                [
                  { label: "Platform", key: "platform" as DropdownKey },
                  { label: "Solutions", key: "solutions" as DropdownKey },
                  { label: "Frameworks", key: "frameworks" as DropdownKey },
                ] as { label: string; key: DropdownKey }[]
              ).map(({ label, key }) => (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      scrolled
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-150",
                        open === key && "rotate-180"
                      )}
                    />
                  </button>
                </div>
              ))}
              {[
                { label: "Customers", href: "/customers" },
                { label: "Resources", href: "/resources" },
                { label: "Pricing", href: "/pricing" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    scrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/login"
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded-md transition-colors",
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-white/80 hover:text-white"
                )}
              >
                Sign in
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Book a demo
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-md",
                scrolled ? "text-slate-700" : "text-white"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mega-menu dropdowns */}
        {open === "platform" && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl"
            onMouseEnter={() => handleMouseEnter("platform")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-5">
              {platformLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(null)}
                  className="group flex flex-col p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                    {l.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">{l.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {open === "solutions" && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 gap-2 lg:grid-cols-3">
              {solutionLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(null)}
                  className="group flex flex-col p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                    {l.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">{l.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {open === "frameworks" && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl"
            onMouseEnter={() => handleMouseEnter("frameworks")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-3 gap-2 lg:grid-cols-7">
              {frameworkLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(null)}
                  className="group flex flex-col items-center p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 text-center">
                    {l.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 h-16 border-b border-slate-200">
              <span className="font-bold text-slate-900">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close">
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            <div className="px-6 py-6 space-y-6">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Platform
                </p>
                <div className="space-y-1">
                  {platformLinks.slice(0, 6).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {frameworkLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-1.5 text-sm border border-slate-200 rounded-full text-slate-700 hover:border-blue-300 hover:text-blue-700"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Link
                  href="/login"
                  className="block text-center text-sm font-medium text-slate-700 py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/demo"
                  className="block text-center px-4 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
