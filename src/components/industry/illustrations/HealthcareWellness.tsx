"use client";

import { motion } from "framer-motion";
import { Calendar, UserPlus, Star, Activity, Clock } from "lucide-react";

export function HealthcareWellness() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={cardClass}
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--color-brand-cyan)] text-[color:var(--color-brand-cyan)]">
            <Activity className="h-7 w-7" />
          </div>
          <div>
            <div className="text-sm font-medium text-[#6B7280] uppercase tracking-wider mb-1">Today's Queue</div>
            <div className="text-3xl font-bold font-display text-[#111827]">42 Patients</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { time: "09:00 AM", type: "General Consultation", status: "In Progress", active: true },
            { time: "09:30 AM", type: "Follow-up Appointment", status: "Waiting", active: false },
            { time: "10:15 AM", type: "Health Screening", status: "Scheduled", active: false }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`flex items-center justify-between rounded-xl border p-3 transition-colors ${
                item.active ? "border-[color:var(--color-brand-cyan)] bg-[color:var(--color-brand-cyan)]/5" : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  item.active ? "bg-[color:var(--color-brand-cyan)] text-[color:var(--color-brand-cyan)]" : "bg-gray-50 text-gray-400"
                }`}>
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className={`text-sm font-semibold ${item.active ? "text-[color:var(--color-brand-cyan)]" : "text-[#111827]"}`}>
                    {item.type}
                  </div>
                  <div className="text-xs font-medium text-[#6B7280]">{item.time}</div>
                </div>
              </div>
              <div className={`text-xs font-medium px-2 py-1 rounded-md ${
                item.active ? "bg-[color:var(--color-brand-cyan)] text-[color:var(--color-brand-cyan)]" : "bg-gray-100 text-gray-500"
              }`}>
                {item.status}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                   <UserPlus className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
            <div className="text-xs font-medium text-[#6B7280]">+12 New Patients</div>
          </div>
          <div className="flex items-center gap-1 text-sm font-bold text-[#111827]">
            <Star className="h-4 w-4 text-[color:var(--color-brand-orange)] fill-current" /> 4.9
          </div>
        </div>
      </motion.div>
    </div>
  );
}
