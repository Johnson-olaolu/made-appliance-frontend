"use client";
import imglyRemoveBackground from "@imgly/background-removal";
import { IProduct } from "@/services/types";
import { formatAmount } from "@/utils/misc";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart, FaStar } from "react-icons/fa6";
import { FiRefreshCcw } from "react-icons/fi";

interface IProductCardShop {
  product: IProduct;
}

const ProductCardShop: React.FC<IProductCardShop> = (props) => {
  const { product } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [productImage, setProductImage] = useState("");
  const [ctx] = useState(gsap.context(() => {}));

  const productShopCardWrapperRef = useRef(null);
  const productActionsRef = useRef(null);

  useLayoutEffect(() => {
    ctx.add("mouseEnter", () => {
      gsap.to(productShopCardWrapperRef.current, {
        // boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        duration: 0.5,
        zIndex: 50,
      });
      gsap.to(productActionsRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    });
    ctx.add("mouseLeave", () => {
      gsap.to(productShopCardWrapperRef.current, {
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
    // ctx.mouseEnter();
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    // ctx.mouseLeave();
  };

  useEffect(() => {
    imglyRemoveBackground(product?.images[0]?.src).then((blob) => {
      const url = URL.createObjectURL(blob);
      console.log(blob);
      setProductImage(url);
    });
  }, [product?.images]);
  return (
    <>
      <div
        role="button"
        className=" p-2 rounded pb-4"
        ref={productShopCardWrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-48 w-full mx-auto relative">
          <Image
            src={productImage || product?.images[0]?.src}
            height={180}
            width={180}
            className=" object-contain h-48 w-full"
            alt={product?.images[0]?.alt}
          />
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
        </div>
        <div className=" mt-4">
          <Link href={"#"} className="text-ma-text-secondary dark:text-ma-off-white  text-sm overflow-hidden text-ellipsis mb-2 hover:underline">
            {product?.name}
          </Link>
        </div>
        <div className=" mt-4 flex items-end gap-2 ">
          <span className="text-xl font-bold text-ma-light-blue">{formatAmount(product.price)}</span>
          <span className="text-sm font-bold text-ma-light-blue line-through opacity-50">{formatAmount(product.price)}</span>
        </div>
        <div className="gap-2 flex items-end mt-4">
          <div className="flex items-center gap-1">
            <FaStar className="text-[#fecf0a]" />
            <FaStar className="text-[#fecf0a]" />
            <FaStar className="text-[#fecf0a]" />
            <FaStar className="text-[#fecf0a]" />
            <FaStar className="text-[#fecf0a]" />
          </div>
          <span className=" text-xs text-ma-text-primary">( 2 reviews)</span>
        </div>
      </div>
    </>
  );
};

export default ProductCardShop;
