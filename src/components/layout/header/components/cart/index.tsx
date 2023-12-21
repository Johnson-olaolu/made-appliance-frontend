import { RootState } from "@/store/appSlice";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import ViewCart from "./ViewCart";

const HeaderCart = () => {
  const cart = useSelector((state: RootState) => state.store.cart);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [ctx] = useState(gsap.context(() => {}));

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
          translateY: 20,
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

  return (
    <div onMouseEnter={() => ctx.open()} onMouseLeave={() => ctx.close()} ref={wrapperRef} className="relative">
      <div className="relative hover:text-ma-blue">
        <BiShoppingBag role="button" className=" " size={28} />
        <div className="indicator-circle">
          <span>{cart.length}</span>
        </div>
      </div>
      <div ref={dropdownRef} className=" w-[320px] bg-ma-white absolute right-0 top-0 translate-y-10 hidden shadow-lg">
        {cart.length > 0 ? <ViewCart /> : <p className=" p-5 text-lg font-medium text-ma-primary2">Your Cart is Currently empty</p>}
      </div>
    </div>
  );
};

export default HeaderCart;
