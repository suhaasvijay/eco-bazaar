import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="bg-purple-100 flex justify-center mt-[100px] flex-col items-center">
        <div className="pt-[100px] pb-[60px] flex flex-col items-center gap-10 w-full">
          {/* Subscribe text */}
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-bold text-xl">
              Subscribe To Get Offers In Your Inbox
            </h1>
            <h2 className=" text-gray-800 text-base">
              You just need to give your e-mail to get more exciting Offers
            </h2>
          </div>

          {/* Subscribe input and button */}
          <div className="flex gap-10 justify-center w-[700px]">
            <input
              className=" w-full bg-violet-100 text-lg border-2 border-gray-300 p-3 placeholder-purple-400 focus:text-violet-950 focus:border-purple-300 focus:outline-none focus:ring-0"
              placeholder="Search here..."
            />
            <button
              className="p-3 bg-purple-400 text-white font-bold "
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
              src="/public/social/facebook.svg"
              className="w-[30px] h-[30px]"
              alt=""
            />
            <img
              src="/public/social/instagram.svg"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <img
              src="/public/social/twitter.svg"
              alt=""
              className="w-[30px] h-[30px]"
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
