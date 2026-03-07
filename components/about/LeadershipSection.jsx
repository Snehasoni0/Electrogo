import React from 'react';
import { Linkedin, Twitter, Globe, ChevronDown } from 'lucide-react';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Alma Derricks",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Richard Dickson",
      role: "CSO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Walter Levitt",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Giles Richardson",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-0 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-4 px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Built by Visionaries, <br />
          <span className="text-lime-500">Backed by Tech.</span>
        </h2>
      </div>

      {/* THE HANDLER / HUB */}
      <div className="flex flex-col items-center relative z-30">
        <div className="bg-gray-950 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-2xl border-2 border-white">
          <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">Core Leadership Hub</span>
        </div>
        {/* The Main Stem */}
        <div className="w-0.5 h-16 bg-gray-950"></div>
      </div>

      {/* THE CONNECTOR SYSTEM */}
      <div className="max-w-7xl mx-auto relative px-4">
        {/* Horizontal Crossbar */}
        <div className="hidden lg:block absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-gray-950"></div>

        {/* LEADERS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
          {leaders.map((person, index) => (
            <div key={index} className="flex flex-col items-center group relative pt-12 lg:pt-0">
              
              {/* Vertical Connector Line (Desktop Only) */}
              <div className="hidden lg:block w-0.5 h-12 bg-gray-950 mb-0"></div>

              <div className="relative">
                {/* THE DOT (Target Pin) */}
                <div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-lime-400 rounded-full z-20 border-2 border-gray-950 shadow-[0_0_10px_rgba(163,230,53,0.5)] group-hover:scale-125 transition-transform" />

                {/* Profile Image */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[10px] border-white shadow-xl relative z-10 group-hover:border-lime-50 transition-colors duration-500">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2">
                       <div className="p-2 bg-white rounded-full hover:bg-lime-400 transition-colors cursor-pointer"><Linkedin size={16} /></div>
                       <div className="p-2 bg-white rounded-full hover:bg-lime-400 transition-colors cursor-pointer"><Twitter size={16} /></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-8 text-center px-4">
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-lime-600 transition-colors">{person.name}</h3>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mt-1">{person.role}</p>
                <div className="w-8 h-1 bg-gray-100 mx-auto mt-4 group-hover:w-16 group-hover:bg-lime-400 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER BRANDS */}
      <div className="max-w-6xl mx-auto pt-12 border-t border-gray-100 px-6">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-40 hover:opacity-100 transition-all">
          <h4 className="text-2xl font-black">COMCAST</h4>
          <h4 className="text-2xl font-bold text-orange-600">HOME DEPOT</h4>
          <h4 className="text-2xl font-serif italic">macy's</h4>
          <h4 className="text-2xl font-mono underline">NetApp</h4>
          <h4 className="text-2xl font-sans tracking-tighter font-black">SAMSUNG</h4>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;