import React from "react";
import FilterBar from "./components/filter";
import { getAllProducts } from "@/services/product.service";
import ProductCard from "@/components/product/ProductCard";
import ProductCardShop from "@/components/product/ProductCardShop";

const ProductsDisplay = async () => {
  const data = await getAllProducts();
  return (
    <div className=" w-full flex-grow">
      <FilterBar />
      <div className=" py-6 grid grid-cols-4 gap-5">
        {data.map((product) => (
          <ProductCardShop product={product} key={product.id} />
        ))}
      </div>
      <div className=" flex justify-center">
        <div className="h-12 w-36 flex items-center justify-center text-sm text-ma-white font-bold uppercase bg-ma-light-blue">Show More</div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
