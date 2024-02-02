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
  console.log(
    "%c 🍺 category: ",
    "font-size:12px;background-color: #2EAFB0;color:#fff;",
    category
  );

  const itemsPerPage = 9;

  //Api call for all products and product based on category based on the input from the radio button
  {
    category
      ? useEffect(() => {
          const skip = currentPage * itemsPerPage;
          fetch(
            `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=${itemsPerPage}`
          )
            .then((response) => response.json())
            .then((data) => {
              setProducts(data.products || []);
              setTotalPages(Math.ceil(data.total / itemsPerPage));
              setLoader(false);
            });
        }, [category])
      : useEffect(() => {
          const skip = currentPage * itemsPerPage;
          fetch(
            `https://dummyjson.com/products?skip=${skip}&limit=${itemsPerPage}`
          )
            .then((response) => response.json())
            .then((data) => {
              setProducts(data.products || []);
              setTotalPages(Math.ceil(data.total / itemsPerPage));
              setLoader(false);
            });
        }, [currentPage]);
  }

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
          )}
        </div>
      )}
    </>
  );
}
