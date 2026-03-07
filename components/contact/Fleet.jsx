"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const ContactDetails = () => {
  const contactData = [
    { 
      icon: Phone, 
      label: "Audio Channel", 
      val: "+91 291 000 0000", 
      desc: "Direct line to ops center.",
      accent: "bg-lime-500",
      iconColor: "text-black"
    },
    { 
      icon: Mail, 
      label: "Secure Mail", 
      val: "ops@electrogo.in", 
      desc: "Official logs & docs.",
      accent: "bg-slate-800",
      iconColor: "text-lime-400"
    },
    { 
      icon: MapPin, 
      label: "Geo Location", 
      val: "Jodhpur, RJ", 
      desc: "State Command Node.",
      accent: "bg-slate-800",
      iconColor: "text-lime-400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden selection:bg-lime-400">
      <div className="max-w-6xl mx-auto">
        
        {/* REFINED HEADER */}
        <div className="mb-16 space-y-2 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 justify-center md:justify-start"
          >
            <div className="h-[1px] w-8 bg-lime-500" />
            <span className="text-lime-600 font-mono text-[9px] tracking-[0.4em] uppercase font-black">
              Inquiry Protocol
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1117] uppercase italic tracking-tighter">
            Operational <span className="text-slate-200">Nodes.</span>
          </h2>
        </div>

        {/* COMPACT DARK ARCH CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="relative group p-8 rounded-t-[8rem] rounded-b-[2rem] bg-[#0d1117] shadow-xl transition-all duration-500 border border-white/5"
            >
              {/* Refined Icon Hub */}
              <div className="mb-10 flex justify-center relative">
                <div className={`w-16 h-16 rounded-2xl ${item.accent} flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(163,230,53,0.3)]`}>
                  <item.icon size={24} className={item.iconColor} strokeWidth={2.5} />
                </div>
              </div>

              {/* Compact Text Content */}
              <div className="space-y-3 text-center">
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500 font-black">
                  {item.label}
                </p>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight group-hover:text-lime-400 transition-colors">
                  {item.val}
                </h3>
                <div className="w-8 h-[1px] bg-white/10 mx-auto my-3 group-hover:w-16 group-hover:bg-lime-500 transition-all duration-500" />
                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[180px] mx-auto opacity-80">
                  {item.desc}
                </p>
              </div>

              {/* Small Tactical Hint */}
              <div className="mt-8 flex justify-center">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-600 group-hover:border-lime-500 group-hover:text-lime-400 transition-all cursor-pointer bg-white/5">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Ghost Index (Subtle) */}
              <span className="absolute bottom-6 right-8 text-4xl font-black text-white/[0.02] pointer-events-none uppercase italic">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactDetails;