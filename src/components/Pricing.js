import React from 'react'

const Pricing = () => {
  return (
    <section id='pricing' class='py-20 px-6 bg-white'>
      <div class='max-w-6xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-purple-900 mb-10'>Our Cake Tiers</h2>
        <div class='grid md:grid-cols-3 gap-8'>
          <div class='border rounded-2xl p-8 shadow hover:shadow-lg transition'>
            <h3 class='text-2xl font-bold mb-4 text-purple-900'>Classic</h3>
            <p class='text-yellow-600 text-3xl font-extrabold mb-6'>$39</p>
            <ul class='text-gray-700 space-y-2 mb-6'>
              <li>6-inch round</li>
              <li>Choice of 3 flavors</li>
              <li>Basic decoration</li>
            </ul>
            <button class='bg-yellow-400 hover:bg-yellow-300 text-purple-900 py-2 px-6 rounded-full font-semibold'>
              Choose
            </button>
          </div>
          <div class='border-4 border-yellow-500 rounded-2xl p-8 shadow-lg bg-[#FFF8F0]'>
            <h3 class='text-2xl font-bold mb-4 text-purple-900'>Premium</h3>
            <p class='text-yellow-600 text-3xl font-extrabold mb-6'>$79</p>
            <ul class='text-gray-700 space-y-2 mb-6'>
              <li>8-inch round or square</li>
              <li>Choice of 5 flavors</li>
              <li>Custom design</li>
              <li>Fresh fruit & gold leaf</li>
            </ul>
            <button class='bg-yellow-400 hover:bg-yellow-300 text-purple-900 py-2 px-6 rounded-full font-semibold'>
              Most Popular
            </button>
          </div>
          <div class='border rounded-2xl p-8 shadow hover:shadow-lg transition'>
            <h3 class='text-2xl font-bold mb-4 text-purple-900'>Deluxe</h3>
            <p class='text-yellow-600 text-3xl font-extrabold mb-6'>$129</p>
            <ul class='text-gray-700 space-y-2 mb-6'>
              <li>3-tier masterpiece</li>
              <li>Unlimited flavor options</li>
              <li>Sculpted, themed design</li>
              <li>Free delivery</li>
            </ul>
            <button class='bg-yellow-400 hover:bg-yellow-300 text-purple-900 py-2 px-6 rounded-full font-semibold'>
              Choose
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
