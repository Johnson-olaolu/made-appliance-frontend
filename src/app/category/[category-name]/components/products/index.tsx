import React from "react";
import FilterBar from "./components/filter";
import { getAllProducts, queryProducts } from "@/services/product.service";
import ProductCard from "@/components/product/ProductCard";
import ProductCardShop from "@/components/product/ProductCardShop";
import { getSingleCategoryUsingSlug } from "@/services/categories.service";

interface IProductDisplay {
  category?: string;
}
const ProductsDisplay: React.FC<IProductDisplay> = async (props) => {
  const { category } = props;
  // console.log(props);
  const categoryD = await getSingleCategoryUsingSlug(category || "");
  const data = await queryProducts({ category: categoryD.id });
  return (
    <div className=" w-full flex-grow">
      <FilterBar count={data.length} />
      <div className=" py-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {data.map((product) => (
          <ProductCardShop product={product} key={product.id} />
        ))}
      </div>
      <div className=" flex justify-center">
        {/* <div className="h-12 w-36 flex items-center justify-center text-sm text-ma-white font-bold uppercase bg-ma-light-blue">Show More</div> */}
      </div>
    </div>
  );
};

export default ProductsDisplay;
