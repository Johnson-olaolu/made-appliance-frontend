import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import SideBarItemWrapper from "../SideBarItemWrapper";

const SidebarShippingAndPickup = () => {
  return (
    <SideBarItemWrapper title="Shipping & Pickup">
      <ul className="">
        <li className="py-2">
          <div className="flex items-center gap-2  dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <div className="sidebar-checkbox">
              <input type="checkbox" name="" id="" className="" />
              <svg className="check" width="10px" height="8px" viewBox="0 0 10 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon id="Mask" points="3.57142857 8 0 4.15384615 1 3.07692308 3.57142857 5.84615385 9 0 10 1.07692308"></polygon>
              </svg>
              <div className="highlight"></div>
            </div>
            <span className="">Get it shipped</span>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center gap-2  dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm">
            <div className="sidebar-checkbox">
              <input type="checkbox" name="" id="" className="" />
              <svg className="check" width="10px" height="8px" viewBox="0 0 10 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon id="Mask" points="3.57142857 8 0 4.15384615 1 3.07692308 3.57142857 5.84615385 9 0 10 1.07692308"></polygon>
              </svg>
              <div className="highlight"></div>
            </div>
            <span className="">Pick up at nearby store</span>
          </div>
        </li>
      </ul>
    </SideBarItemWrapper>
  );
};

export default SidebarShippingAndPickup;
