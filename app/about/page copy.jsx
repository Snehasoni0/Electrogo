"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Leaf, Quote, ShieldCheck, Users, Zap } from "lucide-react";
import Image from "next/image";
import SustainabilitySection from "../../components/about/SustainabilitySection";
import Pillars from "../../components/about/Pillars";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#ededed] py-20 px-6 ">

        <div className="max-w-6xl mx-auto ">

          {/* TITLE */}
          <h1 className="text-center text-6xl md:text-7xl font-black tracking-wide mb-24 relative">
            ABOUT US
            <span className="block w-16 h-[3px] bg-black mx-auto mt-4"></span>
          </h1>

          {/* TOP SECTION */}
          <div className="grid md:grid-cols-[220px_1fr] gap-16 mb-24">

            {/* LEFT MENU */}
            <div className="flex flex-col gap-6 text-sm uppercase tracking-wider">
              {["About us.", "Our team.", "Press."].map((item) => (
                <div
                  key={item}
                  className="group flex items-center justify-between border-b border-black/20 pb-2 cursor-pointer"
                >
                  <span className="text-gray-700 group-hover:text-black transition">
                    {item}
                  </span>
                  <ArrowRight
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition"
                  />
                </div>
              ))}
            </div>

            {/* TEXT */}
            <div className="space-y-8 text-[15px] leading-8 text-gray-700">
              <p>
                Studio Miami, communications agency based in Milan, has been
                created in 2011 from Maurizio Menassi after his long term
                experience within the well-known McCann Erickson. Many of his
                clients, like L’Espresso Group and Radio Deejay, followed him in
                this new adventure.
              </p>

              <p>
                With creative enthusiasm and strategic vision, Studio Miami grew
                collaborating with international brands like Ferrari,
                Volkswagen, Vodafone, Philips and Nissan 360. Today the team
                continues building meaningful brand experiences inspired by
                contemporary culture.
              </p>
            </div>

          </div>

          {/* FULL IMAGE */}
          <div className="mb-28">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team"
              className="w-full h-[380px] md:h-[480px] object-cover"
            />
          </div>

          {/* BOTTOM SECTION */}
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* QUOTE */}
            <div className="relative pl-10">

              {/* Large Quote Mark */}
              <span className="absolute left-0 top-0 text-7xl font-bold text-black/20 leading-none">
                <Quote />
              </span>

              <h2 className="text-3xl md:text-4xl italic font-light leading-relaxed text-black">
                Our work does make sense <br />
                only if it is a faithful witness <br />
                of its time.
              </h2>

              <p className="mt-6 text-sm text-gray-500">
                John Doe – Director
              </p>
            </div>

            {/* SIDE IMAGE */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="Founder"
                className="w-full h-[300px] md:h-[380px] object-cover"
              />
            </div>

          </div>

        </div>

        <section className="w-full mt-12 py-14 px-4">
          <div className="max-w-6xl mx-auto bg-[#F9FAFB] rounded-[28px] shadow-xl relative overflow-hidden py-20 text-center">

            {/* Background Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full border border-blue-200 opacity-60"></div>
              <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-100"></div>
              <div className="absolute w-[180px] h-[180px] rounded-full border border-blue-50"></div>
            </div>

            {/* Floating dots */}
            <span className="absolute w-3 h-3 bg-green-400 rounded-full bottom-28 left-20"></span>
            <span className="absolute w-3 h-3 bg-yellow-400 rounded-full top-28 left-1/3"></span>
            <span className="absolute w-3 h-3 bg-blue-400 rounded-full right-28 bottom-36"></span>

            {/* Heading */}
            <p className="text-gray-500 text-sm mb-3 relative z-10">
              Meet the People Behind the Pixels
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative z-10">
              Our Super Squad of{" "}
              <span className="relative inline-block">
                Creatives
                <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-orange-300 rounded-full"></span>
              </span>
            </h2>

            {/* Wave Line */}
            <svg
              viewBox="0 0 1200 120"
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-40"
            >
              <path
                d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>

            {/* Cards */}
            <div className="relative mt-20 flex flex-wrap justify-center items-center gap-10 z-10">

              {/* Card 1 */}
              <div className="bg-white w-44 p-5 rounded-2xl shadow-lg rotate-[-12deg] hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="/images/about/user.png"
                    alt="Esther Howard"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-800">
                  Esther Howard
                </h3>
                <p className="text-xs text-gray-500">Designer</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white w-44 p-5 rounded-2xl shadow-xl rotate-[-3deg] hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="/images/about/user.png"
                    alt="Esther Howard"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-800">
                  Annette Black
                </h3>
                <p className="text-xs text-gray-500">Developer</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white w-44 p-5 rounded-2xl shadow-xl rotate-[8deg] hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="/images/about/user.png"
                    alt="Esther Howard"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-800">
                  Arlene McCoy
                </h3>
                <p className="text-xs text-gray-500">CEO</p>
              </div>

              {/* Info Card */}
              <div className="bg-white w-44 p-5 rounded-2xl shadow-lg rotate-[14deg] text-left hover:scale-105 cursor-pointer">
                <p className="text-xs text-yellow-500">Dream</p>
                <h3 className="font-semibold text-gray-800">Beginning</h3>
                <p className="text-xs text-gray-500">Intelligence</p>
                <button className="mt-3 text-blue-500 text-xs font-semibold">
                  Let’s Connect →
                </button>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 relative z-10">
              <button className="text-gray-700 font-medium hover:underline">
                Join Our Team ↗
              </button>
            </div>
          </div>
        </section>

         <Pillars />    

        <SustainabilitySection />

        <section className="relative py-32 px-6 text-center text-white overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1610267037736-abf3096c88fb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Decorative glow */}
          <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-150px]" />
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-120px]" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">

            <p className="uppercase tracking-widest text-sm text-green-400 mb-4">
              The Future is Electric
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Be Part of Rajasthan’s <br />
              <span className="text-green-400">EV Revolution</span>
            </h2>

            <p className="text-gray-300 mb-10 leading-relaxed">
              Electrogo is building the next generation mobility network —
              electric cabs, government fleets, and high-speed charging
              infrastructure across Rajasthan.
              Join the journey toward cleaner cities and smarter transport.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition cursor-pointer">
                Partner With Us
              </button>

              <button className="px-8 py-4 border border-white/40 hover:bg-white hover:text-black rounded-full transition cursor-pointer">
                Contact Our Team
              </button>

            </div>

          </div>
        </section>
      </section>
    </main>

  );
}

