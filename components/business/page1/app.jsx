"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, Zap, Navigation, Radio } from "lucide-react";

const TacticalRadar = () => {
  const [time, setTime] = useState(0);

  // 1. Create a Sine-based oscillation for the rotation
  // This will move between -45 degrees and 45 degrees (or whatever arc you prefer)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.02); // Controls speed
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Map the sine wave to a specific arc (e.g., -60 to 60 degrees)
  const rotation = useMemo(() => {
    const amplitude = 60; 
    return Math.sin(time) * amplitude;
  }, [time]);

  const features = [
    {
      id: "top",
      title: "One-Tap Booking",
      desc: "Instant Jodhpur dispatch protocol.",
      icon: Search,
    },
    {
      id: "middle",
      title: "SOS Safety",
      desc: "Encrypted direct channel to HQ.",
      icon: ShieldCheck,
    },
    {
      id: "bottom",
      title: "Real-Time Battery",
      desc: "Live energy telemetry audit.",
      icon: Zap,
    },
  ];

  // 2. Updated Logic: Highlighting based on the sweep position
  const activeIndex = useMemo(() => {
    if (rotation < -20) return 0; // Top item
    if (rotation >= -20 && rotation <= 20) return 1; // Middle item
    return 2; // Bottom item
  }, [rotation]);

  return (
    <section className="relative min-h-screen bg-[#030712] flex items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* HEADER */}
      <div className="absolute top-10 left-6 md:left-12">
        <h3 className="text-white font-black italic text-4xl md:text-5xl tracking-tighter uppercase">
          App <span className="text-lime-400 not-italic">Experience</span>
        </h3>
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT RADAR: Now Oscillates */}
        <div className="relative flex justify-center">
          <div className="relative flex items-center justify-center">
            {/* Radar Background Rings */}
            <div className="absolute w-[320px] h-[320px] border border-white/10 rounded-full" />
            <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full opacity-40" />

            {/* The Oscillating Beam */}
            <motion.div
              style={{ rotate: rotation }}
              className="relative w-[350px] flex items-center justify-end"
            >
              <div className="w-32 h-[2px] bg-gradient-to-l from-lime-500 to-transparent shadow-[0_0_20px_#a3e635]" />
              <Navigation
                size={24}
                className="text-lime-500 rotate-90 ml-2 drop-shadow-[0_0_8px_#a3e635]"
              />
            </motion.div>

            {/* Center Hub */}
            <div className="absolute w-24 h-24 bg-[#0d1117] border border-white/10 rounded-full flex items-center justify-center shadow-xl">
              <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const active = index === activeIndex;

            return (
              <motion.div
                key={feature.id}
                animate={{
                  scale: active ? 1.02 : 1,
                  borderColor: active ? "rgba(163,230,53,0.6)" : "rgba(255,255,255,0.05)",
                  backgroundColor: active ? "rgba(13,17,23,1)" : "rgba(13,17,23,0.5)",
                }}
                className="p-6 md:p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-500 cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-xl transition-colors duration-500 ${
                      active ? "bg-lime-500 text-black shadow-[0_0_15px_#a3e635]" : "bg-white/5 text-slate-500"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-black text-xl uppercase italic">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 font-mono text-[10px] mt-1 uppercase tracking-widest opacity-70">
                      {feature.desc}
                    </p>

                    {/* Active Progress Bar Indicator */}
                    <div className="h-[2px] w-full bg-white/5 mt-4 overflow-hidden">
                      <motion.div
                        animate={{ width: active ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                        className="h-full bg-lime-500 shadow-[0_0_10px_#a3e635]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TacticalRadar;