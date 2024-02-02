import React from "react";

export default function RadioButton(props) {
  const { setCategory, category } = props;

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="hidden md:block">
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
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg w-60 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "smartphones"}
              value="smartphones"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Smartphones{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "laptops"}
              value="laptops"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Laptops{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "fragrances"}
              value="fragrances"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Fragrances{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "skincare"}
              value="skincare"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Skincare{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "groceries"}
              value="groceries"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Groceries{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "home-decoration"}
              value="home-decoration"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Home Decoration{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "furniture"}
              value="furniture"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Furniture{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              value="tops"
              checked={category === "tops"}
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Tops{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "womens-dresses"}
              value="womens-dresses"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Women's Dresses{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              value="womens-shoes"
              checked={category === "womens-shoes"}
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Women's Shoes{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              value="mens-shirts"
              checked={category === "mens-shirts"}
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Men's Shirts{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "mens-shoes"}
              value="mens-shoes"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Men's Shoes{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "mens-watches"}
              value="mens-watches"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Men's Watches{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "womens-watches"}
              value="womens-watches"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Women's Watches{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "womens-bags"}
              value="womens-bags"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Women's Bags{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "womens-jewellery"}
              value="womens-jewellery"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Women's Jeweller{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              value="sunglasses"
              checked={category === "sunglasses"}
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Sunglasses{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              value="automotive"
              checked={category === "automotive"}
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Automotive{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              checked={category === "motorcycle"}
              value="motorcycle"
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Motorcycle{" "}
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="list-radio-license"
              type="radio"
              value="lighting"
              checked={category === "lighting"}
              onChange={handleChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="list-radio-license"
              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Lighting{" "}
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
