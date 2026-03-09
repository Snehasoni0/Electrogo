"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, Zap, AlertCircle, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  const lastUpdated = "March 09, 2026";

  const sections = [
    {
      id: "agreement",
      icon: <FileText size={20} />,
      title: "Agreement to Terms",
      content: "By accessing Electrogo Mobility platforms, you agree to be bound by these Terms. This includes participation in our April 2026 Rajasthan rollout and use of our executive transit infrastructure."
    },
    {
      id: "services",
      icon: <Zap size={20} />,
      title: "Service Scope",
      content: "We provide EV transit solutions across the Jaipur-Ajmer-Jodhpur highway network. Services are subject to availability and the technical specifications of our charging infrastructure."
    },
    {
      id: "partners",
      icon: <ShieldCheck size={20} />,
      title: "Partner Obligations",
      content: "Partners hosting chargers or managing fleets must provide accurate location and utility data. Site audits conducted within 48 hours must be facilitated by the partner for grid synchronization."
    },
    {
      id: "liability",
      icon: <AlertCircle size={20} />,
      title: "Liability & Governance",
      content: "Electrogo Mobility is governed by the laws of Rajasthan, India. We are not liable for grid outages or third-party vehicle maintenance beyond our executive cab and bus service protocols."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-lime-400 selection:text-black">

      {/* 2. HERO SECTION WITH IMAGE & OVERLAY */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.2]"
          style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661549683908-b11e9855c469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UlVMRVN8ZW58MHx8MHx8fDA%3D')` }}
        />
        
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-white z-0" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6"
          >
            Terms of <br />
            <span className="text-white outline-text opacity-40">Service.</span>
          </motion.h1>
          <p className="text-lime-400 font-mono text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-md">
            Operational Protocol: {lastUpdated}
          </p>
        </div>
      </header>

      {/* 3. CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Left: Summary Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] sticky top-32 shadow-sm">
            <h3 className="text-slate-900 font-black uppercase italic tracking-widest text-sm mb-6 flex items-center gap-2">
              <Scale size={16} className="text-lime-500" /> 
              Legal Framework
            </h3>
            <p className="text-xs leading-relaxed text-slate-500 mb-6 italic">
              "Governing the expansion of EV infrastructure across the Jodhpur-Jaipur corridor."
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

        {/* Right: Detailed Text */}
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
              Review our full B2G compliance roadmap at: <br />
              <span className="text-slate-900">compliance@electrogo.mobility</span>
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