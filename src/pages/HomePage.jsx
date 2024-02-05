import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import RadioButton from "../components/RadioButton";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loader, setLoader] = useState(true);
  const [category, setCategory] = useState("");

  const itemsPerPage = 9;

  //Api call for all products and product based on category based on the input from the radio button
  useEffect(() => {
    const skip = currentPage * itemsPerPage;
    const url = category
      ? `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=${itemsPerPage}`
      : `https://dummyjson.com/products?skip=${skip}&limit=${itemsPerPage}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
        setLoader(false);
      });
  }, [category, currentPage, itemsPerPage]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex gap-10 mx-auto">
          <RadioButton setCategory={setCategory} category={category} />
          {loader ? (
            <Loader />
          ) : (
            <div>
              {category ? (
                <div className="flex items-center h-[100px]">
                  <p className="text-3xl font-bold text-purple-400">
                    {productsArray.find((item) => item.id === category).name}
                  </p>
                </div>
              ) : (
                <div className="flex items-center h-[100px]">
                  <p className="text-3xl font-bold text-purple-400">
                    All Products
                  </p>
                </div>
              )}
              <div className="flex flex-col mx-auto">
                <div className="grid justify-between grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <Pagination
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

const productsArray = [
  { name: "Smartphones", id: "smartphones" },
  { name: "Laptops", id: "laptops" },
  { name: "Fragrances", id: "fragrances" },
  { name: "Skincare", id: "skincare" },
  { name: "Groceries", id: "groceries" },
  { name: "Home Decoration", id: "home-decoration" },
  { name: "Furniture", id: "furniture" },
  { name: "Tops", id: "tops" },
  { name: "Women's Dresses", id: "womens-dresses" },
  { name: "Women's Shoes", id: "womens-shoes" },
  { name: "Men's Shirts", id: "mens-shirts" },
  { name: "Men's Shoes", id: "mens-shoes" },
  { name: "Men's Watches", id: "mens-watches" },
  { name: "Women's Watches", id: "womens-watches" },
  { name: "Women's Bags", id: "womens-bags" },
  { name: "Women's Jewellery", id: "womens-jewellery" },
  { name: "Sunglasses", id: "sunglasses" },
  { name: "Automotive", id: "automotive" },
  { name: "Motorcycle", id: "motorcycle" },
  { name: "Lighting", id: "lighting" },
];
