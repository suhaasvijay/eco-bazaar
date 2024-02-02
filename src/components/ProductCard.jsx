import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;

  return (
    <Link to={`/${product.id}`}>
      <div
        key={product.id}
        className="border border-gray-300 p-3 rounded-lg h-full hover:shadow-lg "
      >
        <div className="h-[280px]">
          <img
            src={product.thumbnail}
            alt="productImg"
            className="object-fill w-full h-full rounded-lg"
          />
        </div>
        <p className="text-start font-bold text-2xl pt-3">{product.title}</p>
        <div className="flex gap-1 items-end">
          <p className="text-xl">Price : {product.price}</p>
          <p className="text-sm">-{product.discountPercentage}%</p>
        </div>
      </div>
    </Link>
  );
}
