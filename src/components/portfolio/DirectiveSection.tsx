"use client";

import React, { useState } from "react";
import { Copy, Check, Shield, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const DirectiveSection: React.FC = () => {
  const { executive } = PORTFOLIO_DATA;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section className="py-20 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 block">
                Executive Directive & Operating Thesis
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Eliminating Operational Friction at Institutional Scale.
              </h2>
            </div>

            {/* Directive Quote Callout */}
            <div className="relative pl-6 py-2 border-l-2 border-zinc-700 bg-zinc-950/40 rounded-r-sm p-4">
              <p className="text-base sm:text-lg italic text-zinc-200 font-normal leading-relaxed">
                &ldquo;{executive.directiveQuote}&rdquo;
              </p>
              <div className="mt-2 text-xs font-mono uppercase tracking-wider text-zinc-500">
                — Vinay Jain, Systems Architect
              </div>
            </div>

            {/* Detailed Executive Descriptions */}
            <div className="space-y-5 text-sm sm:text-base text-zinc-400 leading-relaxed">
              <p>
                As <strong className="text-white font-medium">Global Marketing Officer at Classess.com</strong>, 
                I direct international distribution, enterprise positioning, and go-to-market architecture 
                for the world&apos;s first fully AI-native academic operating system. Higher education institutions 
                globally are paralyzed by fragmented legacy ERPs and static LMS layers. We rebuild this core infrastructure 
                from first principles—introducing cognitive data pipelines that automate administrative friction, synchronize 
                student retention protocols, and dynamically orchestrate academic workflows.
              </p>

              <p>
                Through <strong className="text-white font-medium">VinAI Technologies</strong>, I engineer and deploy 
                deterministic multi-tier agentic systems, event-driven webhook middleware, and token-optimized revenue operations. 
                Our production systems bridge the critical gap between experimental LLM demos and mission-critical 
                commercial execution—demonstrated by deploying autonomous conversational voice agents that generated 
                <span className="text-zinc-200 font-mono"> $845,000 in qualified enterprise pipeline in a single 24-hour run</span>.
              </p>

              <p>
                Underpinning every architecture is rigorous mathematical discipline. Holding a quantitative background in 
                <strong className="text-white font-medium"> Economics &amp; Finance (Valedictorian, CGPA 9.51)</strong>, 
                professional distinctions from the <strong className="text-white font-medium">Institute of Actuaries of India (IAI)</strong>, 
                and national championship honors in Enterprise Risk Modeling from the <strong className="text-white font-medium">Institute of Risk Management (UK)</strong>, 
                I approach systems architecture through the lens of stochastic stability, formal risk boundaries, and compute governance.
              </p>
            </div>

            {/* Three Institutional Pillars */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-sm bg-zinc-950 border border-zinc-800">
                <div className="font-mono text-xs text-zinc-500 mb-1">01 / SYSTEMS</div>
                <div className="text-sm font-semibold text-white mb-1.5">Frontier Agentic AI</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Unattended multi-agent state machines, event-driven webhooks, and deterministic revops.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-zinc-950 border border-zinc-800">
                <div className="font-mono text-xs text-zinc-500 mb-1">02 / PLATFORM</div>
                <div className="text-sm font-semibold text-white mb-1.5">Academic OS</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Global GTM for Classess.com, reconstructing higher education tech stacks from first principles.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-zinc-950 border border-zinc-800">
                <div className="font-mono text-xs text-zinc-500 mb-1">03 / QUANTITATIVE</div>
                <div className="text-sm font-semibold text-white mb-1.5">Actuarial &amp; Risk</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Stochastic probability distributions, non-linear market microstructure, and compute tokenomics.
                </p>
              </div>
            </div>
          </div>

          {/* Fast Facts & Dossier Sidebar */}
          <div className="lg:col-span-4 bg-zinc-950 border border-zinc-800/80 rounded-sm p-6 space-y-6">
            <div className="border-b border-zinc-900 pb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-1">
                Executive Dossier
              </span>
              <h3 className="text-base font-semibold text-white">Fast Facts &amp; Identity</h3>
            </div>

            <div className="space-y-4">
              {executive.fastFacts.map((fact, idx) => (
                <div key={idx} className="flex flex-col text-xs pb-3 border-b border-zinc-900 last:border-0 last:pb-0">
                  <span className="text-zinc-500 font-mono text-[10px] uppercase mb-0.5">{fact.label}</span>
                  <span className="text-zinc-200 font-medium">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => copyToClipboard(executive.contact.email, "email")}
                className="w-full py-2 px-3 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-mono transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{executive.contact.email}</span>
                </span>
                {copiedItem === "email" ? (
                  <span className="text-emerald-400 text-[10px] uppercase font-bold">Copied</span>
                ) : (
                  <Copy className="w-3 h-3 text-zinc-500" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(executive.contact.phone, "phone")}
                className="w-full py-2 px-3 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-mono transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{executive.contact.phone}</span>
                </span>
                {copiedItem === "phone" ? (
                  <span className="text-emerald-400 text-[10px] uppercase font-bold">Copied</span>
                ) : (
                  <Copy className="w-3 h-3 text-zinc-500" />
                )}
              </button>
            </div>

            <div className="pt-2 border-t border-zinc-900 text-[11px] text-zinc-500 flex items-center justify-between">
              <span>Operating Cadence:</span>
              <span className="text-zinc-300 font-mono">IST / UTC+5:30 (Global Remote)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
