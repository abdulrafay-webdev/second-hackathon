import React from 'react';

const MobileSearch = () => {
  return (
    <div className="w-full flex items-center gap-4 mx-2">
      <div className="w-full flex border rounded-lg items-center px-3 bg-white py-3 justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L20 20" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <input
          type="text"
          className="w-full text-sm ml-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          placeholder="Search something here"
        />
      </div>
      <button className="">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="47" height="47" rx="9.5" stroke="#C3D4E9" stroke-opacity="0.4"/>
<path d="M34 18.5H28" stroke="#596780" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18.5H14" stroke="#596780" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22C23.933 22 25.5 20.433 25.5 18.5C25.5 16.567 23.933 15 22 15C20.067 15 18.5 16.567 18.5 18.5C18.5 20.433 20.067 22 22 22Z" stroke="#596780" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34 29.5H30" stroke="#596780" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 29.5H14" stroke="#596780" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26 33C27.933 33 29.5 31.433 29.5 29.5C29.5 27.567 27.933 26 26 26C24.067 26 22.5 27.567 22.5 29.5C22.5 31.433 24.067 33 26 33Z" stroke="#596780" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
    </div>
  );
};

export default MobileSearch;