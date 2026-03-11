"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')`, backgroundSize: '150px' }}>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        <div className="relative group">
          
          <div className="absolute inset-0 border-2 border-lime-500/20 rounded-[40px] transform rotate-6 scale-105 -z-10 bg-stone-50 transition-transform group-hover:rotate-2 duration-700"></div>
          <div className="absolute inset-0 bg-gray-950/5 rounded-[40px] transform -rotate-3 scale-100 -z-10 transition-transform group-hover:-rotate-1 duration-700"></div>

          <div className="relative overflow-hidden rounded-[40px] shadow-2xl border-8 border-white">
            <Image
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
              alt="Electrogo Fleet Rajasthan"
              width={600}
              height={700}
              className="object-cover w-full h-[550px] grayscale group-hover:grayscale-0 transition-all duration-1000"
            />

            <div className="absolute bottom-8 right-8 bg-gray-950/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white max-w-[180px] shadow-2xl">
                <p className="text-lime-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-2">Live Status</p>
                <p className="text-sm font-bold leading-tight uppercase">Jodhpur Hub Operational</p>
                <div className="mt-3 flex gap-1">
                    <div className="h-1 w-8 bg-lime-500 rounded-full"></div>
                    <div className="h-1 w-4 bg-lime-500/30 rounded-full"></div>
                </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-lime-500 rounded-tl-[40px]"></div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-lime-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Redefining Rajasthan
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-950 leading-[1.1]">
              Driving the Electric <br />
              <span className="text-lime-500 italic font-serif">Revolution.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              Electrogo Mobility is redefining transportation across Rajasthan 
              with a fully electric ecosystem. From government fleets to 
              intelligent EV charging infrastructure, we are building a 
              sustainable mobility network designed for the future.
            </p>

            <div className="grid grid-cols-2 gap-8 border-y border-gray-100 py-8">
                <div>
                    <h4 className="text-3xl font-bold text-gray-900">100%</h4>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Zero Emission</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-gray-900">24/7</h4>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Smart Tracking</p>
                </div>
            </div>

            <p className="text-gray-500 italic text-sm">
                *Our mission is to reduce emissions, enhance passenger safety, 
                and deliver premium electric mobility.
            </p>
          </div>

          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 bg-gray-950 text-white px-8 py-4 rounded-full font-bold group hover:bg-lime-500 hover:text-gray-950 transition-all"
          >
            Explore Our Journey
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}