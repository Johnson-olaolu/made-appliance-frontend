"use client";
import { IAcfUrl, ICategory, IImage, IMedia, IOffer } from "@/services/types";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Offers: React.FC<{
  offers: IOffer[];
  jumbotronDetails?: {
    mainJumbotron: {
      main_jumbotron_title: string;
      main_jumbotron_text: string;
      main_jumbotron_cta: string;
      main_jumbotron_image: IMedia;
      main_jumbotron_url: string;
    };
    topDeals: {
      top_deals_promo_image: IMedia;
      top_deals_url: IAcfUrl;
      top_deals_cta: string;
    };
    higlightedCategory: ICategory;
  };
}> = (props) => {
  let { offers, jumbotronDetails: jumbotronDetails } = props;
  const offer1 = useRef<HTMLDivElement>(null);
  const offer2 = useRef<HTMLDivElement>(null);
  const offer3 = useRef<HTMLDivElement>(null);

  const [data, setData] = useState(offers);

  const offerMobileWrapper = useRef<HTMLDivElement>(null);
  const offerMobile1 = useRef<HTMLDivElement>(null);
  const offerMobile2 = useRef<HTMLDivElement>(null);
  const offerMobile3 = useRef<HTMLDivElement>(null);

  //Desktop Menu
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    // gsap.to([offerMobile1.current, offerMobile2.current, offerMobile3.current], {
    //   xPercent: -100 * ([offerMobile1.current, offerMobile2.current, offerMobile3.current].length - 1),
    //   ease: "none",
    //   // scrollTrigger: {
    //   //   trigger: offerMobileWrapper.current,
    //   //   pin: true,
    //   //   scrub: 1,
    //   //   snap: 1 / ([offerMobile1.current, offerMobile2.current, offerMobile3.current].length - 1),
    //   //   end: () => "+=" + offerMobileWrapper.current?.offsetWidth,
    //   // },
    // });
  }, []);

  useLayoutEffect(() => {}, []);
  return (
    <>
      <div className=" hidden sm:grid gap-4 items-stretch homepage-offers">
        <div ref={offer1} style={{ gridArea: "A" }} className=" bg-ma-off-white dark:bg-ma-black active-offer relative p-9 flex  items-center">
          <div className="max-w-[240px] h-full py-5">
            <h6 className=" text-ma-text-secondary dark:text-ma-off-white text-3xl font-bold mb-3 text-ellipsis line-clamp-5 overflow-hidden">
              {jumbotronDetails?.mainJumbotron.main_jumbotron_title}
            </h6>
            <p className=" text-xs text-ma-text-primary font-medium mb-7">{jumbotronDetails?.mainJumbotron.main_jumbotron_text}</p>
            <Link
              href={`/shop`}
              className=" h-12 w-36 flex items-center justify-center text-sm text-ma-white font-bold uppercase bg-ma-light-blue mt-8 "
            >
              {jumbotronDetails?.mainJumbotron.main_jumbotron_cta}
            </Link>
          </div>
          <Image
            src={jumbotronDetails?.mainJumbotron.main_jumbotron_image.media_details.sizes.full.source_url || ""}
            alt={jumbotronDetails?.mainJumbotron.main_jumbotron_image.alt_text || ""}
            height={280}
            width={243}
            className="absolute bottom-0 right-8 max-h-80 w-[250px] h-auto"
          />
        </div>
        <div ref={offer2} style={{ gridArea: "B" }} className=" bg-[#012F6B] p-5 relative h-[172px] flex flex-col items-center justify-between ">
          <div className="flex flex-col items-center gap-2 ">
            <Image
              src={jumbotronDetails?.topDeals.top_deals_promo_image.media_details.sizes.full.source_url || ""}
              alt=""
              height={40}
              width={120}
              className=""
            />
            <p className=" text-xs text-ma-white text-center">Find the best offers from our latest sales, all in one place.</p>
          </div>
          <Link
            href={`/shop`}
            className=" h-8 rounded-sm w-28 flex items-center justify-center text-xs text-ma-light-blue font-bold uppercase bg-ma-white"
          >
            {jumbotronDetails?.topDeals.top_deals_cta}
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
      <div ref={offerMobileWrapper} className=" sm:hidden flex  flex-nowrap  gap-4 overflow-x-auto w-screen">
        <div ref={offerMobile1} className=" bg-ma-off-white h-44  shrink-0 p-4 relative w-full flex">
          <div className="w-36 h-full flex flex-col justify-between">
            <h6 className="text-ma-text-secondary dark:text-ma-off-white font-bold text-ellipsis line-clamp-5 leading-tight overflow-hidden">
              {jumbotronDetails?.mainJumbotron.main_jumbotron_title}
            </h6>
            <p className=" text-xs text-ma-text-primary font-medium text-ellipsis line-clamp-3">
              {jumbotronDetails?.mainJumbotron.main_jumbotron_text}
            </p>
            <Link
              href={`/shop`}
              className=" h-8 w-24 flex items-center justify-center text-xs text-ma-white font-bold uppercase bg-ma-light-blue mt-2 "
            >
              {jumbotronDetails?.mainJumbotron.main_jumbotron_cta}
            </Link>
          </div>
          <Image
            src={jumbotronDetails?.mainJumbotron.main_jumbotron_image.media_details.sizes.full.source_url || ""}
            alt={jumbotronDetails?.mainJumbotron.main_jumbotron_image.alt_text || ""}
            height={280}
            width={243}
            className="absolute bottom-0 right-4 max-w-[50%] w-auto h-5/6"
          />
        </div>
        <div ref={offerMobile2} className=" bg-[#012F6B]  p-4 h-44 w-full shrink-0 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center gap-2 ">
            <Image
              src={jumbotronDetails?.topDeals.top_deals_promo_image.media_details.sizes.full.source_url || ""}
              alt=""
              height={40}
              width={120}
              className=""
            />
            <p className=" text-md text-ma-white text-center w-3/4">Find the best offers from our latest sales, all in one place.</p>
          </div>
          <Link
            href={`/shop`}
            className=" h-8 rounded-sm w-28 flex items-center justify-center text-xs text-ma-light-blue font-bold uppercase bg-ma-white"
          >
            {jumbotronDetails?.topDeals.top_deals_cta}
          </Link>
        </div>
        <div ref={offerMobile3} className="  h-44 w-full shrink-0 bg-[#DFE3E4] p-4 relative ">
          <div className="w-36 flex flex-col justify-between h-full">
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
    </>
  );
};

export default Offers;
