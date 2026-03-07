"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Target, Leaf, Search, MapPin, Radio, ChevronRight } from 'lucide-react';

const VerticalDeploymentFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      title: "Initialize App",
      sub: "Download Node",
      desc: "Retrieve the Green Mile protocol for Jodhpur fleet access.",
      ui: (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="w-20 h-20 bg-lime-500 rounded-3xl flex items-center justify-center shadow-lg mb-6"
          >
            <Smartphone size={32} className="text-black" />
          </motion.div>
          <h2 className="text-2xl font-black text-slate-900 leading-none mb-2 uppercase italic">01. Initialize</h2>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Awaiting Link...</p>
        </div>
      )
    },
    {
      id: "02",
      title: "Confirm Route",
      sub: "Dispatch Hub",
      desc: "One-tap dispatch for Rajasthan sectors—Jodhpur, Jaipur, Udaipur.",
      ui: (
        <div className="flex flex-col h-full bg-slate-50">
          <div className="p-4 bg-white border-b border-slate-100">
             <div className="h-8 w-full bg-slate-100 rounded-lg flex items-center px-3 gap-2">
                <Search size={12} className="text-slate-400" />
                <div className="h-1.5 w-24 bg-slate-200 rounded" />
             </div>
          </div>
          <div className="flex-1 relative flex items-center justify-center">
             <MapPin className="text-lime-500 animate-bounce relative z-10" size={40} />
             <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          </div>
          <div className="p-4 bg-white">
             <div className="w-full py-3 bg-slate-900 rounded-xl text-center">
                <span className="text-[10px] font-black text-lime-500 uppercase tracking-widest italic">02. Book Mile</span>
             </div>
          </div>
        </div>
      )
    },
    {
      id: "03",
      title: "Impact Audit",
      sub: "Carbon Telemetry",
      desc: "Real-time CO2 savings audit and performance telemetry after every ride.",
      ui: (
        <div className="flex flex-col items-center justify-center h-full p-8 bg-slate-900 text-center">
          <Leaf size={50} className="text-lime-500 mb-4" />
          <div className="space-y-1">
             <div className="text-4xl font-black text-white italic tracking-tighter">14.2<span className="text-lime-500 font-normal ml-1">kg</span></div>
             <p className="text-[10px] font-mono text-lime-500/50 uppercase tracking-[0.3em]">CO2 Saved</p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 w-full">
             <p className="text-[10px] font-black text-white uppercase italic">03. Audit Complete</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-10 px-6 overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE LAYER WITH GRAY OVERLAY */}
      <div 
        // Changed bg-opacity-20 to bg-gray-700 (our overlay color) and added bg-blend-multiply
        className="absolute inset-0 z-0 bg-gray-700 bg-blend-multiply pointer-events-none transition-colors duration-1000"
        style={{ 
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1758766936330-6fde8043b478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGV2JTIwcmlkZXxlbnwwfHwwfHx8MA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Optionally, add a slight grayscale filter if you want a deeper gray
          filter: 'grayscale(60%)' 
        }}
      />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-4 md:gap-12 relative z-10">
        
        {/* LEFT: VERTICAL TITLE */}
        <div className="hidden md:flex flex-col items-center gap-4 py-4">
           <h2 className="text-8xl font-black text-white uppercase italic tracking-tighter leading-none rotate-270 opacity-60">
             How it <br /> <span className="text-lime-500/50">Works.</span>
           </h2>
        </div>

        {/* CENTER: DYNAMIC CONTENT AREA */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="space-y-1">
             <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight">
                Process <br /> <span className="text-lime-400 not-italic">Manual.</span>
             </h3>
          </div>

          <div className="relative h-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 text-lime-400 font-mono font-black text-[10px] uppercase">
                   <span className="bg-lime-500 text-black px-2 py-0.5 rounded-sm">{steps[activeStep].id}</span>
                   <ChevronRight size={12} />
                   <span>{steps[activeStep].sub}</span>
                </div>
                {/* Legibility tweak: Backdrop blur added */}
                <p className="text-slate-200 text-sm max-w-xs leading-tight font-medium bg-black/10 backdrop-blur-sm p-2 rounded-xl">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: COMPACT PHONE MOCKUP */}
        <div className="w-full md:w-[350px] flex justify-center items-center">
          <motion.div 
            className="relative w-64 h-[520px] bg-white rounded-[2.5rem] border-[8px] border-slate-950 shadow-[0_0_60px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col"
          >
            <div className="h-6 w-full flex justify-center items-center">
               <div className="w-12 h-3 bg-slate-950 rounded-full" />
            </div>

            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  {steps[activeStep].ui}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="h-12 w-full flex items-center justify-center px-8 gap-2 bg-white">
               {steps.map((_, i) => (
                  <motion.div 
                    key={i} 
                    animate={{ 
                      width: activeStep === i ? '40%' : '15%',
                      backgroundColor: activeStep === i ? '#a3e635' : '#f1f5f9'
                    }}
                    className="h-1 rounded-full transition-all duration-300" 
                  />
               ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-10">
         <span className="text-slate-500 font-mono text-[8px] uppercase tracking-[0.4em] font-black italic">
           Jodhpur Sector HQ
         </span>
      </div>
    </section>
  );
};

export default VerticalDeploymentFlow;