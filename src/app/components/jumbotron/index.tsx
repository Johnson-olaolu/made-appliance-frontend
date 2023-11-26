import React from "react";
import Categories from "./Categories";
import Offers from "./Offers";
import Link from "next/link";
import { fetchOffers } from "@/services/offer.service";
import { fetchJumbotron, fetchTopCategories } from "@/services/homepage.service";

interface IJumbotron {}
const Jumbotron: React.FC<IJumbotron> = async (props) => {
  const offers = await fetchOffers();
  const jumbotronDetails = await fetchJumbotron();
  const data = await fetchTopCategories();

  return (
    <section className="flex gap-8 items-stretch">
      <Categories categories={data?.top_categories} />
      <div className="flex-grow sm:border-t-2 border-[#AEAEAE1A]">
        <nav className=" h-auto  sm:h-14 items-center flex sm:justify-end mb-4">
          <ul className="flex w-full items-center gap-3 sm:gap-8 flex-wrap justify-between sm:justify-end gap-y-2">
            <li className="">
              <Link href="/" className="text-xs sm:text-sm font-bold text-ma-text-secondary dark:text-ma-off-white">
                Home
              </Link>
            </li>
            <li className="">
              <Link href="/todays-deals" className="text-xs sm:text-sm font-bold text-ma-text-secondary dark:text-ma-off-white">
                Today&apos;s Deals
              </Link>
            </li>
            <li className="">
              <Link href="/trending-products" className="text-xs sm:text-sm font-bold text-ma-text-secondary dark:text-ma-off-white">
                Trending Products
              </Link>
            </li>
            <li className="">
              <Link href="/blog" className="text-xs sm:text-sm font-bold text-ma-text-secondary dark:text-ma-off-white">
                Blog
              </Link>
            </li>

            <li className="">
              <Link href="/special-offers" className=" text-xs sm:text-sm font-bold  text-ma-red">
                Special Offers
              </Link>
            </li>
          </ul>
        </nav>
        <Offers offers={offers} jumbotronDetails={jumbotronDetails} />
      </div>
    </section>
  );
};

export default Jumbotron;
