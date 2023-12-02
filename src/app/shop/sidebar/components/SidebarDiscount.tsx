import React from "react";
import SideBarItemWrapper from "../SideBarItemWrapper";

const SidebarDiscount = () => {
  return (
    <SideBarItemWrapper title="Discount">
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
            <span className="">40% Off or More</span>
            <span className="opacity-75 text-xs">(4)</span>
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
            <span className="">30% Off or More</span>
            <span className="opacity-75 text-xs">(13)</span>
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
            <span className="">20% Off or More</span>
            <span className="opacity-75 text-xs">(38)</span>
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
            <span className="">All Discounted Items</span>
            <span className="opacity-75 text-xs">(47)</span>
          </div>
        </li>
      </ul>
    </SideBarItemWrapper>
  );
};

export default SidebarDiscount;
