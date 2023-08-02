'use client'
import {useState, useEffect } from 'react'
import { ShoppingCart } from 'lucide-react'

import { Product } from '@/types'
import Currency from './ui/Currency'
import IconButton from './ui/IconButton'
import useCart from '@/hooks/useCart'

const ProductInfo = ({data}: {data: Product}) => {
    const cart = useCart();
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
      setIsMounted(true);
    }, [])

    if(!isMounted) return null;

  return (
    <div>
        <h1 className='text-3xl font-semibold text-gray-900'>{data?.name}</h1>
        <div className='mt-3 flex items-end justify-between'>
            <p className='text-2xl text-gray-900'>
                <Currency price={data?.price} />
            </p>
        </div>
        <hr className='my-4' />
        <div className='flex flex-col gap-y-6'>
            <div className='flex items-center gap-x-6'>
                <h3 className='font-semibold text-black'>Size:</h3>
                <div>
                    {data?.size?.name}
                </div>
            </div>
            <div className='flex items-center gap-x-6'>
                <h3 className='font-semibold text-black'>Color:</h3>
                <div className='w-8 h-8 rounded-full border' style={{background: `${data?.color?.value}`}}  />
            </div>
        </div>
        <hr className='my-4' />
        <div className='flex items-center gap-x-4 bg-slate-700 border w-fit py-2 px-3 rounded-2xl hover:scale-110 cursor-pointer hover:opacity-75'>
            <span className='text-white font-semibold text-xl'>Add to cart</span>
            <IconButton 
                 onClick={()=>cart.addItem(data)}
                 className='bg-inherit text-white hover:scale-100'
                 icon={<ShoppingCart size={20} className='text-gray-600' />}
            />
        </div>
    </div>
  )
}

export default ProductInfo