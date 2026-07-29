"use client";

import { motion } from "framer-motion";
import { Wrench, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function HomeServices() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={cardClass}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-sm font-semibold text-[#111827]">Technician Schedule</div>
            <div className="text-xs font-medium text-[#6B7280] flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" /> Area: North District
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-brand-cyan)]/10 text-[color:var(--color-brand-cyan)]">
            <Wrench className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gray-200">
          {[
            { time: "09:00", job: "HVAC Maintenance", status: "completed" },
            { time: "11:30", job: "Emergency Repair", status: "active" },
            { time: "14:00", job: "System Install", status: "upcoming" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 flex items-center justify-between"
            >
              <div className={`absolute left-0 h-6 w-6 rounded-full border-4 border-white flex items-center justify-center ${
                item.status === 'completed' ? 'bg-emerald-500' :
                item.status === 'active' ? 'bg-[color:var(--color-brand-orange)]' :
                'bg-gray-300'
              }`}>
                {item.status === 'active' && (
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute h-full w-full rounded-full bg-[color:var(--color-brand-orange)] opacity-50"
                  />
                )}
              </div>
              <div className={`rounded-xl border border-gray-100 p-3 shadow-sm flex-1 ml-2 ${
                item.status === 'active' ? 'bg-white ring-1 ring-[color:var(--color-brand-orange)]/20' : 'bg-gray-50/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-[#111827]">{item.job}</div>
                  <div className="text-xs font-medium text-[#6B7280]">{item.time}</div>
                </div>
                {item.status === 'completed' && (
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                    <CheckCircle2 className="h-3 w-3" /> Job Done
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-lg bg-gray-50 border border-gray-100 p-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#111827]">
            <Calendar className="h-4 w-4 text-[color:var(--color-brand-blue)]" /> Weekly Bookings
          </div>
          <div className="text-lg font-bold text-[#111827]">48</div>
        </div>
      </motion.div>
    </div>
  );
}
