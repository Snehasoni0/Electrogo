"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase, ChevronDown } from 'lucide-react';

const InquirySection = () => {
  return (
    <section className="py-24 px-6 bg-gray-950 overflow-hidden selection:bg-lime-400">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* LEFT COLUMN: THE INQUIRY FORM (6 Columns) */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-12 bg-lime-500" />
                <span className="text-lime-600 font-mono text-[10px] tracking-[0.4em] uppercase font-black">
                  Transmission Protocol
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                Get In <span className="text-slate-200">Touch!</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-md">
                Have a specific requirement? Initialize a formal inquiry and our Jodhpur command team will respond within 24 operational hours.
              </p>
            </div>

            <form className="space-y-6 max-w-lg">
              {/* Name Field */}
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Full Name</label>
                <div className="flex items-center gap-4 border border-slate-200 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-slate-50/50">
                  <User size={18} className="text-slate-400 group-focus-within:text-lime-500" />
                  <input type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-300 focus:ring-0" />
                </div>
              </div>

              {/* Email Field */}
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Email Address</label>
                <div className="flex items-center gap-4 border border-slate-200 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-slate-50/50">
                  <Mail size={18} className="text-slate-400 group-focus-within:text-lime-500" />
                  <input type="email" placeholder="official@company.com" className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-300 focus:ring-0" />
                </div>
              </div>

              {/* Subject / Inquiry Type */}
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Inquiry Type</label>
                <div className="relative flex items-center gap-4 border border-slate-200 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-slate-50/50">
                  <Briefcase size={18} className="text-slate-400 group-focus-within:text-lime-500" />
                  <select className="w-full bg-transparent text-sm font-medium outline-none text-slate-900 appearance-none cursor-pointer z-10">
                    <option>Fleet Partnership Inquiry</option>
                    <option>Infrastructure Development</option>
                    <option>Corporate Fleet Solutions</option>
                    <option>General Support</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Message Field */}
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Message / Payload</label>
                <div className="flex items-start gap-4 border border-slate-200 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-slate-50/50">
                  <MessageSquare size={18} className="text-slate-400 group-focus-within:text-lime-500 mt-1" />
                  <textarea rows="4" placeholder="Briefly describe your requirements..." className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-300 focus:ring-0 resize-none" />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#0d1117] text-white rounded-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:bg-lime-500 hover:text-black transition-all shadow-xl shadow-slate-200 cursor-pointer"
              >
                Transmit Inquiry <Send size={18} />
              </motion.button>
            </form>
          </div>

          {/* RIGHT COLUMN: ARCH-IMAGE (6 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative group"
          >
            {/* Custom Arch Shape Mask based on Reference */}
            <div className="relative h-[720px] w-full bg-slate-100 overflow-hidden rounded-t-[18rem] rounded-[18rem]shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=cro" 
                alt="Modern Architecture"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-12 md:p-16">
                <div className="space-y-4">
                  <h4 className="text-3xl font-black text-white uppercase italic leading-tight">
                    Optimizing <br /><span className="text-lime-400">EV Ecosystems.</span>
                  </h4>
                  <p className="text-slate-300 text-sm max-w-sm">
                    Our practice is designing complete high-performance environments for smart cities.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-mono text-[8px] uppercase tracking-widest">
                      100% Guaranteed Quality
                    </div>
                    <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white font-mono text-[8px] uppercase tracking-widest">
                      Jodhpur Command Node
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-lime-500 rounded-full blur-[80px] opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InquirySection;