import React from "react";
import { GoSearch } from "react-icons/go";

const HeaderSearchBar = () => {
  return (
    <div className="relative flex-shrink hidden lg:block">
      <input
        placeholder="Search our store"
        type="text"
        className="pl-5 pr-12 h-12 rounded-full bg-[#f5f5f5] border border-[#f5f5f5] focus:border-ma-blue outline-none w-full max-w-[280px]"
        style={{ transition: "all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)" }}
      />
      <GoSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-ma-blue" size={20} />
    </div>
  );
};

export default HeaderSearchBar;
