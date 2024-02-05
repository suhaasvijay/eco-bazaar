import { Carousel, IconButton } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const colors = ["Red", "Yellow", "Purple"];

export default function ProductPage() {
  const params = useParams();
  const id = params.id;

  const [productData, setProductData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);

  //Api call for product based on id
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data || {});
        setImages(data.images || []);
        setLoader(false);
      });
  }, []);

  //Api call for related products
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${productData.category}`)
      .then((response) => response.json())
      .then((data) => {
        setRelatedProducts(data.products || {});
      });
  }, [productData]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return (
    <div className="flex flex-col gap-19">
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 mt-14">
            {/* Carousel */}
            <Carousel
              className="max-w-[600px]"
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
                    className="w-6 h-6"
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
                    className="w-6 h-6"
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
                <div key={index} className="max-h-[500px]">
                  <img
                    src={image}
                    alt="image 1"
                    className="object-fill w-full h-full "
                  />
                </div>
              ))}
            </Carousel>

            {/* Details */}
            <div className="md:ml-10">
              {/* Price and description */}
              <div className="flex flex-col gap-2 ">
                <p className="text-sm font-semibold text-gray-800 uppercase">
                  {productData.category}
                </p>
                <h1 className="text-3xl font-bold">{productData.title}</h1>
                <div className="flex items-end gap-1">
                  <p className="text-[24px] font-bold text-purple-500">
                    ${productData.price}
                  </p>
                  <p className="text-[20px] font-bold ">
                    ({productData.discountPercentage}% off)
                  </p>
                </div>
                <p>{productData.description}</p>
                <p className="text-sm font-semibold text-gray-800 uppercase">
                  Rating : {productData.rating} / 5
                </p>
                <p className="text-sm font-semibold text-gray-800 uppercase">
                  Brand : {productData.brand}
                </p>
              </div>

              {/* color */}
              <div className="flex flex-col my-6">
                <p className="text-sm font-bold text-gray-800 uppercase">
                  Color
                </p>
                <div className="flex items-center justify-start gap-2 mt-4">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className="p-2 w-[120px] border border-gray-500 flex justify-center hover:transform hover:scale-105 cursor-pointer hover:shadow-[0px_0px_20px_rgba(202,_108,_230,_0.6)]"
                    >
                      <p>{color}</p>
                    </div>
                  ))}
                </div>
              </div>

              <hr />

              {/* Add to cart */}
              <div className="flex items-center justify-start gap-5 my-6">
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
                <button className="px-4 py-2 text-white bg-purple-200" disabled>
                  Add to cart
                </button>
              </div>

              <hr />

              {/* sku */}
              <div className="flex items-center justify-start gap-4 mt-2">
                <p className="text-sm font-semibold text-gray-800 uppercase">
                  SKU : {productData.stock}
                </p>
                <p className="text-sm font-semibold text-gray-800 uppercase">
                  category : {productData.category}
                </p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mx-auto my-10">
            <p className="my-10 text-3xl font-bold text-gray-800">
              Related Products
            </p>
            <button onClick={() => handleClick()}>
              <div className="grid justify-between grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-7">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
