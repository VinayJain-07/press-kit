"use client";

import React, { useState } from "react";
import { Mic, Users, Clock, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { PORTFOLIO_DATA, Keynote } from "@/data/portfolioData";

interface KeynotesSectionProps {
  onContactClick: () => void;
}

export const KeynotesSection: React.FC<KeynotesSectionProps> = ({ onContactClick }) => {
  const { keynotes, speakingRecords } = PORTFOLIO_DATA;
  const [expandedKeynote, setExpandedKeynote] = useState<string>(keynotes[0].id);

  const toggleExpand = (id: string) => {
    setExpandedKeynote(expandedKeynote === id ? "" : id);
  };

  return (
    <section id="speaking" className="py-24 bg-black border-b border-zinc-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Keynotes, Stage Footprint &amp; Executive Masterclasses
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Frontier Thought Leadership &amp; Global Stages
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Addressing global enterprise forums, directing business school faculty residencies, 
              and curating world-class idea architecture.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="self-start md:self-auto px-4 py-2 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Inquire for Keynote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Global Stage Footprint Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {speakingRecords.map((record, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider uppercase text-zinc-500 mb-2">
                  <Mic className="w-3 h-3 text-zinc-400" />
                  <span>{record.role}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {record.forum}
                </h3>
                <p className="text-xs font-medium text-zinc-300 mb-3">
                  {record.topic}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-zinc-500" />
                <span>{record.audience}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Signature Keynotes Breakdown */}
        <div className="space-y-4">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Signature Keynote Curricula
            </span>
          </div>

          {keynotes.map((keynote) => {
            const isExpanded = expandedKeynote === keynote.id;
            return (
              <div
                key={keynote.id}
                className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden transition-all duration-200"
              >
                {/* Header row */}
                <button
                  onClick={() => toggleExpand(keynote.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-zinc-900/40 transition-colors focus:outline-none"
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-1.5">
                      <span>{keynote.duration}</span>
                      <span>·</span>
                      <span className="text-zinc-400">{keynote.targetAudience}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                      {keynote.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                      {keynote.subtitle}
                    </p>
                  </div>

                  <div className="p-2 rounded bg-zinc-900 text-zinc-400 shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-zinc-900 space-y-5 animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Abstract &amp; Thematic Overview
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-black/60 p-4 rounded border border-zinc-800/80">
                        {keynote.abstract}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Core Takeaways for Institutional Leadership
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {keynote.takeaways.map((takeaway, i) => (
                          <div
                            key={i}
                            className="p-3 rounded bg-black/40 border border-zinc-900 flex items-start gap-2.5 text-xs text-zinc-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Speaker Rider Quick Card */}
        <div className="mt-12 p-6 rounded-sm bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-white font-medium block mb-1">Speaker Rider &amp; Production Requirements:</span>
            <span>Keynote (30-60 min), Executive Masterclasses (Half/Full Day), Fireside Chats. Wireless headset/lapel, HDMI feed, confidence monitor.</span>
          </div>
          <button
            onClick={onContactClick}
            className="self-start md:self-auto px-4 py-2 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono border border-zinc-700 uppercase tracking-wider transition-colors shrink-0"
          >
            Request Speaker Deck
          </button>
        </div>
      </div>
    </section>
  );
};
