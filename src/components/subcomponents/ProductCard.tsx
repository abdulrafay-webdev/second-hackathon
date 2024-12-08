import Image from "next/image";
import { FaGasPump, FaCogs, FaUser } from "react-icons/fa";
import Button from "./Button";

const ProductCard = (props:any) => {
  return (
//     <div className="bg-white shadow-md rounded-lg p-4 w-72">
//       {/* Header */}
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="text-lg font-bold text-gray-800">All New Rush</h3>
//           <p className="text-sm text-gray-500">SUV</p>
//         </div>
//         <button className="text-gray-400">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//           </svg>
//         </button>
//       </div>
// <div className="grid grid-cols-2 sm:grid-cols-none">
//       {/* Image */}
//       <div className="flex justify-center mb-4">
//       <Image
//           src={require("../images/Car.png")}
//           alt="All New Rush"
//           className="w-56 h-auto object-contain"
//         />
//       </div>

//       {/* Features */}
//       <div className="flex flex-col gap-1 sm:flex-row pl-4 justify-between text-sm text-gray-600 mb-4">
//         <div className="flex items-center">
//           <FaGasPump className="mr-1" />
//           <span>70L</span>
//         </div>
//         <div className="flex items-center">
//           <FaCogs className="mr-1" />
//           <span>Manual</span>
//         </div>
//         <div className="flex items-center">
//           <FaUser className="mr-1" />
//           <span>6 People</span>
//         </div>
//       </div>

//       </div>

//       {/* Price and Button */}
//       <div className="flex justify-between items-center">
//         <div>
//           <p className="text-lg font-bold text-gray-800">$72.00/day</p>
//           <p className="text-sm text-gray-400 line-through">$80.00</p>
//         </div>
//         <button className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600">
//           Rental Now
//         </button>
//       </div>
//     </div>


<div className="bg-white shadow-lg rounded-lg p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="md:text-lg text-base font-bold text-gray-800">{props.name}</h3>
          <p className="text-sm text-gray-500">sports</p>
        </div>
        <button className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

<div className="grid grid-cols-2 sm:grid-cols-none">
      {/* Image */}
      <div className="flex justify-center w-full my-4">
        <Image
          src={props.imgURL}
          alt="Car"
          width={500} // Desired width
          height={500} // Desired height
          layout="responsive" // Maintain aspect ratio
          className="w-full scale-105 mb-7 h-full object-contain"
        />
      </div>

      {/* Features */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <FaGasPump className="mr-1" />
          <span>{props.Liter}L</span>
        </div>
        <div className="flex items-center">
          <FaCogs className="mr-1" />
          <span>Manual</span>
        </div>
        <div className="flex items-center">
          <FaUser className="mr-1" />
          <span>2 People</span>
        </div>
      </div>

      </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center">
        <p className="md:text-lg text-base font-bold text-gray-800">${props.price}.00/day</p>
        <Button>Rent Now</Button>
      </div>
    </div>




  );
};

export default ProductCard;
