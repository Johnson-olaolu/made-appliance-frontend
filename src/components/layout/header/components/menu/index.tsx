import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import HomeMenu from "./components/home-menu";
import gsap from "gsap";
import MainMenu from "./components/main-menu";
import BlogMenu from "./components/blog-menu";
import PagesMenu from "./components/pages-menu";

const HeaderMenu: React.FC<{ isSticky: boolean }> = (props) => {
  const { isSticky } = props;
  const menu1WrapperRef = useRef<HTMLLIElement>(null);
  const menu1DropdownRef = useRef<HTMLDivElement>(null);
  const menu2WrapperRef = useRef<HTMLLIElement>(null);
  const menu2DropdownRef = useRef<HTMLDivElement>(null);
  const menu3WrapperRef = useRef<HTMLLIElement>(null);
  const menu3DropdownRef = useRef<HTMLDivElement>(null);
  const menu4WrapperRef = useRef<HTMLLIElement>(null);
  const menu4DropdownRef = useRef<HTMLDivElement>(null);
  const [ctx] = useState(gsap.context(() => {}));

  useLayoutEffect(() => {
    //home menu
    ctx.add("openMenu1", () => {
      gsap.fromTo(
        menu1DropdownRef.current,
        {
          display: "block",
          translateY: 120,
          opacity: 0,
        },
        {
          translateY: 80,
          opacity: 1,
          duration: 0.3,
        }
      );
    });
    ctx.add("closeMenu1", () => {
      gsap.to(menu1DropdownRef.current, {
        translateY: 120,
        opacity: 0,
        display: "none",
      });
    });

    //main menu
    ctx.add("openMenu2", () => {
      gsap.fromTo(
        menu2DropdownRef.current,
        {
          display: "block",
          translateY: 120,
          translateX: "-50%",
          opacity: 0,
        },
        {
          translateY: 80,
          translateX: "-50%",
          opacity: 1,
          duration: 0.3,
        }
      );
    });
    ctx.add("closeMenu2", () => {
      gsap.to(menu2DropdownRef.current, {
        translateY: 120,
        opacity: 0,
        display: "none",
      });
    });

    //blog menu
    ctx.add("openMenu3", () => {
      gsap.fromTo(
        menu3DropdownRef.current,
        {
          display: "block",
          translateY: 120,
          opacity: 0,
        },
        {
          translateY: 80,
          opacity: 1,
          duration: 0.3,
        }
      );
    });
    ctx.add("closeMenu3", () => {
      gsap.to(menu3DropdownRef.current, {
        translateY: 120,
        opacity: 0,
        display: "none",
      });
    });

    //pages menu
    ctx.add("openMenu4", () => {
      gsap.fromTo(
        menu4DropdownRef.current,
        {
          display: "block",
          translateY: 120,
          opacity: 0,
        },
        {
          translateY: 80,
          opacity: 1,
          duration: 0.3,
        }
      );
    });
    ctx.add("closeMenu4", () => {
      gsap.to(menu4DropdownRef.current, {
        translateY: 120,
        opacity: 0,
        display: "none",
      });
    });

    return () => {
      ctx.revert();
    };
  }, [ctx, isSticky]);

  return (
    <ul className=" h-20 hidden gap-5 lg:flex text-ma-primary dark:text-ma-white">
      <li
        onMouseEnter={() => ctx.openMenu1()}
        onMouseLeave={() => ctx.closeMenu1()}
        ref={menu1WrapperRef}
        className=" flex items-center h-full relative"
      >
        <Link href={"#"} className=" flex items-center  gap-1 ">
          <span className="  font-medium">Home</span>
          <FaChevronDown size={8} />
        </Link>
        <HomeMenu ref={menu1DropdownRef} />
      </li>
      <li
        onMouseEnter={() => ctx.openMenu2()}
        onMouseLeave={() => ctx.closeMenu2()}
        ref={menu2WrapperRef}
        className="flex items-center h-full static"
      >
        <Link href={"#"} className=" flex items-center  gap-1 ">
          <span className="  font-medium">Electronics</span>
          <FaChevronDown size={8} />
        </Link>
        <MainMenu ref={menu2DropdownRef} />
      </li>
      <li
        onMouseEnter={() => ctx.openMenu3()}
        onMouseLeave={() => ctx.closeMenu3()}
        ref={menu3WrapperRef}
        className="flex items-center h-full relative"
      >
        <Link href={"#"} className=" flex items-center  gap-1 ">
          <span className="  font-medium">Blog</span>
          <FaChevronDown size={8} />
        </Link>
        <BlogMenu ref={menu3DropdownRef} />
      </li>
      <li
        onMouseEnter={() => ctx.openMenu4()}
        onMouseLeave={() => ctx.closeMenu4()}
        ref={menu4WrapperRef}
        className="flex items-center h-full relative"
      >
        <Link href={"#"} className=" flex items-center  gap-1 ">
          <span className="  font-medium">Pages</span>
          <FaChevronDown size={8} />
        </Link>
        <PagesMenu ref={menu4DropdownRef} />
      </li>
      <li className="flex items-center h-full">
        <Link href={"#"} className=" flex items-center  gap-1 ">
          <span className="font-medium">Contact</span>
        </Link>
      </li>
    </ul>
  );
};

export default HeaderMenu;
