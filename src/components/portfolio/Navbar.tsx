"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "overview",
        "ventures",
        "case-studies",
        "speaking",
        "credentials",
        "press-kit",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "ventures", label: "Ventures" },
    { id: "case-studies", label: "Case Studies" },
    { id: "speaking", label: "Keynotes" },
    { id: "credentials", label: "Institutional Rigor" },
    { id: "press-kit", label: "Press Kit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a
            href="#overview"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-sm bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-xs tracking-widest text-zinc-100 group-hover:border-zinc-400 group-hover:bg-zinc-800 transition-colors">
              VJ
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white uppercase group-hover:text-zinc-200 transition-colors">
                Vinay Jain
              </span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                Systems Architect & Executive
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/80 border border-zinc-800/70 p-1 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-zinc-100 text-black shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Advisory</span>
            </div>

            <button
              onClick={onContactClick}
              className="px-4 py-2 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-semibold tracking-wide uppercase transition-all duration-200 shadow-sm flex items-center gap-1.5 focus:outline-none"
            >
              <span>Request Advisory</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onContactClick}
              className="p-2 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              title="Contact"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-zinc-800 bg-black/95 backdrop-blur-xl rounded-lg p-4 space-y-2 border border-zinc-800/80 shadow-2xl">
            <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Institutional Advisory & Keynotes</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-zinc-900 text-white font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-2.5 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-semibold tracking-wide uppercase transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Advisory / Keynote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
