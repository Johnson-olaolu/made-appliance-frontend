import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const ShopPage: NextPage<any> = (props) => {
  return (
    <main className=" bg-ma-white dark:bg-ma-grey ">
      <div className="max-w-6xl  px-2  sm:px-0 mx-auto pt-0 pb-16 sm:border-t-2 border-[#AEAEAE1A]">
        <ul className=" flex items-center text-sm py-4">
          <li className="flex items-center ">
            <Link href="/" className=" text-ma-light-blue">
              Home
            </Link>
            <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
          </li>
          <li className="flex items-center ">
            <span className=" dark:text-ma-white text-ma-grey">Shop</span>
          </li>
        </ul>
        <h1 className=" font-semibold text-2xl dark:text-ma-white text-ma-grey">Shop</h1>
        {/* <div
          className=" h-[448px] bg-gray-600 mt-6"
          style={{ backgroundImage: "url('/images/12162048924794326523.jpg')", backgroundSize: "cover" }}
        ></div> */}
        <div className=" mt-6 flex gap-8 items-stretch">
          {/* <Sidebar category={data} /> */}
          {/* <ProductsDisplay category={props.searchParams["category"] || data.slug} /> */}
        </div>
      </div>
      {/* <div className="block sm:hidden">
        <MobileFilter />
      </div> */}
    </main>
  );
};

export default ShopPage;
