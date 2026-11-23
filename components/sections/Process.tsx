"use client";

import { useLivery } from "@/components/ui/LiveryContext";
import { Compass, PenTool, Layout, Rocket } from "lucide-react";

const processSteps = [
  {
    phase: "PHASE 01",
    sessionTitle: "Discovery & Strategy",
    description: "We immerse ourselves in your brand, audience, and goals to establish clear creative briefs, user journeys, and strategic positioning.",
    icon: Compass,
  },
  {
    phase: "PHASE 02",
    sessionTitle: "Concept & Art Direction",
    description: "Exploring bold visual aesthetics, moodboards, typographic scales, and design languages in Figma to craft a memorable look and feel.",
    icon: PenTool,
  },
  {
    phase: "PHASE 03",
    sessionTitle: "Interactive Prototyping",
    description: "Building clickable high-fidelity prototypes, fluid micro-interactions, and comprehensive design tokens ready for user testing.",
    icon: Layout,
  },
  {
    phase: "PHASE 04",
    sessionTitle: "Production & Launch",
    description: "Translating verified design systems into pixel-perfect Next.js frontends, complete brand guidelines, and assets ready for prime-time.",
    icon: Rocket,
  },
];

export function Process() {
  const { activeTeam } = useLivery();

  return (
    <section id="process" className="relative min-h-[100dvh] flex flex-col justify-center py-20 md:py-28 transition-colors">
      {/* Smooth Gradient Divider with Fluid Margin */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 dark:via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl mb-20 md:mb-28">
          <h2 className="fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Our Creative Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(0.875rem,1.5vw,1.5rem)]">
          {processSteps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.phase}
                className="group relative p-[clamp(1.25rem,1.8vw+0.5vh,1.75rem)] rounded-2xl sm:rounded-3xl bg-white dark:bg-[#12141c] border border-slate-200/80 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-20 md:mb-28">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 ${
                      activeTeam.id === "vr46-neon" ? "text-slate-950" : "text-white"
                    }`}
                    style={{ backgroundColor: activeTeam.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {item.phase}
                  </span>
                </div>

                <h3 className="fluid-h4 font-bold text-slate-900 dark:text-white mb-20 md:mb-28">
                  {item.sessionTitle}
                </h3>

                <p className="fluid-caption text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
