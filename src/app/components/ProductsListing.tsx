import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import React from "react";

const tempMenu = ["Popular", "On Sale", "Top", "Reviews"];

const ProductsListing = () => {
  return (
    <div className="flex gap-5 my-16">
      <div className="">
        <nav className=" items-center flex justify-end mb-7">
          <ul className="flex items-center gap-8">
            {tempMenu.map((offer, idx) => (
              <li className="" key={idx}>
                <a href="#" className={` text-sm font-medium ${offer !== "Popular" ? " text-ma-text-primary" : "text-ma-red"}`}>
                  {offer}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" grid grid-cols-4 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <ProductCard key={n} />
          ))}
        </div>
      </div>
      <div className="flex-grow  bg-[#E9F3F2]  py-9 px-7 relative">
        <div className="max-w-[148px] ">
          <span className="mb-2 text-[10px] text-ma-light-blue block">Fridges</span>
          <h6 className=" text-xl text-ma-text-secondary font-bold my-3">Insignia™ Convertible Upright Freezer</h6>
          <span className="text-xl text-ma-red font-bold block">$499.99</span>
        </div>
        <Image src={"/images/image 19.png"} height={280} width={150} alt="" className="absolute bottom-8 right-8" />
      </div>
    </div>
  );
};

export default ProductsListing;
