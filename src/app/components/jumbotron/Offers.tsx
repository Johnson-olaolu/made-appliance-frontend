import Image from "next/image";
import React from "react";

const Offers = () => {
  return (
    <div className="flex gap-4 items-stretch">
      <div className=" flex-grow bg-ma-off-white dark:bg-ma-black relative flex p-9 items-center relative">
        <div className="max-w-[230px]">
          <span className=" text-ma-red text-xs font-bold uppercase">SUMMER SALE UPTO 50%</span>
          <h6 className=" text-ma-text-secondary dark:text-ma-off-white text-3xl font-bold mb-3">Professional 48″ Gas Cooktop</h6>
          <p className=" text-xs text-ma-text-primary font-medium mb-7">Save and shoot straight from the bos with three packs of iconic Polaroid </p>
          <a href="" className=" h-12 w-36 flex items-center justify-center text-sm text-ma-white font-bold uppercase bg-ma-light-blue">
            SHOP NOW
          </a>
        </div>
        <Image src={"/images/image 14.png"} alt="" height={280} width={243} className="absolute bottom-0 right-14 " />
      </div>
      <div className=" shrink-0 space-y-4">
        <div className="w-72 h-40 bg-[#C1DAF9] p-5 relative">
          <div className="max-w-[120px] flex flex-col justify-between h-full">
            <h6 className=" text-xl font-bold">GE ENERGY STAR®</h6>
            <div className="">
              <span className=" font-medium text-[10px] text-ma-text-primary">Weekend Discount</span>
              <div className="flex items-center gap-3">
                <span className=" text-ma-red font-bold text-xl leading-none">$270</span>
                <span className=" text-sm line-through text-ma-text-secondary font-semibold leading-none">$350</span>
              </div>
            </div>
          </div>
          <Image src={"/images/image 2.png"} alt="" height={100} width={134} className="absolute  right-5 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="w-72 h-40 bg-[#DFE3E4] p-5 relative">
          <div className="max-w-[120px] flex flex-col justify-between h-full">
            <h6 className=" text-xl font-bold">GE ENERGY STAR®</h6>
            <div className="">
              <span className=" font-medium text-[10px] text-ma-text-primary">Weekend Discount</span>
              <div className="flex items-center gap-3">
                <span className=" text-ma-red font-bold text-xl leading-none">$270</span>
                <span className=" text-sm line-through text-ma-text-secondary font-semibold leading-none">$350</span>
              </div>
            </div>
          </div>
          <Image src={"/images/image 3.png"} alt="" height={100} width={72} className="absolute  right-5 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
