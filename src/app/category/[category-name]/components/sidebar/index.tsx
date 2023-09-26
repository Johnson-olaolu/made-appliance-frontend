import React from "react";
import SidebarCategories from "./components/SidebarCategories";
import SidebarShippingAndPickup from "./components/SidebarShippingAndPickup";
import SidebarCurrentOffers from "./components/SidebarCurrentOffers";
import SidebarPrice from "./components/SidebarPrice";
import SidebarProductCondition from "./components/SidebarProductCondition";
import SidebarDiscount from "./components/SidebarDiscount";
import SidebarCustomerRating from "./components/SidebarCustomerRating";

const Sidebar = () => {
  return (
    <div className="hidden w-64  shrink-0  sm:flex flex-col sm:border-r-2 border-[#AEAEAE1A] pr-2">
      <SidebarCategories />
      <SidebarShippingAndPickup />
      <SidebarCurrentOffers />
      <SidebarPrice />
      <SidebarProductCondition />
      <SidebarDiscount />
      <SidebarCustomerRating />
    </div>
  );
};

export default Sidebar;
