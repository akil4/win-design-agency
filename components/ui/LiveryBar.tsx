"use client";

import { useState, useRef, useEffect } from "react";
import { useLivery, LIVERY_PALETTES } from "./LiveryContext";
import { ChevronDown, Check } from "lucide-react";

export function LiveryBar() {
  const { activeTeam, setTeamId } = useLivery();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold transition-all duration-200 ${
          isOpen
            ? "bg-slate-100 dark:bg-white/[0.08] border-slate-400 dark:border-white/30 shadow-sm"
            : "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-slate-300"
        }`}
      >
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform shadow-sm"
          style={{
            backgroundColor: activeTeam.color,
            boxShadow: `0 0 8px ${activeTeam.color}60`,
          }}
        />
        <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Livery:
        </span>
        <span className="text-[11px] uppercase font-bold text-slate-900 dark:text-white">
          {activeTeam.name}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 dark:text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-slate-900 dark:text-white" : ""
          }`}
        />
      </button>

      {/* Popover Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-56 rounded-2xl bg-white/95 dark:bg-[#12141c]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3.5 py-2 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">
              Select Livery
            </span>
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: activeTeam.color }}
            />
          </div>

          <div className="mt-1 space-y-0.5">
            {LIVERY_PALETTES.map((palette) => {
              const isSelected = activeTeam.id === palette.id;
              return (
                <button
                  key={palette.id}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setTeamId(palette.id);
                    setIsOpen(false);
                  }}
                  className={`group w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-150 ${
                    isSelected
                      ? "bg-slate-100 dark:bg-white/[0.08] shadow-xs"
                      : "hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125"
                      style={{
                        backgroundColor: palette.color,
                        boxShadow: isSelected ? `0 0 10px ${palette.color}80` : undefined,
                      }}
                    />
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase leading-none">
                      {palette.name}
                    </span>
                  </div>

                  {isSelected && (
                    <Check
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: palette.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
