import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MenuIcons from "./components/MenuIcons";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import MobileMenu from "./components/MobileMenu";
import Link from "next/link";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <section className=" bg-ma-white  dark:bg-ma-grey sm:pt-8 ">
        <div className="max-w-6xl mx-auto hidden sm:flex items-center gap-8 pb-7 ">
          <Link href={"/"} className=" w-64 h-12 shrink-0 relative">
            <Image fill alt="logo" src="/images/logo.png" className="" />
          </Link>
          <div className=" flex flex-grow justify-between">
            <SearchBar />
            <MenuIcons />
          </div>
        </div>
        <div className="block sm:hidden items-center py-3 gap-2 px-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-5 shrink-0">
              <RxHamburgerMenu className=" text-ma-text-secondary dark:text-ma-white" size={30} onClick={() => setShowMobileMenu(!showMobileMenu)} />
              <Image width={150} height={30} alt="logo" src="/images/logo.png" className="" />
            </div>
            <MenuIcons />
          </div>
          <SearchBar />
        </div>
        {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} showMobileMenu={showMobileMenu} />}
      </section>
    </>
  );
};

export default Header;
