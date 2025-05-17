import React from 'react'
import { faqs } from '../data'

const Faq = () => {
  return (
    <section id='faq' class='bg-[#FFF8F0] py-20 px-6'>
      <div class='max-w-4xl mx-auto'>
        <h2 class='text-3xl font-bold text-center text-purple-900 mb-10'>
          Frequently Asked Questions
        </h2>
        <div class='space-y-4'>
          {faqs.map(({ id, question, answer }) => {
            return (
              <details key={id} class='bg-white p-4 rounded-xl shadow'>
                <summary class='font-semibold cursor-pointer'>
                  {question}
                </summary>
                <p class='mt-2 text-gray-600'>{answer}</p>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
