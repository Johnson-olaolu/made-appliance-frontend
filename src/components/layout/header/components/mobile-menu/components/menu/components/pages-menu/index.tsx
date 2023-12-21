import React from "react";
import HeaderMobileMenuWrapper from "../HeaderMobileMenuWrapper";
import Link from "next/link";

const PagesMenuMobile = () => {
  return (
    <HeaderMobileMenuWrapper title="Pages">
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
          {/* <Link href={"#"} className="  text-ma-white  capitalize text-sm">
            About Page
          </Link> */}
          <HeaderMobileMenuWrapper title="Privacy Policy" isSubMenu>
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
            </ul>
          </HeaderMobileMenuWrapper>
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

export default PagesMenuMobile;
