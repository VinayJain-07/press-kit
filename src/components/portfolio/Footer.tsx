"use client";

import React from "react";
import { ArrowUp, Globe, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const { executive } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-black border-t border-zinc-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-xs text-white">
              VJ
            </div>
            <div>
              <span className="font-semibold text-white uppercase tracking-tight block">
                Vinay Jain
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Systems Architect · Global Marketing Officer · Founder &amp; CEO
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#ventures" className="hover:text-white transition-colors">Ventures</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#speaking" className="hover:text-white transition-colors">Keynotes</a>
            <a href="#credentials" className="hover:text-white transition-colors">Institutional Rigor</a>
            <a href="#press-kit" className="hover:text-white transition-colors">Press Kit</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors flex items-center gap-1.5 font-mono text-[11px]"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-zinc-500 text-[11px] font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} Vinay Jain. All rights reserved. Formal Institutional Dossier.
          </div>
          <div className="flex items-center gap-4">
            <span>Operating Cadence: Global / IST</span>
            <span>·</span>
            <span>SEBI Reg. Equity Analyst</span>
            <span>·</span>
            <span>Actuarial Distinction (IAI)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
