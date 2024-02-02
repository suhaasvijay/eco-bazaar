import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import ProductCard from "../components/ProductCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [products, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data.products || []));
  }, []);

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

  return (
    <div>
      <Input
        type="search"
        placeholder="Search here..."
        value={query}
        onChange={handleSearch}
        containerProps={{
          className: "min-w-[288px]",
        }}
        className=" !border-t-blue-gray-300 pl-9  placeholder:text-blue-gray-300 focus:!border-blue-gray-300 "
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
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
