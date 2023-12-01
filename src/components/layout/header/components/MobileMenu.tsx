"use client";
import Switch from "@/components/extras/Switch";
import { fetchTopCategories } from "@/services/homepage.service";
import { ICategory } from "@/services/types";
import { RootState } from "@/store/appSlice";
import { currencies, languages, tempCategories } from "@/utils/constants";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

const MobileMenu: React.FC<{
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
}> = (props) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { setShowMobileMenu, showMobileMenu } = props;
  const [ctx, setCtx] = useState(gsap.context(() => {}, mobileMenuRef));

  useLayoutEffect(() => {
    ctx.add("entry", () => {
      gsap.to(ctx.selector?.(mobileMenuRef.current), {
        opacity: 100,
        duration: 0.5,
        x: 0,
      });
    });

    ctx.add("exit", () => {
      gsap.to(ctx.selector?.(mobileMenuRef.current), {
        opacity: 0,
        duration: 0.5,
        x: -320,
        onComplete: () => setShowMobileMenu(!showMobileMenu),
      });
    });
    ctx.entry();
    return () => ctx.revert();
  }, []);

  const topCategories = useSelector((state: RootState) => state.category.category);

  return (
    <aside className="fixed left-0 right-0 bottom-0 top-0 bg-black bg-opacity-20 z-50">
      <div
        className="max-w-xs flex flex-col  h-full bg-ma-off-white  dark:bg-ma-grey sm:pt-8 opacity-0 transform -translate-x-full"
        ref={mobileMenuRef}
      >
        <div className="p-4 flex items-center shrink-0 justify-between">
          <FiX className=" text-ma-text-secondary  dark:text-ma-off-white " size={26} onClick={() => ctx.exit()} role="button" />
          <Link href={"/"}>
            <Image width={150} height={30} alt="logo" src="/images/logo.png" className="" />
          </Link>
        </div>
        <div className=" flex-grow flex flex-col justify-between">
          <div className="border-t-2 border-[#AEAEAE1A] ">
            <div className=" flex items-center justify-between py-2 px-4">
              <p className=" font-bold  text-ma-text-secondary dark:text-ma-off-white">Our Categories</p>
              <p className=" font-bold  text-ma-red">View All</p>
            </div>
            <ul className="">
              {topCategories.map((category, idx) => (
                <li className="py-2 px-4" key={idx}>
                  <Link
                    href={`/category/${category.slug}`}
                    className=" w-full flex items-center justify-between   text-ma-text-secondary dark:text-ma-off-white"
                  >
                    <span dangerouslySetInnerHTML={{ __html: category.name }} className=" font-medium"></span>
                    <FaChevronRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" justify-self-end">
            <div className="border-[#AEAEAE1A] border-t-2 px-4 py-2 flex items-center justify-between">
              <p className="text-ma-text-secondary dark:text-ma-off-white">Currency</p>
              <select className=" text-ma-text-primary dark:text-ma-off-white bg-transparent cursor-pointer font-medium" name="" id="">
                {currencies.map((currency, idx) => (
                  <option key={idx}>{currency}</option>
                ))}
              </select>
            </div>
            <div className="border-[#AEAEAE1A] border-t-2 px-4 py-2 flex items-center justify-between">
              <p className="text-ma-text-secondary dark:text-ma-off-white">Language</p>
              <select className=" text-ma-text-primary dark:text-ma-off-white bg-transparent cursor-pointer font-medium" name="" id="">
                {languages.map((language, idx) => (
                  <option key={idx}>{language}</option>
                ))}
              </select>
            </div>
            <div className="border-[#AEAEAE1A] border-t-2 px-4 py-2 flex items-center justify-between">
              <p className="text-ma-text-secondary dark:text-ma-off-white">Theme</p>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;
