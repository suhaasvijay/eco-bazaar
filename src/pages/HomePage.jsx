import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loader, setLoader] = useState(true);

  const itemsPerPage = 9;

  //Api call for all products with pagination
  useEffect(() => {
    const skip = currentPage * itemsPerPage;
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products || []);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
        setLoader(false);
      });
  }, [currentPage]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="grid justify-between grid-cols-3 gap-7">
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
      )}
    </>
  );
}
