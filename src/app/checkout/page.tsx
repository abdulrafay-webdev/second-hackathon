import React from "react";
import checkoutimg from '@/components/images/Car.png'
import Image from "next/image";

const RentalForm = () => {
    return (

        <div className="flex flex-col lg:flex-row-reverse justify-center items-start gap-8 sm:p-10 lg:px-16 px-6 bg-gray-50">

            {/* Rental Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md lg:w-1/3 w-full">
                <h2 className="text-[16px] lg:text-[20px] font-bold mb-6">Rental Summary</h2>
                {/* Car Details */}
                <div className="flex items-center justify-between gap-4 mb-6">
                    <Image src={checkoutimg}
                        alt="Nissan GT - R"
                        className="w-[50%] object-cover rounded-md"
                    />
                    <div>
                        <h3 className="text-[16px] lg:text-[18px] font-bold">Nissan GT - R</h3>
                        <p className="text-[14px] text-gray-600">⭐⭐⭐⭐⭐ - 400 Reviews</p>
                    </div>
                </div>
                {/* Price Breakdown */}
                <div className="flex justify-between text-[14px] lg:text-[16px] font-medium text-gray-700 mb-4">
                    <span>Subtotal</span>
                    <span>$80.00</span>
                </div>
                <div className="flex justify-between text-[14px] lg:text-[16px] font-medium text-gray-700 mb-4">
                    <span>Tax</span>
                    <span>$0</span>
                </div>
                {/* Promo Code */}
                <div className="flex items-center gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Apply promo code"
                        className="border p-2 rounded-md w-full"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Apply
                    </button>
                </div>
                {/* Total Price */}
                <div className="flex justify-between text-[16px] lg:text-[20px] font-bold text-gray-800">
                    <span>Total Rental Price</span>
                    <span>$80.00</span>
                </div>
                <p className="text-[12px] text-gray-500 mt-2">*Overall price includes all discounts.</p>
            </div>


            {/* Form */}
            <div className="w-full lg:w-2/3 rounded-md">
                <form>
                    {/* Billing Info */}
                    <div className="mb-8 bg-white p-4 rounded-lg">
                        <h2 className="text-[16px] lg:text-[20px] font-bold mb-4">Billing Info</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="border bg-gray-50 p-2 w-full rounded-md"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder="Phone number"
                                    className="border bg-gray-50 p-2 w-full rounded-md"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="address"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Address
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="Address"
                                    className="border bg-gray-50 p-2 w-full rounded-md"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="city"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Town/City
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="Town or city"
                                    className="border bg-gray-50 p-2 w-full rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Rental Info */}
                    <div className="mb-8 bg-white p-4 rounded-lg">
                        <h2 className="text-[16px] lg:text-[20px] font-bold mb-4">Rental Info</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="pickup-location"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Pick-Up Location
                                </label>
                                <select
                                    id="pickup-location"
                                    className="border bg-gray-50 p-2 w-full rounded-md mb-4"
                                >
                                    <option>Select your city</option>
                                </select>
                                <label
                                    htmlFor="pickup-time"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Pick-Up Time
                                </label>
                                <input
                                    id="pickup-time"
                                    type="time"
                                    className="border bg-gray-50 p-2 w-full rounded-md mb-4"
                                />
                                <label
                                    htmlFor="pickup-date"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Pick-Up Date
                                </label>
                                <input
                                    id="pickup-date"
                                    type="date"
                                    className="border bg-gray-50 p-2 w-full rounded-md"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="dropoff-location"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Drop-Off Location
                                </label>
                                <select
                                    id="dropoff-location"
                                    className="border bg-gray-50 p-2 w-full rounded-md mb-4"
                                >
                                    <option>Select your city</option>
                                </select>
                                <label
                                    htmlFor="dropoff-time"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Drop-Off Time
                                </label>
                                <input
                                    id="dropoff-time"
                                    type="time"
                                    className="border bg-gray-50 p-2 w-full rounded-md mb-4"
                                />
                                <label
                                    htmlFor="dropoff-date"
                                    className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                >
                                    Drop-Off Date
                                </label>
                                <input
                                    id="dropoff-date"
                                    type="date"
                                    className="border bg-gray-50 p-2 w-full rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-8 bg-white p-4 rounded-lg">
                        <h2 className="text-[16px] lg:text-[20px] font-bold mb-4">Payment Method</h2>
                        <div className="flex flex-col-reverse gap-8">
                            <div className="flex flex-col gap-4 mb-6">
                                <label className="flex items-center">
                                    <input type="radio" name="payment" className="mr-2 bg-gray-50" />
                                    Credit Card
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="payment" className="mr-2 bg-gray-50" />
                                    PayPal
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="payment" className="mr-2 bg-gray-50" />
                                    Bitcoin
                                </label>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="card-number"
                                        className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                    >
                                        Card Number
                                    </label>
                                    <input
                                        id="card-number"
                                        type="text"
                                        placeholder="Card number"
                                        className="border p-2 bg-gray-50 rounded-md w-full"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="expiry-date"
                                        className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                    >
                                        Expiration Date
                                    </label>
                                    <input
                                        id="expiry-date"
                                        type="text"
                                        placeholder="MM/YY"
                                        className="border bg-gray-50 p-2 rounded-md w-full"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="cvv"
                                        className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                    >
                                        CVV
                                    </label>
                                    <input
                                        id="cvv"
                                        type="text"
                                        placeholder="CVV"
                                        className="border bg-gray-50 p-2 rounded-md w-full"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="cardholder-name"
                                        className="block text-[14px] lg:text-[16px] font-semibold mb-[12px] lg:mb-[16px]"
                                    >
                                        Cardholder Name
                                    </label>
                                    <input
                                        id="cardholder-name"
                                        type="text"
                                        placeholder="Name on card"
                                        className="border bg-gray-50 p-2 rounded-md w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Confirmation Section */}
                    <div className="mb-8 bg-white flex flex-col gap-4 p-4 rounded-lg">
                        <h2 className="text-[16px] lg:text-[20px] font-bold mb-4">Confirmation</h2>
                        <div className="flex items-center gap-2 bg-gray-50 py-2 px-3">
                            <input type="checkbox" id="agree-terms" className="w-4 h-4" />
                            <label
                                htmlFor="agree-terms"
                                className="text-[14px] lg:text-[16px] font-medium"
                            >
                                I agree with sending an Marketing and newsletter emails. No spam, promissed!
                            </label>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 py-2 px-3">
                            <input type="checkbox" id="agree-terms" className="w-4 h-4" />
                            <label
                                htmlFor="agree-terms"
                                className="text-[14px] lg:text-[16px] font-medium"
                            >
                                I agree with our terms and conditions and privacy policy.    </label>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 w-full bg-blue-600 text-white text-[14px] lg:text-[16px] font-bold py-2 px-4 rounded-md hover:bg-blue-700"
                        >
                            Confirm and Pay
                        </button>
                    </div>

                </form>
            </div>
        </div>



    );
};

export default RentalForm;
