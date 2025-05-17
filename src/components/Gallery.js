import React from 'react'
import { galleryCakes } from '../data'

const Gallery = () => {
  return (
    <section id='gallery' class='py-20 px-6 bg-white'>
      <div class='max-w-6xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-purple-900 mb-10'>Our Creations</h2>
        <div class='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {galleryCakes.map(({ id, img, alt }) => {
            return (
              <div
                key={id}
                class='overflow-hidden rounded-2xl shadow hover:shadow-lg transition'
              >
                <img
                  src={img}
                  alt={alt}
                  class='w-full h-64 object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery
