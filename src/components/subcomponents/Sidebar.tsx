import React from 'react'

function Sidebar() {
  return (
    
  

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
    <div className="flex items-start gap-2 flex-col space-x-2">
      <input
        type="range"
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        min="0"
        max="100"
      />
      <span className="text-gray-600 text-left">Max. $100</span>
    </div>
  </div>
</div>



  )
}

export default Sidebar