import { fetchTopCategories } from "@/services/homepage.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopCategories = async () => {
  const data = await fetchTopCategories();
  return (
    <div className="my-16 ">
      <div className="text-center max-w-[600px] mx-auto mb-6">
        <h2 className="text-ma-text-secondary dark:text-ma-off-white font-bold text-3xl">Top Categories</h2>
        <p className=" mt-4 text-xs font-medium text-ma-text-primary">{data?.quickInfo}</p>
      </div>

      <div className=" w-full flex  justify-between  flex-col items-center gap-4 sm:gap-0 sm:flex-row">
        {data?.top_categories.map((category, index) => (
          <Link href={`category/${category.slug}`} key={category.id} className="flex flex-col items-center gap-2 ">
            <div className={`h-32 w-32 rounded-full ${index % 2 !== 0 ? "bg-[#FEEBE7]" : "bg-[#EFF4FA]"} flex items-center justify-center`}>
              <Image src={category?.image?.src || ""} height={80} width={80} alt="" className=" h-auto w-20" />
            </div>
            <span className="text-xs font-medium text-ma-text-primary">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
