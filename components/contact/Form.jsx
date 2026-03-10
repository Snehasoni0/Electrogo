"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase, ChevronDown, Loader2 } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleCaptcha from '../GoogleCaptcha';

const InquirySection = () => {
  const [loading, setLoading] = useState(false);
  const captchaRef = useRef(null); // Reference for the Captcha

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. GATHER DATA
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name').trim(),
      email: formData.get('email').trim(),
      type: formData.get('type'),
      message: formData.get('message').trim(),
      sheetName: "contact"
    };

    // 2. CLIENT-SIDE VALIDATIONS
    if (payload.name.length < 3) {
      return toast.error("Please enter a valid name.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return toast.error("Please use a valid official email.");
    }

    if (payload.message.length < 10) {
      return toast.error("Message is too short for a formal inquiry.");
    }

    // 3. CAPTCHA VALIDATION
    // We get the value from the reusable component via the ref
    const captchaToken = captchaRef.current?.getValue();
    if (!captchaToken) {
      return toast.error("Security Check Required: Please click the checkbox.");
    }

    setLoading(true);

    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVnLQ-YWWy75O7fEOfZJ6FDk4RnHcGfCXTt3wLwxnk1ECZNLxTaJceWDYgV06VGV1qZQ/exec";

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      toast.success("Transmission Received! Jodhpur Command Node updated.", {
        position: "top-right",
        theme: "dark",
        style: { border: '1px solid #84cc16', color: '#fff', background: '#020617' }
      });

      // 4. RESET EVERYTHING
      e.target.reset();
      captchaRef.current?.reset(); // Clear the captcha for the next submission

    } catch (error) {
      toast.error("Signal Lost. Please check connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-6 bg-gray-950 overflow-hidden selection:bg-lime-400">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <div className="lg:col-span-6 space-y-10">

            {/* ... Titles and existing UI ... */}

            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              {/* Name Input */}
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Full Name</label>
                <div className="flex items-center gap-4 border border-gray-800 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-gray-900/50">
                  <User size={18} className="text-slate-500 group-focus-within:text-lime-500" />
                  <input name="name" required type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-transparent text-sm font-medium outline-none text-white focus:ring-0" />
                </div>
              </div>

              {/* Email Input */}
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Email Address</label>
                <div className="flex items-center gap-4 border border-gray-800 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-gray-900/50">
                  <Mail size={18} className="text-slate-500 group-focus-within:text-lime-500" />
                  <input name="email" required type="email" placeholder="official@company.com" className="w-full bg-transparent text-sm font-medium outline-none text-white focus:ring-0" />
                </div>
              </div>

              {/* Inquiry Selection */}
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Inquiry Type</label>
                <div className="relative flex items-center gap-4 border border-gray-800 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-gray-900/50">
                  <Briefcase size={18} className="text-lime-400 group-focus-within:text-lime-500" />

                  {/* Fixed: Moved 'selected' logic to 'defaultValue' on the select tag */}
                  <select
                    name="type"
                    required
                    defaultValue=""
                    className="w-full bg-transparent text-sm font-medium outline-none text-white appearance-none cursor-pointer z-10"
                  >
                    <option value="" disabled className="bg-gray-950 text-slate-500">Select Inquiry Type</option>
                    <option value="Fleet Partnership" className="bg-gray-950">Fleet Partnership Inquiry</option>
                    <option value="Infrastructure" className="bg-gray-950">Infrastructure Development</option>
                    <option value="Corporate" className="bg-gray-950">Corporate Fleet Solutions</option>
                  </select>

                  <ChevronDown size={16} className="absolute right-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div className="group relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block">Message / Payload</label>
                <div className="flex items-start gap-4 border border-gray-800 rounded-2xl p-4 focus-within:border-lime-500 transition-all bg-gray-900/50">
                  <MessageSquare size={18} className="text-slate-500 group-focus-within:text-lime-500 mt-1" />
                  <textarea name="message" required rows="4" placeholder="Briefly describe your requirements..." className="w-full bg-transparent text-sm font-medium outline-none text-white resize-none focus:ring-0" />
                </div>
              </div>

              {/* USE YOUR REUSABLE COMPONENT HERE */}
              <GoogleCaptcha ref={captchaRef} />

              <motion.button
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-lime-400 text-gray-950 rounded-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:bg-lime-300 transition-all shadow-xl disabled:opacity-50 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <>Transmit Inquiry <Send size={18} /></>}
              </motion.button>
            </form>
          </div>

          {/* ... Rest of your image column ... */}
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