"use client";

import Image from 'next/image'
import { useState } from 'react';

const images = [
    {
        id:1, 
        url:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/66407/ddd25b52-c045-4c44-b557-5f31d26e0f0e-miss-dior-nova-ed-eau-de-toilette-perfume-feminino-100ml.png"
    },
    {
        id:2, 
        url:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/66407/ddd25b52-c045-4c44-b557-5f31d26e0f0e-miss-dior-nova-ed-eau-de-toilette-perfume-feminino-100ml.png"
    },
    {
        id:3, 
        url:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/66407/ddd25b52-c045-4c44-b557-5f31d26e0f0e-miss-dior-nova-ed-eau-de-toilette-perfume-feminino-100ml.png"
    },
]

export default function ProductImg() {
    const [index, setIndex] = useState(0)
  return (
    <div>
        <div className="h-[500px] relative">
            <Image 
                src={images[index].url} 
                alt='' 
                fill 
                sizes='50vw' 
                className='object-cover rounded-md' 
            />
        </div>
        <div className="flex justify-between gap-4 mt-8">
            {images.map((img, i)=>(
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" 
                    key={img.id}
                    onClick={()=> setIndex(i)}
                    >
                    <Image 
                        src={img.url} alt='' 
                        sizes='30vw' 
                        fill 
                        className='object-cover rounded-md' 
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
