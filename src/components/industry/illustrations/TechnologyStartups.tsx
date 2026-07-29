"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Target, Activity, DollarSign } from "lucide-react";

export function TechnologyStartups() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--color-brand-cyan)]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4 relative z-10">
          <div className="flex items-center gap-3">
             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-cyan)]/10 text-[color:var(--color-brand-cyan)] shadow-sm">
               <Rocket className="h-6 w-6" />
             </div>
             <div>
               <div className="text-base font-semibold text-[#111827]">Growth Dashboard</div>
               <div className="text-xs font-medium text-[#6B7280]">Live Analytics</div>
             </div>
          </div>
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
             <Activity className="h-5 w-5 text-gray-400" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
          >
             <div className="flex items-center gap-2 mb-2 text-[#6B7280]">
               <Users className="h-4 w-4" />
               <div className="text-xs font-medium">Active Users</div>
             </div>
             <div className="text-2xl font-bold font-display text-[#111827]">14.2k</div>
             <div className="text-[10px] font-medium text-emerald-600 mt-1 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
               +280 today
             </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
          >
             <div className="flex items-center gap-2 mb-2 text-[#6B7280]">
               <DollarSign className="h-4 w-4" />
               <div className="text-xs font-medium">MRR</div>
             </div>
             <div className="text-2xl font-bold font-display text-[#111827]">$84.5k</div>
             <div className="text-[10px] font-medium text-blue-600 mt-1 bg-blue-50 px-1.5 py-0.5 rounded inline-block">
               +15% MoM
             </div>
          </motion.div>
        </div>

        <div className="relative h-24 w-full bg-gray-50 rounded-xl p-2 border border-gray-100 overflow-hidden z-10">
           <div className="absolute top-2 left-3 text-xs font-bold text-[#6B7280] uppercase">User Growth</div>
           <svg className="absolute inset-0 h-full w-full overflow-visible p-4 pt-8" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0 40 Q 20 40, 40 30 T 80 20 T 150 15 T 250 5"
                fill="none"
                stroke="var(--color-brand-cyan)"
                strokeWidth="3"
                strokeLinecap="round"
              />
           </svg>
        </div>
        
        <div className="mt-4 flex items-center justify-between bg-white rounded-xl p-3 border border-gray-100 shadow-sm relative z-10">
           <div className="flex items-center gap-3">
              <div className="bg-amber-100 text-amber-600 p-2 rounded-lg">
                 <Target className="h-4 w-4" />
              </div>
              <div>
                 <div className="text-sm font-semibold text-[#111827]">Demo Requests</div>
                 <div className="text-[10px] text-[#6B7280]">New leads pending</div>
              </div>
           </div>
           <div className="text-lg font-bold text-[#111827]">12</div>
        </div>

      </motion.div>
    </div>
  );
}
