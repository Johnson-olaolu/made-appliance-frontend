import React from "react";
import Categories from "./Categories";
import Offers from "./Offers";
import { tempOffers } from "@/utils/constants";

const Jumbotron = () => {
  return (
    <section className="flex gap-8 items-stretch">
      <Categories />
      <div className="flex-grow sm:border-t-2 border-[#AEAEAE1A]">
        <nav className=" h-auto  sm:h-14 items-center flex sm:justify-end mb-4">
          <ul className="flex w-full items-center gap-3 sm:gap-8 flex-wrap justify-between sm:justify-end gap-y-2">
            {tempOffers.map((offer, idx) => (
              <li className="" key={idx}>
                <a
                  href="#"
                  className={` text-xs sm:text-sm font-bold ${
                    offer !== "Special Offers" ? " text-ma-text-secondary dark:text-ma-off-white" : "text-ma-red"
                  }`}
                >
                  {offer}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Offers />
      </div>
    </section>
  );
};

export default Jumbotron;
