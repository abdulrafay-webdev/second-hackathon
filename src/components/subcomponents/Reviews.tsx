import React from 'react'
import img1 from '@/components/images/Profill.png'
import img2 from '@/components/images/profile.png'
import Image from 'next/image'


function Reviews() {
  return (
<div className='sm:p-10 px-6'>
<div className="bg-white p-6 lg:p-8 rounded-sm shadow-md">
  {/* Header */}
  <div className="flex gap-3 items-center mb-6">
    <h2 className="text-[20px] font-bold text-gray-800">Reviews</h2>
    <span className="text-white bg-blue-600 text-[14px] font-medium px-3 py-1 rounded-md">13</span>
  </div>

  {/* Review Cards */}
  <div className="space-y-6">
    {/* Review 1 */}
    <div className="flex flex-row lg:items-start gap-4">
      {/* Profile Image */}
      <Image
        src={img2}
        alt="Alex Stanton"
        className="w-16 h-16 rounded-full object-cover"
      />
      {/* Review Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[18px] font-bold text-gray-800">Alex Stanton</h3>
          <span className="text-[14px] text-right text-gray-500">21 July 2022 <br />⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-[14px] text-gray-500 mb-3">CEO at Bukalapak</p>
        <p className="sm:text-[16px] text-sm text-gray-700">
          We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
        </p>
      </div>
    </div>

    {/* Review 2 */}
    <div className="flex flex-row lg:items-start gap-4">
      {/* Profile Image */}
      <Image
        src={img1}
        alt="Alex Stanton"
        className="w-16 h-16 rounded-full object-cover"
      />
      {/* Review Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[18px] font-bold text-gray-800">Alex Stanton</h3>
          <span className="text-[14px] text-right text-gray-500">21 July 2022 <br />⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-[14px] text-gray-500 mb-3">CEO at Bukalapak</p>
        <p className="sm:text-[16px] text-sm text-gray-700">
          We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
        </p>
      </div>
    </div>
  </div>

  {/* Show All Button */}
  <div className="text-center mt-8 flex justify-center">
    <button className="text-gray-400 text-[14px] font-medium flex items-center justify-center gap-1">
      Show All <span>&#x25BC;</span>
    </button>
  </div>
</div>
</div>




  )
}

export default Reviews