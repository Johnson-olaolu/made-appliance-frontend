import { tempCategories } from "@/utils/constants";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Categories = () => {
  return (
    <div className=" w-64  shrink-0  flex flex-col">
      <div className=" h-14 shrink-0 w-full flex items-center px-6 gap-3 bg-ma-red">
        <RxHamburgerMenu className="text-ma-white" size={24} />
        <span className="text-sm text-ma-white font-medium">Browse Categories</span>
      </div>
      <nav className=" bg-ma-off-white dark:bg-ma-black flex items-center px-4 w-full grow">
        <ul className="flex flex-col [&>*:nth-child(1)]:pt-0 w-full">
          {tempCategories.map((category, idx) => (
            <li className="py-3 border-b border-[#AEAEAE1A]" key={idx}>
              <a href="#" className=" w-full flex items-center justify-between text-ma-text-primary dark:text-ma-off-white">
                <span className="text-sm font-medium">{category}</span>
                <FaChevronRight />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
