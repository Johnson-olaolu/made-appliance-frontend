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
            background: `url(${dealOfTheDay?.top_deal_1?.images[0]?.src})`,
            backgroundSize: "100 100",
          }}
        >
          <div className="max-w-[112px] ">
            <h6 className=" text-xl text-ma-text-secondary font-bold line-clamp-2 overflow-hidden text-ellipsis">{dealOfTheDay.top_deal_1.name}</h6>
            <span className="my-2 text-[10px] text-ma-light-blue block">Weekend Discount</span>
            <span className="text-xl text-ma-red font-bold block">${dealOfTheDay.top_deal_1.price}</span>
          </div>
        </div>
        <div
          className="h-72 sm:w-[356px] py-9 px-7 bg-cover"
          style={{ background: `url(${dealOfTheDay?.top_deal_2?.images[0]?.src})`, backgroundSize: "100 100" }}
        >
          <div className="max-w-[112px] ">
            <h6 className=" text-xl text-ma-text-secondary font-bold line-clamp-2 overflow-hidden text-ellipsis">{dealOfTheDay.top_deal_2.name}</h6>
            <span className="my-2 text-[10px] text-ma-light-blue block">Weekend Discount</span>
            <span className="text-xl text-ma-red font-bold block">${dealOfTheDay.top_deal_2.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
