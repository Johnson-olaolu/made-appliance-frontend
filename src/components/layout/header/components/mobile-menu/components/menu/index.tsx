import React from "react";
import PagesMenuMobile from "./components/pages-menu";
import HomeMenuMobile from "./components/home-menu";
import Link from "next/link";

const HeaderMobileMenu = () => {
  return (
    <div className=" -mr-3">
      <HomeMenuMobile />
      <PagesMenuMobile />
      <Link href={"#"} className={` flex-grow font-semibold text-ma-white py-3 block`}>
        Contact
      </Link>
    </div>
  );
};

export default HeaderMobileMenu;
