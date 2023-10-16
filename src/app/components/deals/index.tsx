import { fetchDealofTheDay } from "@/services/deal-of-of-the-day.service";
import React from "react";
import DealOfTheDay from "./DealOfTheDay";

const Deals = async () => {
  const dealOfTheDay = await fetchDealofTheDay();
  return (
    <div className="sm:flex sm:gap-6  items-stretch block">
      <DealOfTheDay product={dealOfTheDay.deal_of_the_day} />
      <div className="shrink-0 space-y-6">
        <div
          className="h-72 sm:w-[356px] py-9 px-7 "
          style={{
            background: `url("/images/Mask group4545.png")`,
            backgroundSize: "100 100",
          }}
        >
          <div className="max-w-[112px] ">
            <h6 className=" text-xl text-ma-text-secondary font-bold line-clamp-3 overflow-hidden text-ellipsis">Get the Best Home Appliances</h6>
            <span className="mt-2 text-[10px] text-ma-light-blue block">from as low as</span>
            <span className="text-xl text-ma-red font-bold block">${dealOfTheDay.top_deal_1.price}</span>
          </div>
        </div>
        <div className="h-72 sm:w-[356px] py-9 px-7 bg-cover" style={{ background: `url("/images/Mask group6464.png")`, backgroundSize: "100 100" }}>
          <div className="max-w-[120px] ">
            <h6 className=" text-xl text-ma-text-secondary font-bold line-clamp-3 overflow-hidden text-ellipsis">Setup the perfect kitchen</h6>
            <span className="mt-2 text-[10px] text-ma-light-blue block">From as low as</span>
            <span className="text-xl text-ma-red font-bold block">${dealOfTheDay.top_deal_2.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
