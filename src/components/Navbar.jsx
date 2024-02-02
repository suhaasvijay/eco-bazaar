import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between p-4 mb-10 border border-gray-300 sm:flex-row gap-y-4">
        <Link to={"/"} className="px-4 py-2 rounded-xl">
          <img src="/logo1.png" alt="logo" className="h-[35px]" />
        </Link>
        <div className="flex gap-4">
          <Link to={"/"} className="px-4 py-2 rounded-xl">
            Home
          </Link>
          <Link to={"/search"} className="px-4 py-2 text-white bg-purple-400">
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
