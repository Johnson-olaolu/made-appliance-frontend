import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Sidebar from "./components/sidebar";

const SingleCategory = ({ params }: { params: { slug: string } }) => {
  return (
    <main className=" bg-ma-white dark:bg-ma-grey ">
      <div className="max-w-6xl  px-2  sm:px-0 mx-auto pt-0 pb-16 sm:border-t-2 border-[#AEAEAE1A]">
        <ul className=" flex items-center text-sm py-3">
          <li className="flex items-center ">
            <a href="" className=" text-ma-light-blue">
              Home
            </a>
            <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
          </li>
          <li className="flex items-center ">
            <a href="" className=" text-ma-light-blue">
              Category
            </a>
            <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
          </li>
          <li className="flex items-center ">
            <span className=" dark:text-ma-white text-ma-grey">Furniture</span>
          </li>
        </ul>
        <h1 className=" font-semibold text-2xl dark:text-ma-white text-ma-grey">Furniture</h1>
        <div className=" mt-6 flex gap-8 items-stretch">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default SingleCategory;
