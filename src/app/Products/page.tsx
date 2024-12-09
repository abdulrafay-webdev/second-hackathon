import React from 'react'
import { client } from '../../../sanity/lib/client';
import ProductCard from '@/components/subcomponents/ProductCard';
import Bottom from '@/components/subcomponents/Bottom';
import PickUp from '@/components/Pickup';
import Sidebar from '@/components/subcomponents/Sidebar';


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
      <div className='hidden sm:block w-1/4 bg-white'>
        <Sidebar />
      </div>
      {/* content  */}
      <div className='w-full sm:w-3/4 bg-gray-100'>

        <PickUp />

        <div className='w-full sm:p-10 lg:px-16 px-6'>

          <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 md:gap-8'>
            {productData.map((item: any, i: number) => {
              return (
                <div key={i} className='flex flex-row'>
                  <ProductCard name={item.name} liter={item.Liter} price={item.Price} imgURL={item.ProductImageURL} id={item._id}/>
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