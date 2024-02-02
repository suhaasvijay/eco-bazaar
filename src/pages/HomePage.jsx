import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const skip = currentPage * itemsPerPage;
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products || []);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
      });
  }, [currentPage]);

  return (
    <>
      <div className="grid grid-cols-3 justify-between gap-7">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
}
