"use client";

import { motion } from "framer-motion";
import { Car, Wrench, Settings, ClipboardList } from "lucide-react";

export function Automotive() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white shadow-md">
            <Car className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-[#111827]">Service Bay Dashboard</div>
            <div className="text-xs font-medium text-[#6B7280]">Live Repair Queue</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm flex items-center gap-3"
          >
             <div className="rounded-lg bg-gray-100 p-2 text-gray-500">
               <Wrench className="h-4 w-4" />
             </div>
             <div>
               <div className="text-lg font-bold text-[#111827]">14</div>
               <div className="text-[10px] font-medium text-[#6B7280] uppercase">In Shop</div>
             </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm flex items-center gap-3"
          >
             <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
               <CheckCircle2 className="h-4 w-4" />
             </div>
             <div>
               <div className="text-lg font-bold text-[#111827]">8</div>
               <div className="text-[10px] font-medium text-[#6B7280] uppercase">Ready</div>
             </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-bold uppercase text-[#6B7280] mb-2">Active Jobs</div>
          {[
            { car: "Toyota Camry", task: "Brake Replacement", status: "In Progress", percent: "60%" },
            { car: "Ford F-150", task: "Full Service", status: "Waiting Parts", percent: "30%" }
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-3">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="text-sm font-semibold text-[#111827]">{item.car}</div>
                  <div className="text-[10px] font-medium text-[#6B7280]">{item.task}</div>
                </div>
                <div className="text-[10px] font-bold px-2 py-1 rounded bg-white shadow-sm border border-gray-100">
                  {item.status}
                </div>
              </div>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: item.percent }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className={`h-full ${item.status === 'In Progress' ? 'bg-[color:var(--color-brand-blue)]' : 'bg-amber-400'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Temporary inline import until I refactor CheckCircle2
import { CheckCircle2 } from "lucide-react";
