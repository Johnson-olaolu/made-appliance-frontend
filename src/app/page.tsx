import Image from "next/image";
import Jumbotron from "./components/jumbotron";
import FreeOptions from "./components/FreeOptions";
import Deals from "./components/deals";
import FlashSale from "./components/FlashSale";
import SpecialDiscount from "./components/SpecialDiscount";
import ProductsListing from "./components/ProductsListing";
import TopCategories from "./components/TopCategories";
import Testimonial from "./components/Testimonial";

export default function Home() {
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
