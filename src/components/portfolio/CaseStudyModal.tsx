"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Calendar, Cpu } from "lucide-react";
import { CaseStudy } from "@/data/portfolioData";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-sm shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-zinc-900 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-zinc-900 border border-zinc-700 text-zinc-300">
                {caseStudy.category}
              </span>
              <span className="text-xs font-mono text-zinc-500">{caseStudy.period}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">{caseStudy.client}</h3>
            <p className="text-sm font-medium text-zinc-400 mt-0.5">{caseStudy.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {caseStudy.keyMetrics.map((metric, i) => (
            <div key={i} className="p-3 bg-black rounded border border-zinc-800 text-center">
              <div className="text-base sm:text-lg font-mono font-bold text-white">{metric.value}</div>
              <div className="text-[10px] font-mono uppercase text-zinc-400 mt-0.5">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technical Scope */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            Technical Architecture &amp; Delivery Scope
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed bg-black/50 p-3.5 rounded border border-zinc-900">
            {caseStudy.technicalScope}
          </p>
        </div>

        {/* Audited Production Impact */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Audited Production Impact</span>
          </h4>
          <div className="p-4 rounded-sm bg-emerald-950/10 border border-emerald-500/20 text-sm text-zinc-200 leading-relaxed">
            {caseStudy.auditedOutcome}
          </div>
        </div>

        {/* Execution Breakdown */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Chronological Delivery Milestones
          </h4>
          <ul className="space-y-2">
            {caseStudy.breakdown.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deployed Stack */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Deployed Stack &amp; Protocols</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.deployedStack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded bg-black border border-zinc-800 text-[11px] font-mono text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
          <span className="text-[11px] font-mono text-zinc-500">
            Audit Source: Contemporaneous Delivery Log
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
