import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;

  return (
    <Link to={`/${product.id}`} reloadDocument>
      <div
        key={product.id}
        className="h-full hover:shadow-[0px_0px_20px_rgba(202,_108,_230,_0.6)]  transition-transform hover:scale-105 border border-gray-300 max-w-[360px]"
      >
        <div className="h-[280px]">
          <img
            src={product.thumbnail}
            alt="product image"
            className="object-fill w-full h-full"
          />
        </div>
        <div className="pb-3 pl-3">
          <p className="text-start tracking-wider text-xs pt-2 text-[#A3A3A3] uppercase">
            {product.category}
          </p>
          <p className="text-start font-bold text-[18px] pt-1">
            {product.title}
          </p>
          <div className="flex items-end gap-1">
            <p className="text-[14px] font-bold text-[#666666]">
              ${product.price}
            </p>
            <p className="text-[13px] font-bold text-[#666666]">
              ({product.discountPercentage}% off)
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
