"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, CalendarCheck2, Users } from "lucide-react";

export function FitnessSports() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-brand-blue)]/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

        <div className="mb-6 flex justify-between items-end border-b border-gray-100 pb-4 relative z-10">
          <div>
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Active Members</div>
            <div className="text-4xl font-bold font-display text-[#111827]">2,845</div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-brand-cyan)]/10 text-[color:var(--color-brand-cyan)]">
            <Users className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-4 mb-6 relative z-10">
          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-gray-50 rounded-lg">
                 <Dumbbell className="h-4 w-4 text-[#111827]" />
               </div>
               <div>
                 <div className="text-sm font-semibold text-[#111827]">HIIT Workout Class</div>
                 <div className="text-[10px] font-medium text-[#6B7280]">Studio 1 • 5:30 PM</div>
               </div>
             </div>
             <div className="text-xs font-bold text-[color:var(--color-brand-cyan)] bg-[color:var(--color-brand-cyan)]/5 px-2 py-1 rounded">24/30 Booked</div>
          </div>
          
          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-gray-50 rounded-lg">
                 <CalendarCheck2 className="h-4 w-4 text-[#111827]" />
               </div>
               <div>
                 <div className="text-sm font-semibold text-[#111827]">Trainer Schedule</div>
                 <div className="text-[10px] font-medium text-[#6B7280]">PT Sessions Today</div>
               </div>
             </div>
             <div className="text-xs font-bold text-[#111827] bg-gray-100 px-2 py-1 rounded">12 Sessions</div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 relative z-10">
          <div className="flex items-center justify-between text-xs font-semibold text-[#111827] mb-2">
            <span className="flex items-center gap-1"><Activity className="h-3 w-3" /> Facility Capacity</span>
            <span>72%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[color:var(--color-brand-cyan)] to-[color:var(--color-brand-blue)]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
