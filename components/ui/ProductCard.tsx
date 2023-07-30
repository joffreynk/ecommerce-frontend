'use client'

import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'

function ProductCard({data}: {data: Product}) {
  return ( 
    <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
         <div className='aspect-square rounded-xl bg-gray-100 relative'>
            <Image src={data.images[0].url} alt='product picture' fill
            className='aspect-square object-cover rounded-md'
             />

             <div className='opacity-0 group-hover:opacity-100'>
                <div className='flex gap-x-6 justify-center'>
                    
                </div>
             </div>
         </div>
    </div>
  )
}

export default ProductCard