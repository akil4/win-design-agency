"use client";

import Link from "next/link";
import { ApexLogo } from "@/components/ui/ApexLogo";
import { useLivery } from "@/components/ui/LiveryContext";
import { Github, Linkedin, Globe, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const { activeTeam } = useLivery();

  return (
    <footer className="relative bg-white dark:bg-[#090a0e] transition-colors">
      {/* Smooth Gradient Divider */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 dark:via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[clamp(2rem,3.5vh+0.8vw,4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[clamp(1.5rem,2.5vw,3rem)]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-900 dark:text-white">
                <ApexLogo className="w-5 h-5" accentColor={activeTeam.color} />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white font-mono">
                WIN<span style={{ color: activeTeam.color }}>.</span>
              </span>
            </Link>

            <p className="fluid-caption text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed font-sans">
              An independent digital design agency based in Chennai, India.
              Crafting distinctive brand identities, intuitive digital products, and high-impact web experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/akil4"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/akil4"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://akil4.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Portfolio Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:akils4388@gmail.com"
                className="w-9 h-9 rounded-xl border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sitemaps */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 uppercase">
              <li>
                <a href="#hero" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Design Disciplines */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-600 dark:text-slate-400">
              <li>Brand Identity & Systems</li>
              <li>UI/UX & Product Design</li>
              <li>Motion & Interaction</li>
              <li>Creative Development</li>
              <li>Art Direction</li>
            </ul>
          </div>

          {/* Studio Office */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
              Chennai Studio
            </h4>
            <p className="text-xs font-mono text-slate-600 dark:text-slate-400 leading-relaxed">
              Chennai, Tamil Nadu,
              <br />
              India
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: activeTeam.color }}
                />
                Open For Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[clamp(1.75rem,2.8vh,3rem)] pt-6 border-t border-slate-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-2 flex-wrap">
            <span>Designed & Built by</span>
            <a
              href="https://github.com/akil4"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-slate-900 dark:text-white hover:underline underline-offset-4 transition-colors"
            >
              Akil S
            </a>
            <span className="text-slate-400 dark:text-slate-600">·</span>
            <span>Design Agency Prototype</span>
            <span className="text-slate-400 dark:text-slate-600">·</span>
            <span>2026</span>
          </p>

          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 font-bold uppercase text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
