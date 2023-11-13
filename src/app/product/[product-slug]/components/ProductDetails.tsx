"use client";
import { IProduct } from "@/services/types";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface IProductDetails {
  product: IProduct;
}

const ProductDetails: React.FC<IProductDetails> = (props) => {
  const { product } = props;
  const iconRef = useRef(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [ctx] = useState(gsap.context(() => {}));

  useLayoutEffect(() => {
    ctx.add("open", () => {
      gsap.to(iconRef.current, {
        rotate: -180,
        duration: 0.3,
      });
      gsap.to(bodyRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        onStart: () => setIsOpen(true),
      });
    });
    ctx.add("close", () => {
      gsap.to(bodyRef.current, {
        height: "0",
        opacity: 0,
        duration: 0.5,
        onComplete: () => setIsOpen(false),
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      ctx.open();
    } else {
      ctx.close();
    }
  };
  return (
    <div className="">
      <div
        className=" p-6  border-t-2 border-[#AEAEAE1A] flex items-center justify-between  text-ma-text-secondary dark:text-ma-off-white"
        role="button"
        onClick={handleToggle}
      >
        <h4 className="text-xl font-bold hover:text-ma-light-blue">About This Product</h4>
        <span ref={iconRef} className="">
          <FiChevronDown size={24} />
        </span>
      </div>
      <div ref={bodyRef} className="body h-0 overflow-hidden">
        <div
          className="product-description  p-6 text-ma-text-secondary dark:text-ma-off-white"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </div>
    </div>
  );
};

export default ProductDetails;
