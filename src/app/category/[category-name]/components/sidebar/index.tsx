import React from "react";
import SidebarCategories from "./components/SidebarCategories";
import { getSubCategories } from "@/services/categories.service";
import { ICategory } from "@/services/types";

interface ISidebar {
  category: ICategory;
}
const Sidebar: React.FC<ISidebar> = async (props) => {
  const { category } = props;
  const subCategories = await getSubCategories(category.id);
  return (
    <div className="hidden w-64  shrink-0  sm:flex flex-col sm:border-r-2 border-[#AEAEAE1A] pr-2">
      <SidebarCategories categories={subCategories} />
      {/* <SidebarShippingAndPickup />
      <SidebarCurrentOffers />
      <SidebarPrice />
      <SidebarProductCondition />
      <SidebarDiscount />
      <SidebarCustomerRating /> */}
    </div>
  );
};

export default Sidebar;
