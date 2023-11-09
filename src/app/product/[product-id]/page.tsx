import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { FiChevronRight, FiHeart, FiRefreshCcw, FiRefreshCw } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";

const SingleProduct = () => {
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
            <Link href="/category" className=" text-ma-light-blue">
              Category
            </Link>
            <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
          </li>
          <li className="flex items-center ">
            <span className=" dark:text-ma-white text-ma-grey">{"data.name"}</span>
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <div className=" h-[500px] bg-gray-300"></div>
          <div className="border-[#AEAEAE1A] border-b-2 flex flex-col justify-between  pb-4">
            <div className="">
              <div className=" mb-4">
                <span className="font-medium text-xs text-ma-white bg-ma-red rounded py-1 px-2">Geek Squad Open Box</span>
              </div>
              <h1 className=" text-2xl mb-4">Open Box - Acer Nitro 5 15.6 Gaming Laptop (Intel Core i5-11400H/512GB SSD/8GB RAM/RTX 3050/Win11)</h1>
              <div className="mb-4 flex gap-2">
                <p className=" text-xs ">
                  <strong>Model Number: </strong>
                  <span className="">AN515-57-573G</span>
                </p>
                <p className=" text-xs ">
                  <strong>Model Number: </strong>
                  <span className="">AN515-57-573G</span>
                </p>
              </div>
              <div className="gap-2 flex items-end mb-4">
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#fecf0a]" />
                  <FaStar className="text-[#fecf0a]" />
                  <FaStar className="text-[#fecf0a]" />
                  <FaStar className="text-[#fecf0a]" />
                  <FaStar className="text-[#fecf0a]" />
                </div>
                <span className=" text-xs text-ma-text-primary">( 2 reviews)</span>
              </div>
              <div className=" flex items-center gap-2">
                <Image height={40} width={40} alt="logo" src="/images/favicon.png" className=" h-10 w-auto" />
                <span className=" text-xs font-bold">Sold and shipped by Best Buy</span>
              </div>
              <div className=" text-ma-light-blue mt-6">
                <span className=" text-xs">Save $100</span>
                <p className=" text-4xl font-bold flex items-start gap-[2px]">
                  $599 <span className="text-sm pt-1">99</span>
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className=" flex items-center gap-4  justify-between">
                <button className="flex gap-2 items-center">
                  <FiHeart size={24} />
                  <span className="text-sm ">Add to wishlist</span>
                </button>
                <button className="flex gap-2 items-center">
                  <RiRefreshLine size={24} />
                  <span className="text-sm ">Compare</span>
                </button>
              </div>
              <button className=" h-12 shadow-lg rounded font-bold text-lg w-full  bg-ma-light-blue  text-white relative hover:shadow-none">
                <MdOutlineAddShoppingCart className=" absolute left-4 top-1/2 transform -translate-y-1/2" size={24} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
