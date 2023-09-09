import { currencies, languages } from "@/utils/constants";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import Switch from "../extras/Switch";

const TopBar = () => {
  return (
    <section className=" hidden sm:block bg-ma-off-white dark:bg-ma-black">
      <div className="max-w-6xl mx-auto  h-12 flex items-center justify-between">
        <div className="flex gap-1 items-center text-ma-text-primary dark:text-ma-off-white">
          <AiOutlineShop size={24} />
          <span className=" text-xs font-medium">Up to 70% off the entire store</span>
        </div>
        <div className=" flex items-center gap-6">
          <select className=" text-xs text-ma-text-primary dark:text-ma-off-white bg-transparent cursor-pointer font-medium" name="" id="">
            {currencies.map((currency, idx) => (
              <option key={idx}>{currency}</option>
            ))}
          </select>
          <select className="text-xs text-ma-text-primary dark:text-ma-off-white bg-transparent cursor-pointer font-medium" name="" id="">
            {languages.map((language, idx) => (
              <option key={idx}>{language}</option>
            ))}
          </select>
          <Switch />
        </div>
      </div>
    </section>
  );
};

export default TopBar;
