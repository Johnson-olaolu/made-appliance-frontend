import React from "react";
import { GoPerson } from "react-icons/go";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/store/appSlice";
import { formatAmount } from "@/utils/misc";
import CartIcon from "./components/CartIcon";

const MenuIcons = () => {
  const likes = useSelector((state: RootState) => state.product.likes);
  const compares = useSelector((state: RootState) => state.product.compares);
  return (
    <>
      <div className="hidden sm:flex items-center gap-5">
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
          {likes?.length > 0 && (
            <span className="  h-[14px] w-[14px] rounded-full text-[10px] leading-none font-medium text-ma-white flex items-center justify-center absolute -top-1 -right-1 bg-ma-red">
              {likes.length}
            </span>
          )}
        </div>
        <div className=" relative">
          <FiRefreshCcw className=" text-ma-text-secondary  dark:text-ma-off-white " size={26} />
          {compares?.length > 0 && (
            <span className="  h-[14px] w-[14px] rounded-full text-[10px] leading-none font-medium text-ma-white flex items-center justify-center absolute -top-1 -right-1 bg-ma-red">
              {compares.length}
            </span>
          )}
        </div>
        <CartIcon />
      </div>
      {/* MobilleMenu */}
      <div className="flex sm:hidden items-center gap-3">
        <div className=" relative">
          <FiHeart className=" text-ma-text-secondary  dark:text-ma-off-white " size={26} />
          <span className="  h-[14px] w-[14px] rounded-full text-[10px] leading-none font-medium text-ma-white flex items-center justify-center absolute -top-1 -right-1 bg-ma-red">
            2
          </span>
        </div>
        <div className="relative">
          <AiOutlineShoppingCart className=" text-ma-text-secondary  dark:text-ma-off-white " size={32} />
          <span className=" h-[14px] w-[14px] pb-px rounded-full text-[10px] leading-none font-medium text-ma-white flex items-center justify-center absolute -top-1 -right-1 bg-ma-red">
            2
          </span>
        </div>
      </div>
    </>
  );
};

export default MenuIcons;
