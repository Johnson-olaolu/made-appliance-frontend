import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <div className=" flex-grow max-w-[548px]">
      <div className=" flex items-stretch h-11 grow">
        <input
          type="text"
          className=" h-full grow border-2 dark:border-[#4A4848] border-ma-off-white px-4 text-xs text-ma-text-primary placeholder:opacity-60 focus-visible:outline-none bg-transparent"
          placeholder="Search for Products"
        />
        <div className="shrink-0 px-4 flex items-center dark:border-[#4A4848] border-ma-off-white border-y-2">
          <select className="text-xs text-ma-text-primary bg-transparent cursor-pointer font-medium" name="" id="">
            <option>All Categories</option>
          </select>
        </div>
        <button className=" h-11 w-11 bg-ma-light-blue flex items-center justify-center text-ma-white">
          <LuSearch size={20} />
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SearchBar;
