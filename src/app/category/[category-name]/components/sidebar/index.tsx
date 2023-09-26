import React from "react";
import SidebarCategories from "./components/SidebarCategories";
import SidebarShippingAndPickup from "./components/SidebarShippingAndPickup";

const Sidebar = () => {
  return (
    <div className="hidden w-64  shrink-0  sm:flex flex-col sm:border-r-2 border-[#AEAEAE1A] pr-2">
      <SidebarCategories />
      <SidebarShippingAndPickup />
    </div>
  );
};

export default Sidebar;
