import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Carousel, IconButton } from "@material-tailwind/react";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const id = params.id;

  const [productData, setProductData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  console.log(
    "%c 🍞 relatedProducts: ",
    "font-size:12px;background-color: #B03734;color:#fff;",
    relatedProducts
  );

  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data || {});
        setImages(data.images || []);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/category/${productData.category}?limit=6`
    )
      .then((response) => response.json())
      .then((data) => {
        setRelatedProducts(data.products || {});
      });
  }, [productData]);

  return (
    <div className="flex flex-col gap-19">
      <div className="grid grid-cols-2 mt-14">
        {/* Carousel */}
        <Carousel
          className="w-[600px]"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="purple"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="purple"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {images.map((image, index) => (
            <div key={index} className="h-[500px]">
              <img
                src={image}
                alt="image 1"
                className="object-fill w-full h-full "
              />
            </div>
          ))}
        </Carousel>

        {/* Details */}
        <div className="ml-10">
          {/* Price and description */}
          <div className=" flex flex-col gap-2">
            <p className="text-sm uppercase text-gray-800 font-semibold">
              {productData.category}
            </p>
            <h1 className="text-3xl font-bold">{productData.title}</h1>
            <div className="flex gap-1 items-end">
              <p className="text-[24px] font-bold ">${productData.price}</p>
              <p className="text-[20px] font-bold ">
                ({productData.discountPercentage}% off)
              </p>
            </div>
            <p>{productData.description}</p>
            <p className="text-sm uppercase text-gray-800 font-semibold">
              Rating : {productData.rating} / 5
            </p>
            <p className="text-sm uppercase text-gray-800 font-semibold">
              Brand : {productData.brand}
            </p>
          </div>

          {/* color */}
          <div className="flex flex-col my-6">
            <p className="text-sm uppercase text-gray-800 font-bold">Color</p>
            <div className="flex justify-start items-center gap-2 mt-4">
              <div className="p-2 w-[120px] border border-gray-500 flex justify-center ">
                <p>Red</p>
              </div>
              <div className="p-2 w-[120px] border border-gray-500 flex justify-center ">
                <p>Orange</p>
              </div>
              <div className="p-2 w-[120px] border border-gray-500 flex justify-center ">
                <p>Blue</p>
              </div>
            </div>
          </div>

          <hr />

          {/* Add to cart */}
          <div className="flex justify-start items-center my-6 gap-5">
            <div className="flex ">
              {count <= 0 ? (
                <button
                  className="p-2  w-[40px] border border-gray-500"
                  onClick={() => setCount(count - 1)}
                  disabled
                >
                  -
                </button>
              ) : (
                <button
                  className="p-2  w-[40px] border border-gray-500"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
              )}

              <p className="p-2 w-[40px] border border-gray-500 text-center">
                {count}
              </p>
              <button
                className="p-2 w-[40px] border border-gray-500"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-purple-200 text-white px-4 py-2" disabled>
              Add to cart
            </button>
          </div>

          <hr />

          {/* sku */}
          <div className="mt-2 flex justify-start items-center gap-4">
            <p className="text-sm uppercase text-gray-800 font-semibold">
              SKU : {productData.stock}
            </p>
            <p className="text-sm uppercase text-gray-800 font-semibold">
              category : {productData.category}
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="my-10">
        <p className="text-3xl font-bold my-10 text-gray-800">
          Related Products
        </p>
        <button onClick={() => handleClick()}>
          <div className="grid grid-cols-3 justify-between gap-7">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </button>
      </div>
    </div>
  );
}
