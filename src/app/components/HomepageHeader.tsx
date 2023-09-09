"use client";
import React from "react";
import SearchBar from "./SearchBar";
import MenuIcons from "./MenuIcons";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/appSlice";

const HomepageHeader = () => {
  // const screenSize = useSelector((store: RootState) => store.app.screenSize);
  return (
    <>
      <section className="hidden sm:flex items-center gap-8 mb-7">
        <div className=" w-64 h-12 shrink-0 relative">
          <Image fill alt="logo" src="/images/logo.png" className="" />
        </div>
        <div className=" flex flex-grow justify-between">
          <SearchBar />
          <MenuIcons />
        </div>
      </section>
      <section className="block sm:hidden items-center py-3 gap-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-5 shrink-0">
            <RxHamburgerMenu className=" text-ma-text-secondary dark:text-ma-white" size={30} />
            <Image width={150} height={30} alt="logo" src="/images/logo.png" className="" />
          </div>
          <MenuIcons />
        </div>
        <SearchBar />
      </section>
    </>
  );
};

export default HomepageHeader;
