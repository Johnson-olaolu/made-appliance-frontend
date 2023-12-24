import React from "react";
import SingletrendingCategoryCard from "./components/SingletrendingCategoryCard";

const TrendingCategory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className=" mb-10 text-3xl font-medium">Trending Categories</h2>
      <div className=" w-full">
        <SingletrendingCategoryCard />
      </div>
    </div>
  );
};

export default TrendingCategory;
