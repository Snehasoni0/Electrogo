"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Landmark, UserCheck, ShieldCheck, Mail, FileText } from 'lucide-react';

const B2GContactForm = () => {
  return (
    /* Changed h-screen to min-h-screen to allow content to expand on mobile */
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center p-6 md:p-12 overflow-hidden font-sans">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-12 pb-12">
        
        {/* LEFT: Official Briefing Context */}
        <div className="flex flex-col space-y-0">
          <div>
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "3.5rem" }} 
              className="h-1.5 bg-lime-500 mb-6" 
            />
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 uppercase italic leading-[0.85] tracking-tighter">
              Request a <br />
              <span className="text-lime-500 not-italic">Briefing.</span>
            </h2>
            <p className="mt-8 text-slate-500 font-medium text-sm leading-relaxed max-w-md">
              Establish a direct channel with our State Procurement Division. 
              Priority compliance documentation for Rajasthan's administrative departments.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Protocol Compliance", val: "GeM / State Norms", icon: <ShieldCheck size={20} /> },
              { label: "Response Priority", val: "Level 1 Administrative", icon: <FileText size={20} /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="p-3 bg-slate-50 text-lime-600 rounded-2xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none">{item.label}</p>
                  <p className="text-sm text-slate-800 font-bold uppercase mt-1">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: THE THEMED GRADIENT FORM */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative p-[1px] rounded-[40px] overflow-hidden bg-gradient-to-br from-lime-500/20 to-transparent shadow-2xl"
        >
          <div className="bg-gradient-to-br from-[#111827] via-[#030712] to-[#030712] p-8 md:p-12 rounded-[39px]">
            <div className="mb-10 flex items-center justify-between border-b border-white/5 pb-6">
              <h3 className="text-white font-black uppercase italic text-xl tracking-tight">
                Briefing Credentials
              </h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-lime-500 uppercase tracking-widest ml-1">Department Name</label>
                  <div className="relative group">
                    <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lime-500 transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. Dept of Revenue"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-lime-500/50 focus:bg-white/10 transition-all font-medium text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-lime-500 uppercase tracking-widest ml-1">Official Designation</label>
                  <div className="relative group">
                    <UserCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lime-500 transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. Chief Secretary"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-lime-500/50 focus:bg-white/10 transition-all font-medium text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-lime-500 uppercase tracking-widest ml-1">Official Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lime-500 transition-colors" size={18} />
                  <input 
                    type="email" 
                    placeholder="name@rajasthan.gov.in"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-lime-500/50 focus:bg-white/10 transition-all font-medium text-sm"
                  />
                </div>
              </div>

              <button className="w-full group bg-lime-500 hover:bg-lime-400 text-black font-black uppercase italic tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(163,230,53,0.2)]">
                Submit Briefing Request
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default B2GContactForm;