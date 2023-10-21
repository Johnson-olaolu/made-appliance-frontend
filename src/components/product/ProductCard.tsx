"use client";
import { IProduct } from "@/services/types";
import { formatAmount } from "@/utils/misc";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";

interface IProductCard {
  product: IProduct;
}

const ProductCard: React.FC<IProductCard> = (props) => {
  const { product } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [ctx] = useState(gsap.context(() => {}));

  const productWrapperRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const productActionsRef = useRef(null);

  useLayoutEffect(() => {
    ctx.add("mouseEnter", () => {
      gsap.to(productWrapperRef.current, {
        backgroundColor: "#fff",
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        duration: 0.5,
        zIndex: 50,
      });
      gsap.to(productDescriptionRef.current, {
        height: "auto",
        duration: 0.5,
      });
      gsap.to(productActionsRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    });
    ctx.add("mouseLeave", () => {
      gsap.to(productDescriptionRef.current, {
        height: "0",
        duration: 0.5,
      });
      gsap.to(productWrapperRef.current, {
        backgroundColor: "rgb(243 243 243 / var(--tw-bg-opacity))",
        boxShadow: "none",
        duration: 0.5,
        zIndex: 1,
      });
      gsap.to(productActionsRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    ctx.mouseEnter();
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    ctx.mouseLeave();
  };

  return (
    <div className=" relative  h-[212px] w-[196px]">
      <Link
        href={`/product/${product.slug}`}
        ref={productWrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" max-w-[196px] sm:w-[196px] bg-ma-off-white dark:bg-ma-black rounded-sm p-4 absolute"
      >
        <div className=" relative mb-3">
          <Image src={product?.images[0]?.src} height={172} width={144} className="w-full h-36 rounded-sm" alt={product?.images[0]?.alt} />
          <div
            ref={productActionsRef}
            className=" bg-white absolute bottom-4 flex left-1/2 transform -translate-x-1/2 rounded-sm shadow-xl opacity-0"
          >
            <div className=" h-7 w-7 flex items-center justify-center rounded-l-sm" role="button">
              <FaHeart className=" text-red-500" />
            </div>
            <div className=" h-7 w-8 flex items-center justify-center border-x-2 border-ma-[#AEAEAE1A]" role="button">
              <AiOutlineShoppingCart className=" text-ma-text-secondary  dark:text-ma-off-white " />
            </div>
            <div className=" h-7 w-7 flex items-center justify-center rounded-r-sm" role="button">
              <FiRefreshCcw className=" text-ma-text-secondary  dark:text-ma-off-white " />
            </div>
          </div>
          {false && <span className=" px-[6px] py-[2px] bg-red-500 text-white shadow text-xs absolute top-2 right-2">Save 12%</span>}
        </div>
        <div className={`w-full flex justify-between items-end ${isHovered && "mb-3"}`}>
          <div className="">
            <span className="text-[10px] text-ma-light-blue block">{product?.categories[0].name}</span>
            <p className="text-xs font-bold text-ma-text-secondary dark:text-ma-off-white line-clamp-1 text-ellipsis overflow-hidden max-w-[120px]">
              {product?.name}
            </p>
          </div>
          <div className="">
            <p className="text-xs font-bold text-ma-red"> {formatAmount(product?.price)}</p>
          </div>
        </div>
        <div className="">
          <p
            ref={productDescriptionRef}
            dangerouslySetInnerHTML={{ __html: product.description }}
            className=" text-xs line-clamp-3 overflow-hidden text-ellipsis  h-0"
          ></p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
