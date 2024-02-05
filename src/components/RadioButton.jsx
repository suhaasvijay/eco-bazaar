import React, { useState } from "react";

const products = [
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
  "Home Decoration",
  "Furniture",
  "Tops",
  "Women's Dresses",
  "Women's Shoes",
  "Men's Shirts",
  "Men's Shoes",
  "Men's Watches",
  "Women's Watches",
  "Women's Bags",
  "Women's Jewellery",
  "Sunglasses",
  "Automotive",
  "Motorcycle",
];

export default function RadioButton({ setCategory, category }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="hidden md:block">
      {/* Title */}
      <div className="flex justify-between ">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Filter by categories
        </h3>
        {category ? (
          <p
            onClick={() => setCategory(null)}
            className="flex items-center justify-center h-8 px-2 text-sm font-bold text-white uppercase bg-purple-400 cursor-pointer"
          >
            <p>clear</p>
          </p>
        ) : null}
      </div>

      {/* Category List */}
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 w-60 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {products.map((item) => {
          const itemId = item
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/'/g, "");
          const isChecked = category === itemId;
          return (
            <li
              key={item}
              className={`w-full border-b border-gray-200 cursor-pointer hover:bg-purple-200 dark:border-gray-600 ${
                isChecked ? "bg-purple-400 " : ""
              }`}
              onClick={() => {
                setCategory(itemId);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="flex items-center cursor-pointer ps-3">
                <input
                  id={`list-radio-${itemId}`}
                  type="radio"
                  checked={isChecked}
                  value={itemId}
                  name="list-radio"
                />
                <label
                  className={`w-full cursor-pointer py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300 hover:text-white ${
                    isChecked ? "text-white " : ""
                  }`}
                >
                  {item}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
