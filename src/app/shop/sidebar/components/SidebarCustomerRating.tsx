import React from "react";
import SideBarItemWrapper from "../SideBarItemWrapper";
import { FaStar } from "react-icons/fa6";

const SidebarCustomerRating = () => {
  return (
    <SideBarItemWrapper title="Customer Rating">
      <ul className="">
        <li className="py-2">
          <div className="flex items-center gap-2  dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm hover:underline">
            <div className="sidebar-checkbox">
              <input type="checkbox" name="" id="" className="" />
              <svg className="check" width="10px" height="8px" viewBox="0 0 10 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon id="Mask" points="3.57142857 8 0 4.15384615 1 3.07692308 3.57142857 5.84615385 9 0 10 1.07692308"></polygon>
              </svg>
              <div className="highlight"></div>
            </div>
            <div className=" flex items-center gap-1">
              <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
            </div>
            <span className="">5 stars</span>
            <span className="opacity-75 text-xs">(3)</span>
          </div>
        </li>
      </ul>
    </SideBarItemWrapper>
  );
};

export default SidebarCustomerRating;
