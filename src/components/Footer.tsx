import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    


        <footer className="text-gray-600 bg-white body-font w-full px-16 py-20">
  <div className="container mb-8 mx-auto justify-between w-full flex flex-wrap border-b-2 md:items-center lg:items-start md:flex-row md:flex-nowrap flex-col">
   
   
    <div className="md:w-2/5 w-full flex-shrink-0 md:mx-0 mx-auto text-left md:text-left">
      <a className="flex title-font font-medium items-center  md:justify-start justify-center text-gray-900">
        <span className="text-2xl text-left text-blue-600 font-bold">MORENT</span>
      </a>
      <p className="mt-2 w-72 text-sm text-left text-gray-500">Our vision is to provide convenience and help increase your sales business.</p>
    </div>



    <div className="md:h-3/5 w-full flex-grow flex-wrap justify-end  flex flex-row md:pl-20  md:mt-0 mt-10 md:text-left text-center">
      
      {/* about  */}

      <div className="w-fit px-4">
        <h2 className="title-font  text-gray-900 tracking-widest text-xl font-semibold mb-5">About</h2>
        <nav className="list-none mb-10 flex flex-col text-base gap-6">
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">How It Works</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Featured</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Partenerships</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Business Relations</a>
          </li>
        </nav>
      </div>
      
      {/* commiunity  */}

      <div className="w-fit px-4">
        <h2 className="title-font  text-gray-900 tracking-widest text-xl font-semibold mb-5">Community</h2>
        <nav className="list-none mb-10 flex flex-col text-base gap-6">
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Events</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Blogs</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Podcasts</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Invite a Friend</a>
          </li>
        </nav>
      </div>

      {/* social  */}

      <div className="w-fit px-4">
        <h2 className="title-font  text-gray-900 tracking-widest text-xl font-semibold mb-5">Social</h2>
        <nav className="list-none mb-10 flex flex-col text-base gap-6">
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Discord</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Instagram</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Twitter</a>
          </li>
          <li>
            <a className="text-gray-950 opacity-[60%] hover:text-gray-800">Facebook</a>
          </li>
        </nav>
      </div>


    </div>
  </div>





  <div className="bg-white">
    <div className="container mx-auto py-4 text-base font-semibold text-gray-900 px-5 flex justify-between flex-wrap flex-col sm:flex-row">
        <div>
      <p>©2022 MORENT. All rights reserved</p>
        </div>
        <div className='flex gap-10'>
            <Link href={""}>Privacy & Policy</Link>
            <Link href={""}>Terms & Conditions</Link>
        </div>
    </div>
  </div>



</footer>








  )
}

export default Footer