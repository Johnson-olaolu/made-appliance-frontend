"use client";
import { IProduct } from "@/services/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const DealOfTheDay: React.FC<{ product: IProduct }> = (props) => {
  const { product } = props;
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999); // Set to the end of the day

    const timeDifference = endOfDay.getTime() - now.getTime();
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className="flex-col sm:flex-row flex-grow flex p-8 bg-ma-off-white dark:bg-ma-black sm:items-center">
      <div className="flex-grow mb-7 sm:mb-0">
        <span className="sm:hidden text-xs font-bold text-ma-red p-1 bg-[#FFF1F0] rounded-sm inline-block mb-7">Deal of the day </span>
        <Image src={product?.images[0]?.src} height={551} width={278} alt="" className="max-h-[552px] max-w-[278px] w-auto h-full" />
      </div>
      <div className="max-w-[312px] shrink-0">
        <span className=" hidden text-xs font-bold text-ma-red p-1 bg-[#FFF1F0] rounded-sm sm:inline-block mb-7">Deal of the day </span>
        <h6 className=" text-ma-text-secondary dark:text-ma-off-white font-extrabold mb-5 text-3xl line-clamp-4 overflow-hidden text-ellipsis">
          {product?.name}
        </h6>
        <p className="flex items-center gap-4 mb-6">
          <span className="text-ma-red font-bold text-3xl">{product.price}</span>
          {/* <span className="text-ma-text-primary text-lg line-through font-medium">$179.99</span> */}
        </p>
        <p className="text-sm font-medium text-ma-text-primary mb-8">{product.short_description.replace(/(<([^>]+)>)/gi, "")}</p>
        <div className="flex flex-wrap justify-between mb-7">
          <span className="text-ma-text-secondary dark:text-ma-off-white text-sm font-bold">Sold: 0</span>
          <span className="text-ma-text-secondary dark:text-ma-off-white text-sm font-bold">Available: 0</span>
          <div className="mt-1 w-full rounded-full h-[10px] bg-[#EAEAEA] flex overflow-hidden">
            <div style={{ width: "100%" }} className="h-full bg-ma-light-blue rounded-full"></div>
          </div>
        </div>
        <div className="">
          <p className="text-ma-text-secondary dark:text-ma-off-white text-sm font-bold mb-3">Offer Ends in</p>
          <div className="flex items-start">
            <div className="flex flex-col gap-2 items-center">
              <div className="h-[60px] w-[60px] bg-ma-white flex items-center justify-center">
                <span className=" text-ma-text-primary text-xl font-bold">{timeRemaining.hours}</span>
              </div>
              <span className="text-ma-text-primary text-sm font-medium">Hours</span>
            </div>
            <span className=" text-ma-text-primary font-bold mx-2 h-[60px] flex items-center text-4xl pb-[10px]">:</span>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-[60px] w-[60px] bg-ma-white flex items-center justify-center">
                <span className=" text-ma-text-primary text-xl font-bold">{timeRemaining.minutes}</span>
              </div>
              <span className="text-ma-text-primary text-sm font-medium">Minutes</span>
            </div>
            <span className=" text-ma-text-primary font-bold mx-2 h-[60px] flex items-center text-4xl pb-[10px]">:</span>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-[60px] w-[60px] bg-ma-white flex items-center justify-center">
                <span className=" text-ma-text-primary text-xl font-bold">{timeRemaining.seconds}</span>
              </div>
              <span className="text-ma-text-primary text-sm font-medium">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
