import Image from "next/image";
import { FaGasPump, FaCogs, FaUser } from "react-icons/fa";
import Button from "./Button";
import Link from "next/link";

const ProductCard = (props:any) => {
  return (



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
      <Link href={`/Products/${props.id}`}>
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
      </Link>
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
        <Link href={'/checkout'}><Button>Rent Now</Button></Link>
      </div>
    </div>




  );
};

export default ProductCard;
