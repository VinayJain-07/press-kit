"use client";

import React, { useState } from "react";
import { Award, BookOpen, ShieldCheck, GraduationCap, TrendingUp, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const CredentialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const { credentials } = PORTFOLIO_DATA;

  const tabs = [
    "All",
    "Actuarial Science",
    "Academic Honors",
    "Accreditations",
    "Competitions",
    "Research",
  ];

  const filteredCredentials =
    activeTab === "All"
      ? credentials
      : credentials.filter((c) => c.category === activeTab);

  return (
    <section id="credentials" className="py-24 bg-black border-b border-zinc-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Quantitative Foundations &amp; Institutional Rigor
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Mathematical Authority &amp; Risk Foundations
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Grounding technology architecture in actuarial probability, econometric modeling, 
              and institutional risk management standards.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-950 p-1 rounded-sm border border-zinc-800">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCredentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500">
                    {cred.category}
                  </span>
                  {cred.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-zinc-900 border border-zinc-700 text-zinc-300">
                      {cred.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-zinc-100 transition-colors mb-1">
                  {cred.title}
                </h3>
                <div className="text-xs font-medium text-zinc-400 mb-3 flex items-center justify-between">
                  <span>{cred.institution}</span>
                  {cred.year && <span className="font-mono text-zinc-500">{cred.year}</span>}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-900 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <Check className="w-3 h-3" />
                <span>Verified Institutional Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Research Callout Strip */}
        <div className="mt-12 p-6 rounded-sm bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">EconShastra Contributor &amp; Technical Whitepaper Author</h4>
              <p className="text-xs text-zinc-400 mt-0.5 max-w-2xl leading-relaxed">
                Featured contributor to the flagship economics publication of the IIMs on macroeconomic volatility and monetary transmission; author of technical whitepapers on low-code multi-agent orchestration.
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-zinc-400 border border-zinc-800 bg-black px-3 py-2 rounded shrink-0">
            ISSN / Peer Verified
          </div>
        </div>
      </div>
    </section>
  );
};
