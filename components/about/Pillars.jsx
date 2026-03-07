"use client";

import { Leaf, ShieldCheck, Zap, Users } from "lucide-react";

export default function PillarsSection() {
  return (
    <section className="py-24 px-6 bg-gray-950 ">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-white text-4xl font-bold mb-10 flex flex-col items-center justify-center">
          Our Core Pillars
          <div className="w-20 h-0.5 bg-green-700/95 mt-4"></div>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card
            col="md:col-span-2"
            icon={Leaf}
            title="Sustainability First"
            desc="Every kilometer driven by our EV fleet is a step toward cleaner air and a healthier Rajasthan."
            img="https://images.unsplash.com/photo-1671782584185-1300064c5289"
          />

          <Card
            col="md:col-span-1"
            icon={ShieldCheck}
            title="Government Synergy"
            desc="Secure and compliant mobility solutions built for government leaders and officials."
            img="https://images.unsplash.com/photo-1558981285-6f0c94958bb6"
          />

          <Card
            col="md:col-span-1"
            icon={Zap}
            title="Infrastructure at Scale"
            desc="We are building the electric highway across Rajasthan through high-speed EV charging hubs."
            img="https://images.unsplash.com/photo-1607860108855-64acf2078ed9"
          />

          <Card
            col="md:col-span-2"
            icon={Users}
            title="Local Impact"
            desc="Creating green-tech jobs and empowering the youth of Rajasthan through the EV ecosystem."
            img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          />

        </div>
      </div>
    </section>
  );
}


function Card({ icon: Icon, title, desc, img, col }) {
  return (
    <div
      className={`group relative ${col} h-[260px] rounded-2xl overflow-hidden cursor-pointer`}
    >

      {/* BG IMAGE */}
      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover md:group-hover:scale-110 transition duration-500"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition duration-300"></div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 p-8 text-white md:translate-y-6 md:group-hover:translate-y-0 translate-y-0 transition duration-300">

        <Icon size={34} className="mb-4" />

        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-200 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition duration-300">
          {desc}
        </p>

      </div>

    </div>
  );
}