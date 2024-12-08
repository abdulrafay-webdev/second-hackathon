import React from "react";

const PickUp = () => {
  return (

    <div className="sm:p-10 lg:px-16 px-6 w-full flex md:flex-row justify-center items-center flex-col md:mt-0 mt-12">

    {/* // pickup  */}


    <div className="bg-white rounded-md shadow-md p-4 md:-mb-0 -mb-11 w-[98%] md:w-[45%] ">
      <div className="flex items-center mb-4">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="8" fill="#3563E9" fill-opacity="0.3"/>
<circle cx="8" cy="8" r="4" fill="#3563E9"/>
</svg>

        <h2 className="sm:text-lg text-base ml-2 font-semibold text-gray-800">Pick - Up</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-gray-600 font-bold sm:text-lg text-base mb-1 ">Locations</h3>
          <div className="flex items-center">
            <span className="text-gray-800">Semarang</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-gray-600 sm:text-lg text-base font-bold mb-1">Date</h3>
          <div className="flex items-center">
            <span className="text-gray-800 sm:text-sm text-xs">20 July 2022</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-gray-600 sm:text-lg text-base font-bold mb-1">Time</h3>
          <div className="flex items-center">
            <span className="text-gray-800">07:00</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>


{/* button  */}
<div className="z-10">

<svg width="140" height="122" viewBox="0 0 140 122" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_35_6911)">
<rect x="40" y="82" width="42" height="60" rx="10" transform="rotate(-90 40 82)" fill="#103293" fill-opacity="0.28"/>
</g>
<rect x="40" y="82" width="60" height="60" rx="10" transform="rotate(-90 40 82)" fill="#3563E9"/>
<path d="M65.1612 43.8363V57.4541" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.0837 47.9326L65.1615 43.836L69.2393 47.9326" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75.089 60.167V46.5492" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M79.167 56.0713L75.0892 60.168L71.0114 56.0713" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_f_35_6911" x="0" y="0" width="140" height="122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_35_6911"/>
</filter>
</defs>
</svg>

</div>


{/* drop off  */}

<div className="bg-white rounded-md shadow-md p-4 md:-mt-0 -mt-14 w-[98%] md:w-[45%] ">
      <div className="flex items-center mb-4">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="8" fill="#3563E9" fill-opacity="0.3"/>
<circle cx="8" cy="8" r="4" fill="#3563E9"/>
</svg>

        <h2 className="sm:text-lg text-base ml-2 font-semibold text-gray-800">Drop - Off</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-gray-600 font-bold sm:text-lg text-base mb-1 ">Locations</h3>
          <div className="flex items-center">
            <span className="text-gray-800">Semarang</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-gray-600 sm:text-lg text-base font-bold mb-1">Date</h3>
          <div className="flex items-center">
            <span className="text-gray-800 sm:text-sm text-xs">20 July 2022</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-gray-600 sm:text-lg text-base font-bold mb-1">Time</h3>
          <div className="flex items-center">
            <span className="text-gray-800">07:00</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>


</div>

  );
};

export default PickUp;