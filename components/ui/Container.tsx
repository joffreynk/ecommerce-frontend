import React from 'react'

function Container({children}: {children: React.ReactNode}) {
  return (
    <div className='mx-auto max-w-[1366px]'>
      {children}
    </div>
  )
}

export default Container
