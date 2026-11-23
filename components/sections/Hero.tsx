"use client";

import { useLivery, LIVERY_PALETTES } from "@/components/ui/LiveryContext";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const { activeTeam } = useLivery();

  return (
    <section id="hero" className="relative min-h-[calc(100dvh-5rem)] flex flex-col justify-center overflow-hidden py-[clamp(1.75rem,3.5vh+0.8vw,3.75rem)]">
      {/* Background Subtle Track Grid Pattern - Exclusive to Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      {/* Ambient Glow matching active team livery - Exclusive to Hero */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[140px] opacity-20 -z-10 rounded-full pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeTeam.color }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Starting Grid Livery Accent Stripe */}
        <div className="flex items-center justify-center gap-1.5 mb-[var(--space-s-m)]">
          {LIVERY_PALETTES.map((palette) => (
            <div
              key={palette.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeTeam.id === palette.id ? "w-12 shadow-md" : "w-4 opacity-50"
              }`}
              style={{ backgroundColor: palette.color }}
              title={palette.name}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Bold Display Headline with Fluid Typography */}
          <h1 className="fluid-h1 font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.98]">
            DESIGNED FOR IMPACT.{" "}
            <span
              className="transition-colors duration-500 underline decoration-4 underline-offset-8"
              style={{ color: activeTeam.color, textDecorationColor: activeTeam.color }}
            >
              CRAFTED
            </span>{" "}
            TO WIN.
          </h1>

          {/* Genuine Human Agency Narrative with Fluid Typography */}
          <p className="mt-[var(--space-s-m)] fluid-body-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            We are an independent digital design agency based in Chennai, India.
            We partner with ambitious founders and teams to craft bold brand identities,
            intuitive digital products, and memorable web experiences that command attention.
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-[var(--space-m-l)] flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              style={{ backgroundColor: activeTeam.color }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-wider font-mono font-bold text-white rounded-xl shadow-xl transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-wider font-mono font-bold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/15 rounded-xl transition-all"
            >
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
