"use client";

import { motion } from "framer-motion";
import { Scale, FileText, CalendarClock, ChevronRight } from "lucide-react";

export function LegalServices() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className={cardClass}
      >
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111827] text-white shadow-md">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <div className="text-base font-semibold text-[#111827]">Case Pipeline</div>
              <div className="text-xs font-medium text-[#6B7280]">Active Matters</div>
            </div>
          </div>
          <div className="text-right">
             <div className="text-2xl font-bold font-display text-[#111827]">28</div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {[
            { case: "Smith vs. TechCorp", status: "In Review", icon: FileText, color: "text-blue-600", bg: "bg-blue-100" },
            { case: "Estate Planning: Jones", status: "Drafting", icon: FileText, color: "text-amber-600", bg: "bg-amber-100" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827]">{item.case}</div>
                  <div className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wider">{item.status}</div>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-gray-600 transition-colors" />
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 relative overflow-hidden">
           <div className="flex items-center gap-3 relative z-10">
              <div className="rounded-full bg-white p-2 shadow-sm border border-gray-200">
                <CalendarClock className="h-5 w-5 text-[#111827]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#111827]">Consultation Booking</div>
                <div className="text-xs text-[#6B7280]">New client scheduled for 2:00 PM</div>
              </div>
           </div>
           
           <motion.div 
             animate={{ x: ["-100%", "200%"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent" 
           />
        </div>
      </motion.div>
    </div>
  );
}
