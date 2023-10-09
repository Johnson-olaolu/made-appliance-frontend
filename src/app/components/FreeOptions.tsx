import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { fetchFreeOptions } from "@/services/free-options.service";

const FreeOptions = async () => {
  const freeOptions = await fetchFreeOptions();
  return (
    <div className="sm:flex w-full justify-between my-8 sm:my-16 grid grid-cols-2 gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className=" flex items-center justify-center h-[72px] w-[72px] bg-[#FFF1F0] rounded-full">
          <FaTruckFast size={24} className="text-ma-red" />
        </div>
        <div className=" text-center md:text-left">
          <span className=" text-sm sm:text-lg font-bold text-ma-text-secondary dark:text-ma-off-white  block">{freeOptions[0].option_title}</span>
          <span className=" text-xs sm:text-sm text-ma-text-primary font-medium">{freeOptions[0].option_subtitle}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className=" flex items-center justify-center h-[72px] w-[72px] bg-[#FFF1F0] rounded-full">
          <RiCustomerService2Line size={24} className="text-ma-red" />
        </div>
        <div className="text-center md:text-left">
          <span className=" text-sm sm:text-lg font-bold text-ma-text-secondary dark:text-ma-off-white  block">{freeOptions[1].option_title}</span>
          <span className=" text-xs sm:text-sm text-ma-text-primary font-medium">{freeOptions[1].option_subtitle}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className=" flex items-center justify-center h-[72px] w-[72px] bg-[#FFF1F0] rounded-full">
          <IoWalletOutline size={24} className="text-ma-red" />
        </div>
        <div className="text-center md:text-left">
          <span className=" text-sm sm:text-lg font-bold text-ma-text-secondary dark:text-ma-off-white  block">{freeOptions[2].option_title}</span>
          <span className=" text-xs sm:text-sm text-ma-text-primary font-medium">{freeOptions[2].option_subtitle}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className=" flex items-center justify-center h-[72px] w-[72px] bg-[#FFF1F0] rounded-full">
          <MdOutlineDiscount size={24} className="text-ma-red" />
        </div>
        <div className="text-center md:text-left">
          <span className=" text-sm sm:text-lg font-bold text-ma-text-secondary dark:text-ma-off-white  block">{freeOptions[3].option_title}</span>
          <span className=" text-xs sm:text-sm text-ma-text-primary font-medium">{freeOptions[3].option_subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default FreeOptions;
