"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Users, Target } from "lucide-react";

export function Startups() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={cardClass}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--color-brand-orange)]/10 text-[color:var(--color-brand-orange)]">
              <Lightbulb className="h-7 w-7" />
            </div>
            <div>
              <div className="text-base font-semibold text-[#111827]">Growth Metrics</div>
              <div className="text-sm font-medium text-[#6B7280]">Seed Stage</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border-r border-gray-200 pr-4">
            <div className="text-xs font-medium text-[#6B7280] mb-1 flex items-center gap-1">
              <Users className="h-3 w-3" /> User Acquisition
            </div>
            <div className="text-3xl font-bold text-[#111827]">12.4k</div>
            <div className="text-[10px] text-[color:var(--color-brand-cyan)] font-medium flex items-center gap-1 mt-1">
               <TrendingUp className="h-3 w-3" /> 24% MoM
            </div>
          </div>
          <div className="pl-4">
            <div className="text-xs font-medium text-[#6B7280] mb-1 flex items-center gap-1">
              <Target className="h-3 w-3" /> Investor Pipeline
            </div>
            <div className="text-3xl font-bold text-[#111827]">8</div>
            <div className="text-[10px] text-[color:var(--color-brand-blue)] font-medium mt-1">
               Term sheets in review
            </div>
          </div>
        </div>

        <div className="relative h-28 w-full bg-gray-50 rounded-xl p-2 border border-gray-100 overflow-hidden">
          <svg className="absolute inset-0 h-full w-full overflow-visible p-4" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M0 60 Q 50 60, 100 30 T 200 10 T 300 0"
              fill="none"
              stroke="var(--color-brand-orange)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
