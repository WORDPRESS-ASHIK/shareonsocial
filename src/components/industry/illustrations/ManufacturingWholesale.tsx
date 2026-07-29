"use client";

import { motion } from "framer-motion";
import { Factory, PackageSearch, Settings, TrendingUp } from "lucide-react";

export function ManufacturingWholesale() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-6 flex justify-between items-start">
          <div className="flex gap-4">
             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm">
               <Factory className="h-6 w-6" />
             </div>
             <div>
               <div className="text-base font-semibold text-[#111827]">Production Floor</div>
               <div className="text-xs font-medium text-[#6B7280]">Live Efficiency Metrics</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">OEE Score</div>
            <div className="text-4xl font-bold font-display text-[#111827]">84%</div>
            <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "84%" }}
                 transition={{ duration: 1 }}
                 className="h-full bg-emerald-500" 
               />
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
             <div className="flex items-center gap-2 mb-2">
               <PackageSearch className="h-4 w-4 text-[#6B7280]" />
               <div className="text-xs font-semibold text-[#111827]">Units</div>
             </div>
             <div className="text-xl font-bold text-[#111827]">14,892</div>
             <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
               <TrendingUp className="h-3 w-3" /> +12% today
             </div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { line: "Assembly Line A", status: "Optimal", active: true },
            { line: "Packaging Line B", status: "Maintenance", active: false }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-100 p-3"
            >
               <div className="flex items-center gap-3">
                 <motion.div 
                   animate={item.active ? { rotate: 360 } : {}}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className={`p-1.5 rounded-lg ${item.active ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}
                 >
                   <Settings className="h-4 w-4" />
                 </motion.div>
                 <div className="text-sm font-semibold text-[#111827]">{item.line}</div>
               </div>
               <div className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-gray-100 bg-white ${item.active ? 'text-emerald-600' : 'text-amber-600'}`}>
                 {item.status}
               </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
