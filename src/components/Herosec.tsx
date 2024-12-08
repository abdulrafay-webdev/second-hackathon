import React from 'react'
import Button from './subcomponents/Button'

const Herosec = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 sm:py-8 sm:p-10 lg:px-16 px-6">
  <div className='ad1 -mt-24 sm:-mt-0 bg-blue-400 aspect-video rounded-xl'>
<div className='lg:w-[50%] w-full flex flex-col gap-3 p-3 lg:gap-4 lg:p-6'>
<h1 className='sm:lg lg:text-3xl text-base text-white font-semibold'>The Best Platform for Car Rental</h1>
<p className='lg:text-base sm:text-sm text-[12px] text-white'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
<Button>Rental Car</Button>
</div>
  </div>


  <div className='ad2 sm:block hidden bg-blue-600 sm:-mt- aspect-video rounded-xl'>
<div className='lg:w-[50%] w-full flex flex-col gap-3 p-3 lg:gap-4 lg:p-6'>
<h1 className='sm:lg lg:text-3xl text-base text-white font-semibold'>The Best Platform for Car Rental</h1>
<p className='lg:text-base sm:text-sm text-[12px] text-white'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
<Button>Rental Car</Button>
</div>
  </div>

</div>
  )
}

export default Herosec


