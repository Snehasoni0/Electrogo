import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          The Future of Rajasthan is Electric.
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-8">
          Rajasthan’s first 100% emission-free mobility ecosystem. Seamless EV Cabs, Executive Govt. Taxis, and High-Speed Infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/waitlist"
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-lime-400 to-green-600
                       animate-glow hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Join the Green Waitlist
          </Link>

          <Link
            href="/roadmap-2028"
            className="px-8 py-3 rounded-full font-semibold text-white border-2 border-white hover:bg-white/30 hover:scale-105 transition"
          >
            Explore the Roadmap
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
