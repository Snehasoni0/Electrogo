"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    title: "City Commute",
    subtitle: "City EV Cabs",
    description: "Silent, app-based, and zero-surge rides for the modern citizen.",
    image: "https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773305340/photo-1593941707882-a5bba14938c7_el3f1q.jpg",
    stagger: false,
  },
  {
    title: "Protocol & Prestige",
    subtitle: "Govt. Executive Taxis",
    description: "Secure, compliant, and premium EV transit for Government Officials.",
    image: "https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773305341/photo-1619767886558-efdc259cde1a_ll2saa.jpg",
    stagger: true, // Higher position
  },
  {
    title: "The Grid",
    subtitle: "EV Charging Hubs",
    description: "Universal high-speed charging stations across major highways.",
    image: "https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773305340/photo-1593941707882-a5bba14938c7_el3f1q.jpg",
    stagger: false,
  },
  {
    title: "Mass Transit",
    subtitle: "Electric Bus Services",
    description: "Zero-emission public transport for a cleaner, smarter Rajasthan.",
    image: "https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773305340/photo-1570125909232-eb263c188f7e_nw8nc9.jpg",
    stagger: true, // Higher position
  },
];

const FourPillars = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-lime-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Core Ecosystem
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-950 leading-tight">
              Our Four Pillars of <br />
              <span className="text-lime-500 italic font-serif">Electric Mobility</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm">
            Driving Rajasthan’s transition to zero-emission mobility through localized, tech-heavy infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {pillars.map(({ title, subtitle, description, image, stagger }, index) => (
            <div
              key={title}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`relative group h-[500px] rounded-[40px] overflow-hidden cursor-pointer transition-all duration-700 
                ${stagger ? "lg:-translate-y-12" : "translate-y-0"}`}
            >
              <Image
                src={image}
                alt={subtitle}
                fill
                className={`object-cover transition-all duration-1000 group-hover:scale-110 
                  ${active === index ? "grayscale-0" : "grayscale opacity-90"}`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent"></div>

              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-lime-500 group-hover:border-lime-500 group-hover:text-gray-950 transition-all duration-500">
                <ArrowUpRight size={20} />
              </div>

              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-lime-500 rounded-tl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500">
                <p className="text-lime-400 font-bold text-xs uppercase tracking-widest mb-2">
                  {subtitle}
                </p>
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {title}
                </h4>
                
                <div className={`overflow-hidden transition-all duration-500 max-h-0 ${active === index ? "max-h-40" : "max-h-0"}`}>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <button className="text-white text-xs font-bold uppercase tracking-widest border-b border-lime-500 pb-1 hover:text-lime-400 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;