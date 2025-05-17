import React from 'react'
import { featuredCakes } from '../data'

const Features = () => {
  return (
    <section id='features' class='py-20 px-6'>
      <div class='max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center'>
        {featuredCakes.map(({ id, img, title, text }) => {
          return (
            <div key={id}>
              <img src={img} class='mx-auto mb-4' alt='' />
              <h3 class='text-xl font-bold mb-2 text-purple-900'>{title}</h3>
              <p class='text-gray-700'>{text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
