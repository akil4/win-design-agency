"use client";

import { useLivery } from "@/components/ui/LiveryContext";
import { ArrowUpRight, Layout, Code2, Palette, Zap } from "lucide-react";

const sectors = [
  {
    sector: "01",
    badge: "PRODUCT DESIGN",
    title: "UI/UX & Digital Product Design",
    description:
      "User research, journey mapping, and intuitive product interfaces. We craft scalable design systems in Figma that balance visual delight with functional clarity.",
    deliverables: ["Product Strategy", "Figma Design Systems", "Interactive Prototypes"],
    icon: Layout,
  },
  {
    sector: "02",
    badge: "BRAND IDENTITY",
    title: "Brand Identity & Art Direction",
    description:
      "Bold visual identities, custom typography scales, and high-contrast color systems that give your company a distinct, unforgettable market presence.",
    deliverables: ["Logo & Monograms", "Typography Scales", "Brand Guidelines"],
    icon: Palette,
  },
  {
    sector: "03",
    badge: "INTERACTION DESIGN",
    title: "Motion & Interactive Experience",
    description:
      "Choreographed micro-interactions, smooth page transitions, and immersive scroll effects that turn digital products into memorable experiences.",
    deliverables: ["Micro-Interactions", "Motion Choreography", "3D Interactive Elements"],
    icon: Zap,
  },
  {
    sector: "04",
    badge: "CREATIVE PRODUCTION",
    title: "Creative Development & Production",
    description:
      "Translating Figma designs into responsive, high-fidelity frontends without cutting corners. Zero design compromises from mockup to live URL.",
    deliverables: ["Figma to Next.js", "Fluid Utopia Typography", "Sub-Second Load Times"],
    icon: Code2,
  },
];

export function Services() {
  const { activeTeam } = useLivery();

  return (
    <section id="services" className="relative min-h-[100dvh] flex flex-col justify-center py-[clamp(1.25rem,2.5vh+0.5vw,2.75rem)] transition-colors">
      {/* Smooth Gradient Divider with Fluid Margin */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-[clamp(1rem,1.8vh+0.4vw,1.75rem)]" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 dark:via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header with Fluid Typography & Spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[clamp(1rem,1.8vh+0.4vw,1.75rem)] gap-[var(--space-s-m)]">
          <div className="max-w-xl">
            <h2 className="fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Design Capabilities. Built for Impact.
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md fluid-body leading-relaxed font-sans">
            We partner with ambitious brands to solve complex problems through design clarity, human empathy, and relentless attention to detail.
          </p>
        </div>

        {/* 2x2 Bento Services Grid with Fluid Gap & Card Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(0.75rem,1.2vh+0.4vw,1.25rem)]">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.sector}
                className="group relative p-[clamp(1.1rem,1.4vw+0.4vh,1.5rem)] rounded-2xl sm:rounded-3xl bg-white dark:bg-[#12141c] border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 shadow-sm hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Sector Header with Active Livery Color */}
                <div className="flex items-center justify-between mb-[clamp(0.5rem,1vh,0.85rem)]">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 ${
                        activeTeam.id === "vr46-neon" ? "text-slate-950" : "text-white"
                      }`}
                      style={{ backgroundColor: activeTeam.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border transition-all duration-300"
                      style={{
                        borderColor: `${activeTeam.color}40`,
                        backgroundColor: `${activeTeam.color}15`,
                        color: activeTeam.color,
                      }}
                    >
                      {sec.badge}
                    </span>
                  </div>

                  <span className="font-mono text-base sm:text-lg font-black text-slate-300 dark:text-white/20 transition-colors duration-300 group-hover:text-slate-600 dark:group-hover:text-white/60">
                    {sec.sector}
                  </span>
                </div>

                <h3 className="fluid-h4 font-bold text-slate-900 dark:text-white mb-[clamp(0.25rem,0.6vh,0.4rem)] flex items-center justify-between">
                  <span>{sec.title}</span>
                  <ArrowUpRight
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    style={{ color: activeTeam.color }}
                  />
                </h3>

                <p className="fluid-caption text-slate-600 dark:text-slate-400 leading-relaxed mb-[clamp(0.5rem,1vh,0.85rem)]">
                  {sec.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-[clamp(0.4rem,0.8vh,0.6rem)] border-t border-slate-100 dark:border-white/10">
                  {sec.deliverables.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
