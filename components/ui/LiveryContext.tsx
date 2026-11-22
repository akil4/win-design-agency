"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface RacingPalette {
  id: string;
  name: string;
  liveryName: string;
  color: string;
  darkColor: string;
  secondary: string;
  accentText: string;
  borderClass: string;
  bgClass: string;
  badgeBg: string;
}

export const LIVERY_PALETTES: RacingPalette[] = [
  {
    id: "desmosedici-red",
    name: "Desmosedici Red",
    liveryName: "Ducati Rosso",
    color: "#E10600",
    darkColor: "#E10600",
    secondary: "#101114",
    accentText: "text-[#E10600]",
    borderClass: "hover:border-[#E10600]/80",
    bgClass: "bg-[#E10600]",
    badgeBg: "bg-[#E10600]/10 text-[#E10600] border-[#E10600]/30",
  },
  {
    id: "rc16-orange",
    name: "RC16 Orange",
    liveryName: "KTM Factory",
    color: "#FF6600",
    darkColor: "#FF6600",
    secondary: "#001D4A",
    accentText: "text-[#FF6600]",
    borderClass: "hover:border-[#FF6600]/80",
    bgClass: "bg-[#FF6600]",
    badgeBg: "bg-[#FF6600]/10 text-[#FF6600] border-[#FF6600]/30",
  },
  {
    id: "vr46-neon",
    name: "VR46 Neon",
    liveryName: "Tavullia Fluo",
    color: "#CCFF00",
    darkColor: "#A3D900",
    secondary: "#0B151F",
    accentText: "text-[#CCFF00] dark:text-[#CCFF00]",
    borderClass: "hover:border-[#CCFF00]/80",
    bgClass: "bg-[#CCFF00]",
    badgeBg: "bg-[#CCFF00]/10 text-[#546800] dark:text-[#CCFF00] border-[#CCFF00]/40",
  },
  {
    id: "yzr-m1-blue",
    name: "YZR-M1 Blue",
    liveryName: "Yamaha Factory",
    color: "#0047BA",
    darkColor: "#1A6BFF",
    secondary: "#0D0E12",
    accentText: "text-[#0047BA] dark:text-[#3B82F6]",
    borderClass: "hover:border-[#0047BA]/80",
    bgClass: "bg-[#0047BA]",
    badgeBg: "bg-[#0047BA]/10 text-[#0047BA] dark:text-[#60A5FA] border-[#0047BA]/30",
  },
  {
    id: "rs-gp-violet",
    name: "RS-GP Violet",
    liveryName: "Aprilia Racing",
    color: "#9333EA",
    darkColor: "#A855F7",
    secondary: "#E10600",
    accentText: "text-[#9333EA] dark:text-[#C084FC]",
    borderClass: "hover:border-[#9333EA]/80",
    bgClass: "bg-[#9333EA]",
    badgeBg: "bg-[#9333EA]/10 text-[#9333EA] dark:text-[#C084FC] border-[#9333EA]/30",
  },
  {
    id: "rc213v-honda",
    name: "RC213V Honda",
    liveryName: "HRC Repsol",
    color: "#FF3A00",
    darkColor: "#FF4500",
    secondary: "#001D4A",
    accentText: "text-[#FF3A00] dark:text-[#FF5522]",
    borderClass: "hover:border-[#FF3A00]/80",
    bgClass: "bg-[#FF3A00]",
    badgeBg: "bg-[#FF3A00]/10 text-[#FF3A00] dark:text-[#FF5522] border-[#FF3A00]/30",
  },
];

interface LiveryContextType {
  activeTeam: RacingPalette;
  setTeamId: (id: string) => void;
}

const LiveryContext = createContext<LiveryContextType>({
  activeTeam: LIVERY_PALETTES[0],
  setTeamId: () => {},
});

export function LiveryProvider({ children }: { children: ReactNode }) {
  const [teamId, setTeamIdState] = useState<string>("desmosedici-red");

  const activeTeam = LIVERY_PALETTES.find((t) => t.id === teamId) || LIVERY_PALETTES[0];

  const setTeamId = (id: string) => {
    setTeamIdState(id);
  };

  return (
    <LiveryContext.Provider value={{ activeTeam, setTeamId }}>
      {children}
    </LiveryContext.Provider>
  );
}

export function useLivery() {
  return useContext(LiveryContext);
}
