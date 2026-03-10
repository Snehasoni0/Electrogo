"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Building2, Car, MapPin, Send, ChevronDown, Loader2, Mail } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleCaptcha from '../GoogleCaptcha';

const LeadFormSection = () => {
  const [interest, setInterest] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const captchaRef = useRef(null); // Ref for captcha

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {
      sheetName: "leads",
      interest: interest,
      name: formData.get('name').trim(),
      phone: formData.get('phone').trim(),
      email: formData.get('email').trim(), // New Email Field
      sqft: formData.get('sqft') || "N/A",
      city: formData.get('city') || "N/A",
      company: formData.get('company') || "N/A",
      km: formData.get('km') || "N/A",
    };

    // --- VALIDATIONS ---
    if (!payload.interest) return toast.error("Please select an interest path.");
    if (payload.name.length < 3) return toast.error("Please enter a valid name.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) return toast.error("Invalid email address.");

    const phoneDigits = payload.phone.replace(/\D/g, ''); // Removes everything except 0-9

    if (phoneDigits.length !== 10) {
      return toast.error("Please enter a valid 10-digit phone number.");
    }

    // Update payload to use only digits for the spreadsheet
    payload.phone = phoneDigits;

    // --- CAPTCHA VALIDATION ---
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

      toast.success("Partnership Protocol Initiated. Our executive team will reach out.", {
        position: "top-right",
        theme: "dark",
        style: { border: '1px solid #a3e635', color: '#fff', background: '#020617', fontFamily: 'monospace' }
      });

      e.target.reset();
      setInterest('');
      captchaRef.current?.reset(); // Reset captcha

    } catch (error) {
      toast.error("TRANSMISSION FAILED. CHECK CONNECTION.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-950 py-16 md:py-24 px-6 md:px-24 overflow-hidden selection:bg-lime-400">
      <ToastContainer />

      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
          <Zap size={16} className="text-lime-400 fill-lime-400" />
          <span className="text-lime-400 font-mono text-xs font-black uppercase tracking-[0.3em]">Direct Integration</span>
        </motion.div>
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
          Secure Your <br />
          <span className="text-transparent outline-text opacity-20">Partnership.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          className="w-full bg-gray-900 p-6 md:p-8 rounded-[1.5rem] shadow-2xl relative border border-gray-800"
        >
          {/* Changed space-y-8 to space-y-4 to reduce gaps */}
          <form onSubmit={handleSubmit} className="relative z-10 space-y-4">

            <div className="space-y-2">
              <label className="text-lime-400 font-mono text-[9px] font-black uppercase tracking-widest">
                01. I am interested in...
              </label>
              <div className="relative">
                <select
                  name="interest"
                  required
                  defaultValue=""
                  onFocus={() => setIsDropdownOpen(true)}
                  onBlur={() => setIsDropdownOpen(false)}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400 transition-all appearance-none cursor-pointer relative z-10"
                >
                  <option value="" disabled>Select Path</option>
                  <option value="charger" className="bg-gray-950">Hosting a Charger</option>
                  <option value="corporate" className="bg-gray-950">Corporate Fleet</option>
                  <option value="driving" className="bg-gray-950">Driving with Us</option>
                </select>
                <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <ChevronDown size={18} className={isDropdownOpen ? "text-lime-400" : "text-gray-500"} />
                </motion.div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {interest === 'charger' && (
                <motion.div key="charger" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 overflow-hidden pt-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input name="sqft" required placeholder="Location Size (Sq Ft)" className="bg-gray-950 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:border-lime-400 outline-none placeholder:text-gray-600 w-full" />
                    <input name="city" required placeholder="City (e.g. Jaipur)" className="bg-gray-950 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:border-lime-400 outline-none placeholder:text-gray-600 w-full" />
                  </div>
                </motion.div>
              )}

              {interest === 'corporate' && (
                <motion.div key="corporate" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 overflow-hidden pt-2"
                >
                  <input name="company" required placeholder="Department/Company Name" className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:border-lime-400 outline-none placeholder:text-gray-600" />
                  <input name="km" required placeholder="Monthly KM Requirement" className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:border-lime-400 outline-none placeholder:text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-3">
              <input name="name" required placeholder="Full Name" className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:border-lime-400 outline-none placeholder:text-gray-600" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="email" required type="email" placeholder="Official Email" className="bg-gray-950 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:border-lime-400 outline-none placeholder:text-gray-600 w-full" />
                <input
                  name="phone"
                  required
                  type="text"
                  maxLength="10"
                  placeholder="Phone Number"
                  onInput={(e) => {
                    const originalValue = e.target.value;
                    // Remove anything that isn't 0-9
                    const cleanValue = originalValue.replace(/[^0-9]/g, '');

                    // If the value changed, it means the user tried to enter a character
                    if (originalValue !== cleanValue) {
                      e.target.value = cleanValue; // Force the clean value back into the box

                      toast.warn("Numeric digits only", {
                        toastId: "numeric-only",
                        autoClose: 1000,
                        position: "top-right"
                      });
                    }
                  }}
                  className="bg-gray-950 border border-gray-800 text-white rounded-xl px-4 py-3 text-sm focus:border-lime-400 outline-none placeholder:text-gray-600 w-full"
                />
              </div>
            </div>

            {/* Captcha with tight spacing */}
            <div className="scale-[0.70] origin-left transform-gpu -my-6 ml-8 md:ml-0">
              <GoogleCaptcha ref={captchaRef} />
            </div>

            <motion.button
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full bg-lime-400 hover:bg-lime-300 text-gray-950 font-black uppercase tracking-[0.2em] text-[10px] italic py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl disabled:opacity-50 cursor-pointer"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : <>Secure My Partnership <Send size={12} /></>}
            </motion.button>
          </form>
        </motion.div>

        {/* Strategic Text (Column 2) remains same as your original snippet */}
        <div className="flex flex-col justify-center space-y-10 lg:h-full text-white">
          {/* Content here... */}
          <div className="space-y-6 border-l-2 border-lime-400 pl-8">
            <h3 className="text-3xl md:text-4xl font-black uppercase italic leading-none">Rajasthan EV Expansion <br /><span className="text-lime-400">Phase II Core.</span></h3>
            <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">We are scaling the Jaipur-Ajmer-Jodhpur highway network. Secure your integration ahead of the April 2026 rollout.</p>
          </div>
          {/* Icons section... */}
        </div>
      </div>
      <style jsx>{` .outline-text { -webkit-text-stroke: 1.5px #fff; } `}</style>
    </section>
  );
};

export default LeadFormSection;