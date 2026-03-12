"use client";

import { Leaf, ShieldCheck, Zap, Users } from "lucide-react";

export default function PillarsSection() {
  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-white text-4xl font-bold mb-10 flex flex-col items-center justify-center">
          Our Core Pillars
          <div className="w-20 h-0.5 bg-green-700/95 mt-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            col="md:col-span-2"
            icon={Leaf}
            title="Sustainability First"
            desc="Every kilometer driven by our EV fleet is a step toward cleaner air and a healthier Rajasthan."
            // Optimized: Added &w=1000&q=75 for a balance of quality and speed
            img="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306765/photo-1671782584185-1300064c5289_zygrql.jpg"
          />

          <Card
            col="md:col-span-1"
            icon={ShieldCheck}
            title="Government Synergy"
            desc="Secure and compliant mobility solutions built for government leaders and officials."
            img="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306760/photo-1529107386315-e1a2ed48a620_iuw9d2.jpg"
          />

          <Card
            col="md:col-span-1"
            icon={Zap}
            title="Infrastructure at Scale"
            desc="We are building the electric highway across Rajasthan through high-speed EV charging hubs."
            img="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306756/photo-1548792231-0bccaf8933bb_vxtke9.jpg"
          />

          <Card
            col="md:col-span-2"
            icon={Users}
            title="Local Impact"
            desc="Creating green-tech jobs and empowering the youth of Rajasthan through the EV ecosystem."
            img="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306758/photo-1521737604893-d14cc237f11d_poj2hr.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc, img, col }) {
  return (
    <div
      className={`group relative ${col} h-[280px] rounded-2xl overflow-hidden cursor-pointer bg-gray-900`}
    >
      {/* 1. added bg-gray-900 as a placeholder color
          2. added loading="lazy" to prevent blocking initial load
          3. used decodings="async" for smoother rendering
      */}
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Overlay - Darker on mobile for readability, fades in on desktop hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute bottom-0 left-0 p-8 text-white w-full z-10">
        <div className="flex items-center gap-3 mb-3">
            <Icon size={28} className="text-green-500" />
            <h3 className="text-xl font-bold tracking-tight">
                {title}
            </h3>
        </div>

        {/* On Desktop: Hidden until hover
            On Mobile: Always visible but slightly smaller
        */}
        <p className="text-sm text-gray-200 leading-relaxed md:max-h-0 md:group-hover:max-h-24 md:opacity-0 md:group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
          {desc}
        </p>
      </div>
    </div>
  );
}