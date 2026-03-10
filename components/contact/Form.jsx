"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase, ChevronDown, Loader2 } from 'lucide-react';
// 1. Import Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InquirySection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      type: formData.get('type'),
      message: formData.get('message'),
      sheetName: "contact"
    };

    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyA_3ZZk2tzFd6upSy-MLytpWLvXDkhjWWdGqmXBiVoYamM4BiS3t56RhPcPa_KHa-HhA/exec";

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // 2. Success Notification
      toast.success("Transmission Received! Our team will contact you shortly..", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { border: '1px solid #84cc16', color: '#fff', background: '#020617' }
      });

      // 3. Empty the form fields
      e.target.reset();

    } catch (error) {
      toast.error("Signal Lost. Please check connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-950 overflow-hidden selection:bg-lime-400">
      {/* 4. Add the Toast Container to your JSX */}
      <ToastContainer />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
                <div className="h-[2px] w-12 bg-lime-500" />
                <span className="text-lime-600 font-mono text-[10px] tracking-[0.4em] uppercase font-black">Transmission Protocol</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                Get In <span className="text-slate-400">Touch!</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Full Name</label>
                <div className="flex items-center gap-4 border border-gray-800 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-gray-900/50">
                  <User size={18} className="text-slate-500 group-focus-within:text-lime-500" />
                  <input name="name" required type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-transparent text-sm font-medium outline-none text-white focus:ring-0" />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Email Address</label>
                <div className="flex items-center gap-4 border border-gray-800 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-gray-900/50">
                  <Mail size={18} className="text-slate-500 group-focus-within:text-lime-500" />
                  <input name="email" required type="email" placeholder="official@company.com" className="w-full bg-transparent text-sm font-medium outline-none text-white focus:ring-0" />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Inquiry Type</label>
                <div className="relative flex items-center gap-4 border border-gray-800 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-gray-900/50">
                  <Briefcase size={18} className="text-lime-400 group-focus-within:text-lime-500" />
                  <select name="type" className="w-full bg-transparent text-sm font-medium outline-none text-white appearance-none cursor-pointer z-10">
                    <option className="bg-gray-950">Fleet Partnership Inquiry</option>
                    <option className="bg-gray-950">Infrastructure Development</option>
                    <option className="bg-gray-950">Corporate Fleet Solutions</option>
                    <option className="bg-gray-950">General Support</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Message / Payload</label>
                <div className="flex items-start gap-4 border border-gray-800 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-gray-900/50">
                  <MessageSquare size={18} className="text-slate-500 group-focus-within:text-lime-500 mt-1" />
                  <textarea name="message" required rows="4" placeholder="Briefly describe your requirements..." className="w-full bg-transparent text-sm font-medium outline-none text-white resize-none focus:ring-0" />
                </div>
              </div>

              <motion.button
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-lime-400 text-gray-950 rounded-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:bg-lime-300 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {/* If loading is true, show only the spinner. If false, show text and Send icon. */}
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Transmit Inquiry <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </div>

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