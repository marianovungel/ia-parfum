import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className="relative w-full h-80">
            <Image 
                src="https://th.bing.com/th/id/OIP.WvQi9qEfZlkPmp3L106tmgAAAA?rs=1&pid=ImgDetMain"
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 easy duration-500'
            />
            <Image 
                src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/66407/ddd25b52-c045-4c44-b557-5f31d26e0f0e-miss-dior-nova-ed-eau-de-toilette-perfume-feminino-100ml.png"
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md'
            />
        </div>
        <div className="flex justify-between">
            <div className="font-medium">Product Name</div>
            <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-red-400 w-max py-2 px-4 text-xs bg-white hover:bg-red-400  hover:text-white">Add to Cart</button>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className="relative w-full h-80">
            <Image 
                src="https://th.bing.com/th/id/OIP.WvQi9qEfZlkPmp3L106tmgAAAA?rs=1&pid=ImgDetMain"
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 easy duration-500'
            />
            <Image 
                src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/66407/ddd25b52-c045-4c44-b557-5f31d26e0f0e-miss-dior-nova-ed-eau-de-toilette-perfume-feminino-100ml.png"
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md'
            />
        </div>
        <div className="flex justify-between">
            <div className="font-medium">Product Name</div>
            <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-red-400 w-max py-2 px-4 text-xs bg-white hover:bg-red-400  hover:text-white">Add to Cart</button>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className="relative w-full h-80">
            <Image 
                src="https://th.bing.com/th/id/OIP.WvQi9qEfZlkPmp3L106tmgAAAA?rs=1&pid=ImgDetMain"
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 easy duration-500'
            />
            <Image 
                src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/66407/ddd25b52-c045-4c44-b557-5f31d26e0f0e-miss-dior-nova-ed-eau-de-toilette-perfume-feminino-100ml.png"
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md'
            />
        </div>
        <div className="flex justify-between">
            <div className="font-medium">Product Name</div>
            <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-red-400 w-max py-2 px-4 text-xs bg-white hover:bg-red-400  hover:text-white">Add to Cart</button>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className="relative w-full h-80">
            <Image 
                src="https://th.bing.com/th/id/OIP.WvQi9qEfZlkPmp3L106tmgAAAA?rs=1&pid=ImgDetMain"
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 easy duration-500'
            />
            <Image 
                src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/66407/ddd25b52-c045-4c44-b557-5f31d26e0f0e-miss-dior-nova-ed-eau-de-toilette-perfume-feminino-100ml.png"
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md'
            />
        </div>
        <div className="flex justify-between">
            <div className="font-medium">Product Name</div>
            <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-red-400 w-max py-2 px-4 text-xs bg-white hover:bg-red-400  hover:text-white">Add to Cart</button>
        </Link>
    </div>
  )
}
