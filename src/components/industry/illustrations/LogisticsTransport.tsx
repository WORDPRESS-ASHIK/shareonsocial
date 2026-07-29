"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Package, Navigation } from "lucide-react";

export function LogisticsTransport() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

        <div className="mb-6 flex items-center justify-between relative z-10 border-b border-gray-100 pb-4">
           <div>
             <div className="text-sm font-semibold text-[#111827]">Fleet Dashboard</div>
             <div className="text-xs font-medium text-[#6B7280]">Active Deliveries</div>
           </div>
           <div className="text-right">
             <div className="text-2xl font-bold font-display text-[#111827]">148</div>
           </div>
        </div>

        <div className="relative h-24 w-full bg-blue-50/50 border border-blue-100 rounded-xl mb-6 overflow-hidden relative z-10 flex items-center justify-center">
           <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
             <defs>
               <pattern id="logistics-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                 <path d="M20 0H0V20" fill="none" stroke="#3b82f6" strokeWidth="0.5"></path>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#logistics-grid)"></rect>
           </svg>
           
           <div className="relative w-3/4 flex items-center justify-between">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2 relative">
                <motion.div 
                  initial={{ x: "0%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-3 -left-3"
                >
                  <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 text-[color:var(--color-brand-orange)]">
                    <Truck className="h-4 w-4" />
                  </div>
                </motion.div>
              </div>
              <MapPin className="h-5 w-5 text-[color:var(--color-brand-blue)]" />
           </div>
        </div>

        <div className="space-y-3 relative z-10">
          <div className="text-xs font-bold uppercase text-[#6B7280] mb-2">Delivery Queue</div>
          {[
            { id: "SHP-8492", status: "In Transit", eta: "45 mins" },
            { id: "SHP-8493", status: "Delivered", eta: "Just now" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-3 shadow-sm"
            >
               <div className="flex items-center gap-3">
                 <Package className="h-4 w-4 text-gray-400" />
                 <div>
                   <div className="text-sm font-semibold text-[#111827]">{item.id}</div>
                   <div className="text-[10px] text-[#6B7280] flex items-center gap-1">
                      <Navigation className="h-3 w-3" /> ETA: {item.eta}
                   </div>
                 </div>
               </div>
               <div className={`text-[10px] font-bold px-2 py-1 rounded ${item.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                 {item.status}
               </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
