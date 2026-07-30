"use client";

import { motion } from "framer-motion";
import { Ticket, Users, Music, Activity } from "lucide-react";

export function EventsEntertainment() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--color-brand-pink)]/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

        <div className="flex flex-col items-center text-center mb-8 relative z-10">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--color-brand-pink)]/10 text-[color:var(--color-brand-pink)]"
          >
            <Ticket className="h-8 w-8" />
          </motion.div>
          <div className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-2">Total Tickets Sold</div>
          <div className="text-5xl font-bold font-display text-[#111827]">4,892</div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          <motion.div 
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-medium text-[#6B7280]">Registrations</div>
              <Users className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-xl font-bold text-[#111827]">5,104</div>
            <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[95%] bg-[color:var(--color-brand-pink)] rounded-full" />
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-medium text-[#6B7280]">Live Scans</div>
              <Activity className="h-4 w-4 text-[color:var(--color-brand-cyan)]" />
            </div>
            <div className="text-xl font-bold text-[#111827]">1,420</div>
            <div className="mt-2 text-[10px] text-[color:var(--color-brand-cyan)] font-medium">Entering now</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
