import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-purple-100 flex justify-center mt-[100px] flex-col items-center p-3">
        <div className="md:pt-[100px] pt-[50px] pb-[60px] flex flex-col items-center gap-10 w-full">
          {/* Subscribe text */}
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl font-bold">
              Subscribe To Get Offers In Your Inbox
            </h1>
            <h2 className="text-base text-gray-800 ">
              You just need to give your e-mail to get more exciting Offers
            </h2>
          </div>

          {/* Subscribe input and button */}
          <div className="flex gap-5 md:gap-10 justify-center w-[300px] md:w-[500px] lg:w-[700px]">
            <input
              className="w-full p-3 text-lg placeholder-purple-400 border-2 border-gray-300 bg-violet-100 focus:text-violet-950 focus:border-purple-300 focus:outline-none focus:ring-0"
              placeholder="Search here..."
            />
            <button
              className="p-3 font-bold text-white bg-purple-400 "
              onClick={() => handleClear()}
            >
              Subscribe
            </button>
          </div>

          {/* Categories */}
          <div className="flex gap-10">
            <p className="text-gray-800">Phone</p>
            <p className="text-gray-800">Laptops</p>
            <p className="text-gray-800">Shades</p>
            <p className="text-gray-800">Shoes</p>
          </div>

          {/* Social */}
          <div className="flex gap-10">
            <img
              src="/social/facebook.svg"
              className="w-[30px] h-[30px]"
              alt="facebook"
            />
            <img
              src="/social/instagram.svg"
              className="w-[30px] h-[30px]"
              alt="instagram"
            />
            <img
              src="/social/twitter.svg"
              className="w-[30px] h-[30px]"
              alt="twitter"
            />
          </div>
        </div>
      </div>
      <div className="bg-black h-[100px] text-white items-center flex justify-center">
        Copyright © 2024 Eco Bazaar
      </div>
    </div>
  );
}
