"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-999 isolate transition-all duration-500 py-2 ${scrolled
          ? "bg-black/30 backdrop-blur-md shadow-md"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="w-28 z-1000">
            <img src="/logo.png" alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-white">

            <Link className="hover:text-blue-400 transition" href="/about">
              About
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <span className="cursor-pointer hover:text-blue-400 transition">
                Verticals
              </span>

              {open && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] 
                bg-[#111]/95 backdrop-blur-xl border border-white/10 
                rounded-2xl shadow-2xl p-8 grid grid-cols-2 gap-6">

                  {[
                    ["City EV Cabs", "Silent, app-based rides.", "/city-ev-cabs"],
                    ["Govt Executive Taxis", "Secure transport.", "/gov-enterprise-taxis"],
                    ["EV Charging Hubs", "Fast charging grid.", "/ev-charging-network"],
                    ["Electric Bus Services", "Zero-emission travel.", "/electric-bus-division"]
                  ].map(([title, desc, link]) => (
                    <Link
                      key={title}
                      href={link}
                      className="p-4 hover:bg-white/5 transition border-l border-lime-300"
                    >
                      <h4 className="font-semibold text-lime-300">{title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{desc}</p>
                    </Link>
                  ))}

                </div>
              )}
            </div>

            <Link className="hover:text-blue-400 transition" href="/sustainability-impact">
              Sustainability
            </Link>
            <Link className="hover:text-blue-400 transition" href="/roadmap-2026">
              Roadmap
            </Link>
            <Link className="hover:text-blue-400 transition" href="/partner-with-us">
              Partner
            </Link>
            <Link className="hover:text-blue-400 transition" href="/careers">
              Careers
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-7 py-2.5 rounded-full font-semibold text-white 
            bg-gradient-to-r from-[#254276] to-[#58A934] 
            hover:from-[#2E58A3] hover:to-[#6BCB3C] 
            transition-all duration-300 hover:scale-105 shadow-md"
          >
            Contact
          </Link>
          {/* Hamburger */}
          <button
            className="md:hidden relative z-[1000] text-3xl text-white 
  w-12 h-12 flex items-center justify-center 
  bg-black/40 backdrop-blur-sm rounded-full"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (FIXED FULL SCREEN) */}
      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[998] md:hidden bg-[#0f0f0f] 
  transform transition-transform duration-500 ease-in-out
  ${mobileOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="pt-28 px-6 space-y-6">

          {[
            ["About", "/about"],
            ["City EV Cabs", "/city-ev-cabs"],
            ["Govt Taxis", "/gov-enterprise-taxis"],
            ["Charging Network", "/ev-charging-network"],
            ["Electric Bus", "/electric-bus-division"],
            ["Sustainability", "/sustainability-impact"],
            ["Roadmap", "/roadmap-2026"],
            ["Partner", "/partner-with-us"],
            ["Careers", "/careers"]
          ].map(([name, link]) => (
            <Link
              key={name}
              href={link}
              onClick={() => setMobileOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-white transition"
            >
              {name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center py-3 rounded-full font-semibold text-white 
      bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400"
          >
            Contact
          </Link>

        </div>
      </div>
    </>
  );
}