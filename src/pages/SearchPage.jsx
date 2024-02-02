import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [products, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  //Api call for all products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data.products || []));
  }, []);

  //Setting filtered products
  useEffect(() => {
    if (query !== "") {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      );
      setLoader(false);
    } else {
      setFilteredProducts([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-between gap-5">
        <input
          value={query}
          onChange={handleSearch}
          className="w-full p-3 text-lg placeholder-purple-400 border-2 border-gray-300 bg-violet-100 focus:text-violet-950 focus:border-purple-300 focus:outline-none focus:ring-0"
          placeholder="Search here..."
        />
        {query.length === 0 ? (
          <></>
        ) : (
          <button
            className="p-3 font-bold text-white bg-purple-400 "
            onClick={() => handleClear()}
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <div className="flex items-center justify-center h-[400px]">
          <p>No products found</p>
        </div>
      ) : (
        <>
          {loader ? (
            <Loader />
          ) : (
            <div className="grid justify-between grid-cols-1 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
