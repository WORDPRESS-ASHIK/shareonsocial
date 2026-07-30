"use client";

import { motion } from "framer-motion";
import { Home, Users, CheckCircle2, Building, TrendingUp } from "lucide-react";

export function RealEstate() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className={cardClass}
      >
        <div className="mb-6 flex justify-between items-center border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111827] text-white shadow-md">
               <Building className="h-6 w-6" />
             </div>
             <div>
               <div className="text-base font-semibold text-[#111827]">Property CRM</div>
               <div className="text-xs font-medium text-[#6B7280]">Deal Pipeline</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
             <div className="flex items-center justify-center gap-2 mb-2 text-[#6B7280]">
               <Home className="h-4 w-4" />
               <div className="text-xs font-medium">Active Listings</div>
             </div>
             <div className="text-3xl font-bold text-[#111827]">48</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center relative overflow-hidden">
             <div className="flex items-center justify-center gap-2 mb-2 text-[#6B7280]">
               <Users className="h-4 w-4" />
               <div className="text-xs font-medium">Buyer Leads</div>
             </div>
             <div className="text-3xl font-bold text-[#111827]">156</div>
             <motion.div 
               animate={{ opacity: [1, 0.5, 1] }} 
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[color:var(--color-brand-blue)]" 
             />
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2 flex items-center justify-between">
             <span>Pipeline Status</span>
             <TrendingUp className="h-4 w-4 text-[color:var(--color-brand-cyan)]" />
          </div>
          {[
            { stage: "Viewings Scheduled", count: "12", progress: "80%", color: "bg-[color:var(--color-brand-blue)]" },
            { stage: "Offers Pending", count: "5", progress: "40%", color: "bg-[color:var(--color-brand-orange)]" },
            { stage: "Contracts Out", count: "3", progress: "25%", color: "bg-[color:var(--color-brand-cyan)]" }
          ].map((item, i) => (
             <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
               <div className="flex justify-between items-center mb-2">
                 <div className="text-sm font-semibold text-[#111827]">{item.stage}</div>
                 <div className="text-xs font-bold text-[#111827]">{item.count}</div>
               </div>
               <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: item.progress }}
                   transition={{ duration: 1, delay: i * 0.2 }}
                   className={`h-full ${item.color} rounded-full`}
                 />
               </div>
             </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
