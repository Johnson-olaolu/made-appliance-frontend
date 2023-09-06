import React from "react";
import DealOfTheDay from "./DealOfTheDay";

const Deals = () => {
  return (
    <div className="flex gap-6 items-stretch">
      <DealOfTheDay />
      <div className="shrink-0 space-y-6">
        <div className="h-72 w-[356px] py-9 px-7" style={{ background: `url("/images/Mask group4545.png")` }}>
          <div className="max-w-[112px] ">
            <h6 className=" text-xl text-ma-text-secondary font-bold">JBL Music Speaker</h6>
            <span className="my-2 text-[10px] text-ma-light-blue block">Weekend Discount</span>
            <span className="text-xl text-ma-red font-bold block">$499.99</span>
          </div>
        </div>
        <div className="h-72 w-[356px] py-9 px-7 bg-cover" style={{ background: `url("/images/Mask group6464.png")` }}>
          <div className="max-w-[112px] ">
            <h6 className=" text-xl text-ma-text-secondary font-bold">JBL Music Speaker</h6>
            <span className="my-2 text-[10px] text-ma-light-blue block">Weekend Discount</span>
            <span className="text-xl text-ma-red font-bold block">$499.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
