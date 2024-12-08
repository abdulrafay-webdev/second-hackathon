import React from 'react'
import Button from './Button'

function Bottom() {
  return (
    <div className='grid grid-cols-3 mt-6 pb-6 sm:p-10 lg:px-16 px-6' >
        <span></span>
        <Button>Show more car</Button>
      <p className='text-gray-950 opacity-60 text-right font-medium self-center text-s'>120 Cars</p>
    </div>
  )
}

export default Bottom