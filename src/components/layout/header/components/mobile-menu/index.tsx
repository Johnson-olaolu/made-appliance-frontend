import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import MobileMenuBurger from "./components/MobileMenuBurger";
import { FiX } from "react-icons/fi";
import MobileSearchBar from "./components/MobileSearchBar";
import HeaderMobileMenu from "./components/menu";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import CurrencySelector from "@/components/extra/CurrencySelector";
import Switch from "@/components/extra/Switch";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileWrapperRef = useRef<HTMLDivElement>(null);
  const mobileWrapperRef1 = useRef<HTMLDivElement>(null);
  const [ctx] = useState(gsap.context(() => {}));

  useLayoutEffect(() => {
    ctx.add("openMenu", () => {
      gsap.to(mobileWrapperRef1.current, {
        display: "block",
        backgroundColor: "rgba(0,0,0, 0.6)",
        duration: 0,
      });
      gsap.fromTo(
        mobileWrapperRef.current,
        {
          translateX: "-100%",
        },
        {
          translateX: "0",
        }
      );
    });

    ctx.add("closeMenu", () => {
      gsap.to(mobileWrapperRef.current, {
        translateX: "-100%",
        duration: 0.5,
      });
      gsap.to(mobileWrapperRef1.current, {
        backgroundColor: "transparent",
        display: "none",
        duration: 0.5,
      });
    });

    if (menuOpen) {
      ctx.openMenu();
    } else {
      ctx.closeMenu();
    }
  }, [menuOpen, ctx]);

  useLayoutEffect(() => {
    if (menuOpen) {
      document.querySelector("body")!.style.height = `${window.innerHeight}px`;
      document.querySelector("body")!.style.overflow = "hidden";
    } else {
      document.querySelector("body")!.style.height = `auto`;
      document.querySelector("body")!.style.overflow = "visible";
    }
  }, [menuOpen]);
  return (
    <>
      <MobileMenuBurger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div ref={mobileWrapperRef1} className={` fixed w-screen h-screen left-0 top-0 bg-ma-black bg-opacity-60  hidden`}>
        <div ref={mobileWrapperRef} className=" w-[472px] max-w-full pr-16 ">
          <div className=" w-full bg-ma-primary h-screen relative p-6">
            <button
              onClick={() => setMenuOpen(false)}
              className=" absolute top-0 right-0 transform translate-x-full bg-ma-primary2 h-10 w-10 flex items-center justify-center"
            >
              <FiX className=" text-white" size={24} />
            </button>
            <div className="">
              <p className=" text-ma-white mb-6">We are open with limited hours and staff</p>
              <MobileSearchBar />
              <div className=" my-6">
                <HeaderMobileMenu />
              </div>
              <div className=" py-6 ">
                <div className="h-px w-full bg-ma-white bg-opacity-25"></div>
              </div>
              <div className=" space-y-5 text-sm">
                <div className=" flex items-center gap-2  text-ma-white">
                  <FaMapMarkerAlt />
                  <p className="  font-medium">Store Location</p>
                </div>
                <div className=" flex items-center gap-2  text-ma-white">
                  <FaPhone />
                  <p className="  font-medium">(08)123 456 7890</p>
                </div>
                <CurrencySelector isMobile />
                <Switch isMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
