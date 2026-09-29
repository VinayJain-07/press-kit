"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, Cpu, Database, ExternalLink } from "lucide-react";
import { Venture } from "@/data/portfolioData";

interface VentureModalProps {
  venture: Venture | null;
  onClose: () => void;
}

export const VentureModal: React.FC<VentureModalProps> = ({ venture, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (venture) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [venture, onClose]);

  if (!venture) return null;

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
                {venture.badge}
              </span>
              <span className="text-xs font-mono text-zinc-500">{venture.status}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">{venture.name}</h3>
            <p className="text-sm font-medium text-zinc-400 mt-0.5">{venture.role}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight Banner */}
        <div className="p-4 rounded-sm bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
          <div className="text-xs text-zinc-300 italic">
            &ldquo;{venture.tagline}&rdquo;
          </div>
          <div className="text-right pl-4 border-l border-zinc-800">
            <div className="text-lg font-mono font-bold text-white">{venture.metricHighlight.value}</div>
            <div className="text-[10px] font-mono uppercase text-zinc-400">{venture.metricHighlight.label}</div>
          </div>
        </div>

        {/* The Structural Problem */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            The Structural Problem
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed bg-black/50 p-3.5 rounded border border-zinc-900">
            {venture.structuralProblem}
          </p>
        </div>

        {/* The Solution Architecture */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            The Solution Architecture
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed bg-black/50 p-3.5 rounded border border-zinc-900">
            {venture.solutionArchitecture}
          </p>
        </div>

        {/* Production Capabilities */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Production Capabilities & Technical Delivery
          </h4>
          <ul className="space-y-2">
            {venture.capabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Commercial Impact */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Quantified Commercial Impact
          </h4>
          <div className="p-3.5 rounded bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-200">
            {venture.commercialImpact}
          </div>
        </div>

        {/* Technical Stack */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Deployed Technical Stack</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {venture.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded bg-black border border-zinc-800 text-[11px] font-mono text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
          <span className="text-[11px] font-mono text-zinc-500">Domain: {venture.domain}</span>
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
