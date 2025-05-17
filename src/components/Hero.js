import React from 'react'
import heroImg from '../images/hero-one.jpg'
const Hero = () => {
  return (
    <section class='relative h-[90vh] overflow-hidden text-white pt-16'>
      {/* Slideshow Background */}
      <div class='absolute inset-0 z-0'>
        <img
          id='hero-slide'
          src={heroImg}
          class='w-full h-full object-cover brightness-75 transition-opacity duration-1000'
          alt='Elegant Cake'
        />
      </div>

      {/* Overlay Content */}
      <div class='relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-black/40 backdrop-blur-sm'>
        <h1 class='text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow mb-4'>
          Indulge in Elegance
        </h1>
        <p class='text-xl md:text-2xl text-gray-200 max-w-2xl mb-6'>
          Premium handcrafted cakes that make every celebration unforgettable.
        </p>
        <a
          href='#pricing'
          class='bg-yellow-400 text-purple-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition shadow-md'
        >
          Browse Our Cakes
        </a>
      </div>
    </section>
  )
}

export default Hero
