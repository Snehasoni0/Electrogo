'use client'
import { Target, MessageSquare, Files, PieChart, Shield, Zap, Globe, Heart } from 'lucide-react';

const MissionAndValues = () => {
  return (
    <section className="w-full bg-white overflow-hidden border-t border-white">
      <div className="flex flex-col lg:flex-row min-h-[700px] w-full">
        <div className="w-full lg:w-[40%] bg-gray-950 p-12 lg:p-24 flex flex-col justify-center">
          <span className="text-lime-400 font-bold tracking-widest text-xs mb-4 uppercase">Your Label</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            About Our <br />
            <span className="text-lime-400 font-serif italic">Mission</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. 
          </p>
        </div>

        <div className="w-full lg:w-[60%] bg-stone-50 p-8 lg:p-24 relative flex items-center justify-end">
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block z-20">
            <div className="relative">
              <svg className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none" viewBox="0 0 400 400">
                <path d="M40,200 L200,80" fill="none" stroke="#d9f99d" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M40,200 L220,200" fill="none" stroke="#a3e635" strokeWidth="3" />
                <path d="M40,200 L200,320" fill="none" stroke="#d9f99d" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="200" cy="80" r="4" fill="#a3e635" />
                <circle cx="220" cy="200" r="4" fill="#a3e635" />
                <circle cx="200" cy="320" r="4" fill="#a3e635" />
              </svg>

              <div className="w-48 h-48 bg-white rounded-full border-[12px] border-lime-200 shadow-2xl flex items-center justify-center relative">
                <Target size={60} className="text-gray-900" />                
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-lg space-y-6 relative z-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow">
              <MessageSquare size={28} className="text-gray-900 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Mission Text One</h4>
                <p className="text-gray-500 text-sm">Strategic communication at every touchpoint.</p>
              </div>
            </div>
            
            <div className="bg-lime-300 p-8 rounded-xl shadow-lg flex gap-6 items-start transform lg:translate-x-8">
              <Files size={28} className="text-gray-900 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Mission Text Two</h4>
                <p className="text-gray-800 text-sm">Documentation that scales with your ambition.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow">
              <PieChart size={28} className="text-gray-900 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Mission Text Three</h4>
                <p className="text-gray-500 text-sm">Analytics-first approach to all operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse min-h-[700px] w-full">
        <div className="w-full lg:w-[40%] bg-gray-950 p-12 lg:p-24 flex flex-col justify-center text-right items-end">
          <span className="text-lime-400 font-bold tracking-widest text-xs mb-4 uppercase">Core Values</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Our Core <br />
            <span className="text-lime-400 font-serif italic">Values</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
            Our principles define who we are and how we build for the future.
          </p>
        </div>

        <div className="w-full lg:w-[60%] bg-stone-50 p-8 lg:p-24 relative flex items-center justify-start">
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden lg:block z-20">
            <div className="relative">
               <svg className="absolute top-1/2 right-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none" viewBox="0 0 400 400">
                <path d="M360,200 L200,80" fill="none" stroke="#d9f99d" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M360,200 L180,200" fill="none" stroke="#a3e635" strokeWidth="3" />
                <path d="M360,200 L200,320" fill="none" stroke="#d9f99d" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="200" cy="80" r="4" fill="#a3e635" />
                <circle cx="180" cy="200" r="4" fill="#a3e635" />
                <circle cx="200" cy="320" r="4" fill="#a3e635" />
              </svg>

              <div className="w-48 h-48 bg-white rounded-full border-[12px] border-lime-200 shadow-2xl flex items-center justify-center relative">
                <Shield size={60} className="text-gray-900" />
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-lg space-y-6 relative z-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6 items-start">
              <Zap size={28} className="text-gray-900 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Innovation</h4>
                <p className="text-gray-500 text-sm">Building the tools of tomorrow, today.</p>
              </div>
            </div>
            
            <div className="bg-lime-300 p-8 rounded-xl shadow-lg flex gap-6 items-start transform lg:-translate-x-8">
              <Globe size={28} className="text-gray-900 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Integrity</h4>
                <p className="text-gray-800 text-sm">A global network built on local trust.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6 items-start">
              <Heart size={28} className="text-gray-900 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Humanity</h4>
                <p className="text-gray-500 text-sm">Tech that empowers people first.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;