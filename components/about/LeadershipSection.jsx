import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Alma Derricks",
      role: "Founder & CEO",
      image: "https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306763/photo-1573496359142-b8d87734a5a2_agxdod.jpg",
    },
    {
      name: "Richard Dickson",
      role: "CSO",
      image: "https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306756/photo-1472099645785-5658abf4ff4e_m11xp0.jpg",
    },
    {
      name: "Walter Levitt",
      role: "Head of Sustainability",
      image: "https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306756/photo-1519085360753-af0119f7cbe7_wh1chu.jpg",
    },
    {
      name: "Giles Richardson",
      role: "Operations Director",
      image: "https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306756/photo-1507003211169-0a1dd7228f2d_ehisq1.jpg",
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-0 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-4 px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Built by Visionaries, <br />
          <span className="text-lime-500">Backed by Tech.</span>
        </h2>
      </div>

      <div className="flex flex-col items-center relative z-30">
        <div className="bg-gray-950 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-2xl border-2 border-white">
          <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">Core Leadership Hub</span>
        </div>
        <div className="w-0.5 h-8 md:h-16 bg-gray-950"></div>
      </div>

      <div className="max-w-7xl mx-auto relative px-4">
        <div className="hidden lg:block absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-gray-950"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-0 relative">
          {leaders.map((person, index) => (
            <div
              key={index}
              tabIndex="0" 
              className="flex flex-col items-center group relative pt-4 md:pt-12 lg:pt-0 outline-none focus:outline-none"
            >

              <div className="hidden lg:block w-0.5 h-12 bg-gray-950 mb-0"></div>

              <div className="relative">
                <div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-lime-400 rounded-full z-20 border-2 border-gray-950 shadow-[0_0_10px_rgba(163,230,53,0.5)] group-hover:scale-125 transition-transform" />

                <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-[8px] md:border-[10px] border-white shadow-xl relative z-10 transition-all duration-300 group-hover:border-lime-50 group-focus:border-lime-400 md:group-focus:border-white">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                    <div className="flex gap-3">
                      <div className="p-2.5 bg-white rounded-full text-gray-900 shadow-lg"><Linkedin size={18} /></div>
                      <div className="p-2.5 bg-white rounded-full text-gray-900 shadow-lg"><Twitter size={18} /></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-8 text-center px-4">
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-lime-600 group-focus:text-lime-600 transition-colors">{person.name}</h3>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mt-1">{person.role}</p>
                <div className="w-8 h-1 bg-gray-100 mx-auto mt-3 group-hover:w-16 group-focus:w-16 group-hover:bg-lime-400 group-focus:bg-lime-400 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-12 mt-12 border-t border-gray-100 px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 grayscale opacity-40 hover:opacity-100 transition-all">
          <h4 className="text-xl md:text-2xl font-black">COMCAST</h4>
          <h4 className="text-xl md:text-2xl font-bold text-orange-600">HOME DEPOT</h4>
          <h4 className="text-xl md:text-2xl font-serif italic">macy's</h4>
          <h4 className="text-xl md:text-2xl font-mono underline">NetApp</h4>
          <h4 className="text-xl md:text-2xl font-sans tracking-tighter font-black">SAMSUNG</h4>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;