import React, { useLayoutEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import CurrencySelector from "@/components/extra/CurrencySelector";
import Switch from "@/components/extra/Switch";
import Image from "next/image";
import HeaderLike from "./components/HeaderLike";
import HeaderCart from "./components/cart";
import HeaderUser from "./components/user";
import HeaderSearchBar from "./components/HeaderSearchBar";
import HeaderMenu from "./components/menu";
import gsap from "gsap";
import MobileMenu from "./components/mobile-menu";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [ctx] = useState(gsap.context(() => {}));

  const menuRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    ctx.add("addSticky", () => {
      gsap.fromTo(
        menuRef.current,
        {
          position: "fixed",
          width: "100%",
          backgroundColor: "#fff",
          top: 0,
          left: 0,
          translateY: "-100%",
          boxShadow: "0 -6px 10px 5px rgba(0,0,0,0.5)",
          zIndex: 100,
          opacity: 0,
        },
        {
          translateY: "0",
          opacity: 1,
          duration: 1,
        }
      );
    });
    ctx.add("removeSticky", () => {
      gsap.to(menuRef.current, {
        position: "initial",
        boxShadow: "none",
        duration: 0,
      });
      // menuRef;
    });
    // menuRef.current
    const handleScroll = () => {
      if (window.scrollY > 44) {
        if (menuRef.current?.style.position !== "fixed") {
          ctx.addSticky();
          setIsSticky(true);
        }
      } else {
        if (menuRef.current?.style.position === "fixed") {
          ctx.removeSticky();
          setIsSticky(false);
          menuRef.current.style.transform = "";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, [ctx]);
  return (
    <header>
      <div className=" hidden lg:block border-b border-[#dedfe2]">
        <div className=" max-w-7xl mx-auto px-4 py-2  flex justify-between">
          <p className="">We are open with limited hours and staff</p>
          <div className=" flex gap-5">
            <CurrencySelector />
            <div className="h-full w-px bg-[#dedfe2]"></div>
            <div className=" flex items-center gap-2 text-sm">
              <FaMapMarkerAlt />
              <p className=" text-sm font-medium">Store Location</p>
            </div>
            <div className="h-full w-px bg-[#dedfe2]"></div>
            <div className=" flex items-center gap-2 text-sm">
              <FaPhone />
              <p className="  font-medium text-sm">(08)123 456 7890</p>
            </div>
            <div className="h-full w-px bg-[#dedfe2]"></div>
            <Switch />
          </div>
        </div>
      </div>
      <div ref={menuRef} className=" relative">
        <div className=" max-w-3xl lg:max-w-7xl mx-auto px-4 py-2  flex justify-between items-center gap-6 h-24">
          <Image src={"/images/MADE-APPLIANCE-7.png"} height={120} width={472} alt="" className=" lg:h-14 w-auto max-w-[50%]" />
          <HeaderMenu isSticky={isSticky} />
          <div className=" flex items-center gap-3 max-w-[136px]  sm:max-w-[200px] lg:max-w-[440px] flex-grow justify-between">
            <HeaderSearchBar />
            <HeaderLike />
            <HeaderCart />
            <HeaderUser />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
