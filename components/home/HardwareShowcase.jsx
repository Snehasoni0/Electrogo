"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const hotspots = [
  {
    id: 1,
    position: { top: "25%", left: "20%" },
    title: "Smart Telematics",
    description: "AI-driven fleet management with 5G low-latency data streaming.",
    stats: { CPU: "98%", LATENCY: "12ms", UPTIME: "99.9%" }
  },
  {
    id: 2,
    position: { top: "45%", left: "55%" },
    title: "Executive Comfort",
    description: "Active noise cancellation and ergonomic climate-controlled seating.",
    stats: { NOISE: "-40dB", TEMP: "22°C", MASSAGE: "Active" }
  },
  {
    id: 3,
    position: { top: "75%", left: "40%" },
    title: "SOS Integration",
    description: "Instant response system connected to Rajasthan’s State Command Center.",
    stats: { RESPONSE: "Instant", SIGNAL: "Satellite", ENCRYPTION: "AES-256" }
  },
];

const HardwareShowcase = () => {
  const [active, setActive] = useState(hotspots[0]);

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setRotate({ x: y * 10, y: -x * 10 });
  };

  return (
    <section 
      className="bg-gray-950 py-32 px-6 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#a3e635 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-4 z-20">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {active.title.split(' ')[0]} <br />
                <span className="text-lime-400 italic">{active.title.split(' ')[1]}</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {active.description}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                {Object.entries(active.stats).map(([key, val]) => (
                  <div key={key} className="border-l border-lime-500/30 pl-4">
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{key}</p>
                    <p className="text-white font-mono font-bold">{val}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-8 relative">
          <motion.div
            style={{ 
                rotateX: rotate.x, 
                rotateY: rotate.y, 
                perspective: 1000,
                transition: "transform 0.1s ease-out" 
            }}
            className="relative z-10"
          >
            <Image
              src="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773305340/car_nbcfxg.png" 
              alt="Electrogo Sedan"
              width={1000}
              height={500}
              className="drop-shadow-[0_0_50px_rgba(163,230,53,0.2)]"
            />

            {hotspots.map((spot) => (
              <button
                key={spot.id}
                onMouseEnter={() => setActive(spot)}
                className="absolute group z-30"
                style={{ top: spot.position.top, left: spot.position.left }}
              >
                <div className={`relative flex items-center justify-center transition-all duration-300 ${active.id === spot.id ? 'scale-125' : 'scale-100'}`}>
                  <span className={`absolute inline-flex h-8 w-8 rounded-full bg-lime-400 transition-opacity ${active.id === spot.id ? 'opacity-40 animate-ping' : 'opacity-0'}`}></span>
                  <div className={`h-4 w-4 rounded-full border-2 border-white shadow-lg transition-colors ${active.id === spot.id ? 'bg-lime-400' : 'bg-gray-700'}`}></div>
                </div>
                
                {active.id === spot.id && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-1/2 left-full w-20 h-[2px] bg-gradient-to-r from-lime-400 to-transparent origin-left hidden lg:block"
                    />
                )}
              </button>
            ))}
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-lime-500/10 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-lime-500/5 rounded-full pointer-events-none"></div>
        </div>

      </div>

      <motion.div 
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent z-0"
      />
    </section>
  );
};

export default HardwareShowcase;