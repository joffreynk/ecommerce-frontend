import { Product } from '@/types'
import React from 'react'
import Currency from './ui/Currency'
import IconButton from './ui/IconButton'

const ProductInfo = ({data}: {data: Product}) => {
  return (
    <div>
        <h1 className='text-3xl font-semibold text-gray-900'>{data.name}</h1>
        <div className='mt-3 flex items-end justify-between'>
            <p className='text-2xl text-gray-900'>
                <Currency price={data.price} />
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
                <div className='w-6 h-6 rounded-full border'  />
            </div>
        </div>
        <hr className='my-4' />
        <div className='flex items-center gap-x-4'>
            <span>Add to cart</span>
            <IconButton  />
        </div>
    </div>
  )
}

export default ProductInfo