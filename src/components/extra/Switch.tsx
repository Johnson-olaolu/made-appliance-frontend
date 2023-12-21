"use client";
import { RootState, changeDarkMode } from "@/store/appSlice";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const Switch: React.FC<{ isMobile?: boolean }> = ({ isMobile = true }) => {
  const dispatch = useDispatch();
  let theme = useSelector((state: RootState) => state.app.theme);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [ctx] = useState(gsap.context(() => {}));

  const handleThemeChangeMobile = (t: "dark" | "light") => {
    dispatch(changeDarkMode(t));
    ctx.close();
  };
  useLayoutEffect(() => {
    ctx.add("open", () => {
      gsap.fromTo(
        dropdownRef.current,
        {
          display: "block",
          translateY: 40,
          opacity: 0,
        },
        {
          translateY: 24,
          opacity: 1,
          duration: 0.3,
        }
      );
    });
    ctx.add("close", () => {
      gsap.to(dropdownRef.current, {
        translateY: 40,
        opacity: 0,
        display: "none",
      });
    });

    return () => {
      ctx.revert();
    };
  }, [ctx]);

  const handleThemeChange = () => {
    dispatch(changeDarkMode(theme === "dark" ? "light" : "dark"));
  };
  return isMobile ? (
    <div onMouseEnter={() => ctx.open()} onMouseLeave={() => ctx.close()} ref={wrapperRef} className=" relative">
      <div className={`${isMobile ? " text-ma-white gap-3" : ""} relative flex items-center gap-1 font-bold text-sm cursor-pointer capitalize`}>
        <p className="">{theme}</p> <FaChevronDown size={12} />
      </div>
      <div ref={dropdownRef} className=" rounded-md  bg-ma-white shadow-lg py-5 w-[200px]  absolute left-0 top-0 translate-y-10 hidden z-10">
        <ul className="">
          <li
            role="button"
            onClick={() => handleThemeChangeMobile("dark")}
            className=" px-5 py-1 font-medium text-sm leading-6 hover:text-ma-blue capitalize"
          >
            Dark
          </li>
          <li
            role="button"
            onClick={() => handleThemeChangeMobile("light")}
            className=" px-5 py-1 font-medium text-sm leading-6 hover:text-ma-blue capitalize"
          >
            Light
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <>
      <div onClick={() => handleThemeChange()} className={`switch-container ${theme} hidden sm:block`}>
        <div className="switch-child"></div>
      </div>
      <div className="sm:hidden block">
        <select
          className=" text-ma-text-primary dark:text-ma-off-white bg-transparent cursor-pointer font-medium"
          name=""
          id=""
          onChange={() => handleThemeChange()}
        >
          <option selected={theme === "light"} value="Light">
            Light
          </option>
          <option selected={theme === "dark"} value="Dark">
            Dark
          </option>
        </select>
      </div>
    </>
  );
};

export default Switch;
