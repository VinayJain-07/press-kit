"use client";

import React, { useState } from "react";
import { ArrowUpRight, ShieldCheck, Filter, Calendar, Cpu } from "lucide-react";
import { PORTFOLIO_DATA, CaseStudy } from "@/data/portfolioData";
import { CaseStudyModal } from "./CaseStudyModal";
import { OperationalAnalytics } from "./OperationalAnalytics";

export const CaseStudiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const { caseStudies } = PORTFOLIO_DATA;

  const categories = ["All", "Agentic AI", "RevOps & Growth", "Tokenomics & Infra", "Summit Capture"];

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  return (
    <section id="case-studies" className="py-24 bg-black border-b border-zinc-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Audited Client Engagements &amp; Technical Delivery
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Production Case Studies &amp; Execution Log
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Audited production outcomes from enterprise deployments, spanning autonomous voice agents, 
              tokenomic compute governance, and high-velocity B2B pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-950 p-1 rounded-sm border border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="rounded-sm bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-zinc-900 border border-zinc-700 text-zinc-300">
                    {cs.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cs.period}</span>
                  </div>
                </div>

                {/* Client & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                  {cs.client}
                </h3>
                <p className="text-xs font-medium text-zinc-400 mt-1 mb-5">
                  {cs.subtitle}
                </p>

                {/* Metrics 4-Col Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                  {cs.keyMetrics.map((km, i) => (
                    <div key={i} className="p-2.5 bg-black rounded border border-zinc-800/90 text-center">
                      <div className="text-sm font-mono font-bold text-white">{km.value}</div>
                      <div className="text-[9px] font-mono uppercase text-zinc-500 mt-0.5 leading-tight">{km.label}</div>
                    </div>
                  ))}
                </div>

                {/* Audited Impact Callout */}
                <div className="p-3.5 rounded-sm bg-zinc-900/50 border border-zinc-800 mb-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Production Outcome</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {cs.auditedOutcome}
                  </p>
                </div>
              </div>

              <div>
                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-900">
                  {cs.deployedStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-mono text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedCaseStudy(cs)}
                  className="w-full py-2.5 px-3 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-medium tracking-wide uppercase transition-colors flex items-center justify-center gap-1.5 border border-zinc-800"
                >
                  <span>Examine Delivery Milestones</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Discipline & Telemetry */}
        <OperationalAnalytics />
      </div>

      {/* Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
