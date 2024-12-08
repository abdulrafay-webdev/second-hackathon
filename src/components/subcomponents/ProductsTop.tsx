import React from 'react'
import Link from 'next/link'

function ProductsTop() {
  return (
    <div className='sm:p-10 lg:px-16 px-6'>
        <div className='text-base flex flex-row justify-between pb-3 '>
        <p className='text-gray-950 opacity-60 font-semibold'>Recommendation Car</p>
        <Link href={"/Products"}>
      <p className='text-blue-600 font-semibold'>View All</p>
      </Link>
      </div>
      </div>
  )
}

export default ProductsTop