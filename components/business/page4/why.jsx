"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { VolumeX, Leaf, LineChart, ShieldCheck, ArrowDownRight } from 'lucide-react';

const BusImpactGrid = () => {
  const metrics = [
    {
      title: "Noise Reduction",
      value: "80%",
      desc: "Reduction in ambient urban noise compared to traditional diesel fleets. Ideal for heritage silence zones.",
      icon: <VolumeX size={24} />,
      detail: "-45 Decibels avg."
    },
    {
      title: "Healthier Cities",
      value: "Zero",
      desc: "Tailpipe emissions at the point of use. Protecting air quality in high-density heritage and tourism zones.",
      icon: <Leaf size={24} />,
      detail: "100% Carbon Neutral"
    },
    {
      title: "Cost Efficiency",
      value: "40%",
      desc: "Lower operating and maintenance costs per kilometer, maximizing municipal transit budgets.",
      icon: <LineChart size={24} />,
      detail: "Optimized ROI"
    }
  ];

  return (
    <section className="relative  w-full bg-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden">
      
     
      <div className="relative z-10 max-w-7xl w-full">
        
        {/* HEADER SECTION */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "4rem" }} 
              className="h-1.5 bg-lime-500 mb-6" 
            />
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              Mass Scale <br />
              <span className="text-lime-500 not-italic">Impact.</span>
            </h2>
          </div>
        </div>

        {/* THE INFOGRAPHIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[40px] bg-white border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(163,230,53,0.2)] transition-all duration-500"
            >
              {/* Animated Progress Circle */}
              <div className="absolute top-10 right-10">
                <div className="relative flex items-center justify-center">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-slate-50" />
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray="175" strokeDashoffset="40" className="text-lime-500" />
                  </svg>
                  <ArrowDownRight size={16} className="absolute text-slate-300 group-hover:text-lime-500 transition-colors" />
                </div>
              </div>
              
              <div className="p-4 bg-slate-900 text-white rounded-2xl mb-12 w-fit group-hover:bg-lime-500 group-hover:text-black transition-all">
                {item.icon}
              </div>

              <div>
                <h3 className="text-slate-900 text-6xl font-black uppercase italic tracking-tighter leading-none">
                  {item.value}
                </h3>
                <h4 className="text-lime-600 text-[11px] font-black uppercase tracking-[0.3em] mt-3 mb-6">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">
                  {item.desc}
                </p>
              </div>

              {/* Technical Detail Footer */}
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse" />
                  <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest">{item.detail}</span>
                </div>
                <ShieldCheck size={14} className="text-slate-200 group-hover:text-lime-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default BusImpactGrid;