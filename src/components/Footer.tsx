import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">VUNGEL</div>
          </Link>
          <p>Av. Prefeito Ayres Moura, 349 - Mondubim</p>
          <span className='font-semibold'>vungemariano@gmail.com</span>
          <span className='font-semibold'>(85) 99139-2625</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt='' width={16} height={16} />
            <Image src="/instagram.png" alt='' width={16} height={16} />
            <Image src="/youtube.png" alt='' width={16} height={16} />
            <Image src="/pinterest.png" alt='' width={16} height={16} />
            <Image src="/x.png" alt='' width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Be the first to get latest news about trens, promotions, and
            much more!
          </p>
          <div className="flex">
            <input 
              type="text"
              placeholder='Email address'
              className='p-4 w-3/4'
            />
            <button className='w-1/4 bg-red-400'>JOIN</button>
          </div>
            <span className='font-semibold'>Sucure Payments</span>
            <div className="flex">
              <Image src="/discover.png" alt='' width={40} height={20} />
              <Image src="/skrill.png" alt='' width={40} height={20} />
              <Image src="/paypal.png" alt='' width={40} height={20} />
              <Image src="/mastercard.png" alt='' width={40} height={20} />
              <Image src="/visa.png" alt='' width={40} height={20} />
            </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">O 2025 Vungel Shop Parfum</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className='text-gray-500 mr-4'>Linguagem</span>
            <span className='font-medium'>Fortaleza - CE | Português</span>
          </div>
          <div className="">
            <span className='text-gray-500 mr-4'>Moeda</span>
            <span className='font-medium'>Real Brasileiro (R$)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
