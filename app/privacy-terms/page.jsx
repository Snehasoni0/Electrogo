"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Scale, ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  const lastUpdated = "March 09, 2026";

  const sections = [
    {
      id: "collection",
      icon: <Eye size={20} />,
      title: "Data Collection",
      content: "We collect information necessary to facilitate Rajasthan's electric transit network. This includes location data for charger hosting, fleet requirements for corporate partners, and contact details provided via our partnership sequence forms."
    },
    {
      id: "usage",
      icon: <Zap size={20} />,
      title: "How We Use Data",
      content: "Your data is used to optimize the Electric Corridor rollout, conduct site audits within 48 hours as promised in our roadmap, and ensure seamless synchronization with the state-wide charging grid."
    },
    {
      id: "security",
      icon: <Lock size={20} />,
      title: "Data Security",
      content: "We implement industry-standard encryption to protect B2G and B2C data. Operational details regarding executive taxi routes and charging infrastructure are stored on secured servers with restricted access."
    },
    {
      id: "rights",
      icon: <Scale size={20} />,
      title: "Your Rights",
      content: "As we prepare for the April 2026 rollout, you maintain the right to access, rectify, or request the deletion of your partnership data at any time by contacting our legal department."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-lime-400 selection:text-black">
      

      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.5]"
          style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661371394983-42485fed3a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZHNoYWtlfGVufDB8fDB8fHww')` }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-white z-0" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6"
          >
            Privacy <br />
            <span className="text-white outline-text opacity-40">Protocols.</span>
          </motion.h1>
          <p className="text-lime-400 font-mono text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-md">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] sticky top-32 shadow-sm">
            <h3 className="text-slate-900 font-black uppercase italic tracking-widest text-sm mb-6 flex items-center gap-2">
              <Zap size={16} className="text-lime-500 fill-lime-500" /> 
              Commitment
            </h3>
            <p className="text-xs leading-relaxed text-slate-500 mb-6 italic">
              "Protecting the integrity of Rajasthan's EV data as we scale the Electric Corridor towards April 2026."
            </p>
            <div className="space-y-4">
              {sections.map((s) => (
                <div key={s.id} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-16">
          {sections.map((section, index) => (
            <motion.section 
              key={section.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-500 shadow-xl">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter group-hover:text-lime-600 transition-colors">
                  {section.title}
                </h2>
              </div>
              <div className="bg-slate-50/50 p-8 rounded-3xl border border-transparent group-hover:border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                <p className="text-slate-500 leading-relaxed text-sm">
                  {section.content}
                </p>
              </div>
            </motion.section>
          ))}
          
          <section className="pt-12 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Contact our Data Protection Officer at: <br />
              <span className="text-slate-900">legal@electrogo.mobility</span>
            </p>
          </section>
        </div>
      </main>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1.5px #fff;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default page;