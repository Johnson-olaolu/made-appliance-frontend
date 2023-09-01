import React from "react";
import { GoPerson } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MenuIcons = () => {
  return (
    <div className=" flex items-center gap-5">
      <div className="flex gap-1 items-center">
        <GoPerson className=" text-ma-text-secondary stroke-ma-text-secondary dark:text-ma-off-white dark:stroke-ma-off-white stroke-1" size={26} />
        <div className="flex flex-col gap-px">
          <a href="" className=" text-xs text-ma-text-primary leading-none">
            Sign In
          </a>
          <a href="" className=" text-sm text-ma-text-secondary dark:text-ma-off-white leading-none font-bold">
            Account
          </a>
        </div>
      </div>
      <div className=" relative">
        <FiHeart className=" text-ma-text-secondary  dark:text-ma-off-white " size={26} />
        <span className="  h-[14px] w-[14px] rounded-full text-[10px] leading-none font-medium text-ma-white flex items-center justify-center absolute -top-1 -right-1 bg-ma-red">
          2
        </span>
      </div>
      <div className=" flex gap-2 items-center">
        <div className="relative">
          <AiOutlineShoppingCart className=" text-ma-text-secondary  dark:text-ma-off-white " size={26} />
          <span className=" h-[14px] w-[14px] pb-px rounded-full text-[10px] leading-none font-medium text-ma-white flex items-center justify-center absolute -top-1 -right-1 bg-ma-red">
            2
          </span>
        </div>
        <div className="flex flex-col gap-px">
          <span className=" text-xs text-ma-text-primary leading-none">Total</span>
          <span className=" text-sm text-ma-text-secondary dark:text-ma-off-white leading-none font-bold">$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default MenuIcons;
