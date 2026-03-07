"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Building2, ArrowRight } from "lucide-react";

const PartnershipPortals = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#05070a]">
      {/* Central Divider Glow - Only visible on Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-lime-400 to-transparent z-30 opacity-50 shadow-[0_0_20px_#a3e635]"></div>

      <div className="flex flex-col md:flex-row min-h-[600px] lg:h-[80vh]">
        
        {/* LEFT PORTAL: HOSTING */}
        <motion.div 
          whileHover="hover"
          className="relative flex-[1] group flex flex-col justify-center items-center px-8 py-20 lg:px-20 overflow-hidden bg-gray-950 transition-all duration-700 ease-in-out hover:flex-[1.2]"
        >
          {/* Animated Tech Pattern Background */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 via-transparent to-transparent"></div>
          </div>

          <span className="absolute -top-10 -left-10 text-[200px] font-black text-white/[0.03] select-none italic group-hover:text-lime-500/5 transition-colors duration-700">
            01
          </span>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-8 p-5 rounded-3xl bg-lime-500/10 border border-lime-500/20 group-hover:scale-110 group-hover:bg-lime-500/20 transition-all duration-500">
              <Zap className="text-lime-400" size={40} />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">
              Host <br /> 
              <span className="text-lime-400 not-italic">Infrastructure.</span>
            </h2>

            <p className="text-gray-400 max-w-sm mb-10 text-sm md:text-base leading-relaxed font-medium">
              Transform idle real estate into high-yield EV charging hubs. 
              We provide the tech; you provide the space.
            </p>

            <button className="flex items-center gap-3 bg-white text-black font-black uppercase italic px-10 py-4 rounded-full hover:bg-lime-400 transition-colors group/btn">
              Become a Partner
              <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT PORTAL: CORPORATE */}
        <motion.div 
          whileHover="hover"
          className="relative flex-[1] group flex flex-col justify-center items-center px-8 py-20 lg:px-20 overflow-hidden bg-white transition-all duration-700 ease-in-out hover:flex-[1.2]"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
               style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`, backgroundSize: '30px 30px' }} 
          />

          <span className="absolute -bottom-10 -right-10 text-[200px] font-black text-black/[0.03] select-none italic group-hover:text-cyan-500/5 transition-colors duration-700">
            02
          </span>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-8 p-5 rounded-3xl bg-cyan-100 border border-cyan-200 group-hover:scale-110 group-hover:bg-cyan-200 transition-all duration-500">
              <Building2 className="text-cyan-600" size={40} />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">
              Corporate <br /> 
              <span className="text-cyan-600 not-italic">Mobility.</span>
            </h2>

            <p className="text-slate-500 max-w-sm mb-10 text-sm md:text-base leading-relaxed font-medium">
              Premium EV fleet contracts for enterprises and government bodies. 
              Efficiency meets sustainability at scale.
            </p>

            <button className="flex items-center gap-3 bg-slate-900 text-white font-black uppercase italic px-10 py-4 rounded-full hover:bg-cyan-600 transition-colors group/btn">
              Request a Briefing
              <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PartnershipPortals;