"use client";

import { motion } from "framer-motion";
import { HardHat, ClipboardList, Hammer, Clock, Phone } from "lucide-react";

export function ConstructionTrades() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-orange)] text-[color:var(--color-brand-orange)]">
            <HardHat className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-[#111827]">Project Pipeline</div>
            <div className="text-xs font-medium text-[#6B7280]">Live Tracker</div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-[#111827]">14</div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-brand-orange)]">Active Jobs</div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <motion.div 
            whileHover={{ x: 4 }}
            className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
          >
             <div className="flex items-center gap-3">
                <div className="bg-gray-50 rounded p-1.5 border border-gray-100">
                  <ClipboardList className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111827]">New Quote Request</div>
                  <div className="text-[10px] text-[#6B7280]">Kitchen Renovation • 2h ago</div>
                </div>
             </div>
             <div className="bg-[color:var(--color-brand-orange)]/5 text-[color:var(--color-brand-orange)] text-xs font-medium px-2 py-1 rounded">Pending</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ x: 4 }}
            className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
          >
             <div className="flex items-center gap-3">
                <div className="bg-gray-50 rounded p-1.5 border border-gray-100">
                  <Hammer className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111827]">Job Scheduled</div>
                  <div className="text-[10px] text-[#6B7280]">Roof Repair • Tomorrow, 8am</div>
                </div>
             </div>
             <div className="bg-[color:var(--color-brand-blue)]/5 text-[color:var(--color-brand-blue)] text-xs font-medium px-2 py-1 rounded">Approved</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#6B7280]" />
            <div>
              <div className="text-[10px] font-medium text-[#6B7280] uppercase">Calls Today</div>
              <div className="text-lg font-bold text-[#111827]">18</div>
            </div>
          </div>
          <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#6B7280]" />
            <div>
              <div className="text-[10px] font-medium text-[#6B7280] uppercase">Avg Response</div>
              <div className="text-lg font-bold text-[#111827]">14m</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
