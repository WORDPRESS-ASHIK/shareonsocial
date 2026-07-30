"use client";

import { motion } from "framer-motion";
import { Home, Users, CheckCircle, Search } from "lucide-react";

export function RealEstateProperty() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="h-32 w-full bg-gradient-to-br from-[color:var(--color-brand-blue)]/20 to-[color:var(--color-brand-pink)]/20 relative">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-4 left-4 right-4 flex justify-between items-end"
          >
             <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
               <div className="text-lg font-bold text-[#111827]">$850,000</div>
               <div className="text-[10px] font-medium text-[#6B7280]">4 Bed • 2 Bath</div>
             </div>
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="bg-[color:var(--color-brand-cyan)] text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm flex items-center gap-1"
             >
               <Home className="h-3 w-3" /> New Listing
             </motion.div>
          </motion.div>
        </div>
        <div className="p-6">
          <div className="text-sm font-semibold text-[#111827] mb-4 flex items-center justify-between">
            Property Enquiries CRM
            <Search className="h-4 w-4 text-[#6B7280]" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-gray-50 p-4 border border-gray-100 flex flex-col justify-center items-center"
            >
              <div className="text-xs font-medium text-[#6B7280] mb-1">Qualified Leads</div>
              <div className="text-2xl font-bold text-[#111827]">24</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-gray-50 p-4 border border-gray-100 flex flex-col justify-center items-center"
            >
              <div className="text-xs font-medium text-[#6B7280] mb-1">Inspections</div>
              <div className="text-2xl font-bold text-[#111827]">12</div>
            </motion.div>
          </div>
          
          <div className="rounded-lg border border-gray-100 bg-white p-3 flex items-center gap-3">
             <div className="rounded-full bg-[color:var(--color-brand-cyan)] p-2">
               <CheckCircle className="h-4 w-4 text-[color:var(--color-brand-cyan)]" />
             </div>
             <div>
               <div className="text-xs font-semibold text-[#111827]">Offer Accepted</div>
               <div className="text-[10px] text-[#6B7280]">123 Smith St • Just now</div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
