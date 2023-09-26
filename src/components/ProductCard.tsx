import React from "react";

const ProductCard = () => {
  return (
    <div className=" max-w-[196px] sm:w-[196px] bg-ma-off-white dark:bg-ma-black rounded-sm p-3 space-y-3">
      <div className=" w-full h-36 bg-[#DADFE3] rounded-sm"></div>
      <div className="w-full flex justify-between items-end">
        <div className="">
          <span className="text-[10px] text-ma-light-blue block">Gaming Acessories</span>
          <p className="text-xs font-bold text-ma-text-secondary dark:text-ma-off-white">Xbox Stereo Headset</p>
        </div>
        <div className="">
          <p className="text-xs font-bold text-ma-red">$47</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
