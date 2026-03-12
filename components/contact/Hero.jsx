"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306966/premium_photo-1679672989156-9bdea1329761_nfa0r6.jpg" 
          alt="EV Infrastructure"
          className="w-full h-full object-cover grayscale brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/80 via-[#05070a]/40 to-[#05070a]" />
      </motion.div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <h1 className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none">
            CONTACT <span className="text-lime-500 stroke-text">US.</span>
          </h1>

          <p className="max-w-xl mx-auto text-slate-300 text-lg md:text-xl font-medium leading-relaxed italic">
            Initialize communication with Rajasthan's premier EV-first mobility ecosystem. 
            Our Command Center in Jodhpur is ready to process your fleet and infrastructure inquiries.
          </p>

          <div className="flex flex-col items-center mt-12 gap-4">
            <div className="h-16 w-[1px] bg-gradient-to-b from-lime-500 to-transparent" />
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.3em]">Scroll to Transmit</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};

export default ContactHero;