import React from 'react'
import { client } from '../../sanity/lib/client';
import ProductCard from './subcomponents/ProductCard';


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

async function Products() {

  const productData = await Data()


  return (
    <div className='w-full sm:p-10 lg:px-16 px-6'>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
      
    
      {productData.map((item: any, i: number) => {
        return (
          <div key={i} className='flex flex-row'>
            <ProductCard name={item.name} liter={item.Liter} price={item.Price} imgURL={item.ProductImageURL} id={item._id} />
          </div>
        )
      })}
      
      </div>
    </div>
  )
}

export default Products