"use client";

import Link from "next/link";
import { Building2, Briefcase, Newspaper, Car, Bus, Zap, Shield, FileText, HeartHandshake, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 pt-20 pb-8 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-lime-400 transition">
                  <Building2 size={16} /> About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-lime-400 transition">
                  <Briefcase size={16} /> Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-lime-400 transition">
                  <Newspaper size={16} /> Newsroom
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Car size={16} /> Cabs
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Car size={16} /> Govt Taxis
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Bus size={16} /> Electric Bus
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Zap size={16} /> Charging
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
                  <Shield size={16} /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
                  <FileText size={16} /> Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
                  <HeartHandshake size={16} /> Safety Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Connect
            </h4>

            <div className="flex gap-4">

              <Link href="#" className="w-10 h-10 flex items-center justify-center 
                                        rounded-full bg-white/5 hover:bg-lime-400 
                                        hover:text-black transition-all duration-300">
                <Linkedin size={18} />
              </Link>

              <Link href="#" className="w-10 h-10 flex items-center justify-center 
                                        rounded-full bg-white/5 hover:bg-purple-300
                                        hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </Link>

              <Link href="#" className="w-10 h-10 flex items-center justify-center 
                                        rounded-full bg-white/5 hover:bg-blue-400 
                                        hover:text-black transition-all duration-300">
                <Twitter size={18} />
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 Electrogo Mobility Pvt Ltd. | Made with ❤️ for Rajasthan.
        </div>

      </div>
    </footer>
  )
}

export default Footer
