import React from 'react'
import { customerResponses } from '../data'

const Testimonials = () => {
  return (
    <section id='testimonials' class='bg-[#FFF8F0] py-20 px-6'>
      <div class='max-w-5xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-purple-900 mb-10'>
          What Our Customers Say
        </h2>
        <div class='grid md:grid-cols-3 gap-8'>
          {customerResponses.map(({ id, response, customer }) => {
            return (
              <div key={id} class='bg-white p-6 rounded-2xl shadow'>
                <p class='text-gray-600 mb-4'>{response}</p>
                <h4 class='font-semibold text-purple-900'>— {customer}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
