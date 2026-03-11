"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Fixed Import: Changed SteeringWheel to UserCheck
import { Building2, Briefcase, UserCheck, ArrowUpRight, ShieldCheck, Zap, Wallet } from 'lucide-react';

const PartnerSelection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const paths = [
    {
      id: "path-a",
      type: "Landowners & Businesses",
      tagline: "The Charging Network",
      headline: "Host an Electrogo Hub.",
      content: "Turn your parking space into a revenue stream. Attract premium EV travelers to your hotel, mall, or restaurant.",
      benefit: "Zero Investment Model Options Available.",
      icon: <Building2 size={24} />,
      accent: "border-lime-500",
      bg: "hover:bg-lime-500/5",
      textAccent: "text-lime-600",
      badgeIcon: <Zap size={14} className="text-lime-600" />
    },
    {
      id: "path-b",
      type: "Corporate & Govt",
      tagline: "Fleet Solutions",
      headline: "Electrify Your Organization.",
      content: "Secure long-term, protocol-compliant EV leases for executive transit and employee commutes.",
      benefit: "Detailed ESG Reporting & Compliance Guaranteed.",
      icon: <Briefcase size={24} />,
      accent: "border-blue-600",
      bg: "hover:bg-blue-600/5",
      textAccent: "text-blue-600",
      badgeIcon: <ShieldCheck size={14} className="text-blue-600" />
    },
    {
      id: "path-c",
      type: "Driver Partners",
      tagline: "Entrepreneurship",
      headline: "Drive the Change.",
      content: "Become a partner-pilot in our 100% electric fleet. Professional training, fixed earnings, and zero fuel costs.",
      benefit: "Health Insurance & Performance Incentives.",
      icon: <UserCheck size={24} />, 
      accent: "border-slate-900",
      bg: "hover:bg-slate-900/5",
      textAccent: "text-slate-900",
      badgeIcon: <Wallet size={14} className="text-slate-900" />
    }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-8 md:px-24 overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-black text-lime-300 uppercase tracking-[0.5em] mb-4 block">Ecosystem Segments</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
            Choose Your <br />
            <span className="text-lime-400 not-italic">Strategic Path.</span>
          </h2>
        </div>
        <p className="text-slate-400 font-medium text-xs max-w-[240px] italic border-l border-lime-400 pl-6">
          Tailored partnership models designed for Rajasthan's diverse economic landscape.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-auto min-h-[500px]">
        {paths.map((item, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            className={`
              relative p-10 rounded-[40px] border transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden
              ${hoveredIndex === i ? `${item.accent} ${item.bg} shadow-2xl z-20` : 'border-slate-100 bg-slate-50 opacity-80 md:opacity-100'}
            `}
          >
            <div className={`absolute -right-6 -top-6 text-9xl font-black italic opacity-[0.03] select-none transition-colors ${hoveredIndex === i ? item.textAccent : 'text-slate-900'}`}>
              0{i + 1}
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className={`p-4 rounded-2xl bg-white shadow-sm border border-slate-100 transition-colors ${hoveredIndex === i ? item.textAccent : 'text-slate-400'}`}>
                  {item.icon}
                </div>
                <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-slate-900">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className={`text-[10px] font-black uppercase tracking-widest mb-1 ${item.textAccent}`}>
                    {item.tagline}
                  </h4>
                  <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                    {item.headline}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>

            <div className="relative z-10 ">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredIndex === i ? "auto" : 0, 
                  opacity: hoveredIndex === i ? 1 : 0 
                }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-slate-200/50 flex items-start gap-3">
                  <div className="mt-1 p-1 bg-white rounded-md shadow-sm border border-slate-100">
                    {item.badgeIcon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Key Partnership Benefit</p>
                    <p className={`text-xs font-bold ${item.textAccent} italic`}>
                      "{item.benefit}"
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ opacity: hoveredIndex === i ? 0 : 1 }}
                className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] italic"
              >
                Explore {item.type}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnerSelection;