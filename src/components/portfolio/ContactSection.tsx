"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const { executive } = PORTFOLIO_DATA;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    scope: "Enterprise AI Systems Architecture",
    message: "",
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission and construct mailto link
    const subject = encodeURIComponent(`Institutional Advisory Inquiry: ${formData.organization} - ${formData.scope}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nScope: ${formData.scope}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${executive.contact.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-black border-b border-zinc-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Institutional Mandates &amp; Advisory
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              Initiate Executive Dialogue
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Available for select institutional advisory mandates, enterprise architecture reviews, 
              and keynote appearances globally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Direct Cards (Col 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-sm bg-zinc-950 border border-zinc-800 space-y-5">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block border-b border-zinc-900 pb-3">
                  Direct Executive Line
                </span>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase block mb-1">
                      Direct Email:
                    </span>
                    <div className="flex items-center justify-between p-2.5 rounded bg-black border border-zinc-800">
                      <span className="font-mono text-zinc-200">{executive.contact.email}</span>
                      <button
                        onClick={() => handleCopy(executive.contact.email, "email")}
                        className="text-zinc-400 hover:text-white p-1"
                        title="Copy Email"
                      >
                        {copiedItem === "email" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase block mb-1">
                      Mobile &amp; WhatsApp:
                    </span>
                    <div className="flex items-center justify-between p-2.5 rounded bg-black border border-zinc-800">
                      <span className="font-mono text-zinc-200">{executive.contact.phone}</span>
                      <button
                        onClick={() => handleCopy(executive.contact.phone, "phone")}
                        className="text-zinc-400 hover:text-white p-1"
                        title="Copy Phone"
                      >
                        {copiedItem === "phone" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase block mb-1">
                      Base of Operations:
                    </span>
                    <div className="p-2.5 rounded bg-black border border-zinc-800 text-zinc-300 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span>{executive.contact.location}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase block mb-1">
                      Official Links:
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={executive.contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 p-2 rounded bg-black hover:bg-zinc-900 border border-zinc-800 text-zinc-300 text-center transition-colors flex items-center justify-center gap-1.5"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={`https://${executive.contact.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 p-2 rounded bg-black hover:bg-zinc-900 border border-zinc-800 text-zinc-300 text-center transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Globe className="w-3.5 h-3.5 text-zinc-400" />
                        <span>itsvinay.me</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-sm bg-zinc-950/60 border border-zinc-900 text-xs text-zinc-400 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Executive inquiries reviewed within 12 business hours.</span>
              </div>
            </div>

            {/* Inquiry Form (Col 7) */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-sm p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Inquiry Initialized</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Your institutional message has been prepared and your email client was opened. You can also reach out directly to{" "}
                    <span className="text-white font-mono">{executive.contact.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded bg-zinc-900 text-zinc-300 hover:text-white text-xs font-mono uppercase"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Arthur Vance"
                        className="w-full px-3 py-2 rounded-sm bg-black border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Enterprise / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Apex Global Capital"
                        className="w-full px-3 py-2 rounded-sm bg-black border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Direct Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="arthur@organization.com"
                        className="w-full px-3 py-2 rounded-sm bg-black border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Engagement Scope
                      </label>
                      <select
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full px-3 py-2 rounded-sm bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-zinc-500"
                      >
                        <option>Enterprise AI Systems Architecture</option>
                        <option>Tokenomics &amp; Compute Governance</option>
                        <option>Academic OS (Classess.com Mandates)</option>
                        <option>Keynote Speaking &amp; Masterclasses</option>
                        <option>Board Advisory / Private Equity Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Brief Briefing / Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, strategic scope, and institutional objectives..."
                      className="w-full px-3 py-2 rounded-sm bg-black border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Transmit Executive Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
