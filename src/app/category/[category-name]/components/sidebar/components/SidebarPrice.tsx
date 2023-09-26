import React from "react";
import SideBarItemWrapper from "../SideBarItemWrapper";

const SidebarPrice = () => {
  return (
    <SideBarItemWrapper title="Price">
      <div className="">
        <div className="flex justify-between items-stretch px-1">
          <div className="">
            <label className="block mb-1 dark:text-ma-white text-ma-grey text-sm">Min</label>
            <input
              className=" h-12 w-24 p-4 border-[#adadad] border rounded-sm text-sm dark:text-ma-white text-ma-grey"
              placeholder="$100"
              type="text"
            />
          </div>
          <div className="items-center flex pt-6">
            <span className="font-bold">-</span>
          </div>
          <div className="">
            <label className="block mb-1 dark:text-ma-white text-ma-grey text-sm">Max</label>
            <input
              className=" h-12 w-24 p-4 border-[#adadad] border rounded-sm text-sm dark:text-ma-white text-ma-grey"
              placeholder="$100"
              type="text"
            />
          </div>
        </div>
        <button className=" h-12 w-full bg-ma-light-blue text-ma-white font-bold text-sm rounded-sm mt-4">Apply Price Range</button>
        <button className="block my-4 text-ma-light-blue text-sm font-bold"> Clear Price Range</button>
      </div>
    </SideBarItemWrapper>
  );
};

export default SidebarPrice;
