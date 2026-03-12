import React from 'react'

const WhyNow = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Row 1 - Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-950">
            Why <span className="text-lime-500">Now?</span>
          </h2>
          <div className="w-20 h-1.5 bg-lime-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Rajasthan is a land of history and beauty, but our urban air
              quality and reliance on fossil fuels are challenges we can no
              longer ignore. <span className="font-bold text-gray-950">Electrogo Mobility</span> was born out of a simple
              question:
            </p>

            <div className="relative mb-6 pl-6 border-l-4 border-lime-500">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 italic leading-tight">
                "Why should world-class EV infrastructure be limited to Tier-1
                metros?"
                </h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              We are building a native, tech-heavy ecosystem designed
              specifically for the unique geographical and administrative
              needs of Rajasthan — combining electric mobility, charging
              infrastructure, and government-ready transport solutions.
            </p>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center items-center py-10">
            
            <div className="absolute inset-0 border-2 border-gray-950/5 rounded-[40px] transform rotate-6 scale-105 -z-10 bg-stone-50"></div>
            
            <div className="absolute inset-0 bg-lime-400/20 rounded-[40px] transform -rotate-3 scale-100 -z-10 border border-lime-400/30"></div>

            <div className="relative z-10 w-full group">
                <img
                    src="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306765/photo-1671782584185-1300064c5289_zygrql.jpg"
                    alt="Rajasthan EV Infrastructure"
                    className="rounded-[32px] shadow-2xl object-cover w-full h-[400px] grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white max-w-[200px] hidden lg:block">
                    <p className="text-xs font-black uppercase tracking-widest text-lime-600 mb-1">Statewide</p>
                    <p className="text-sm font-bold text-gray-950 leading-tight">Engineered for Rajasthan's terrain.</p>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-lime-500 rounded-tr-[40px]"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyNow