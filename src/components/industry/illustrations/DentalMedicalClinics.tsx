"use client";

import { motion } from "framer-motion";
import { Smile, CalendarCheck, Users, Activity } from "lucide-react";

export function DentalMedicalClinics() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cardClass}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-cyan)]/10 text-[color:var(--color-brand-cyan)]">
              <Smile className="h-6 w-6" />
            </div>
            <div>
              <div className="text-base font-semibold text-[#111827]">Treatment Calendar</div>
              <div className="text-xs font-medium text-[#6B7280]">Dr. Smith's Schedule</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="text-xs font-medium text-[#6B7280] mb-1">Check-ups</div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-[#111827]">14</div>
              <CalendarCheck className="h-4 w-4 text-[color:var(--color-brand-cyan)]" />
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="text-xs font-medium text-[#6B7280] mb-1">Procedures</div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-[#111827]">6</div>
              <Activity className="h-4 w-4 text-[color:var(--color-brand-blue)]" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          {[
            { time: "11:00 AM", patient: "Emma T.", type: "Routine Cleaning" },
            { time: "11:45 AM", patient: "Michael B.", type: "Whitening Session" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4 rounded-xl bg-gray-50 p-3 border border-gray-100"
            >
              <div className="h-2 w-2 rounded-full bg-[color:var(--color-brand-cyan)]" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#111827]">{item.patient}</div>
                <div className="text-xs text-[#6B7280]">{item.type}</div>
              </div>
              <div className="text-xs font-medium bg-white px-2 py-1 rounded shadow-sm border border-gray-100 text-[#111827]">
                {item.time}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
