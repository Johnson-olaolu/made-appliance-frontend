"use client";
import { IProduct } from "@/services/types";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Offers: React.FC<{
  offers: IProduct[];
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
          <div className="max-w-[230px]">
            <span className=" text-ma-red text-sm uppercase">SUMMER SALE UPTO 50%</span>
            <h6 className=" text-ma-text-secondary dark:text-ma-off-white text-3xl font-bold mb-3 text-ellipsis line-clamp-3 overflow-hidden">
              {data[0].name}
            </h6>
            <p className=" text-xs text-ma-text-primary font-medium mb-7">{data[0].short_description.replace(/(<([^>]+)>)/gi, "")}</p>
            <Link
              href={`/product/${data[0].slug}`}
              className=" h-12 w-36 flex items-center justify-center text-sm text-ma-white font-bold uppercase bg-ma-light-blue"
            >
              SHOP NOW
            </Link>
          </div>
          <Image
            src={data[0]?.images[0].src}
            alt={data[0]?.images[0].alt}
            height={280}
            width={243}
            className="absolute bottom-0 right-14 max-h-80 w-auto"
          />
        </div>
        <div ref={offer2} style={{ gridArea: "B" }} className=" bg-[#C1DAF9]  p-5 relative h-[172px]">
          <div className="max-w-[120px] flex flex-col justify-between h-full">
            <h6 className=" text-xl font-bold line-clamp-2 overflow-hidden text-ellipsis">{data[1].name}</h6>
            <div className="">
              <span className=" font-medium text-[10px] text-ma-text-primary">Weekend Discount</span>
              <div className="flex items-center gap-3">
                <span className=" text-ma-red font-bold text-xl leading-none">${data[1].price}</span>
                <span className=" text-sm line-through text-ma-text-secondary font-semibold leading-none">${data[1].price}</span>
              </div>
            </div>
          </div>
          <Image
            src={data[1]?.images[0].src}
            alt={data[1]?.images[0].alt}
            height={100}
            width={134}
            className="absolute  right-5 top-1/2 transform -translate-y-1/2 max-h-20 max-w-[120px] w-auto"
          />
        </div>
        <div ref={offer3} style={{ gridArea: "C" }} className=" bg-[#DFE3E4] p-5 relative h-[172px]">
          <div className="max-w-[120px] flex flex-col justify-between h-full">
            <h6 className=" text-xl font-bold line-clamp-2 overflow-hidden text-ellipsis">{data[2].name}</h6>
            <div className="">
              <span className=" font-medium text-[10px] text-ma-text-primary">Weekend Discount</span>
              <div className="flex items-center gap-3">
                <span className=" text-ma-red font-bold text-xl leading-none">${data[2].price}</span>
                <span className=" text-sm line-through text-ma-text-secondary font-semibold leading-none">${data[2].price}</span>
              </div>
            </div>
          </div>
          {/* <Image
            src={data[2]?.images[0].src}
            alt={data[2]?.images[0].alt}
            height={100}
            width={134}
            className="absolute  right-5 top-1/2 transform -translate-y-1/2 max-h-20 max-w-[120px] w-auto"
          /> */}
        </div>
      </div>
      {/* <div className=" hidden sm:flex gap-4 items-stretch">
        <div className=" flex-grow bg-ma-off-white dark:bg-ma-black flex p-9 items-center relative">
          <div className="max-w-[230px]">
            <span className=" text-ma-red text-xs font-bold uppercase">SUMMER SALE UPTO 50%</span>
            <h6 className=" text-ma-text-secondary dark:text-ma-off-white text-3xl font-bold mb-3">Professional 48″ Gas Cooktop</h6>
            <p className=" text-xs text-ma-text-primary font-medium mb-7">
              Save and shoot straight from the bos with three packs of iconic Polaroid{" "}
            </p>
            <a href="" className=" h-12 w-36 flex items-center justify-center text-sm text-ma-white font-bold uppercase bg-ma-light-blue">
              SHOP NOW
            </a>
          </div>
          <Image src={"/images/image 14.png"} alt="" height={280} width={243} className="absolute bottom-0 right-14 " />
        </div>
        <div className=" shrink-0 space-y-4">
          <div className="w-72 h-40 bg-[#C1DAF9] p-5 relative">
            <div className="max-w-[120px] flex flex-col justify-between h-full">
              <h6 className=" text-xl font-bold">GE ENERGY STAR®</h6>
              <div className="">
                <span className=" font-medium text-[10px] text-ma-text-primary">Weekend Discount</span>
                <div className="flex items-center gap-3">
                  <span className=" text-ma-red font-bold text-xl leading-none">$270</span>
                  <span className=" text-sm line-through text-ma-text-secondary font-semibold leading-none">$350</span>
                </div>
              </div>
            </div>
            <Image src={"/images/image 2.png"} alt="" height={100} width={134} className="absolute  right-5 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="w-72 h-40 bg-[#DFE3E4] p-5 relative">
            <div className="max-w-[120px] flex flex-col justify-between h-full">
              <h6 className=" text-xl font-bold">GE ENERGY STAR®</h6>
              <div className="">
                <span className=" font-medium text-[10px] text-ma-text-primary">Weekend Discount</span>
                <div className="flex items-center gap-3">
                  <span className=" text-ma-red font-bold text-xl leading-none">$270</span>
                  <span className=" text-sm line-through text-ma-text-secondary font-semibold leading-none">$350</span>
                </div>
              </div>
            </div>
            <Image src={"/images/image 3.png"} alt="" height={100} width={72} className="absolute  right-5 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div> */}
      <div className=" sm:hidden flex  flex-nowrap  gap-4 overflow-x-auto">
        <div ref={offerMobile1} className=" bg-ma-off-white h-44 w-full shrink-0"></div>
        <div ref={offerMobile2} className=" bg-[#C1DAF9] h-44 w-full shrink-0"></div>
        <div ref={offerMobile3} className=" bg-[#DFE3E4] h-44 w-full shrink-0 "></div>
      </div>
    </>
  );
};

export default Offers;
