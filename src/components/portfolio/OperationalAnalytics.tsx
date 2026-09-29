"use client";

import React from "react";
import { Clock, ShieldCheck, Users, BarChart3, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const OperationalAnalytics: React.FC = () => {
  const { operationalDiscipline } = PORTFOLIO_DATA;

  return (
    <div className="mt-16 bg-zinc-950 border border-zinc-800/80 rounded-sm p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-900 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
              Contemporaneously Parsed Telemetry
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
            Operational Discipline &amp; Delivery Rigor
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Audit of 401 calendar events (284.8 hours) parsed across active enterprise client engagements.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>71% High-Signal Focus Ratio</span>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-8">
        <div className="p-4 rounded bg-black border border-zinc-800/80">
          <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Total Delivery Hours</div>
          <div className="text-2xl font-mono font-bold text-white">{operationalDiscipline.totalHours}h</div>
          <div className="text-[11px] text-zinc-400 mt-1">401 events parsed</div>
        </div>

        <div className="p-4 rounded bg-black border border-zinc-800/80">
          <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Substantive Focus</div>
          <div className="text-2xl font-mono font-bold text-emerald-400">{operationalDiscipline.substantiveHours}h</div>
          <div className="text-[11px] text-zinc-400 mt-1">Protected engineering &amp; strategy</div>
        </div>

        <div className="p-4 rounded bg-black border border-zinc-800/80">
          <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Executive 1-on-1s</div>
          <div className="text-2xl font-mono font-bold text-white">{operationalDiscipline.oneOnOneSessions}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Direct founder &amp; MD sessions</div>
        </div>

        <div className="p-4 rounded bg-black border border-zinc-800/80">
          <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Avg Session Length</div>
          <div className="text-2xl font-mono font-bold text-white">{operationalDiscipline.avgMeetingMinutes}m</div>
          <div className="text-[11px] text-zinc-400 mt-1">Structured agendas &amp; notes</div>
        </div>
      </div>

      {/* Weekly Cadence Distribution */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Cadence by Day of the Week</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {operationalDiscipline.weeklyCadence.map((item, idx) => (
            <div key={idx} className="p-3 bg-zinc-900/50 rounded border border-zinc-800/60 text-xs">
              <div className="flex items-center justify-between font-mono text-zinc-300 mb-1">
                <span className="font-semibold text-white">{item.day}</span>
                <span className="text-zinc-500">{item.meetings} sessions ({item.hours}h)</span>
              </div>
              <p className="text-[11px] text-zinc-400">{item.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Handover Guarantee */}
      <div className="mt-6 p-4 rounded bg-black border border-zinc-800 text-xs text-zinc-300 flex items-start gap-3">
        <div className="p-1 rounded bg-zinc-900 border border-zinc-700 text-emerald-400 shrink-0">
          <Check className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="font-semibold text-white block mb-0.5">Audited Transition &amp; Zero Technical Debt</span>
          <p className="text-zinc-400 text-[12px] leading-relaxed">
            {operationalDiscipline.handoverMilestone}
          </p>
        </div>
      </div>
    </div>
  );
};
