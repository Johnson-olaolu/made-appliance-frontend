import React from "react";
import Categories from "./Categories";
import Offers from "./Offers";
import { tempOffers } from "@/utils/constants";

const Jumbotron = () => {
  return (
    <section className="flex gap-8 items-stretch">
      <Categories />
      <div className="flex-grow border-t-2 border-[#AEAEAE1A]">
        <nav className=" h-14 items-center flex justify-end">
          <ul className="flex items-center gap-8">
            {tempOffers.map((offer, idx) => (
              <li className="" key={idx}>
                <a
                  href="#"
                  className={` text-sm font-bold ${offer !== "Special Offers" ? " text-ma-text-secondary dark:text-ma-off-white" : "text-ma-red"}`}
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
