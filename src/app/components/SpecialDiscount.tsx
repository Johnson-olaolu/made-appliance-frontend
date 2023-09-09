import Image from "next/image";
import React from "react";

const SpecialDiscount = () => {
  return (
    <div className=" sm:h-40 w-full space-y-5 p-8 relative" style={{ background: `url("/images/Mask group8724.png")` }}>
      <div className=" flex flex-col sm:flex-row items-center gap-16 h-full">
        <div className="text-center sm:text-left h-full flex flex-col justify-between max-w-[516px]">
          <h6 className=" text-ma-text-secondary dark:text-ma-off-white font-bold text-3xl">Bottom Refrigerator Stainless Steel</h6>
          <p className="text-ma-text-primary text-sm font-medium">
            The Xbox Elite Wireless Controller Series 2 features over 30 ways to play like a pro, including adjustable-tension thumbsticks{" "}
          </p>
        </div>
        <Image width={179} height={100} src={"/images/image 16.png"} alt="" />
      </div>
      <Image width={272} height={204} src={"/images/image 15.png"} alt="" className="mx-auto sm:absolute bottom-0 right-0" />
    </div>
  );
};

export default SpecialDiscount;
