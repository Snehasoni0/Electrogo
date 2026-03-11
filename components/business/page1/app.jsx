"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, Zap, Navigation } from "lucide-react";

const TacticalRadar = () => {
  const [time, setTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.02);
    }, 20);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const rotation = useMemo(() => {
    const amplitude = 60;
    const baseRotation = Math.sin(time) * amplitude;
    return isMobile ? baseRotation + 90 : baseRotation;
  }, [time, isMobile]);

  const features = [
    { id: "top", title: "One-Tap Booking", desc: "Instant Jodhpur dispatch protocol.", icon: Search },
    { id: "middle", title: "SOS Safety", desc: "Encrypted direct channel to HQ.", icon: ShieldCheck },
    { id: "bottom", title: "Real-Time Battery", desc: "Live energy telemetry audit.", icon: Zap },
  ];

  const activeIndex = useMemo(() => {
    const checkVal = isMobile ? rotation - 90 : rotation;
    if (checkVal < -20) return 0;
    if (checkVal >= -20 && checkVal <= 20) return 1;
    return 2;
  }, [rotation, isMobile]);

  return (
    <section className="relative min-h-screen bg-[#030712] flex items-center justify-center px-6 py-24 md:py-20 overflow-hidden">
      
      <div className="absolute top-6 md:top-10 left-6 md:left-12 z-20">
        <h3 className="text-white font-black italic text-3xl md:text-5xl tracking-tighter uppercase">
          App <span className="text-lime-400 not-italic">Experience</span>
        </h3>
      </div>

      <div className="max-w-7xl w-full flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-12 md:mt-0">

        <div className="relative flex justify-center scale-75 md:scale-100 py-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] border border-white/10 rounded-full" />
            <div className="absolute w-[400px] h-[400px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full opacity-40" />

            <motion.div
              style={{ rotate: rotation }}
              className="relative w-[300px] md:w-[350px] flex items-center justify-end"
            >
              <div className="w-24 md:w-32 h-[2px] bg-gradient-to-l from-lime-500 to-transparent shadow-[0_0_20px_#a3e635]" />
              <Navigation
                size={24}
                className="text-lime-500 rotate-90 ml-2 drop-shadow-[0_0_8px_#a3e635]"
              />
            </motion.div>

            <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-[#0d1117] border border-white/10 rounded-full flex items-center justify-center shadow-xl">
              <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto space-y-4 md:space-y-6">
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
                className="p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border backdrop-blur-xl transition-all duration-500 cursor-default"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className={`p-3 md:p-4 rounded-xl transition-colors duration-500 ${
                    active ? "bg-lime-500 text-black shadow-[0_0_15px_#a3e635]" : "bg-white/5 text-slate-500"
                  }`}>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-black text-lg md:text-xl uppercase italic">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 font-mono text-[9px] mt-1 uppercase tracking-widest opacity-70 leading-tight">
                      {feature.desc}
                    </p>

                    <div className="h-[2px] w-full bg-white/5 mt-3 md:mt-4 overflow-hidden">
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