import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImg from '@/components/ProductImg'
import React from 'react'

export default function SinglePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMG */}
      <div className='w-full lg:w-12 lg:sticky top-20 h-max'>
        <ProductImg />
      </div>
      {/* Text */}
      <div className='w-full lg:w-12 flex flex-col gap-6'>
        <h1 className="text-4xl font-medium">Nome do Perfume</h1>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ea quasi aut, dolores recusandae sequi cumque minima 
          molestiae praesentium fugit cum ipsam, error corporis repudiandae 
          laborum temporibus doloribus perspiciatis nisi sapiente.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className='text-xl text-gray-500 line-through'>R$ 250</h3>
          <h2 className='font-medium text-2xl'>R$ 229</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum cumque rerum distinctio consequuntur, voluptas pariatur 
            facilis quos est minus tempora culpa maxime inventore repellendus 
            repudiandae praesentium quam nesciunt architecto! Nisi.
          </p>
        </div>
        <div className="text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum cumque rerum distinctio consequuntur, voluptas pariatur 
            facilis quos est minus tempora culpa maxime inventore repellendus 
            repudiandae praesentium quam nesciunt architecto! Nisi.
          </p>
        </div>
        <div className="text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum cumque rerum distinctio consequuntur, voluptas pariatur 
            facilis quos est minus tempora culpa maxime inventore repellendus 
            repudiandae praesentium quam nesciunt architecto! Nisi.
          </p>
        </div>
      </div>
    </div>
  )
}
