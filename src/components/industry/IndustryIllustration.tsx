"use client";

import { motion } from "framer-motion";
import {
  TrendingUp, Users, Calendar, ShoppingBag, BookOpen,
  Briefcase, Home, Rocket, Ticket, Activity, Star, CheckCircle, BarChart3, PieChart
} from "lucide-react";

type Props = {
  slug: string;
};

// Common Card Style
const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

export function IndustryIllustration({ slug }: Props) {
  const renderMockup = () => {
    switch (slug) {
      case "restaurants":
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cardClass}
            >
              <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-brand-orange)]/10 text-[color:var(--color-brand-orange)]">
                    <Star className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#111827]">New Customer Review</div>
                    <div className="text-xs font-medium text-[#6B7280]">5 mins ago</div>
                  </div>
                </div>
                <div className="flex gap-1 text-[color:var(--color-brand-orange)]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-[#6B7280] uppercase tracking-wider mb-2">Weekly Table Bookings</div>
                  <div className="flex items-end justify-between">
                    <div className="text-4xl font-bold font-display text-[#111827]">128</div>
                    <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      <TrendingUp className="h-4 w-4" /> +14%
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/50 border border-white/40 p-4 shadow-sm">
                    <div className="text-xs font-medium text-[#6B7280] mb-1">Reservations</div>
                    <div className="text-lg font-semibold text-[#111827]">342</div>
                  </div>
                  <div className="rounded-xl bg-white/50 border border-white/40 p-4 shadow-sm">
                    <div className="text-xs font-medium text-[#6B7280] mb-1">Orders</div>
                    <div className="text-lg font-semibold text-[#111827]">892</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      
      case "healthcare":
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className={cardClass}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-blue)]/10 text-[color:var(--color-brand-blue)]">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-[#111827]">Appointments</div>
                  <div className="text-sm font-medium text-[#6B7280]">Today's Schedule</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { time: "09:00 AM", type: "Consultation Request" },
                  { time: "10:30 AM", type: "Patient Review" },
                  { time: "11:15 AM", type: "New Appointment" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-[color:var(--color-brand-blue)]" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[#111827]">{item.type}</div>
                    </div>
                    <div className="text-xs font-medium text-[#6B7280]">{item.time}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case "retail":
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={cardClass}
            >
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-[#6B7280] mb-2 uppercase tracking-wider">Revenue</div>
                  <div className="text-4xl font-bold font-display text-[#111827]">$12,489</div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  <TrendingUp className="h-4 w-4" /> +22%
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-xl font-bold text-[#111827]">482</div>
                  <div className="text-xs font-medium text-[#6B7280]">Product Sales</div>
                </div>
                <div className="text-center border-l border-r border-gray-200">
                  <div className="text-xl font-bold text-[#111827]">512</div>
                  <div className="text-xs font-medium text-[#6B7280]">Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#111827]">4.8%</div>
                  <div className="text-xs font-medium text-[#6B7280]">Conversion Rate</div>
                </div>
              </div>
              <div className="flex items-end gap-2 h-24">
                {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="w-full rounded-t-sm bg-gradient-to-t from-[color:var(--color-brand-pink)] to-[color:var(--color-brand-blue)]"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        );

      case "education":
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
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
                <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="text-xs font-medium text-[#6B7280] mb-1">Course Signups</div>
                  <div className="text-xl font-semibold text-[#111827]">845</div>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="text-xs font-medium text-[#6B7280] mb-1">Completion Rate</div>
                  <div className="text-xl font-semibold text-[#111827]">68%</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-medium text-[#4B5563]">
                  <span>Avg. Course Progress</span>
                  <span className="text-[#111827] font-semibold">68%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "68%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full bg-[color:var(--color-brand-cyan)]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        );

      case "professional-services":
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
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
              <div className="space-y-4">
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
                      <div className="rounded-lg bg-gray-50 p-2">
                        <item.icon className="h-5 w-5 text-[#4B5563]" />
                      </div>
                      <div className="text-sm font-medium text-[#111827]">{item.title}</div>
                    </div>
                    <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{item.count}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case "real-estate":
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={`${cardClass} overflow-hidden !p-0`}
            >
              <div className="h-40 w-full bg-gradient-to-br from-[color:var(--color-brand-blue)]/20 to-[color:var(--color-brand-pink)]/20 relative">
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                   <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                     <div className="text-lg font-bold text-[#111827]">$850,000</div>
                   </div>
                   <div className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                     New Listing
                   </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-base font-semibold text-[#111827] mb-4">Property Enquiries Overview</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                    <div className="text-xs font-medium text-[#6B7280] mb-1">Qualified Leads</div>
                    <div className="text-2xl font-bold text-[#111827]">24</div>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                    <div className="text-xs font-medium text-[#6B7280] mb-1">Viewings Booked</div>
                    <div className="text-2xl font-bold text-[#111827]">12</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );

      case "startups":
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={cardClass}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-orange)]/10 text-[color:var(--color-brand-orange)]">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#111827]">User Growth</div>
                    <div className="text-sm font-medium text-[#6B7280]">Last 30 Days</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border-r border-gray-200">
                  <div className="text-xs font-medium text-[#6B7280] mb-1">Sign-ups</div>
                  <div className="text-2xl font-bold text-[#111827]">12,409</div>
                </div>
                <div className="pl-2">
                  <div className="text-xs font-medium text-[#6B7280] mb-1">Conversion Rate</div>
                  <div className="text-2xl font-bold text-[#111827]">8.4%</div>
                </div>
              </div>
              <div className="relative h-28 w-full bg-gray-50 rounded-xl p-2 border border-gray-100">
                <svg className="absolute inset-0 h-full w-full overflow-visible p-4" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M0 60 Q 50 60, 100 30 T 200 10 T 300 0"
                    fill="none"
                    stroke="var(--color-brand-orange)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        );

      case "events":
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`${cardClass} text-center`}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--color-brand-pink)]/10 text-[color:var(--color-brand-pink)]">
                <Ticket className="h-8 w-8" />
              </div>
              <div className="text-sm font-medium text-[#6B7280] uppercase tracking-wider mb-2">Tickets Sold</div>
              <div className="text-4xl font-bold font-display text-[#111827] mb-8">4,892</div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm text-left">
                  <div className="text-xs font-medium text-[#6B7280] mb-1">Registrations</div>
                  <div className="text-xl font-bold text-[#111827]">5,104</div>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm text-left">
                  <div className="text-xs font-medium text-[#6B7280] mb-1">RSVP Rate</div>
                  <div className="text-xl font-bold text-[#111827]">96%</div>
                </div>
              </div>
            </motion.div>
          </div>
        );

      default:
        // Generic fallback dashboard
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cardClass}
            >
              <div className="flex gap-4">
                <PieChart className="h-10 w-10 text-[#4B5563]" />
                <BarChart3 className="h-10 w-10 text-[#4B5563]" />
              </div>
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-[2rem] border border-foreground/10 bg-gradient-to-br from-[oklch(0.98_0.005_90)] to-[oklch(0.94_0.02_220)] shadow-inner">
      {/* Background Grid Pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]" aria-hidden="true">
        <defs>
          <pattern id="hero-pattern-illustration" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#111827" strokeWidth="0.5"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern-illustration)"></rect>
      </svg>
      
      {/* The Dynamic Mockup */}
      {renderMockup()}
    </div>
  );
}
