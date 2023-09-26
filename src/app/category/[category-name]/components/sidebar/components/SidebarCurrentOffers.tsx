import React from "react";
import SideBarItemWrapper from "../SideBarItemWrapper";

const SidebarCurrentOffers = () => {
  return (
    <SideBarItemWrapper title="Current Offers">
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
            <span className="">On Sale</span>
            <span className="opacity-75 text-xs">(473)</span>
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
            <span className="">Top Deals</span>
            <span className="opacity-75 text-xs">(5)</span>
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
            <span className="">On Clearance</span>
            <span className="opacity-75 text-xs">(12)</span>
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
            <span className="">Open Box</span>
            <span className="opacity-75 text-xs">(12)</span>
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
            <span className="">Best Buy Exclusive</span>
            <span className="opacity-75 text-xs">(21)</span>
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
            <span className="">Online Only</span>
            <span className="opacity-75 text-xs">(1)</span>
          </div>
        </li>
      </ul>
    </SideBarItemWrapper>
  );
};

export default SidebarCurrentOffers;
