"use client";

import { useState } from "react";
import Image from "next/image";
import { useLivery } from "@/components/ui/LiveryContext";
import { ArrowUpRight, Code2, Layout, Palette } from "lucide-react";

interface GridProject {
  id: number;
  title: string;
  category: "Product Design" | "Brand Identity" | "Digital Experience";
  client: string;
  year: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const categoryIcons = {
  "Product Design": Layout,
  "Brand Identity": Palette,
  "Digital Experience": Code2,
};

const projects: GridProject[] = [
  {
    id: 1,
    title: "Apex Telemetry Analytics Platform",
    category: "Product Design",
    client: "Apex Metrics Corp",
    year: "2026",
    description: "Complete product interface redesign and dark-mode telemetry dashboard crafted for racing engineers and real-time trackside decision making.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["UI/UX Design", "Figma System", "Dashboard"],
  },
  {
    id: 2,
    title: "Veloce 3D Product Configurator",
    category: "Digital Experience",
    client: "Veloce Design Lab",
    year: "2026",
    description: "Interactive 3D vehicle customization experience allowing clients to configure bespoke aerodynamic components and track liveries in real time.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop",
    tags: ["3D Interaction", "Digital Experience", "Creative Tech"],
  },
  {
    id: 3,
    title: "Pulse Live Events & Festival App",
    category: "Product Design",
    client: "Pulse Media Network",
    year: "2025",
    description: "Mobile-first companion web application designed for high-density festival crowds, focusing on intuitive schedule navigation and dark-mode aesthetics.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    tags: ["Mobile UI/UX", "User Flows", "Prototyping"],
  },
  {
    id: 4,
    title: "Kite Apparel & Lifestyle Storefront",
    category: "Brand Identity",
    client: "Kite Apparel Co.",
    year: "2025",
    description: "Minimalist brand identity, custom typographic mark, and editorial e-commerce design system for an independent sustainable apparel label.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["Brand Identity", "Typography", "Art Direction"],
  },
  {
    id: 5,
    title: "Nexus Studio Workspace Portal",
    category: "Digital Experience",
    client: "Nexus Creative Hub",
    year: "2025",
    description: "Bespoke agency client portal featuring drag-and-drop design feedback, asset versioning, and real-time creative sprint collaboration.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    tags: ["SaaS Design", "Interaction", "Design System"],
  },
  {
    id: 6,
    title: "SafetyNet Critical Response PWA",
    category: "Product Design",
    client: "SafetyNet Systems",
    year: "2025",
    description: "High-contrast, accessible emergency coordination interface designed for high-stress disaster response teams under intermittent connectivity.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Accessible UI", "Design Systems", "Product Strategy"],
  },
];

const categories = ["All", "Product Design", "Brand Identity", "Digital Experience"] as const;

export function Portfolio() {
  const { activeTeam } = useLivery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="relative min-h-[100dvh] flex flex-col justify-center py-[clamp(1.75rem,3.2vh+0.8vw,3.75rem)] transition-colors">
      {/* Smooth Gradient Divider with Fluid Margin */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-[clamp(1.25rem,2vh+0.5vw,2.25rem)]" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 dark:via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[clamp(1.25rem,2.2vh+0.5vw,2.25rem)] gap-[var(--space-s-m)]">
          <div className="max-w-xl">
            <h2 className="fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Selected Work & Case Studies
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-all duration-300 ${
                    isSelected
                      ? "shadow-md scale-105"
                      : "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/[0.08]"
                  }`}
                  style={
                    isSelected
                      ? {
                          backgroundColor: activeTeam.color,
                          color: activeTeam.id === "vr46-neon" ? "#020617" : "#FFFFFF",
                        }
                      : undefined
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid with Fluid Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,1.8vw+0.5vh,1.75rem)]">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category];

            return (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-[#12141c] border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 shadow-sm hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Image Container with Dynamic Livery Accent Stripe */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  {/* Team Livery Color Accent Strip */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 z-20 transition-colors duration-300"
                    style={{ backgroundColor: activeTeam.color }}
                  />

                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 2}
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Hover Overlay with dynamic livery CTA */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform ${
                        activeTeam.id === "vr46-neon" ? "text-slate-950" : "text-white"
                      }`}
                      style={{ backgroundColor: activeTeam.color }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Context-Relevant Category Pill with Icon */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-white/95 dark:bg-slate-950/90 text-slate-900 dark:text-white backdrop-blur-md shadow-sm border border-slate-200/50 dark:border-white/10">
                      <CategoryIcon className="w-3 h-3" style={{ color: activeTeam.color }} />
                      <span>{project.category}</span>
                    </span>
                  </div>
                </div>

                {/* Project Meta & Deliverables */}
                <div className="p-[clamp(1.25rem,1.8vw,1.65rem)] flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500 mb-1.5">
                      <span className="flex items-center gap-1.5 font-bold">
                        <span
                          className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                          style={{ backgroundColor: activeTeam.color }}
                        />
                        {project.client}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="fluid-h4 font-bold text-slate-900 dark:text-white transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="mt-2 fluid-caption text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-[clamp(1rem,1.5vh,1.5rem)] flex flex-wrap gap-1.5 pt-[clamp(0.6rem,1vh,0.85rem)] border-t border-slate-100 dark:border-white/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
