import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between mb-10 p-4 border  items-center border-gray-300">
        <Link to={"/"} className="rounded-xl px-4 py-2">
          <img src="/logo1.png" alt="logo" className="h-[35px]" />
        </Link>
        <div className="flex gap-4">
          <Link to={"/"} className="rounded-xl px-4 py-2">
            Home
          </Link>
          <Link to={"/search"} className="bg-purple-400 text-white px-4 py-2">
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
