"use client";
import { getAllTax } from "@/services/tax.service";
import { RootState } from "@/store/appSlice";
import { addProductCart, reduceProductCart, removeProductCart } from "@/store/productSlice";
import { calculateDiscount, escapeHtml, formatAmount } from "@/utils/misc";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiChevronRight, FiTrash2, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.product.cart);

  useEffect(() => {
    // getAllTax().then((data) => console.log(data));
  }, []);

  const tax = useMemo(() => {
    const tax = 0.0825 * cart.reduce((b, a) => parseFloat(a.product.price) + b, 0);
    const total = cart.reduce((b, a) => parseFloat(a.product.price) + b, 0) + tax;

    return {
      tax,
      total,
    };
  }, [cart]);
  return (
    <main className=" bg-ma-white dark:bg-ma-grey ">
      <div className="max-w-6xl  px-2  sm:px-0 mx-auto pt-0 pb-16 sm:border-t-2 border-[#AEAEAE1A]">
        <ul className=" flex items-center text-sm py-4">
          <li className="flex items-center ">
            <Link href="/" className=" text-ma-light-blue">
              Home
            </Link>
            <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
          </li>

          <li className="flex items-center ">
            <span className=" dark:text-ma-white text-ma-grey">Cart</span>
          </li>
        </ul>
        <div className="">
          <h1 className=" font-semibold text-2xl dark:text-ma-white text-ma-grey pb-4 border-b-2 border-[#AEAEAE1A]">My Cart</h1>
          <div className="flex items-start gap-8 mt-14">
            <div className=" flex-grow ">
              {cart.map((cartItem, idx) => (
                <div className=" pb-5 border-b-2 mb-6 border-[#AEAEAE1A]  flex items-center gap-4 pr-5" key={idx}>
                  <div className="flex gap-3 flex-grow">
                    <div className=" shrink-0  w-[176px] text-center">
                      <Image
                        src={cartItem.product.images[0]?.src}
                        alt=""
                        height={176}
                        width={176}
                        className=" max-h-44 max-w-[176px] h-auto w-auto"
                      />
                    </div>
                    <div className=" grow flex flex-col">
                      <div className=" grow">
                        <p className=" text-ma-text-secondary dark:text-ma-off-white mb-2 text-lg font-bold line-clamp-2 overflow-hidden text-ellipsis">
                          {cartItem.product.name}
                        </p>
                        <p className=" text-sm text-ma-text-secondary dark:text-ma-off-white mb-2">
                          <strong>Model Number: </strong>
                          <span className="">{escapeHtml(cartItem.product.short_description)?.split("#")[1]}</span>
                        </p>
                        <div className=" text-ma-light-blue ">
                          {calculateDiscount(cartItem.product.price, cartItem.product.regular_price).saved > 0 && (
                            <span className=" text-xs">
                              Save {formatAmount(calculateDiscount(cartItem.product.price, cartItem.product.regular_price).saved)}
                            </span>
                          )}
                          <p className=" text-2xl font-bold flex items-start gap-[2px]">
                            {formatAmount(parseFloat(cartItem.product.price) * cartItem.amount).split(".")[0]}{" "}
                            <span className="text-xs pt-1">{(parseFloat(cartItem.product.price) * cartItem.amount).toString().split(".")[1]}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex mt-2 justify-between shrink-0">
                        <div className=" flex items-center gap-4">
                          <button
                            onClick={() => dispatch(reduceProductCart(cartItem.product.id))}
                            className=" h-7 w-7 flex items-center justify-center text-ma-white bg-ma-light-blue rounded"
                          >
                            <FaMinus />
                          </button>
                          <span className="text-xs text-ma-text-secondary dark:text-ma-off-white">{cartItem.amount}</span>
                          <button
                            onClick={() => dispatch(addProductCart(cartItem.product))}
                            className=" h-7 w-7 flex items-center justify-center text-ma-white bg-ma-light-blue rounded"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex items-center justify-center shrink-0">
                    <FiTrash2 className="text-ma-red" size={24} role="button" onClick={() => dispatch(removeProductCart(cartItem.product.id))} />
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex-shrink-0 w-[300px]  border border-[#AEAEAE1A] shadow-lg rounded bg-ma-off-white dark:bg-ma-black">
              <div className=" p-4 pb-8  border-b-2 border-[#AEAEAE1A]">
                <p className=" text-ma-text-secondary dark:text-ma-off-white text-sm ">Order Summary</p>
                <ul className=" mt-4 space-y-1">
                  {cart.map((cartItem) => (
                    <li
                      className=" text-xs text-ma-text-primary flex justify-between gap-10 items-center"
                      title={cartItem.product.name}
                      key={cartItem.product.id}
                    >
                      <p className=" flex gap-2 items-center">
                        <span className="">x{cartItem.amount}</span>
                        <span className=" line-clamp-1"> {cartItem.product.name}</span>
                      </p>
                      <span className=""> {formatAmount(parseFloat(cartItem.product.price) * cartItem.amount)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border-b-2 border-[#AEAEAE1A]">
                <ul className="space-y-2">
                  <li className=" text-xs text-ma-text-primary flex justify-between gap-10 items-center">
                    <span className="">Amount:</span>
                    <span className="">{formatAmount(cart.reduce((b, a) => parseFloat(a.product.price) + b, 0))}</span>
                  </li>
                  <li className=" text-xs text-ma-text-primary flex justify-between gap-10 items-center">
                    <span className="">Tax:</span>
                    <span className="">{formatAmount(tax.tax)}</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 ">
                <p className=" text-xs  text-ma-text-primary flex justify-between gap-10 items-center">
                  <span className="">Order Total:</span>
                  <span className=" text-base font-bold text-ma-text-secondary dark:text-ma-off-white">{formatAmount(tax.total)}</span>
                </p>
              </div>
              <div className=" p-4">
                <Link href={"/checkout"} className=" text-xs h-10 w-full bg-ma-light-blue rounded-sm text-ma-white flex items-center justify-center">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
