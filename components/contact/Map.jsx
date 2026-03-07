"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const MapContainerView = dynamic(
  () => import('./LeafletMap'), 
  { 
    ssr: false,
    loading: () => (
      <div className="h-[70vh] w-full bg-[#0d1117] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-lime-500/20 border-t-lime-500 rounded-full animate-spin" />
      </div>
    )
  }
);

const MapSection = () => {
  return (
    <section className="bg-white">
      
      {/* 1. TOP HEADER SECTION (CLEAR OF MAP) */}
      <div className="py-12 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[1px] w-12 bg-lime-500" />
            <span className="text-lime-600 font-mono text-[10px] tracking-[0.4em] uppercase font-black">
              Our Location
            </span>
            <div className="h-[1px] w-12 bg-lime-500" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-[#0d1117] uppercase italic tracking-tighter">
            Jodhpur <span className="text-lime-300 text-4xl md:text-6xl italic">Command Hub.</span>
          </h2>
          
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Strategically located at the heart of Rajasthan, our HQ manages real-time 
            EV infrastructure and front-end architectural deployments.
          </p>
        </div>
      </div>

      {/* 2. THE CLEAR MAP (NO OVERLAYS) */}
      <div className="w-full h-[60vh] md:h-[70vh] border-y border-slate-100 relative shadow-inner overflow-hidden">
        <MapContainerView />
      </div>

    </section>
  );
};

export default MapSection;