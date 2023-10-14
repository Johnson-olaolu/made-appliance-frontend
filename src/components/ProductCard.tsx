import { IProduct } from "@/services/types";
import Image from "next/image";
import React from "react";

interface IProductCard {
  product: IProduct;
}

const ProductCard: React.FC<IProductCard> = (props) => {
  const { product } = props;
  return (
    <div className=" max-w-[196px] sm:w-[196px] bg-ma-off-white dark:bg-ma-black rounded-sm p-3 space-y-3">
      {/* <div className=" w-full h-36 bg-[#DADFE3] rounded-sm"></div> */}
      <Image src={product?.images[0]?.src} height={172} width={144} className="w-full h-36 rounded-sm" alt={product?.images[0]?.alt} />
      <div className="w-full flex justify-between items-end">
        <div className="">
          <span className="text-[10px] text-ma-light-blue block">{product?.categories[0].name}</span>
          <p className="text-xs font-bold text-ma-text-secondary dark:text-ma-off-white line-clamp-1 text-ellipsis overflow-hidden">
            {product?.name}
          </p>
        </div>
        <div className="">
          <p className="text-xs font-bold text-ma-red">${product?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
