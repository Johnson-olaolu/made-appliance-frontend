"use client";
import { IProduct } from "@/services/types";
import { RootState } from "@/store/appSlice";
import { addProductCart, addProductCompare, likeProduct, reduceProductCart, removeProductCompare, unLikeProduct } from "@/store/productSlice";
import { formatAmount } from "@/utils/misc";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

export interface IProductCard {
  product: IProduct;
}

const ProductCard: React.FC<IProductCard> = (props) => {
  const dispatch = useDispatch();
  const likes = useSelector((state: RootState) => state.product.likes);
  const compares = useSelector((state: RootState) => state.product.compares);
  const cart = useSelector((state: RootState) => state.product.cart);
  const { product } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [ctx] = useState(gsap.context(() => {}));

  const productWrapperRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const productActionsRef = useRef(null);

  useLayoutEffect(() => {
    ctx.add("mouseEnter", () => {
      gsap.to(productWrapperRef.current, {
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

  const onClickLikeProduct = (isLiked: boolean) => {
    if (isLiked) {
      dispatch(unLikeProduct(product.id));
    } else {
      dispatch(likeProduct(product));
    }
  };

  const onClickCompareProduct = (isCompared: boolean) => {
    if (isCompared) {
      dispatch(removeProductCompare(product.id));
    } else {
      dispatch(addProductCompare(product));
    }
  };

  const onClickCartProduct = (isInCart: boolean) => {
    if (isInCart) {
      dispatch(reduceProductCart(product.id));
    } else {
      dispatch(addProductCart(product));
    }
  };

  const isLiked = useMemo(() => {
    return likes.findIndex((p) => p.id === product.id) !== -1;
  }, [likes, product]);

  const isCompared = useMemo(() => {
    return compares.findIndex((p) => p.id === product.id) !== -1;
  }, [compares, product]);

  const isInCart = useMemo(() => {
    return cart.findIndex((p) => p.product.id === product.id) !== -1;
  }, [cart, product]);

  return (
    <div className=" shrink-0 relative  h-auto  sm:h-[212px] sm:w-[196px] max-w-[180px]">
      <Link
        href={`/product/${product.slug}`}
        ref={productWrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" sm:w-[196px]  max-w-[180px] bg-ma-off-white dark:bg-ma-black rounded-sm p-2 relative sm:absolute block"
      >
        <div className=" relative mb-3">
          <Image
            src={product?.images[0]?.src}
            height={172}
            width={144}
            className="w-full h-36 rounded-sm object-contain"
            alt={product?.images[0]?.alt}
          />
          <div
            ref={productActionsRef}
            className=" bg-white absolute bottom-4 flex left-1/2 transform -translate-x-1/2 rounded-sm shadow-xl opacity-0"
          >
            <div className=" h-7 w-7 flex items-center justify-center rounded-l-sm" role="button">
              <FaHeart
                className={`${isLiked ? " text-red-500" : " text-gray-400"}`}
                onClick={(e: Event) => {
                  e.preventDefault();
                  onClickLikeProduct(isLiked);
                }}
              />
            </div>
            <div className=" h-7 w-8 flex items-center justify-center border-x-2 border-ma-[#AEAEAE1A]" role="button">
              <AiOutlineShoppingCart
                className={`${isInCart ? " text-ma-text-secondary  dark:text-ma-off-white" : " text-gray-100"}`}
                onClick={(e: Event) => {
                  e.preventDefault();
                  onClickCartProduct(isInCart);
                }}
              />
            </div>
            <div className=" h-7 w-7 flex items-center justify-center rounded-r-sm" role="button">
              <FiRefreshCcw
                // className=" text-ma-text-secondary  dark:text-ma-off-white "
                className={`${isCompared ? " text-ma-text-secondary  dark:text-ma-off-white" : " text-gray-100"}`}
                onClick={(e: Event) => {
                  e.preventDefault();
                  onClickCompareProduct(isCompared);
                }}
              />
            </div>
          </div>
          {false && <span className=" px-[6px] py-[2px] bg-red-500 text-white shadow text-xs absolute top-2 right-2">Save 12%</span>}
        </div>
        <div className={`w-full flex justify-between items-end mb-3 sm:mb-0 flex-wrap ${isHovered && "sm:mb-3"}`}>
          <div className="">
            <span className="text-[10px] text-ma-light-blue block">{product?.categories[0].name}</span>
            <p className="text-xs font-bold text-ma-text-secondary dark:text-ma-off-white line-clamp-1 text-ellipsis overflow-hidden max-w-[100px]">
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
            className=" text-xs line-clamp-3 overflow-hidden text-ellipsis text-left h-auto sm:h-0 text-ma-text-secondary dark:text-ma-off-white"
          ></p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
