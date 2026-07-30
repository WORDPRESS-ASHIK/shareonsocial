"use client";

import { motion } from "framer-motion";
import { Building2, Map, Users, TrendingUp } from "lucide-react";

export function FranchisesMultiLocation() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-blue)] text-white shadow-sm">
               <Building2 className="h-6 w-6" />
             </div>
             <div>
               <div className="text-base font-semibold text-[#111827]">Centralized CRM</div>
               <div className="text-xs font-medium text-[#6B7280]">Multi-location Overview</div>
             </div>
          </div>
          <div className="text-right">
             <div className="text-2xl font-bold font-display text-[#111827]">24</div>
             <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Branches</div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {[
            { location: "Downtown Branch", rev: "$42.5k", growth: "+12%" },
            { location: "Westside Hub", rev: "$38.2k", growth: "+8%" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between rounded-xl bg-white border border-gray-100 p-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                 <Map className="h-4 w-4 text-gray-400" />
                 <div className="text-sm font-semibold text-[#111827]">{item.location}</div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="text-sm font-bold text-[#111827]">{item.rev}</div>
                 <div className="text-[10px] font-bold text-[color:var(--color-brand-cyan)] bg-[color:var(--color-brand-cyan)]/5 px-1.5 py-0.5 rounded flex items-center gap-1">
                   <TrendingUp className="h-3 w-3" /> {item.growth}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 flex items-center justify-between">
           <div className="flex items-center gap-2">
             <Users className="h-5 w-5 text-[#6B7280]" />
             <div>
               <div className="text-xs font-medium text-[#6B7280]">Total Network Customers</div>
               <div className="text-lg font-bold text-[#111827]">142,890</div>
             </div>
           </div>
           <motion.div 
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="h-2 w-2 rounded-full bg-[color:var(--color-brand-cyan)]"
           />
        </div>
      </motion.div>
    </div>
  );
}
