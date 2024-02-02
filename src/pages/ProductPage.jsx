import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, IconButton } from "@material-tailwind/react";

export default function ProductPage() {
  const params = useParams();
  const id = params.id;

  const [productData, setProductData] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data || {});
        setImages(data.images || []);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">{productData.title}</h1>
      <p>{productData.description}</p>
      <div className="flex gap-1 items-end">
        <p className="text-xl">Price : {productData.price}</p>
        <p className="text-sm">-{productData.discountPercentage}%</p>
      </div>
      <p>{productData.stock}</p>

      <Carousel
        className="rounded-xl w-[400px]"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="red"
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
            color="red"
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
          <img
            key={index}
            src={image}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </>
  );
}
