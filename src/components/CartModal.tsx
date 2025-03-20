"use client"

import Image from 'next/image';
import React from 'react'

function CartModal() {
    const cartItems = false;
  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
        {cartItems ? (
            <div className="">Carinho Vazio</div>
        ) : (
            <>
            <h2 className='text-xl'>Meu Carinho</h2>
            {/* LIST */}
            <div className="flex flex-col gap-8">
                {/*ITEMS */}
                <div className="flex gap-4">
                    <Image src="https://th.bing.com/th/id/R.c343ff1f9ddb4b8123a3926bfbdad632?rik=8DiUGWAY10gxmQ&pid=ImgRaw&r=0" alt="" width={72} height={96}
                        className='object-cover rounded-md'
                    /> 
                    <div className="flex flex-col justify-between w-full">
                        {/* TOP */}
                        <div className="">
                            {/* TITLE */}
                            <div className="flex items-center justify-between gap-8">
                                <h3 className='font-semibold'>Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                            {/* DESC */}
                            <div className="text-sm text-gray-500">Avaliable...</div>
                        </div>
                        {/* BOTTOM */}
                        <div className="flex justify-between text-sm">
                            <span className='text-gray-500'>Qty. 4</span>
                            <span className='text-blue-500'>Remover</span>
                        </div>
                    </div>
                </div>
                {/*ITEMS */}
                <div className="flex gap-4">
                    <Image src="https://kenperfume.com/wp-content/uploads/2023/06/2-20.jpg" alt="" width={72} height={96}
                        className='object-cover rounded-md'
                    /> 
                    <div className="flex flex-col justify-between w-full">
                        {/* TOP */}
                        <div className="">
                            {/* TITLE */}
                            <div className="flex items-center justify-between gap-8">
                                <h3 className='font-semibold'>Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                            {/* DESC */}
                            <div className="text-sm text-gray-500">Avaliable...</div>
                        </div>
                        {/* BOTTOM */}
                        <div className="flex justify-between text-sm">
                            <span className='text-gray-500'>Qty. 2</span>
                            <span className='text-blue-500'>Remover</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="">
                <div className=" flex items-center justify-between font-semibold">
                    <span className=''>SubTotal</span>
                    <span className=''>R$ 49</span>
                </div>
                <p className='text-gray-500 text-sm mt-2 mb-4'>
                    Shipping and taxas calculated at Checkou.
                </p>
                <div className="flex items-center justify-between">
                    <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
                    <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
                </div>
            </div>
            </>
        )}
    </div>
  )
}

export default CartModal