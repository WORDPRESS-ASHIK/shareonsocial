"use client";

import { motion } from "framer-motion";
import { Server, Users, Activity, Rocket } from "lucide-react";

export function TechnologySaas() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-6 flex justify-between items-end border-b border-gray-100 pb-4">
          <div>
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Monthly Recurring Revenue</div>
            <div className="text-4xl font-bold font-display text-[#111827]">$124.5k</div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
             <Rocket className="h-5 w-5" />
          </div>
        </div>

        <div className="relative h-24 w-full bg-gray-50 rounded-xl p-2 border border-gray-100 mb-6 flex items-end">
          <svg className="absolute inset-0 h-full w-full overflow-visible p-4" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M0 60 Q 30 50, 60 40 T 150 20 T 250 5"
              fill="none"
              stroke="url(#saas-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="saas-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-brand-cyan)" />
                <stop offset="100%" stopColor="var(--color-brand-blue)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
               <Users className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold text-[#111827]">14.2k</div>
            <div className="text-[10px] font-medium text-[#6B7280] uppercase mt-1">Active Users</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center relative overflow-hidden">
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald-500" 
            />
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
               <Server className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold text-[#111827]">99.9%</div>
            <div className="text-[10px] font-medium text-[#6B7280] uppercase mt-1">Uptime</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
