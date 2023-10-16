"use client";
import { IOffer } from "@/services/types";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Offers: React.FC<{
  offers: IOffer[];
}> = (props) => {
  let { offers } = props;
  const offer1 = useRef<HTMLDivElement>(null);
  const offer2 = useRef<HTMLDivElement>(null);
  const offer3 = useRef<HTMLDivElement>(null);

  const [data, setData] = useState(offers);

  const offerMobile1 = useRef<HTMLDivElement>(null);
  const offerMobile2 = useRef<HTMLDivElement>(null);
  const offerMobile3 = useRef<HTMLDivElement>(null);

  //Desktop Menu
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    // phase 1
    // tl.to(
    //   [offer1.current],
    //   {
    //     gridArea: "B",
    //     delay: 2,
    //   },
    //   "phase1"
    // );
    // tl.to(
    //   [offer2.current],
    //   {
    //     gridArea: "C",
    //     delay: 2,
    //   },
    //   "phase1"
    // );
    // tl.to(
    //   [offer3.current],
    //   {
    //     gridArea: "A",
    //     delay: 2,
    //   },
    //   "phase1"
    // );

    // //phase 2
    // tl.to(
    //   [offer1.current],
    //   {
    //     gridArea: "C",
    //     delay: 2,
    //   },
    //   "phase2"
    // );
    // tl.to(
    //   [offer2.current],
    //   {
    //     gridArea: "A",
    //     delay: 2,
    //   },
    //   "phase2"
    // );
    // tl.to(
    //   [offer3.current],
    //   {
    //     gridArea: "B",
    //     delay: 2,
    //   },
    //   "phase2"
    // );

    // //phase 3
    // tl.to(
    //   [offer1.current],
    //   {
    //     gridArea: "A",
    //     delay: 2,
    //   },
    //   "phase3"
    // );
    // tl.to(
    //   [offer2.current],
    //   {
    //     gridArea: "B",
    //     delay: 2,
    //   },
    //   "phase3"
    // );
    // tl.to(
    //   [offer3.current],
    //   {
    //     gridArea: "C",
    //     delay: 2,
    //   },
    //   "phase3"
    // );
  }, []);

  useLayoutEffect(() => {}, []);
  return (
    <>
      <div className=" hidden sm:grid gap-4 items-stretch homepage-offers">
        <div ref={offer1} style={{ gridArea: "A" }} className=" bg-ma-off-white active-offer relative p-9 flex  items-center">
          <div className="max-w-[240px] h-full py-5">
            {/* <span className=" text-ma-red text-sm uppercase">{data[0]?.offer}</span> */}
            <h6 className=" text-ma-text-secondary dark:text-ma-off-white text-3xl font-bold mb-3 text-ellipsis line-clamp-5 overflow-hidden">
              Major discounts on kitchen appliances.
            </h6>
            <p className=" text-xs text-ma-text-primary font-medium mb-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo optio aliquam sed quod assumenda!
            </p>
            <Link
              href={`/shop`}
              className=" h-12 w-36 flex items-center justify-center text-sm text-ma-white font-bold uppercase bg-ma-light-blue mt-8"
            >
              SHOP NOW
            </Link>
          </div>
          <Image
            src={`/images/image 14.png`}
            alt={data[0]?.product?.images[0].alt}
            height={280}
            width={243}
            className="absolute bottom-0 right-8 max-h-80 w-[250px] h-auto"
          />
        </div>
        <div ref={offer2} style={{ gridArea: "B" }} className=" bg-[#012F6B] p-5 relative h-[172px] flex flex-col items-center justify-between ">
          <div className="flex flex-col items-center gap-2 ">
            <Image src={`/images/top-deals.png`} alt="" height={40} width={120} className="" />
            <p className=" text-xs text-ma-white text-center">Find the best offers from our latest sales, all in one place.</p>
          </div>
          <Link
            href={`/shop`}
            className=" h-8 rounded-sm w-28 flex items-center justify-center text-xs text-ma-light-blue font-bold uppercase bg-ma-white"
          >
            SHOP NOW
          </Link>
        </div>
        <div ref={offer3} style={{ gridArea: "C" }} className=" bg-[#DFE3E4] p-5 relative h-[172px]">
          <div className="max-w-[120px] flex flex-col justify-between h-full">
            <h6 className=" text-xl font-bold line-clamp-3 overflow-hidden text-ellipsis">Save Big Money on TV&apos;s</h6>
            <div className="">
              <span className=" font-medium text-[10px] text-ma-text-primary">Starting from as low as</span>
              <div className="flex items-center gap-3">
                <span className=" text-ma-red font-bold text-xl leading-none">$200</span>
                {/* <span className=" text-sm line-through text-ma-text-secondary font-semibold leading-none">${data[2]?.product?.price}</span> */}
              </div>
            </div>
          </div>
          <Image
            src={"/images/homepage-tv.webp"}
            alt={data[2]?.product?.images[0].alt}
            height={100}
            width={132}
            className="absolute  right-5 top-1/2 transform -translate-y-1/2 max-w-[200px]"
          />
        </div>
      </div>
      <div className=" sm:hidden flex  flex-nowrap  gap-4 overflow-x-auto">
        <div ref={offerMobile1} className=" bg-ma-off-white h-44 w-full shrink-0"></div>
        <div ref={offerMobile2} className=" bg-[#C1DAF9] h-44 w-full shrink-0"></div>
        <div ref={offerMobile3} className=" bg-[#DFE3E4] h-44 w-full shrink-0 "></div>
      </div>
    </>
  );
};

export default Offers;
