import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CloudAnzen — Continuous GRC for Modern Cloud Teams",
    template: "%s | CloudAnzen",
  },
  description:
    "CloudAnzen helps modern companies automate compliance, monitor controls continuously, manage vendor and internal risk, and stay audit-ready from one platform. SOC 2, ISO 27001, GDPR, HIPAA and more.",
  keywords: [
    "GRC platform",
    "compliance automation",
    "SOC 2",
    "ISO 27001",
    "GDPR",
    "risk management",
    "vendor risk",
    "audit readiness",
    "trust center",
    "continuous monitoring",
  ],
  authors: [{ name: "CloudAnzen" }],
  creator: "CloudAnzen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cloudanzen.com",
    siteName: "CloudAnzen",
    title: "CloudAnzen — Continuous GRC for Modern Cloud Teams",
    description:
      "Automate compliance, monitor controls, manage risk, and prove trust — without spreadsheet chaos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CloudAnzen GRC Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudAnzen — Continuous GRC for Modern Cloud Teams",
    description:
      "Automate compliance, monitor controls, manage risk, and prove trust — without spreadsheet chaos.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://www.cloudanzen.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
