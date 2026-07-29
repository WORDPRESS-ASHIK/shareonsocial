"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Clock } from "lucide-react";

export function EducationTraining() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cardClass}
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--color-brand-cyan)]/10 text-[color:var(--color-brand-cyan)]">
            <BookOpen className="h-7 w-7" />
          </div>
          <div>
            <div className="text-sm font-medium text-[#6B7280]">Student Enrollments</div>
            <div className="text-4xl font-bold font-display text-[#111827]">1,492</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
              <GraduationCap className="h-4 w-4" /> Signups
            </div>
            <div className="text-2xl font-bold text-[#111827]">845</div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
              <Clock className="h-4 w-4" /> Completion
            </div>
            <div className="text-2xl font-bold text-[#111827]">68%</div>
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 border border-gray-100 p-4">
            <div className="flex justify-between text-sm font-medium text-[#4B5563] mb-3">
              <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Cohort Progress</span>
              <span className="text-[#111827] font-semibold">68%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full rounded-full bg-[color:var(--color-brand-cyan)]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
