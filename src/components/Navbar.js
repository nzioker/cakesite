import React from 'react'

const Navbar = () => {
  return (
    <>
      <header class='bg-white shadow fixed w-full z-10'>
        <div class='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
          <h1 class='text-xl font-bold text-purple-900'>Delightful Cakes</h1>
          <nav class='space-x-4 hidden md:block'>
            <a
              href='#features'
              class='text-gray-600 hover:text-yellow-600 font-medium'
            >
              Features
            </a>
            <a
              href='#gallery'
              class='text-gray-600 hover:text-yellow-600 font-medium'
            >
              Gallery
            </a>
            <a
              href='#testimonials'
              class='text-gray-600 hover:text-yellow-600 font-medium'
            >
              Testimonials
            </a>
            <a
              href='#pricing'
              class='text-gray-600 hover:text-yellow-600 font-medium'
            >
              Pricing
            </a>
            <a
              href='#faq'
              class='text-gray-600 hover:text-yellow-600 font-medium'
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
