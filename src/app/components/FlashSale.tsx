import ProductCard from "@/components/product/ProductCard";
import { getProductsByTag } from "@/services/product.service";
import React from "react";

const FlashSale = async () => {
  const data = await getProductsByTag("323");
  return (
    <div className="my-16 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-ma-text-secondary dark:text-ma-off-white font-bold text-3xl">Flash Sale</h2>
        <div className="flex items-center gap-1">
          <p className="font-medium text-xs text-ma-text-primary">Offer ends in</p>
          <div className="flex items-center gap-1">
            <div className="h-7 w-7 bg-ma-red flex items-center justify-center">
              <span className="text-ma-white dark:text-ma-grey font-medium text-sm">12</span>
            </div>
            <span className=" text-ma-text-primary font-medium text-xl pb-1">:</span>
            <div className="h-7 w-7 bg-ma-red flex items-center justify-center">
              <span className="text-ma-white dark:text-ma-grey font-medium text-sm">30</span>
            </div>
            <span className=" text-ma-text-primary font-medium text-xl pb-1">:</span>
            <div className="h-7 w-7 bg-ma-red flex items-center justify-center">
              <span className="text-ma-white dark:text-ma-grey font-medium text-sm">59</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-3">
        {data.slice(0, 5).map((n) => (
          <div key={n.id} className="shrink-0">
            <ProductCard product={n} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
