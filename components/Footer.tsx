import React from 'react'

function Footer() {
  return (
    <div className='border-t bg-white'>
      <div className='mx-auto py-10'>
        <p className='text-center text-md text-black' >&copy; {new Date().getFullYear()} quicky, Inc. all rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
