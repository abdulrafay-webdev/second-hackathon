import { client } from "../../../../sanity/lib/client";

import ProductDetail from "@/components/ProductDetail";
import Reviews from "@/components/subcomponents/Reviews";
import Sidebar from "@/components/subcomponents/Sidebar";
import Swipe from "@/components/subcomponents/Swipe";
import SwipeReverse from "@/components/subcomponents/SwipeReverse";


interface PageProps {
  params: {
    id: string;
  };
}

export default async function Product({ params }: PageProps) {

  const id = params.id;

  async function Data() {
    const Product = await client.fetch(`*[_id == "${id}"] {
  name,
  Price,
  _id,
  Liter,
  LongDescription,
  "ProductImageURL": ProductImage.asset->url
}`)
    return Product;
  }
  const productData = await Data()

  return (

    <div className='w-full flex flex-row '>
      <div className='hidden sm:block w-1/4 bg-white'>
        <Sidebar />
      </div>

      {/* content  */}
      <div className='w-full sm:w-3/4 bg-gray-100'>

        {productData.map((item: any, i: number) => {
          return (
            <div key={i}>
              <ProductDetail name={item.name} price={item.Price} Liter={item.Liter} description={item.LongDescription} imgURL={item.ProductImageURL} />
            </div>
          )
        })}
        <Reviews/>
        <SwipeReverse/>
        <Swipe/>
      </div>
      
    </div>
  );
}





// import ProductDetail from "@/components/ProductDetail";
// import Sidebar from "@/components/subcomponents/Sidebar";

// export default async function Product() {

//   return (
//     <div className='w-full flex flex-row '>
//     <div className='hidden sm:block w-1/4 bg-white'>
//       <Sidebar/>
//       </div>

//       {/* content  */}
//       <div className='w-full sm:w-3/4 bg-gray-100'>

// <ProductDetail name="Nissan GTR" price={66} Liter={55} description="You define your project’s breakpoints in the theme.screens section of your tailwind.config.js file. The keys become your responsive modifiers (like md:text-center), and the values are the min-width where that breakpoint should start." />

//       </div>


//     </div>
//   );
// }


