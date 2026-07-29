"use client";

import { motion } from "framer-motion";
import { Calendar, BedDouble, Key, DollarSign, TrendingUp } from "lucide-react";

export function HotelsHospitality() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cardClass}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-blue)]/10 text-[color:var(--color-brand-blue)]">
              <BedDouble className="h-6 w-6" />
            </div>
            <div>
              <div className="text-base font-semibold text-[#111827]">Room Occupancy</div>
              <div className="text-xs font-medium text-[#6B7280]">Live Status</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#111827]">92%</div>
          </div>
        </div>

        <div className="relative h-2 w-full rounded-full bg-gray-100 overflow-hidden mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "92%" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[color:var(--color-brand-blue)] to-[color:var(--color-brand-cyan)]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
              <Key className="h-4 w-4" /> Check-ins
            </div>
            <div className="text-xl font-bold text-[#111827]">24</div>
            <div className="text-xs font-medium text-emerald-600 mt-1">Pending 8</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
              <Calendar className="h-4 w-4" /> Bookings
            </div>
            <div className="text-xl font-bold text-[#111827]">156</div>
            <div className="text-xs font-medium text-emerald-600 mt-1">+12 today</div>
          </motion.div>
        </div>

        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
              <DollarSign className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-medium text-[#6B7280]">Daily Revenue</div>
              <div className="text-lg font-bold text-[#111827]">$14,250</div>
            </div>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded"
          >
            <TrendingUp className="h-3 w-3" /> 8%
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
