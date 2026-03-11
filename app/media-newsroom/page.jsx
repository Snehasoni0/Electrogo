"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Zap, Calendar, Hash } from 'lucide-react';

const page = () => {
  const articles = [
    {
      id: "LOG-001",
      category: "Infrastructure",
      date: "March 09, 2026",
      title: "Jaipur-Ajmer Highway Grid Completes Phase II Stress Test",
      desc: "Our engineering division has successfully concluded high-load stress testing on the Jaipur-Ajmer segment. The grid sustained a 99.9% uptime under simulated peak holiday traffic. This ensures that the primary artery of the Rajasthan Electric Corridor is fully stabilized for the April 2026 rollout. Next phase involves real-time V2G integration tests.",
      image: "https://plus.unsplash.com/premium_photo-1689701711439-e54f039f8d97?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "LOG-002",
      category: "B2G Protocol",
      date: "March 05, 2026",
      title: "Government Partnership: Executive Taxi Fleet Expansion",
      desc: "In collaboration with state transport authorities, we are scaling the EV fleet dedicated to government officials. This partnership highlights our commitment to B2G infrastructure, providing a zero-emission template for administrative transit across the state. The fleet will be fully operational across all major Rajasthan hubs by mid-April.",
      image: "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3Jvb218ZW58MHx8MHx8fDA%3D"
    },
    {
      id: "LOG-003",
      category: "Technology",
      date: "Feb 28, 2026",
      title: "Proprietary V2G Charging Hubs Enter Alpha Testing",
      desc: "Our Vehicle-to-Grid (V2G) technology is now live in alpha at select Jaipur charging stations. This proprietary system allows connected EVs to act as distributed battery storage, feeding energy back into the city's power grid during peak surges. This tech is a cornerstone for Rajasthan's local power stability.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
    },
    {
      id: "LOG-004",
      category: "Operations",
      date: "Feb 15, 2026",
      title: "Central Command Center Initiated in Jaipur Hub",
      desc: "We have inaugurated our Central Command Center. This facility utilizes real-time AI to monitor traffic density, grid health, and fleet locations across the Rajasthan Electric Corridor. This 'digital brain' allows us to respond to system anomalies within seconds, ensuring a seamless experience for B2C and B2G clients alike.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-lime-400 selection:text-black">
      
      <header className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
          style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1689701711439-e54f039f8d97?w=1200')` }}
        />
        <div className="absolute inset-0 bg-gray-950/70" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-center items-center gap-3 mb-4 text-lime-400">
              <Newspaper size={18} className="fill-lime-400" />
              <span className="font-mono text-xs font-black uppercase tracking-[0.4em]">Internal System Logs</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none">
              The <br />
              <span className="text-transparent outline-text opacity-40">Archive.</span>
            </h1>
          </motion.div>
        </div>
      </header>

      <section className="bg-slate-950 py-4 border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-lime-400 font-mono text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Zap size={12} className="fill-lime-400" /> STATUS:
              </span>
              <span className="text-white text-[10px] font-bold uppercase tracking-widest italic">
                JAIPUR-JODHPUR CORRIDOR INTEGRATION ACTIVE (APRIL 2026 ROLLOUT)
              </span>
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-20">
          {articles.map((article, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                {/* Meta Header */}
                <div className="flex items-center gap-6 mb-8">
                   <div className="flex items-center gap-2 text-lime-600 font-mono text-[10px] font-black uppercase tracking-[0.2em]">
                     <Hash size={12} /> {article.id}
                   </div>
                   <div className="h-px flex-grow bg-lime-400" />
                   <div className="flex items-center gap-4 text-slate-400 font-mono text-[10px] font-bold uppercase tracking-widest">
                    <Calendar size={14} className="text-slate-300" /> {article.date}
                  </div>
                </div>

                <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 mb-12 leading-none">
                  {article.title}
                </h3>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`}>
                  
                  <div className={`relative h-[500px] rounded-[1rem] overflow-hidden border border-slate-100 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img 
                      src={article.image} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                      alt={article.title} 
                    />
                    <div className="absolute top-8 left-8 px-5 py-2 bg-slate-900 text-lime-400 text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">
                      {article.category}
                    </div>
                  </div>

                  <div className={`space-y-10 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <p className="text-slate-600 text-xl md:text-2xl font-medium italic leading-relaxed">
                      {article.desc}
                    </p>
                    
                    <div className="pt-10">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-[2px] bg-lime-400" />
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">End of Log</span>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <style jsx>{`
        .outline-text { -webkit-text-stroke: 1.5px #fff; color: transparent; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default page;