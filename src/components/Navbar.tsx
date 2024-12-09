import React from 'react'
import SearchBar from './subcomponents/SearchBox'
import MobileSearch from './subcomponents/MobileSearch'
import Image from 'next/image'
import profile from './images/profile.png'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className=" bg-white  flex flex-col w-full gap-5 h-36 sm:px-9 px-2 items-center">
      <div className='navbar sm:py-10 flex justify-between w-full'>
        {/* logo  */}
        <div className="flex-1">
          <Link href={'/'} className="btn btn-ghost md:text-4xl text-2xl text-blue-600">MORENT</Link>
          {/* search  */}
          <div className='hidden sm:block xl:ml-16 lg:ml-11 md:ml-8 sm:ml-4'>
            <SearchBar />
          </div>
        </div>

        {/* profile and icons  */}
        <div className="flex lg:gap-5 md:gap-3 sm:gap-2">

          <svg className='hidden sm:block' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.44 13.0996C24.63 13.0996 23.01 13.9796 22 15.3296C20.99 13.9796 19.37 13.0996 17.56 13.0996C14.49 13.0996 12 15.5996 12 18.6896C12 19.8796 12.19 20.9796 12.52 21.9996C14.1 26.9996 18.97 29.9896 21.38 30.8096C21.72 30.9296 22.28 30.9296 22.62 30.8096C25.03 29.9896 29.9 26.9996 31.48 21.9996C31.81 20.9796 32 19.8796 32 18.6896C32 15.5996 29.51 13.0996 26.44 13.0996Z" fill="#596780" />
            <rect opacity="0.8" x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#C3D4E9" stroke-opacity="0.4" />
          </svg>

          <svg className='hidden sm:block' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3399 24.49L28.3399 22.83C28.1299 22.46 27.9399 21.76 27.9399 21.35V18.82C27.9399 16.47 26.5599 14.44 24.5699 13.49C24.0499 12.57 23.0899 12 21.9899 12C20.8999 12 19.9199 12.59 19.3999 13.52C17.4499 14.49 16.0999 16.5 16.0999 18.82V21.35C16.0999 21.76 15.9099 22.46 15.6999 22.82L14.6899 24.49C14.2899 25.16 14.1999 25.9 14.4499 26.58C14.6899 27.25 15.2599 27.77 15.9999 28.02C17.9399 28.68 19.9799 29 22.0199 29C24.0599 29 26.0999 28.68 28.0399 28.03C28.7399 27.8 29.2799 27.27 29.5399 26.58C29.7999 25.89 29.7299 25.13 29.3399 24.49Z" fill="#596780" />
            <path d="M24.8297 30.01C24.4097 31.17 23.2997 32 21.9997 32C21.2097 32 20.4297 31.68 19.8797 31.11C19.5597 30.81 19.3197 30.41 19.1797 30C19.3097 30.02 19.4397 30.03 19.5797 30.05C19.8097 30.08 20.0497 30.11 20.2897 30.13C20.8597 30.18 21.4397 30.21 22.0197 30.21C22.5897 30.21 23.1597 30.18 23.7197 30.13C23.9297 30.11 24.1397 30.1 24.3397 30.07C24.4997 30.05 24.6597 30.03 24.8297 30.01Z" fill="#596780" />
            <rect opacity="0.8" x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#C3D4E9" stroke-opacity="0.4" />
            <circle cx="36.5" cy="7.5" r="5.5" fill="#FF4423" />
          </svg>

          <svg className='hidden sm:block' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.1 19.2204C28.29 19.2204 27.55 17.9404 28.45 16.3704C28.97 15.4604 28.66 14.3004 27.75 13.7804L26.02 12.7904C25.23 12.3204 24.21 12.6004 23.74 13.3904L23.63 13.5804C22.73 15.1504 21.25 15.1504 20.34 13.5804L20.23 13.3904C19.78 12.6004 18.76 12.3204 17.97 12.7904L16.24 13.7804C15.33 14.3004 15.02 15.4704 15.54 16.3804C16.45 17.9404 15.71 19.2204 13.9 19.2204C12.86 19.2204 12 20.0704 12 21.1204V22.8804C12 23.9204 12.85 24.7804 13.9 24.7804C15.71 24.7804 16.45 26.0604 15.54 27.6304C15.02 28.5404 15.33 29.7004 16.24 30.2204L17.97 31.2104C18.76 31.6804 19.78 31.4004 20.25 30.6104L20.36 30.4204C21.26 28.8504 22.74 28.8504 23.65 30.4204L23.76 30.6104C24.23 31.4004 25.25 31.6804 26.04 31.2104L27.77 30.2204C28.68 29.7004 28.99 28.5304 28.47 27.6304C27.56 26.0604 28.3 24.7804 30.11 24.7804C31.15 24.7804 32.01 23.9304 32.01 22.8804V21.1204C32 20.0804 31.15 19.2204 30.1 19.2204ZM22 25.2504C20.21 25.2504 18.75 23.7904 18.75 22.0004C18.75 20.2104 20.21 18.7504 22 18.7504C23.79 18.7504 25.25 20.2104 25.25 22.0004C25.25 23.7904 23.79 25.2504 22 25.2504Z" fill="#596780" />
            <rect opacity="0.8" x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#C3D4E9" stroke-opacity="0.4" />
          </svg>


          {/* profile with dropdown  */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-7 sm:w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src={profile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><Link href={'/dashboard'}>Dashboard</Link></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile search bar  */}
      <div className='px-4 sm:hidden w-full'>
        <MobileSearch />
      </div>
    </div>
  )
}
