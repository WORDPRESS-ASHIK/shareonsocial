"use client";

import { motion } from "framer-motion";
import {
  TrendingUp, Users, Calendar, ShoppingBag, BookOpen,
  Briefcase, Home, Rocket, Ticket, Activity, Star,
  Bell, CheckCircle2, BarChart3, ArrowUpRight, MessageSquare
} from "lucide-react";

type Props = {
  slug: string;
};

export function IndustryWhyUsIllustration({ slug }: Props) {
  const getIndustryData = () => {
    switch (slug) {
      case "restaurants":
        return {
          mainTitle: "Restaurant Analytics",
          mainMetric: "1,248",
          mainLabel: "Weekly Reservations",
          chartColor: "var(--color-brand-orange)",
          Icon: Star,
          floatLeftTitle: "New Review",
          floatLeftSub: "5 mins ago",
          floatRightTitle: "Orders",
          floatRightVal: "842",
          floatRightProgress: 78,
          badgeText: "+14% Engagement"
        };
      case "healthcare":
        return {
          mainTitle: "Healthcare Dashboard",
          mainMetric: "342",
          mainLabel: "Patient Appointments",
          chartColor: "var(--color-brand-blue)",
          Icon: Calendar,
          floatLeftTitle: "Consultation Request",
          floatLeftSub: "Just now",
          floatRightTitle: "Patient Reviews",
          floatRightVal: "4.9/5",
          floatRightProgress: 92,
          badgeText: "Medical Analytics"
        };
      case "retail":
        return {
          mainTitle: "Shopping Dashboard",
          mainMetric: "$24,500",
          mainLabel: "Product Sales Revenue",
          chartColor: "var(--color-brand-pink)",
          Icon: ShoppingBag,
          floatLeftTitle: "New Order",
          floatLeftSub: "Order #8921",
          floatRightTitle: "Orders",
          floatRightVal: "1,204",
          floatRightProgress: 65,
          badgeText: "+22% Growth"
        };
      case "education":
        return {
          mainTitle: "Course Dashboard",
          mainMetric: "8,942",
          mainLabel: "Student Enrollments",
          chartColor: "var(--color-brand-cyan)",
          Icon: BookOpen,
          floatLeftTitle: "Certificate Earned",
          floatLeftSub: "John Doe",
          floatRightTitle: "Completion",
          floatRightVal: "68%",
          floatRightProgress: 68,
          badgeText: "Learning Progress"
        };
      case "professional-services":
        return {
          mainTitle: "Business Dashboard",
          mainMetric: "156",
          mainLabel: "Consultation Bookings",
          chartColor: "var(--color-brand-blue)",
          Icon: Briefcase,
          floatLeftTitle: "New Lead",
          floatLeftSub: "Acme Corp",
          floatRightTitle: "Client Growth",
          floatRightVal: "+24%",
          floatRightProgress: 85,
          badgeText: "Lead Generation"
        };
      case "real-estate":
        return {
          mainTitle: "Lead Dashboard",
          mainMetric: "45",
          mainLabel: "Property Enquiries",
          chartColor: "var(--color-brand-blue)",
          Icon: Home,
          floatLeftTitle: "Viewing Scheduled",
          floatLeftSub: "Today 2:00 PM",
          floatRightTitle: "Listings",
          floatRightVal: "124",
          floatRightProgress: 45,
          badgeText: "Top Agent"
        };
      case "startups":
        return {
          mainTitle: "Startup Analytics",
          mainMetric: "12,450",
          mainLabel: "New Signups",
          chartColor: "var(--color-brand-orange)",
          Icon: Rocket,
          floatLeftTitle: "MRR Milestone",
          floatLeftSub: "$50k reached",
          floatRightTitle: "User Growth",
          floatRightVal: "24%",
          floatRightProgress: 95,
          badgeText: "Series A Ready"
        };
      case "events":
        return {
          mainTitle: "RSVP Dashboard",
          mainMetric: "4,892",
          mainLabel: "Ticket Sales",
          chartColor: "var(--color-brand-pink)",
          Icon: Ticket,
          floatLeftTitle: "New Registration",
          floatLeftSub: "VIP Pass",
          floatRightTitle: "Attendance",
          floatRightVal: "8,500",
          floatRightProgress: 88,
          badgeText: "Sold Out Soon"
        };
      default:
        return {
          mainTitle: "Analytics Dashboard",
          mainMetric: "8,942",
          mainLabel: "Total Growth",
          chartColor: "var(--color-brand-blue)",
          Icon: Activity,
          floatLeftTitle: "New Update",
          floatLeftSub: "System sync",
          floatRightTitle: "Performance",
          floatRightVal: "98%",
          floatRightProgress: 98,
          badgeText: "Optimized"
        };
    }
  };

  const data = getIndustryData();
  const Icon = data.Icon;

  return (
    <div className="relative mt-12 hidden lg:flex h-[500px] w-full items-center justify-center rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent overflow-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[color:var(--color-brand-blue)]/20 blur-[80px]"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[color:var(--color-brand-pink)]/20 blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      {/* CENTRAL DASHBOARD WIDGET */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[380px] rounded-2xl border border-white/60 bg-white/70 p-6 shadow-2xl shadow-black/5 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-[#111827]">
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-sm font-semibold text-[#111827]">{data.mainTitle}</div>
          </div>
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-[color:var(--color-brand-pink)]" />
            <div className="h-2 w-2 rounded-full bg-[color:var(--color-brand-orange)]" />
            <div className="h-2 w-2 rounded-full bg-[color:var(--color-brand-cyan)]" />
          </div>
        </div>

        <div className="mb-8">
          <div className="text-xs font-medium text-[#6B7280] uppercase tracking-wider mb-1">{data.mainLabel}</div>
          <div className="flex items-end gap-3">
            <div className="text-4xl font-bold font-display text-[#111827]">{data.mainMetric}</div>
            <div className="flex items-center text-xs font-semibold text-[color:var(--color-brand-cyan)] bg-[color:var(--color-brand-cyan)]/5 px-2 py-1 rounded-md mb-1">
              <ArrowUpRight className="h-3 w-3 mr-0.5" /> 12.5%
            </div>
          </div>
        </div>

        {/* Growth Chart */}
        <div className="relative h-24 w-full rounded-xl bg-gray-50 border border-gray-100 p-2 overflow-hidden">
          <svg className="absolute inset-0 h-full w-full p-2" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              d="M0 80 Q 20 60, 40 70 T 80 40 T 120 50 T 160 20 T 200 30 T 240 0"
              fill="none"
              stroke={data.chartColor}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          {/* Chart Gradient Fill */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-transparent to-black/5 opacity-50" 
            style={{ background: `linear-gradient(to top, transparent, ${data.chartColor}20)` }}
          />
        </div>
      </motion.div>

      {/* FLOATING LEFT CARD: Notification / Review */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        animate={{ y: [0, -8, 0] }}
        className="absolute left-6 top-1/4 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-black/5 backdrop-blur-md"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-brand-cyan)] to-[color:var(--color-brand-blue)] text-white shadow-md">
          <Bell className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-bold text-[#111827]">{data.floatLeftTitle}</div>
          <div className="text-xs font-medium text-[#6B7280]">{data.floatLeftSub}</div>
        </div>
      </motion.div>

      {/* FLOATING RIGHT TOP: Progress / KPI */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        animate={{ y: [0, 8, 0] }}
        className="absolute right-6 top-12 z-20 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-xl shadow-black/5 backdrop-blur-md w-[140px]"
      >
        <div className="text-xs font-medium text-[#6B7280] text-center mb-2">{data.floatRightTitle}</div>
        <div className="relative flex h-16 w-16 mx-auto items-center justify-center mb-2">
          <svg className="absolute inset-0 h-full w-full -rotate-90">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#f3f4f6" strokeWidth="6" />
            <motion.circle 
              cx="32" cy="32" r="28" fill="none" 
              stroke="url(#gradient)" strokeWidth="6" 
              strokeDasharray="175" 
              initial={{ strokeDashoffset: 175 }}
              whileInView={{ strokeDashoffset: 175 - (175 * data.floatRightProgress) / 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              strokeLinecap="round" 
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-brand-pink)" />
                <stop offset="100%" stopColor="var(--color-brand-blue)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-xs font-bold text-[#111827]">{data.floatRightProgress}%</div>
        </div>
        <div className="text-center text-sm font-bold text-[#111827]">{data.floatRightVal}</div>
      </motion.div>

      {/* FLOATING BOTTOM RIGHT: Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-16 right-12 z-20 flex items-center gap-2 rounded-full border border-[color:var(--color-brand-cyan)] bg-[color:var(--color-brand-cyan)]/5 px-4 py-2 shadow-lg shadow-[color:var(--color-brand-cyan)]/10"
      >
        <CheckCircle2 className="h-4 w-4 text-[color:var(--color-brand-cyan)]" />
        <span className="text-xs font-bold text-[color:var(--color-brand-cyan)]">{data.badgeText}</span>
      </motion.div>

    </div>
  );
}
