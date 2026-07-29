"use client";

import { motion } from "framer-motion";
import { Leaf, Sprout, Tractor, Droplets } from "lucide-react";

export function AgricultureFoodProduction() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-6 flex justify-between items-end border-b border-gray-100 pb-4">
          <div>
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Harvest Analytics</div>
            <div className="text-4xl font-bold font-display text-[#111827]">92%</div>
            <div className="text-xs font-medium text-emerald-600 mt-1">Expected Yield</div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
             <Leaf className="h-6 w-6" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <div className="text-xs font-semibold text-[#111827]">Irrigation</div>
            </div>
            <div className="text-lg font-bold text-[#111827]">Optimal</div>
            <div className="text-[10px] text-[#6B7280] mt-1">Zone A, B, C</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm relative overflow-hidden">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -right-4 -bottom-4 opacity-5"
            >
              <Tractor className="h-20 w-20" />
            </motion.div>
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <Tractor className="h-4 w-4 text-amber-500" />
              <div className="text-xs font-semibold text-[#111827]">Machinery</div>
            </div>
            <div className="text-lg font-bold text-[#111827] relative z-10">Active</div>
            <div className="text-[10px] text-[#6B7280] mt-1 relative z-10">4 units deployed</div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
           <div className="flex items-center justify-between mb-3 text-sm font-semibold text-[#111827]">
             <span className="flex items-center gap-2"><Sprout className="h-4 w-4 text-emerald-600" /> Supply Chain</span>
             <span>In Transit</span>
           </div>
           <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "65%" }}
               transition={{ duration: 1.5 }}
               className="h-full bg-emerald-500"
             />
           </div>
        </div>
      </motion.div>
    </div>
  );
}
