import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [products, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
      <div className="flex justify-between gap-5">
        <input
          value={query}
          onChange={handleSearch}
          className=" w-full bg-violet-100 text-lg border-2 border-gray-300 p-3 placeholder-purple-400 focus:text-violet-950 focus:border-purple-300 focus:outline-none focus:ring-0"
          placeholder="Search here..."
        />
        {query.length === 0 ? (
          <></>
        ) : (
          <button
            className="p-3 bg-purple-400 text-white font-bold "
            onClick={() => handleClear()}
          >
            CLEAR
          </button>
        )}
      </div>
      {filteredProducts.length === 0 ? (
        <div className="flex items-center justify-center h-[400px]">
          <p>No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 justify-between gap-7 mt-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
