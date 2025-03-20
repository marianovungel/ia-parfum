import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

export default function Listpage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative' >
      {/* COMPAIGN */}
      <div className="hidden bg-pink-50 p-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className='text-4xl font-semibold leading-[48px] text-center text-gray-700'>Grab up to 50% off on Selected Products</h1>
          <button className='rounded-3xl bg-pink-400 text-white w-max py-3 px-5 text-sm'>Compra Agora</button>
        </div>
        <div className="relative w-1/3">
          <Image src="/imagination.png" alt='' fill className='object-contain' />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className='mt-12 text-xl font-semibold'>Escolha Você Mesmo!</h1>
      <ProductList />
    </div>
  )
}
