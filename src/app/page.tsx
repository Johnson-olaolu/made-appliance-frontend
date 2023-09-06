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

export default function Home() {
  return (
    <main className=" bg-ma-white dark:bg-ma-grey">
      <div className="max-w-6xl  mx-auto pt-8 pb-16">
        <section className=" flex items-center gap-8 mb-7">
          <div className=" w-64 h-12 shrink-0 relative">
            <Image fill alt="logo" src="/images/logo.png" className="" />
          </div>
          <div className=" flex flex-grow justify-between">
            <SearchBar />
            <MenuIcons />
          </div>
        </section>
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
