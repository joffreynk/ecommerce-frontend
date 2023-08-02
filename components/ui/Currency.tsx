import { formatter } from '@/utils'
import React, { useEffect, useState } from 'react'

function Currency({price}: {price: any}) {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
      setIsMounted(true)
    }, [])
    if(!isMounted) return null;
    
  return ( <span className='font-semibold self-center'>{formatter.format(price)}</span>)
}

export default Currency