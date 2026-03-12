'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Sun, Car } from 'lucide-react';

const StatCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const SustainabilitySection = () => {
  return (
    <section className="relative bg-gray-950 py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-lime-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lime-400 font-bold tracking-[0.3em] uppercase text-sm"
          >
            The Sustainability Pledge
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mt-4"
          >
            More Than Just <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500 italic">
              Numbers.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mb-8 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Leaf className="text-gray-950" size={32} />
            </div>
            <h3 className="text-gray-400 text-lg font-medium mb-2">CO2 Removed by 2027</h3>
            <div className="text-6xl font-black text-white tracking-tighter">
              <StatCounter value="10000" suffix="+" />
            </div>
            <p className="text-lime-400 mt-4 font-bold tracking-widest uppercase text-xs">Tons of Impact</p>
            
            <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-lime-400"
                />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 lg:-translate-y-12"
          >
            <div className="w-16 h-16 bg-emerald-400 rounded-2xl flex items-center justify-center mb-8 -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <Car className="text-gray-950" size={32} />
            </div>
            <h3 className="text-gray-400 text-lg font-medium mb-2">EV Cabs on Road</h3>
            <div className="text-6xl font-black text-white tracking-tighter">
              <StatCounter value="1000" suffix="+" />
            </div>
            <p className="text-emerald-400 mt-4 font-bold tracking-widest uppercase text-xs">By April 2026</p>
            
            <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="h-full bg-emerald-400"
                />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Sun className="text-gray-950" size={32} />
            </div>
            <h3 className="text-gray-400 text-lg font-medium mb-2">Phase 2 Charging</h3>
            <div className="text-6xl font-black text-white tracking-tighter">
              <StatCounter value="100" suffix="%" />
            </div>
            <p className="text-white mt-4 font-bold tracking-widest uppercase text-xs">Solar Powered Hubs</p>
            
            <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="h-full bg-white"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;