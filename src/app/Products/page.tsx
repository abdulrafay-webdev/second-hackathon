import React from 'react'
import { client } from '../../../sanity/lib/client';
import ProductCard from '@/components/subcomponents/ProductCard';
import Bottom from '@/components/subcomponents/Bottom';
import PickUp from '@/components/Pickup';


async function Data() {
  const Product = await client.fetch(`*[_type == "TopProducts"] {
  name,
  Price,
  _id,
  Liter,
  LongDescription,
  "ProductImageURL": ProductImage.asset->url
}`)
  return Product;
}

async function Product() {

  const productData = await Data()


  return (
    <div className='w-full flex flex-row '>

      {/* sidebar  */}
      <div className='hidden sm:block w-1/4 bg-white'>

        <div className="w-full p-4 rounded-md">
          {/* Type Section */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-950 opacity-60 mb-3">Type</h4>
            <div className="space-y-2">
              {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type, index) => (
                <label key={index} className="flex items-center space-x-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 my-3 text-lg text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <span>
                    {type} <span className="text-gray-400">({Math.floor(Math.random() * 20) + 10})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Section */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-950 opacity-60 mb-3">Capacity</h4>
            <div className="space-y-2">
              {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity, index) => (
                <label key={index} className="flex items-center space-x-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 my-3 text-lg text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <span>
                    {capacity} <span className="text-gray-400">({Math.floor(Math.random() * 20) + 10})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div>
            <h4 className="text-sm font-bold text-gray-950 opacity-60 mb-3">Price</h4>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="0"
                max="100"
              />
              <span className="text-gray-600">Max. $100</span>
            </div>
          </div>
        </div>


      </div>


      {/* content  */}
      <div className='w-full sm:w-3/4 bg-gray-100'>

        <PickUp />

        <div className='w-full sm:p-10 lg:px-16 px-6'>




          <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 md:gap-8'>
            {productData.map((item: any, i: number) => {
              return (
                <div key={i} className='flex flex-row'>
                  <ProductCard name={item.name} liter={item.Liter} price={item.Price} imgURL={item.ProductImageURL} />
                </div>
              )
            })}
          </div>
        </div>

        <Bottom />

      </div>


    </div>
  )
}

export default Product