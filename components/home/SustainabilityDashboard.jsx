"use client";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Leaf, Users, Zap, Wind, ArrowUpRight } from "lucide-react";

const stats = [
  { 
    label: "Carbon Offset", 
    sub: "Annual CO2 Reduction",
    value: 12000, 
    suffix: "t",
    icon: Leaf,
    color: "#65a30d",
    offset: "0px"
  },
  { 
    label: "Youth Careers", 
    sub: "Green Jobs for Rajasthan",
    value: 500, 
    suffix: "+",
    icon: Users,
    color: "#0891b2",
    offset: "40px" // Pushes the card down for a staggered look
  },
  { 
    label: "Solar Network", 
    sub: "Charging Infrastructure",
    value: 50, 
    suffix: "",
    icon: Zap, 
    color: "#ea580c",
    offset: "0px"
  },
  { 
    label: "Clean Energy", 
    sub: "Fleet Power Source",
    value: 100, 
    suffix: "%",
    icon: Wind, 
    color: "#4f46e5",
    offset: "40px"
  },
];

const SustainabilityDashboard = () => {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* UNIQUE TOP HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b border-slate-100">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight italic">
              Small Steps. <br />
              <span className="text-lime-600 not-italic">Exponential Change.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mt-6 md:mt-0"
          >
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              Live Sustainability Metrics 2026
            </p>
          </motion.div>
        </div>

        {/* STAGGERED STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 pt-10">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());

  React.useEffect(() => {
    if (isInView) springValue.set(stat.value);
  }, [isInView, springValue, stat.value]);

  return (
    <motion.div
      ref={ref}
      style={{ marginTop: stat.offset }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
        
        {/* Background Visual Element (Circle) */}
        <div 
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-[0.03] transition-transform duration-700 group-hover:scale-150"
          style={{ backgroundColor: stat.color }}
        />

        {/* Icon Header */}
        <div className="relative mb-6">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-500"
            style={{ backgroundColor: `${stat.color}10` }}
          >
            <stat.icon style={{ color: stat.color }} size={28} />
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center"
          >
            <ArrowUpRight size={12} style={{ color: stat.color }} strokeWidth={3} />
          </motion.div>
        </div>

        {/* Value Area */}
        <div className="flex flex-col mb-4">
          <div className="flex items-baseline justify-center gap-1">
            <motion.span className="text-5xl font-black text-slate-900 tracking-tighter italic">
              {displayValue}
            </motion.span>
            <span className="text-xl font-black italic" style={{ color: stat.color }}>
              {stat.suffix}
            </span>
          </div>
          <h3 className="text-slate-800 font-bold text-lg mt-2 tracking-tight uppercase leading-none">
            {stat.label}
          </h3>
        </div>

        <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
          {stat.sub}
        </p>

        {/* Bottom Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-50 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-full w-full opacity-60"
            style={{ backgroundColor: stat.color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SustainabilityDashboard;