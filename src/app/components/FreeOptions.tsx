import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";

const FreeOptions = () => {
  return (
    <div className="sm:flex w-full justify-between my-8 sm:my-16 grid grid-cols-2 gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className=" flex items-center justify-center h-[72px] w-[72px] bg-[#FFF1F0] rounded-full">
          <FaTruckFast size={24} className="text-ma-red" />
        </div>
        <div className=" text-center md:text-left">
          <span className=" text-sm sm:text-lg font-bold text-ma-text-secondary dark:text-ma-off-white  block">Free Shipping</span>
          <span className=" text-xs sm:text-sm text-ma-text-primary font-medium">Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className=" flex items-center justify-center h-[72px] w-[72px] bg-[#FFF1F0] rounded-full">
          <RiCustomerService2Line size={24} className="text-ma-red" />
        </div>
        <div className="text-center md:text-left">
          <span className=" text-sm sm:text-lg font-bold text-ma-text-secondary dark:text-ma-off-white block">Online Support 24/7</span>
          <span className=" text-xs sm:text-sm text-ma-text-primary font-medium">Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className=" flex items-center justify-center h-[72px] w-[72px] bg-[#FFF1F0] rounded-full">
          <IoWalletOutline size={24} className="text-ma-red" />
        </div>
        <div className="text-center md:text-left">
          <span className=" text-sm sm:text-lg font-bold text-ma-text-secondary dark:text-ma-off-white block">Money Return</span>
          <span className=" text-xs sm:text-sm text-ma-text-primary font-medium">Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className=" flex items-center justify-center h-[72px] w-[72px] bg-[#FFF1F0] rounded-full">
          <MdOutlineDiscount size={24} className="text-ma-red" />
        </div>
        <div className="text-center md:text-left">
          <span className=" text-sm sm:text-lg font-bold text-ma-text-secondary dark:text-ma-off-white block">Member Discount</span>
          <span className=" text-xs sm:text-sm text-ma-text-primary font-medium">Lorem ipsum dolor sit amet</span>
        </div>
      </div>
    </div>
  );
};

export default FreeOptions;