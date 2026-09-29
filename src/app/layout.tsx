import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinay Jain | Systems Architect & Technology Executive",
  description:
    "Executive portfolio & institutional dossier of Vinay Jain. GMO at Classess.com, Founder & CEO at VinAI Technologies. Autonomous agentic systems, quantitative finance, and enterprise infrastructure.",
  keywords: [
    "Vinay Jain",
    "Systems Architect",
    "Classess.com",
    "VinAI Technologies",
    "Agentic AI",
    "Enterprise Infrastructure",
    "Actuarial Science",
    "Quantitative Finance",
    "Tokenomics",
  ],
  authors: [{ name: "Vinay Jain", url: "https://itsvinay.me" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
