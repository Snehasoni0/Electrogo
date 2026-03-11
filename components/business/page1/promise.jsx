"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Ban, ShieldCheck, Leaf, Info } from 'lucide-react';

const ZeroPromise = () => {
  const promises = [
    {
      id: "01",
      title: "Zero Surge",
      desc: "Fixed-Protocol pricing. No multipliers, no traffic penalties, just transparent travel.",
      icon: <Ban className="text-lime-500" size={24} />,
      status: "STABLE",
    },
    {
      id: "02",
      title: "Zero Cancellation",
      desc: "Our high-reliability model ensures your ride in Jodhpur or Jaipur is absolute.",
      icon: <ShieldCheck className="text-lime-500" size={24} />,
      status: "GUARANTEED",
    },
    {
      id: "03",
      title: "Zero Emission",
      desc: "100% electric. Pure software-driven mobility for a breathable Rajasthan.",
      icon: <Leaf className="text-lime-500" size={24} />,
      status: "CLEAN",
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-[#0d1117] uppercase italic tracking-tighter">
            Zero <span className="text-lime-400">Exceptions</span> !
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {promises.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="min-w-[85vw] md:min-w-0 snap-center mr-6 md:mr-0 group cursor-pointer"
            >
              <div className="relative h-[380px] w-full p-8 rounded-[3rem] bg-[#0d1117] overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500 group-hover:shadow-lime-500/10">
                
                <div className="flex justify-between items-start z-10">
                  <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-lime-500">
                    {item.icon}
                  </div>
                  <span className="text-lime-500 font-mono text-[10px] font-black tracking-widest px-3 py-1 border border-lime-500/30 rounded-full">
                    {item.status}
                  </span>
                </div>

                <div className="z-10 space-y-4">
                  <h3 className="text-4xl font-black text-white uppercase italic leading-none">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-[240px]">
                    {item.desc}
                  </p>
                </div>

                <div className="z-10 flex items-center gap-2">
                  <div className="h-[2px] w-8 bg-lime-500" />
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] font-black">
                    Unit {item.id} Protocol
                  </span>
                </div>

                <span className="absolute -bottom-8 -right-8 text-[12rem] font-black text-white/[0.03] italic leading-none pointer-events-none group-hover:text-lime-500/[0.05] transition-colors duration-500">
                  {item.id}
                </span>

                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 md:hidden">
          {promises.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all ${i === 0 ? 'w-8 bg-lime-500' : 'w-2 bg-slate-200'}`} />
          ))}
        </div>

      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ZeroPromise;