import Image from "next/image";
import SearchBar from "./components/SearchBar";
import MenuIcons from "./components/MenuIcons";
import Jumbotron from "./components/jumbotron";
import FreeOptions from "./components/FreeOptions";
import Deals from "./components/deals";
import FlashSale from "./components/FlashSale";
import SpecialDiscount from "./components/SpecialDiscount";
import ProductsListing from "./components/ProductsListing";
import TopCategories from "./components/TopCategories";
import Testimonial from "./components/Testimonial";
import HomepageHeader from "./components/HomepageHeader";

export default function Home() {
  return (
    <main className=" bg-ma-white dark:bg-ma-grey">
      <div className="max-w-6xl  px-2 mx-auto pt-0 sm:pt-8 pb-16">
        <HomepageHeader />
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
