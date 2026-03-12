"use client";
import { motion } from 'framer-motion';
import { HeartHandshake, ShieldAlert, Zap, Truck, ArrowLeft, CheckCircle } from 'lucide-react';


const SafetyContent = () => {
  const lastUpdated = "March 09, 2026";

  const sections = [
    {
      id: "infrastructure",
      icon: <Zap size={20} />,
      title: "Grid & Charger Safety",
      content: "All charging stations in the Jaipur-Ajmer-Jodhpur corridor undergo rigorous 48-hour site audits to ensure electrical stability and fire safety compliance before being integrated into the public network."
    },
    {
      id: "drivers",
      icon: <ShieldAlert size={20} />,
      title: "Vetted Professionals",
      content: "Our B2G and B2C drivers undergo intensive background checks and EV-specific safety training, ensuring the highest standards for Rajasthan's government executive transit services."
    },
    {
      id: "vehicles",
      icon: <Truck size={20} />,
      title: "Fleet Maintenance",
      content: "Every electric cab and bus in our fleet is subject to real-time telematics monitoring. We track battery health and vehicle performance to prevent on-road failures across the Highway Electric Corridor."
    },
    {
      id: "emergency",
      icon: <HeartHandshake size={20} />,
      title: "Rapid Response",
      content: "In the event of an incident, our 24/7 command center provides immediate support. We coordinate with local authorities across Rajasthan to ensure the safety of our passengers and partners."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-lime-400 selection:text-black">
      

      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306999/photo-1602449204748-331279a2ed37_nyptrd.jpg')` }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-white z-0" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6"
          >
            Safety <br />
            <span className="text-white outline-text opacity-40">Protocols.</span>
          </motion.h1>
          <p className="text-lime-400 font-mono text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-md">
            Zero-Incident Roadmap: {lastUpdated}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] sticky top-32 shadow-sm">
            <h3 className="text-slate-900 font-black uppercase italic tracking-widest text-sm mb-6 flex items-center gap-2">
              <HeartHandshake size={16} className="text-lime-500" /> 
              Our Promise
            </h3>
            <p className="text-xs leading-relaxed text-slate-500 mb-6 italic">
              "Ensuring every kilometer of the April 2026 expansion is backed by state-of-the-art safety telematics."
            </p>
            <div className="space-y-4">
              {sections.map((s) => (
                <div key={s.id} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-16">
          {sections.map((section, index) => (
            <motion.section 
              key={section.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-500 shadow-xl">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter group-hover:text-lime-600 transition-colors">
                  {section.title}
                </h2>
              </div>
              <div className="bg-slate-50/50 p-8 rounded-3xl border border-transparent group-hover:border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                <p className="text-slate-500 leading-relaxed text-sm">
                  {section.content}
                </p>
              </div>
            </motion.section>
          ))}
          
          <section className="pt-12 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Emergency Contact & SOS Support: <br />
              <span className="text-slate-900">safety@electrogo.mobility</span>
            </p>
          </section>
        </div>
      </main>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1.5px #fff;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default SafetyContent;