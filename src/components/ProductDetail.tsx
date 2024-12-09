import Image from 'next/image'
import React from 'react'
import catalogue1 from '@/components/images/View 2.png'
import catalogue2 from '@/components/images/View 3.png'
import Link from 'next/link'
import Button from './subcomponents/Button'


function ProductDetail(props:any) {
  return (
    <div>
        
        <div className="flex flex-col lg:flex-row  p-6 rounded-lg gap-6">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <div className="ad3 bg-blue-500 text-white p-6 rounded-lg relative">
          <h2 className="text-xl font-bold">Sports car with the best design and acceleration</h2>
          <p className="text-sm mt-2">Safety and comfort while driving a futuristic and elegant sports car</p>
          <Image
            src={props.imgURL}// Replace with your image link
            alt="Sports Car"
            width={500} // Desired width
          height={500} // Desired height
            className="w-full mt-4 rounded-lg"
          />
        </div>
        <div className="flex justify-between mt-4 gap-2">
          <Image
            src={props.imgURL} // Replace with thumbnail links
            alt="Thumbnail 1"
            width={500} // Desired width
          height={500} // Desired height
            className="ad3 bg-blue-600 w-1/3 rounded-lg cursor-pointer hover:opacity-80"
          />
          <Image
            src={catalogue1}
            alt="Thumbnail 2"
            className="w-1/3 rounded-lg cursor-pointer hover:opacity-80"
          />
          <Image
            src={catalogue2}
            alt="Thumbnail 3"
            className="w-1/3 rounded-lg cursor-pointer hover:opacity-80"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 bg-white p-6 rounded-lg flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{props.name} </h3>
          <p className="text-sm text-gray-500 mt-1">
            ⭐⭐⭐⭐ 440+ Reviewer
          </p>
          <p className="text-gray-600 mt-4">
           {props.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm mt-6">
          <p>
            <span className="font-bold">Type Car:</span> Sport
          </p>
          <p>
            <span className="font-bold">Capacity:</span> 2 Person
          </p>
          <p>
            <span className="font-bold">Steering:</span> Manual
          </p>
          <p>
            <span className="font-bold">Gasoline:</span> {props.Liter}L
          </p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-lg font-bold text-gray-800">${props.price}.00/day</p>
          </div>
          <Link href={'/checkout'}><Button>Rent Now</Button></Link>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ProductDetail