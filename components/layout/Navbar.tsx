"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ApexLogo } from "@/components/ui/ApexLogo";
import { LiveryBar } from "@/components/ui/LiveryBar";
import { useLivery } from "@/components/ui/LiveryContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTeam } = useLivery();

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-[#0c0d12]/90 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Apex Racing Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-900 dark:text-white group-hover:scale-105 transition-transform">
              <ApexLogo className="w-6 h-6" accentColor={activeTeam.color} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none font-mono">
                WIN<span style={{ color: activeTeam.color }}>.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-slate-500 dark:text-slate-400 mt-1">
                Digital Design Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-mono font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Grid Livery Switcher & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LiveryBar />
            <ThemeToggle />
            <a
              href="#contact"
              style={{ backgroundColor: activeTeam.color }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-mono font-bold text-white rounded-full shadow-lg shadow-black/10 transition-all hover:brightness-110 hover:scale-[1.03]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-white/10 space-y-3">
            <div className="pb-2">
              <LiveryBar />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-1">
              <a
                href="#contact"
                onClick={handleLinkClick}
                style={{ backgroundColor: activeTeam.color }}
                className="flex items-center justify-center gap-2 w-full text-center px-4 py-3 text-xs uppercase tracking-wider font-mono font-bold text-white rounded-xl shadow-md"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
