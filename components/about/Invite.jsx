'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
const Invite = () => {
  const { scrollYProgress } = useScroll();
  const carX = useTransform(scrollYProgress, [0.8, 1], [-100, 400]);
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url('https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306765/pinstriped-suit_m7s0ej.png')`, backgroundSize: '200px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-extrabold text-gray-950 leading-tight mb-8">
              Be Part of the <br />
              <span className="text-lime-500">Journey.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Electrogo Mobility isn't just a service; it's a movement. Help us electrify Jodhpur, Jaipur, and beyond by April 2026.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-gray-950 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-lime-500 hover:text-gray-950 transition-all shadow-xl"
            >
              Join the Ecosystem
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>

          <div className="relative w-full lg:w-[500px] h-[300px] bg-stone-50 rounded-[40px] border border-gray-100 overflow-hidden shadow-inner">
            <div className="absolute bottom-0 right-4 opacity-20">
               <div className="flex items-end gap-1">
                  <div className="w-8 h-32 bg-gray-950 rounded-t-lg"></div>
                  <div className="w-12 h-48 bg-gray-950 rounded-t-lg"></div>
                  <div className="w-10 h-40 bg-gray-950 rounded-t-lg"></div>
               </div>
            </div>

            <motion.div 
              style={{ x: carX }}
              className="absolute bottom-6 left-0 z-20"
            >
              <div className="relative">
                <div className="bg-lime-500 px-3 py-1 rounded-t-lg text-[10px] font-bold uppercase mb-1">Electrogo</div>
                <div className="w-20 h-8 bg-gray-950 rounded-lg relative shadow-lg">
                  <div className="absolute -bottom-2 left-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white"></div>
                  <div className="absolute -bottom-2 right-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </motion.div>

            <div className="absolute top-10 left-10 w-20 h-20 bg-orange-100 rounded-full"></div>
            
            <div className="absolute bottom-8 left-8 flex items-center gap-2 text-gray-400">
              <MapPin size={14} />
              <span className="text-xs font-mono uppercase tracking-widest">Jodhpur 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Invite
