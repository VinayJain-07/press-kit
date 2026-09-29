"use client";

import React, { useState } from "react";
import { Copy, Check, Download, FileText, Image as ImageIcon, Sliders, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const PressKitSection: React.FC = () => {
  const { pressBios, brandSpecs, executive } = PORTFOLIO_DATA;
  const [activeBioTab, setActiveBioTab] = useState<"short50" | "standard150" | "comprehensive500">("standard150");
  const [copiedBio, setCopiedBio] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleCopyBio = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  const handleDownloadPressKit = () => {
    // Generate an executive press kit text package client-side
    const pressKitContent = `=====================================================
VINAY JAIN | EXECUTIVE PRESS KIT & MEDIA ASSET PACK
Official URL: https://${executive.contact.website}
Direct Line: ${executive.contact.phone}
Direct Inquiries: ${executive.contact.email}
Location: ${executive.contact.location}
=====================================================

1. 50-WORD EXECUTIVE BIO:
${pressBios.short50}

-----------------------------------------------------
2. 150-WORD STANDARD BIO (KEYNOTES & PRESS RELEASES):
${pressBios.standard150}

-----------------------------------------------------
3. COMPREHENSIVE EXECUTIVE DOSSIER:
${pressBios.comprehensive500}

-----------------------------------------------------
4. BRAND CITATION SPECIFICATIONS:
Full Name: ${brandSpecs.name}
Approved Pronunciation: ${brandSpecs.pronunciation}
Primary Title: ${brandSpecs.primaryTitle}
Secondary Title: ${brandSpecs.secondaryTitle}
Brand Palette:
- Obsidian Core: #000000
- Monolith Slate: #09090B
- Surface Border: #27272A
- Pure Signal White: #FAFAFA
- Status Emerald: #10B981

Typography:
- Primary: ${brandSpecs.typography.primary}
- Technical: ${brandSpecs.typography.secondary}
=====================================================
`;
    const blob = new Blob([pressKitContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Vinay_Jain_Executive_Press_Kit.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="press-kit" className="py-24 bg-black border-b border-zinc-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Media Kit, Biographies &amp; Citation Guidelines
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Executive Press Kit &amp; Media Assets
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Approved biographies, brand citation specifications, and high-fidelity media assets 
              for conference curators, event chairs, and journalists.
            </p>
          </div>

          <button
            onClick={handleDownloadPressKit}
            className="self-start md:self-auto px-5 py-2.5 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{downloadSuccess ? "Dossier Downloaded!" : "Download Press Package"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Biographies Panel (Col 8) */}
          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-800 rounded-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Approved Executive Biographies
              </span>

              {/* Bio length toggle */}
              <div className="flex items-center gap-1 bg-black p-1 rounded border border-zinc-800">
                <button
                  onClick={() => setActiveBioTab("short50")}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                    activeBioTab === "short50"
                      ? "bg-zinc-800 text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  50 Words
                </button>
                <button
                  onClick={() => setActiveBioTab("standard150")}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                    activeBioTab === "standard150"
                      ? "bg-zinc-800 text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  150 Words
                </button>
                <button
                  onClick={() => setActiveBioTab("comprehensive500")}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                    activeBioTab === "comprehensive500"
                      ? "bg-zinc-800 text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Comprehensive
                </button>
              </div>
            </div>

            {/* Bio Content Box */}
            <div className="relative p-5 rounded bg-black/60 border border-zinc-800/80">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {pressBios[activeBioTab]}
              </p>

              <div className="mt-5 pt-4 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  {activeBioTab === "short50"
                    ? "Ideal for program booklets & panel intros"
                    : activeBioTab === "standard150"
                    ? "Ideal for keynote press releases & podcasts"
                    : "Ideal for institutional board & advisory dossiers"}
                </span>

                <button
                  onClick={() => handleCopyBio(pressBios[activeBioTab])}
                  className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono transition-colors flex items-center gap-1.5 border border-zinc-800"
                >
                  {copiedBio ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Biography</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Citation & Asset Guidelines (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Citation Card */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-sm p-6 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-3">
                Citation &amp; Nomenclature
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase block">Full Name &amp; Pronunciation:</span>
                  <span className="text-white font-medium">{brandSpecs.name}</span>
                  <span className="text-zinc-400 ml-2 font-mono">({brandSpecs.pronunciation})</span>
                </div>

                <div>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase block">Primary Executive Title:</span>
                  <span className="text-zinc-200">{brandSpecs.primaryTitle}</span>
                </div>

                <div>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase block">Institutional GTM Title:</span>
                  <span className="text-zinc-200">{brandSpecs.secondaryTitle}</span>
                </div>
              </div>
            </div>

            {/* Asset Download Checklist */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-sm p-6 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-3">
                Media Package Contents
              </h3>

              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Executive Headshots (Print 300 DPI, Digital 72 DPI)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Corporate Vector Logos (SVG, Transparent PNG)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Single-Page Institutional One-Sheet (PDF)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Official Keynote Technical Rider</span>
                </li>
              </ul>

              <button
                onClick={handleDownloadPressKit}
                className="w-full py-2 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Media Assets</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
