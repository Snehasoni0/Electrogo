import React from 'react'

const hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

        <div className="text-white">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Redefining How <br />
            <span className="text-green-400">Rajasthan Moves</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            From the heritage lanes of Jodhpur to the smart corridors of Jaipur,
            Electrogo is building the infrastructure for a zero-emission future.
          </p>

          <div className="flex gap-4">

            <button className="px-8 py-4 bg-green-500 rounded-full font-semibold hover:bg-green-600 transition cursor-pointer">
              Explore Vision
            </button>

            <button className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Learn More
            </button>

          </div>

        </div>

        <div className="relative hidden md:block">

          <div className="absolute -inset-6 bg-green-500/20 blur-3xl rounded-3xl"></div>

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            className="relative rounded-3xl shadow-2xl object-cover h-[350px] w-full opacity-80"
          />

        </div>

      </div>

    </section>
  )
}

export default hero
