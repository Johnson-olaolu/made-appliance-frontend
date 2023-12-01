import { getSingleProductBySlug } from "@/services/product.service";
import { calculateDiscount, escapeHtml, formatAmount } from "@/utils/misc";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { FaHeart, FaStar } from "react-icons/fa6";
import { FiChevronRight, FiHeart, FiRefreshCcw, FiRefreshCw } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";
import ProductBreadcrumbs from "../components/ProductBreadCrumbs";
import AddToCartButton from "./components/AddToCartButton";
import { addProductCompare, likeProduct, removeProductCompare, unLikeProduct } from "@/store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/appSlice";
import LikeProductButton from "./components/LikeProductButton";
import CompareProductButton from "./components/CompareProductButton";
import ProductDetails from "./components/ProductDetails";
import SimilarProducts from "./components/SimilarProducts";
import ViewImages from "./components/ViewImages";
import { getMultipleCategories, getSingleCategory } from "@/services/categories.service";

const SingleProduct = async (props: any) => {
  const productSlug = props?.params["product-slug"];
  const product = await getSingleProductBySlug(productSlug);

  const categories = await getMultipleCategories(product.categories.map((c) => c.id));
  return (
    <>
      <main className=" bg-ma-white dark:bg-ma-grey ">
        <div className="max-w-6xl  px-2  sm:px-0 mx-auto pt-0 pb-16 sm:border-t-2 border-[#AEAEAE1A]">
          <ProductBreadcrumbs categories={categories} title={product.name} />
          <div className="grid sm:xgrid-cols-2 gap-4 mt-6 grid-cols-1">
            <ViewImages product={product} />
            <div className="border-[#AEAEAE1A] border-b-2 flex flex-col justify-between  pb-4">
              <div className="">
                {/* <div className=" mb-4">
                <span className="font-medium text-xs text-ma-white bg-ma-red rounded py-1 px-2">Geek Squad Open Box</span>
              </div> */}
                <h1 className=" text-ma-text-secondary dark:text-ma-off-white text-3xl font-bold mb-5">{product.name}</h1>
                <div className="mb-6 flex gap-2">
                  <p className=" text-sm text-ma-text-secondary dark:text-ma-off-white">
                    <strong>Model Number: </strong>
                    <span className="">{escapeHtml(product.short_description)?.split("#")[1]}</span>
                  </p>
                  {/* <p className=" text-xs ">
                  <strong>Model Number: </strong>
                  <span className="">AN515-57-573G</span>
                </p> */}
                </div>
                <div className="gap-2 flex items-end mb-8">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#fecf0a]" />
                    <FaStar className="text-[#fecf0a]" />
                    <FaStar className="text-[#fecf0a]" />
                    <FaStar className="text-[#fecf0a]" />
                    <FaStar className="text-[#fecf0a]" />
                  </div>
                  <span className=" text-xs text-ma-text-primary">( 2 reviews)</span>
                </div>
                <div className=" flex items-center gap-2">
                  <Image height={40} width={40} alt="logo" src="/images/favicon.png" className=" h-10 w-auto" />
                  <span className=" text-sm font-bold text-ma-text-secondary dark:text-ma-off-white ">Sold and shipped by Made Appliance</span>
                </div>
                <div className=" text-ma-light-blue mt-10 py-5 sm:py-0">
                  {calculateDiscount(product.price, product.regular_price).saved > 0 && (
                    <span className=" text-xs">Save {formatAmount(calculateDiscount(product.price, product.regular_price).saved)}</span>
                  )}
                  <p className=" text-5xl font-bold flex items-start gap-[2px]">
                    {formatAmount(product.price).split(".")[0]} <span className="text-base pt-1">{product.price.split(".")[1]}</span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className=" flex items-center gap-4  justify-between">
                  <LikeProductButton product={product} />
                  <CompareProductButton product={product} />
                </div>
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mt-10 mx-auto">
          <ProductDetails product={product} />
          <SimilarProducts product={product} />
        </div>
      </main>
    </>
  );
};

export default SingleProduct;
