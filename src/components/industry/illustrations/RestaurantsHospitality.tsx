"use client";

import { motion } from "framer-motion";
import { Users, CalendarClock, ShoppingBag, Truck, Star, Activity } from "lucide-react";

export function RestaurantsHospitality() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md overflow-hidden";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-brand-orange)]/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

        <div className="mb-6 flex justify-between items-start border-b border-gray-100 pb-4 relative z-10">
          <div>
            <div className="text-sm font-semibold text-[#111827]">Restaurant Dashboard</div>
            <div className="text-xs font-medium text-[#6B7280]">Live Operations</div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-brand-orange)]/10 text-[color:var(--color-brand-orange)]">
            <Activity className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
          <motion.div 
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
             <div className="flex justify-between items-center mb-2">
               <div className="text-xs font-medium text-[#6B7280]">Reservations</div>
               <CalendarClock className="h-4 w-4 text-blue-500" />
             </div>
             <div className="text-2xl font-bold font-display text-[#111827]">142</div>
             <div className="text-[10px] font-medium text-emerald-600 mt-1 flex items-center gap-1">
               <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
               3 incoming
             </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
             <div className="flex justify-between items-center mb-2">
               <div className="text-xs font-medium text-[#6B7280]">Delivery</div>
               <Truck className="h-4 w-4 text-[color:var(--color-brand-orange)]" />
             </div>
             <div className="text-2xl font-bold font-display text-[#111827]">58</div>
             <div className="text-[10px] font-medium text-[color:var(--color-brand-orange)] mt-1 flex items-center gap-1">
               <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand-orange)]" />
               Preparing 12
             </div>
          </motion.div>
        </div>

        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-between text-xs font-bold uppercase text-[#6B7280] mb-1">
             <span>Table Occupancy</span>
             <span className="text-[#111827]">85%</span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "85%" }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
             />
          </div>

          {[
            { metric: "Online Orders", value: "324", icon: ShoppingBag },
            { metric: "Customer Rating", value: "4.9", icon: Star }
          ].map((item, i) => (
             <motion.div 
               key={i}
               whileHover={{ x: 4 }}
               className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-3"
             >
                <div className="flex items-center gap-3">
                   <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm text-gray-500">
                     <item.icon className={`h-4 w-4 ${item.icon === Star ? 'text-amber-400 fill-amber-400' : ''}`} />
                   </div>
                   <div className="text-sm font-semibold text-[#111827]">{item.metric}</div>
                </div>
                <div className="text-sm font-bold text-[#111827]">{item.value}</div>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
