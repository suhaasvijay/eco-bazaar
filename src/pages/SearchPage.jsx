import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [products, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [noProductFound, setNoProductFound] = useState(false);

  //Api call for all products
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((data) => setAllProducts(data.products || []));
  }, []);

  //Setting filtered products
  useEffect(() => {
    if (query !== "") {
      setLoader(true);
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setNoProductFound(filtered.length === 0);
      setLoader(false);
    } else {
      setFilteredProducts([]);
      setNoProductFound(false);
    }
  }, [query]);

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-between gap-5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 text-lg placeholder-purple-400 border-2 border-gray-300 bg-violet-100 focus:text-violet-950 focus:border-purple-300 focus:outline-none focus:ring-0"
          placeholder="Search here..."
        />
        {query.length === 0 ? (
          <></>
        ) : (
          <button
            className="p-3 font-bold text-white bg-purple-400 "
            onClick={() => setQuery("")}
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Products */}
      <>
        {loader ? (
          <Loader />
        ) : (
          <>
            {noProductFound ? (
              <div className="flex items-center justify-center h-[400px]">
                <p className="text-3xl font-bold text-red-400">
                  No product found
                </p>
              </div>
            ) : (
              <>
                {query.length === 0 ? (
                  <div className="flex items-center justify-center h-[400px]">
                    <p className="text-3xl font-bold text-purple-400">
                      Search for you product
                    </p>
                  </div>
                ) : (
                  <div className="grid justify-between grid-cols-1 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </>
    </div>
  );
}
