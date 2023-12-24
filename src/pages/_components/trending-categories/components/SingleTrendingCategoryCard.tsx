import Image from "next/image";
import React from "react";

const SingletrendingCategoryCard = () => {
  return (
    <div className=" h-60  border border-[#f8f8f8] flex flex-col items-center gap-2 w-52 p-8">
      <Image src={"/images/Refrigerator-Transparent.png"} alt="" height={40} width={40} className=" h-36 w-36" />
      <Image src={"/images/Refrigerator-Transparent.png"} height={220} width={200} alt="" />
      <p className=" text-lg text-ma-primary2">Iphone</p>
    </div>
  );
};

export default SingletrendingCategoryCard;
