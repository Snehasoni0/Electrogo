"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useTransform, useMotionValue, animate } from "framer-motion";
import { Bus, CheckCircle2, ChevronRight } from "lucide-react";

const roadmapData = [
  { id: 1, label: "Phase 01", title: "Smart Fleet", desc: "100+ Electric Buses with AI tracking.", x: "15%", y: "60%", threshold: 0.15 },
  { id: 2, label: "Phase 02", title: "Solar Hubs", desc: "100% Green energy charging.", x: "40%", y: "30%", threshold: 0.40 },
  { id: 3, label: "Phase 03", title: "Statewide", desc: "Connecting 33 districts of Rajasthan.", x: "65%", y: "65%", threshold: 0.70 },
  { id: 4, label: "Goal 2027", title: "Net Zero", desc: "Removing 10k tons of CO2 annually.", x: "90%", y: "35%", threshold: 0.90 },
];

const HorizontalRoadmap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });
  const journeyProgress = useMotionValue(0);
  
  const busX = useTransform(journeyProgress, [0, 1], ["0%", "100%"]);
  const busY = useTransform(journeyProgress, [0, 0.25, 0.5, 0.75, 1], ["60%", "30%", "65%", "35%", "50%"]);

  const busMobileY = useTransform(journeyProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (isInView) {
      animate(journeyProgress, 1, {
        duration: 7,
        ease: "easeInOut",
      });
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gray-950 py-24 flex flex-col justify-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773305341/photo-1544620347-c4fd4a3d5957_xpp2nh.jpg"
          alt="Transport"
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950"></div>
      </div>

      <div className="relative z-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-lime-500 font-mono text-xs tracking-[0.4em] uppercase mb-4 block">
            Strategic Rollout
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase">
            The Journey to <br />
            <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent italic font-serif normal-case">
              Launch.
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="hidden md:block relative w-full h-[50vh] z-10">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 0 60 C 20 60, 30 30, 40 30 C 50 30, 60 65, 70 65 C 80 65, 90 35, 100 35" fill="none" stroke="rgba(163,230,53,0.08)" strokeWidth="0.15" />
          <motion.path d="M 0 60 C 20 60, 30 30, 40 30 C 50 30, 60 65, 70 65 C 80 65, 90 35, 100 35" fill="none" stroke="#a3e635" strokeWidth="0.4" style={{ pathLength: journeyProgress }} />
        </svg>

        <motion.div style={{ left: busX, top: busY, x: "-50%", y: "-50%" }} className="absolute z-50">
          <div className="bg-lime-400 text-gray-950 p-4 rounded-2xl shadow-[0_0_40px_rgba(163,230,53,0.6)] border-2 border-white flex items-center gap-2">
            <Bus size={24} />
            <div className="h-5 w-px bg-gray-950/20"></div>
            <ChevronRight size={18} className="animate-pulse" />
          </div>
        </motion.div>

        {roadmapData.map((step) => (
          <HorizontalCard key={step.id} step={step} progress={journeyProgress} />
        ))}
      </div>

      <div className="md:hidden px-6 relative">
        <div className="absolute left-10 top-0 h-full w-[2px] bg-gray-800">
           <motion.div 
             style={{ scaleY: journeyProgress, originY: 0 }} 
             className="w-full h-full bg-lime-400 shadow-[0_0_10px_#a3e635]" 
           />
        </div>

        <motion.div
          style={{ top: busMobileY, y: "-50%" }}
          className="absolute left-[26px] z-50 pointer-events-none"
        >
          <div className="bg-lime-400 text-gray-950 p-2 rounded-lg shadow-lg border border-white">
            <Bus size={20} />
          </div>
        </motion.div>

        <div className="space-y-20">
          {roadmapData.map((step) => (
            <MobileCard key={step.id} step={step} progress={journeyProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HorizontalCard = ({ step, progress }) => {
  const opacity = useTransform(progress, [step.threshold - 0.03, step.threshold, 1], [0, 1, 1]);
  const yOffset = useTransform(progress, [step.threshold - 0.05, step.threshold], [15, 0]);

  return (
    <motion.div
      style={{ top: step.y, left: step.x, opacity, y: yOffset, x: "-50%" }}
      className="absolute w-56 md:w-64 z-20"
    >
      <div className="p-6 rounded-[2rem] bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <div className="text-lime-400 font-black text-xs">0{step.id}</div>
          <CheckCircle2 size={14} className="text-lime-500" />
        </div>
        <h4 className="text-lg font-bold text-white mb-1 tracking-tight italic">{step.title}</h4>
        <p className="text-[11px] text-gray-400 leading-tight">{step.desc}</p>
      </div>
      <div className={`absolute left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-lime-500/40 to-transparent -z-10 ${parseInt(step.y) > 50 ? "bottom-full" : "top-full rotate-180"}`} />
    </motion.div>
  );
};

const MobileCard = ({ step, progress }) => {
  const opacity = useTransform(progress, [step.threshold - 0.05, step.threshold], [0, 1]);
  const xOffset = useTransform(progress, [step.threshold - 0.05, step.threshold], [20, 0]);

  return (
    <motion.div 
      style={{ opacity, x: xOffset }}
      className="relative pl-20"
    >
      <div className="p-5 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-white/10 relative">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lime-400 font-bold text-xs">0{step.id}</span>
          <CheckCircle2 size={16} className="text-lime-500" />
        </div>
        <h4 className="text-lg font-bold text-white italic mb-1">{step.title}</h4>
        <p className="text-sm text-gray-400">{step.desc}</p>
      </div>
    </motion.div>
  );
};

export default HorizontalRoadmap;