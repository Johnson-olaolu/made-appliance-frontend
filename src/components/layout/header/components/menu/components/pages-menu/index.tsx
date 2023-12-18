import gsap from "gsap";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const PagesMenu = React.forwardRef<HTMLDivElement>((props, ref) => {
  const subMenu1WrapperRef = useRef<HTMLLIElement>(null);
  const subMenu1DropdownRef = useRef<HTMLDivElement>(null);
  const [ctx] = useState(gsap.context(() => {}));

  useLayoutEffect(() => {
    //sub menu
    ctx.add("openSubMenu1", () => {
      gsap.fromTo(
        subMenu1DropdownRef.current,
        {
          display: "block",
          translateY: 40,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
          duration: 0.3,
        }
      );
    });
    ctx.add("closeSubMenu1", () => {
      gsap.to(subMenu1DropdownRef.current, {
        translateY: 40,
        opacity: 0,
        display: "none",
      });
    });

    return () => {
      ctx.revert();
    };
  }, [ctx]);
  return (
    <div
      ref={ref}
      style={{ border: "1px solid rgb(0 0 0 / 0.02)" }}
      className=" min-w-[280px] bg-ma-white py-8  shadow-lg absolute left-0 top-0 transform translate-y-10 hidden z-10"
    >
      <ul className=" space-y-4">
        <li className="">
          <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize">
            About Page
          </Link>
        </li>
        <li className="">
          <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize">
            Contact Page
          </Link>
        </li>
        <li className="">
          <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize">
            FAQ Page
          </Link>
        </li>
        <li onMouseEnter={() => ctx.openSubMenu1()} onMouseLeave={() => ctx.closeSubMenu1()} ref={subMenu1WrapperRef} className=" w-full relative">
          <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize flex justify-between items-center">
            <span className="">Privacy Policy</span>
            <FaChevronRight size={10} />
          </Link>
          <div
            ref={subMenu1DropdownRef}
            style={{ border: "1px solid rgb(0 0 0 / 0.02)" }}
            className=" min-w-[280px] bg-ma-white py-8  shadow-lg absolute left-full top-0 transform -translate-x-3 translate-y-0 hidden z-10"
          >
            <ul className="space-y-4">
              <li className="">
                <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize">
                  Refund Policy
                </Link>
              </li>
              <li className="">
                <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize">
                  Terms of Service
                </Link>
              </li>
              <li className="">
                <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize">
                  Contact Information
                </Link>
              </li>
              <li className="">
                <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize">
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="">
          <Link href={"#"} className=" px-8 py-1 font-medium text-ma-primary-light1 hover:text-ma-blue capitalize">
            404 Error Pages
          </Link>
        </li>
      </ul>
    </div>
  );
});

PagesMenu.displayName = "PagesMenu";

export default PagesMenu;
