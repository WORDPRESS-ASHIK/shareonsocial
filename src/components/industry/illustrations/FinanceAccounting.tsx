"use client";

import { motion } from "framer-motion";
import { Calculator, BarChart3, Clock, DollarSign } from "lucide-react";

export function FinanceAccounting() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <div className="text-base font-semibold text-[#111827]">Client Dashboard</div>
              <div className="text-xs font-medium text-[#6B7280]">Financial Reports</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm text-center">
            <BarChart3 className="h-5 w-5 text-gray-400 mx-auto mb-2" />
            <div className="text-xl font-bold text-[#111827]">142</div>
            <div className="text-[10px] uppercase font-medium text-[#6B7280]">Tax Filings</div>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm text-center">
            <DollarSign className="h-5 w-5 text-gray-400 mx-auto mb-2" />
            <div className="text-xl font-bold text-[#111827]">84</div>
            <div className="text-[10px] uppercase font-medium text-[#6B7280]">Advisory</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Upcoming Deadlines</div>
          {[
            { client: "TechCorp Inc.", task: "Q3 Tax Filing", days: "2 days" },
            { client: "Smith & Co.", task: "Payroll Audit", days: "5 days" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-100"
            >
               <div>
                 <div className="text-sm font-semibold text-[#111827]">{item.client}</div>
                 <div className="text-xs text-[#6B7280]">{item.task}</div>
               </div>
               <div className="flex items-center gap-1 bg-white border border-gray-200 px-2 py-1 rounded text-xs font-medium text-[#111827] shadow-sm">
                 <Clock className="h-3 w-3 text-[color:var(--color-brand-orange)]" /> {item.days}
               </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
