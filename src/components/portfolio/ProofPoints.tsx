"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ProofPoints: React.FC = () => {
  const { proofPoints } = PORTFOLIO_DATA;

  return (
    <section className="py-12 bg-zinc-950/70 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Audited Production Proof Points & Institutional Impact
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span>Contemporaneously Documented Data</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {proofPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm bg-black border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-1 mb-2 tracking-tight">
                  {item.label}
                </div>
                <p className="text-[12px] text-zinc-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>{item.provenance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
