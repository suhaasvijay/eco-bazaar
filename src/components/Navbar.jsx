import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/search");
  // };

  return (
    <div>
      <div className="flex justify-between mb-10 p-4 border rounded-xl items-center border-gray-300">
        <p>Navbar</p>
        <div className="flex gap-4">
          <Link to={"/"} className="rounded-xl px-4 py-2">
            Home
          </Link>
          <Link
            to={"/search"}
            className="bg-black rounded-xl text-white px-4 py-2"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
