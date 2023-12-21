import Link from "next/link";
import React from "react";
import HeaderMobileMenuWrapper from "../HeaderMobileMenuWrapper";

const HomeMenuMobile = () => {
  return (
    <HeaderMobileMenuWrapper title="Home">
      <ul className=" pl-4">
        <li className="py-2">
          <Link href={"#"} className="  text-ma-white  capitalize text-sm">
            About Page
          </Link>
        </li>
        <li className="py-2">
          <Link href={"#"} className="  text-ma-white  capitalize text-sm">
            Contact Page
          </Link>
        </li>
        <li className="py-2">
          <Link href={"#"} className="  text-ma-white  capitalize text-sm">
            FAQ Page
          </Link>
        </li>
        <li className="py-2">
          <Link href={"#"} className="  text-ma-white  capitalize text-sm">
            404 Error Pages
          </Link>
        </li>
      </ul>
    </HeaderMobileMenuWrapper>
  );
};

export default HomeMenuMobile;
