"use client";

import { motion } from "framer-motion";
import { Heart, Users, Target, Activity } from "lucide-react";

export function NonprofitsCommunity() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={cardClass}
      >
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-cyan)] text-white shadow-md">
               <Heart className="h-6 w-6" />
             </div>
             <div>
               <div className="text-base font-semibold text-[#111827]">Annual Campaign</div>
               <div className="text-xs font-medium text-[#6B7280]">Live Progress</div>
             </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-end justify-between mb-2">
            <div className="text-3xl font-bold font-display text-[#111827]">$45,280</div>
            <div className="text-xs font-medium text-[#6B7280]">Goal: $50,000</div>
          </div>
          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-[color:var(--color-brand-cyan)] to-[color:var(--color-brand-blue)] rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
             <div className="flex items-center gap-2 mb-2">
               <Users className="h-4 w-4 text-[#6B7280]" />
               <div className="text-xs font-medium text-[#6B7280]">Donors</div>
             </div>
             <div className="text-xl font-bold text-[#111827]">482</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
             <div className="flex items-center gap-2 mb-2">
               <Target className="h-4 w-4 text-[#6B7280]" />
               <div className="text-xs font-medium text-[#6B7280]">Volunteers</div>
             </div>
             <div className="text-xl font-bold text-[#111827]">84</div>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-100 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <Activity className="h-4 w-4 text-emerald-600" />
             <div className="text-xs font-medium text-emerald-800">Recent Donation: $500</div>
          </div>
          <div className="text-[10px] text-emerald-600 font-bold">Just now</div>
        </div>
      </motion.div>
    </div>
  );
}
