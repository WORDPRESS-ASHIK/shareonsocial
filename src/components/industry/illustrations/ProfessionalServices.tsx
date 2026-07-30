"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Activity, PhoneCall } from "lucide-react";

export function ProfessionalServices() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-8 flex justify-between items-start">
          <div>
            <div className="text-sm font-medium text-[#6B7280] uppercase tracking-wider mb-2">Qualified Leads</div>
            <div className="text-4xl font-bold font-display text-[#111827]">84</div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-blue)]/10 text-[color:var(--color-brand-blue)]">
            <Briefcase className="h-6 w-6" />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {[
            { title: "Consultation Requests", count: "32 New", icon: Activity },
            { title: "Client Meetings", count: "14 Scheduled", icon: Users }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gray-50 p-2 border border-gray-100">
                  <item.icon className="h-5 w-5 text-[#4B5563]" />
                </div>
                <div className="text-sm font-medium text-[#111827]">{item.title}</div>
              </div>
              <div className="text-sm font-medium text-[color:var(--color-brand-blue)] bg-[color:var(--color-brand-blue)]/10 px-2 py-1 rounded-md">
                {item.count}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 flex items-center justify-between relative overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-8 -top-8 h-24 w-24 bg-gradient-to-br from-[color:var(--color-brand-blue)]/10 to-transparent rounded-full blur-xl" 
          />
          <div className="flex items-center gap-3 relative z-10">
            <div className="flex items-center justify-center h-10 w-10 bg-white rounded-full shadow-sm border border-gray-100">
              <PhoneCall className="h-4 w-4 text-[#111827]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#111827]">Incoming Call</div>
              <div className="text-[10px] text-[#6B7280]">Sarah Jenkins • CEO</div>
            </div>
          </div>
          <motion.div 
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-2 bg-[color:var(--color-brand-cyan)] rounded-full relative z-10" 
          />
        </div>
      </motion.div>
    </div>
  );
}
