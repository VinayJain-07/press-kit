"use client";

import React, { useState } from "react";
import { ArrowUpRight, Cpu, Layers, Sliders, Eye, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, Venture } from "@/data/portfolioData";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import { VentureModal } from "./VentureModal";

export const VenturesSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "wheel">("grid");
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);

  const { ventures } = PORTFOLIO_DATA;

  const wheelItems: WorksWheelItem[] = ventures.map((v) => ({
    title: v.name,
    image: v.image,
    href: `#venture-${v.id}`,
  }));

  return (
    <section id="ventures" className="py-24 bg-black border-b border-zinc-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Flagship Ventures &amp; Production Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Deterministic Systems &amp; Frontier Ventures
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Architecting cognitive operating systems, autonomous revenue engines, and token-governed enterprise infrastructure.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center self-start md:self-auto bg-zinc-950 p-1 rounded-sm border border-zinc-800">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors flex items-center gap-1.5 ${
                viewMode === "grid"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Grid</span>
            </button>
            <button
              onClick={() => setViewMode("wheel")}
              className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors flex items-center gap-1.5 ${
                viewMode === "wheel"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive 3D Wheel</span>
            </button>
          </div>
        </div>

        {/* View Mode: Interactive 3D Works Wheel */}
        {viewMode === "wheel" && (
          <div className="mb-12 border border-zinc-800/80 rounded-sm bg-zinc-950/90 overflow-hidden relative shadow-2xl">
            <div className="p-4 border-b border-zinc-900 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Scroll or drag the drum to turn through flagship ventures</span>
              </div>
              <button
                onClick={() => setViewMode("grid")}
                className="text-zinc-400 hover:text-white underline text-xs"
              >
                Switch to detailed grid view
              </button>
            </div>
            <div className="h-[620px] w-full">
              <WorksWheel items={wheelItems} label="VENTURES '26" action="Inspect" />
            </div>
          </div>
        )}

        {/* View Mode: Detailed Executive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ventures.map((venture) => (
            <div
              key={venture.id}
              id={`venture-${venture.id}`}
              className="rounded-sm bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Venture Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-zinc-900 border border-zinc-700/80 text-zinc-300">
                    {venture.badge}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <span>{venture.status}</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                    {venture.name}
                  </h3>
                  <div className="text-xs font-medium text-zinc-400 mt-0.5">
                    {venture.role} · <span className="text-zinc-500">{venture.domain}</span>
                  </div>
                </div>

                {/* Tagline Callout */}
                <p className="text-xs sm:text-sm text-zinc-300 italic mb-5 pl-3 border-l border-zinc-700">
                  {venture.tagline}
                </p>

                {/* Structural Problem & Solution */}
                <div className="space-y-3.5 mb-6 text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 block mb-1">
                      Problem Context:
                    </span>
                    <p className="line-clamp-3">{venture.structuralProblem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 block mb-1">
                      Architecture &amp; Execution:
                    </span>
                    <p className="line-clamp-3">{venture.solutionArchitecture}</p>
                  </div>
                </div>

                {/* Metric Highlight Strip */}
                <div className="p-3 rounded-sm bg-black/60 border border-zinc-800/80 mb-5 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">{venture.metricHighlight.label}</span>
                  <span className="text-sm font-mono font-bold text-white">
                    {venture.metricHighlight.value}
                  </span>
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-900">
                  {venture.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-zinc-900/80 text-[10px] font-mono text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setSelectedVenture(venture)}
                  className="w-full py-2.5 px-3 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-medium tracking-wide uppercase transition-colors flex items-center justify-center gap-1.5 border border-zinc-800"
                >
                  <span>View Full Architectural Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <VentureModal
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
      />
    </section>
  );
};
