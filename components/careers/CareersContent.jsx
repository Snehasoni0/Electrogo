"use client";
import { motion } from 'framer-motion';
import { Globe, Briefcase, ArrowUpRight, ShieldCheck, Cpu, Zap as ZapIcon } from 'lucide-react';
import Link from 'next/link';


const CareersContent = () => {
  const hubItems = [
    {
      title: "B2G Infrastructure",
      desc: "Architecting government-grade transit solutions for the Rajasthan grid.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Highway Connectivity",
      desc: "Scaling high-speed charging across the Jaipur-Jodhpur electric corridor.",
      icon: <ZapIcon size={20} />
    },
    {
      title: "Fleet Intelligence",
      desc: "Deploying AI-driven mass transit for urban and inter-city connectivity.",
      icon: <Cpu size={20} />
    }
  ];

  const jobs = [
    { title: "Front-end Designer", location: "Jaipur, India", type: "Full-Time" },
    { title: "Lead EV Engineer", location: "Jodhpur, India", type: "Full-Time" },
    { title: "Grid Infrastructure Lead", location: "Remote", type: "Contract" },
    { title: "Operations Manager", location: "Ajmer, India", type: "Full-Time" },
    { title: "Backend Developer", location: "Jaipur, India", type: "Full-Time" },
    { title: "Fleet Coordinator", location: "Udaipur, India", type: "Full-Time" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-lime-400 selection:text-black">

      <header className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 grayscale-[0.5]"
          style={{ backgroundImage: `url('https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306935/photo-1521316730702-829a8e30dfd0_h8gt4c.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-4xl mx-auto text-center relative z-20 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6"
          >
            Join the <br />
            <span className="text-transparent outline-text opacity-40">Mission.</span>
          </motion.h1>
          <p className="text-slate-300 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed italic">
            Building the spine of Rajasthan's electric future for the April 2026 rollout.
          </p>
        </div>
      </header>

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
            The Expansion <span className="text-lime-500 italic">Hub.</span>
          </h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />

          {hubItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-[3rem] border border-lime-400 shadow-sm hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-lime-400 mb-8 group-hover:scale-110 transition-transform shadow-xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase italic mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-20 border-l-4 border-lime-400 pl-8">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white">
              Open <span className="text-lime-400">Openings.</span>
            </h2>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mt-4">Jaipur-Ajmer-Jodhpur Corridor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-10 rounded-[2.5rem] border border-gray-800 hover:border-lime-400 transition-all group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center text-white group-hover:bg-lime-400 group-hover:text-black transition-colors">
                    <Briefcase size={20} />
                  </div>
                  <span className="text-[9px] font-black text-lime-400 uppercase tracking-widest">{job.type}</span>
                </div>

                <h4 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2">{job.title}</h4>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-10 flex items-center gap-2">
                  <Globe size={12} className="text-lime-400" /> {job.location}
                </p>

                <button className="w-full py-5 bg-white text-gray-950 rounded-2xl text-xs font-black uppercase tracking-[0.2em] italic hover:bg-lime-400 transition-all flex items-center justify-center gap-2">
                  Apply Now <ArrowUpRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white text-center border-t border-slate-50">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-400 font-mono text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            Infrastructure Phase II Sequence
          </p>

          <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-8">
            Ready to <span className="text-lime-500 italic">Sync?</span>
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest italic text-xs hover:bg-lime-400 hover:text-black transition-all shadow-2xl"
          >
            Contact Us Today <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1.5px #fff;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default CareersContent;