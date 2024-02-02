import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;

  return (
    <Link to={`/${product.id}`}>
      <div key={product.id} className=" w-[400px] bg-gray-100 p-3 rounded-lg">
        <img
          src={product.thumbnail}
          alt="productImg"
          className="aspect-auto rounded-lg"
        />
        <p className="text-start font-bold text-2xl pt-3">{product.title}</p>
        <div className="flex gap-1 items-end">
          <p className="text-xl">Price : {product.price}</p>
          <p className="text-sm">-{product.discountPercentage}%</p>
        </div>
      </div>
    </Link>
  );
}
