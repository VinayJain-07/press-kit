"use client";

import React, { useState } from "react";
import { ArrowUpRight, ShieldCheck, Terminal, Download, Copy, Check, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { executive } = PORTFOLIO_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(executive.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="overview"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black border-b border-zinc-900"
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b18_1px,transparent_1px),linear-gradient(to_bottom,#18181b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-zinc-800/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm text-zinc-300 text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide uppercase text-[11px] text-zinc-300">
              {executive.statusBadge}
            </span>
          </div>

          {/* Executive Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] mb-6">
            Engineering Autonomous Systems,{" "}
            <span className="text-zinc-400">Quantitative Intelligence,</span> and{" "}
            <span className="text-zinc-200">Enterprise Scale.</span>
          </h1>

          {/* Executive Subheadline / Description */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-normal leading-relaxed mb-10 max-w-3xl">
            {executive.subheadline}
          </p>

          {/* Core Institutional Appointments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {executive.currentRoles.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-sm bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 mb-1">
                  {item.type}
                </div>
                <div className="text-sm font-semibold text-white">
                  {item.company}
                </div>
                <div className="text-xs text-zinc-400">
                  {item.role}
                </div>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#ventures"
              className="px-5 py-2.5 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-semibold tracking-wider uppercase transition-all duration-150 flex items-center gap-2 shadow-sm"
            >
              <span>Explore Ventures</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#case-studies"
              className="px-5 py-2.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-150 flex items-center gap-2"
            >
              <span>Audited Case Studies</span>
            </a>

            <a
              href="#press-kit"
              className="px-4 py-2.5 rounded-sm bg-transparent hover:bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs font-medium tracking-wide transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-zinc-400" />
              <span>Press Kit</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-sm bg-transparent hover:bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs font-mono transition-colors flex items-center gap-1.5"
              title="Copy direct email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{executive.contact.email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
