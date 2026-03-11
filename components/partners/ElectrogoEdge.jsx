"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Headset, SunDim, Trophy, Zap, ChevronRight } from 'lucide-react';

const ElectrogoEdge = () => {
  const baseEdges = [
    { title: "Advanced Tech Stack", desc: "Full access to our proprietary CMS and Real-time Fleet Dashboard.", icon: <LayoutDashboard size={24} />, color: "text-blue-500" },
    { title: "24/7 Strategic Support", desc: "Dedicated partner helpline and rapid-response on-site maintenance.", icon: <Headset size={24} />, color: "text-lime-500" },
    { title: "Solar Integration", desc: "Lower overhead through 'Solar-to-Socket' renewable energy programs.", icon: <SunDim size={24} />, color: "text-amber-500" },
    { title: "Brand Prestige", desc: "Align with Rajasthan’s most innovative green-tech mobility brand.", icon: <Trophy size={24} />, color: "text-purple-500" },
  ];

  const infiniteEdges = [...baseEdges, ...baseEdges];

  return (
    <section className="relative w-full h-screen bg-gray-950 flex flex-col overflow-hidden font-sans">
      
      <div className="w-full pt-16 px-8 md:px-24">
        <div className="max-w-7xl mx-auto border-b border-white/5 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={14} className="text-lime-500 fill-lime-500" />
            <span className="text-lime-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">Infrastructure Advantages</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
            The Electrogo <span className="text-gray-800 outline-text">Edge.</span>
          </h2>
        </div>
      </div>

      <div className="flex-1 w-full max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
            We don't just provide vehicles; we provide a <span className="text-white italic">full-spectrum ecosystem</span> designed for high-uptime operations in the Indian corridor.
          </p>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="h-px w-12 bg-lime-500 group-hover:w-20 transition-all duration-500" />
            <span className="text-lime-500 text-[10px] font-black uppercase tracking-widest">Explore Technical Documentation</span>
            <ChevronRight size={14} className="text-lime-500" />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden mask-fade-edges">
          <motion.div 
            animate={{ y: [0, "-50%"] }} 
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-col gap-4 py-4"
          >
            {infiniteEdges.map((item, i) => (
              <EdgeItem key={i} item={item} />
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #333;
          color: transparent;
        }
        .mask-fade-edges {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};

const EdgeItem = ({ item }) => {
  return (
    <div className="group w-full p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-500 flex items-center gap-8 shrink-0">
      <div className={`p-4 rounded-2xl bg-gray-900 border border-white/10 ${item.color} shadow-xl group-hover:scale-110 transition-transform`}>
        {item.icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-[240px]">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default ElectrogoEdge;