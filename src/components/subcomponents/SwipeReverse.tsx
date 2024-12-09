import React from 'react'
import Link from 'next/link';
import CarCard from '@/components/subcomponents/CarCard';
import { client } from '../../../sanity/lib/client';


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

async function SwipeReverse() {

  const productData = await Data()

  return (
    <div className='sm:p-10 lg:px-16 px-6 my-4'>
      <div className='text-base flex flex-row justify-between pb-3 '>
      <p className='text-gray-950 opacity-60 font-semibold'>Recent Car</p>
      <Link href={"/Products"}>
      <p className='text-blue-600 font-semibold'>View All</p>
      </Link>
      </div>
      <div>
      
      <div className='flex flex-row-reverse'>
      <div className="carousel carousel-center rounded-box ">
      <div className="carousel-item gap-4 md:gap-8">
      {productData.map((item: any, i: number) => {
        return (
          <div key={i} className='flex flex-row'>
            <CarCard name={item.name} liter={item.Liter} price={item.Price} imgURL={item.ProductImageURL} id={item._id} />
          </div>
        )
      })}
      </div>
      </div>
      </div>

    </div>
    </div>
  )
}

export default SwipeReverse