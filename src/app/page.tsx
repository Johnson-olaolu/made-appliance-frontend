import Image from "next/image";
import Jumbotron from "./components/jumbotron";
import FreeOptions from "./components/FreeOptions";
import Deals from "./components/deals";
import FlashSale from "./components/FlashSale";
import SpecialDiscount from "./components/SpecialDiscount";
import ProductsListing from "./components/ProductsListing";
import TopCategories from "./components/TopCategories";
import Testimonial from "./components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  // icons: "/favicon.png",
  title: "Made Appliance Outlet | DISCOUNTS ON ALL APPLIANCES",
  description:
    "Made Appliance Outlet is the #1 Appliance Outlet Store in the Dallas-Fort Worth Metroplex. Best Prices Guaranteed. Great products. Payment Options Available.",
  openGraph: {
    url: "https://madeappliance.com",
    type: "website",
    title: "Made Appliance Outlet | DISCOUNTS ON ALL APPLIANCES",
    images: "http://madeappliance.com/wp-content/uploads/2021/11/Untitled-design-56.png",
    description:
      "Made Appliance Outlet is the #1 Appliance Outlet Store in the Dallas-Fort Worth Metroplex. Best Prices Guaranteed. Great products. Payment Options Available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Made Appliance Outlet | DISCOUNTS ON ALL APPLIANCES",
    images: "http://madeappliance.com/wp-content/uploads/2021/11/Untitled-design-56.png",
    description:
      "Made Appliance Outlet is the #1 Appliance Outlet Store in the Dallas-Fort Worth Metroplex. Best Prices Guaranteed. Great products. Payment Options Available.",
  },
};

export default async function Home() {
  // const response = await fetchSinglePage("");
  return (
    <main className=" bg-ma-white dark:bg-ma-grey">
      <div className="max-w-6xl  px-2  sm:px-0 mx-auto pt-0 pb-16">
        <Jumbotron />
        <FreeOptions />
        <Deals />
        <FlashSale />
        <SpecialDiscount />
        <ProductsListing />
        <TopCategories />
        <Testimonial />
      </div>
    </main>
  );
}
