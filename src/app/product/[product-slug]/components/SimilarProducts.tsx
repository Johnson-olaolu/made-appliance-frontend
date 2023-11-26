import ProductCard from "@/components/product/ProductCard";
import { getSingleProduct } from "@/services/product.service";
import { IProduct } from "@/services/types";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface IProductDetails {
  product: IProduct;
}

const SimilarProducts: React.FC<IProductDetails> = async (props) => {
  const { product } = props;
  const products = [];
  for (const id of product.related_ids) {
    const p = await getSingleProduct(id);
    products.push(p);
  }

  return (
    <div className="">
      <div className=" border-t-2 border-[#AEAEAE1A] flex items-center justify-between  text-ma-text-secondary dark:text-ma-off-white">
        <h4 className=" p-6 text-xl font-bold ">Similar Products</h4>
      </div>
      <div className="body overflow-hidden p-6">
        <div className="flex h-[260px]  justify-between gap-5 overflow-auto">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
