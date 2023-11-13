"use client";
import { RootState } from "@/store/appSlice";
import { addProductCart, reduceProductCart, removeProductCart } from "@/store/productSlice";
import { calculateDiscount, escapeHtml, formatAmount } from "@/utils/misc";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const cart = useSelector((state: RootState) => state.product.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" relative" onMouseEnter={() => setShowModal(true)} onMouseLeave={() => setShowModal(false)}>
      <div className=" flex gap-2 items-center">
        <div className="relative">
          <AiOutlineShoppingCart className=" text-ma-text-secondary  dark:text-ma-off-white " size={32} />
          {cart?.length > 0 && (
            <span className=" h-[14px] w-[14px] pb-px rounded-full text-[10px] leading-none font-medium text-ma-white flex items-center justify-center absolute -top-1 -right-1 bg-ma-red">
              {cart.reduce((b, a) => a.amount + b, 0)}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-px">
          <span className=" text-xs text-ma-text-primary leading-none">Total</span>
          <span className=" text-sm text-ma-text-secondary dark:text-ma-off-white leading-none font-bold">
            {formatAmount(cart.reduce((b, a) => parseFloat(a.product.price) * a.amount + b, 0)) || "$0"}
          </span>
        </div>
      </div>
      {showModal && (
        <div className="absolute bottom-0  transform translate-y-full right-0  pt-4 z-10">
          <div className=" w-[360px]  bg-ma-white  dark:bg-ma-grey p-4 shadow-lg border border-[#AEAEAE1A] ">
            <p className=" text-ma-text-secondary dark:text-ma-off-white text-sm"> Cart ({cart.length})</p>
            {cart.length > 0 ? (
              <>
                <div className="mt-4 max-h-[300px]  overflow-auto">
                  {cart.map((cartItem, idx) => (
                    <div className=" py-3 border-b-2 border-[#AEAEAE1A]  " key={idx}>
                      <div className="flex gap-3">
                        <div className=" shrink-0">
                          <Image src={cartItem.product.images[0]?.src} alt="" height={56} width={56} />
                        </div>
                        <div className=" grow">
                          <p className=" text-ma-text-secondary dark:text-ma-off-white mb-2 text-sm line-clamp-2 overflow-hidden text-ellipsis">
                            {cartItem.product.name}
                          </p>
                          <p className=" text-xs text-ma-text-secondary dark:text-ma-off-white mb-2">
                            <strong>Model Number: </strong>
                            <span className="">{escapeHtml(cartItem.product.short_description)?.split("#")[1]}</span>
                          </p>
                          <div className=" text-ma-light-blue ">
                            {calculateDiscount(cartItem.product.price, cartItem.product.regular_price).saved > 0 && (
                              <span className=" text-xs">
                                Save {formatAmount(calculateDiscount(cartItem.product.price, cartItem.product.regular_price).saved)}
                              </span>
                            )}
                            <p className=" text-sm font-bold flex items-start gap-[2px]">{formatAmount(cartItem.product.price)} </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2 justify-between">
                        <button onClick={() => dispatch(removeProductCart(cartItem.product.id))} className=" text-ma-light-blue">
                          Remove
                        </button>
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
                  ))}
                </div>
                <div className="space-y-3 mt-4">
                  <Link
                    href={"/cart"}
                    className=" rounded-sm h-10 w-full flex items-center justify-center border-ma-light-blue border-2 text-ma-light-blue font-bold"
                  >
                    View Cart
                  </Link>
                  <Link
                    href={"/checkout"}
                    className=" rounded-sm h-10 w-full flex items-center justify-center bg-ma-light-blue dark:text-ma-text-secondary text-ma-off-white font-bold "
                  >
                    Checkout ({formatAmount(cart.reduce((b, a) => parseFloat(a.product.price) + b, 0))})
                  </Link>
                </div>
              </>
            ) : (
              <div className="mt-4 max-h-[300px] ">
                <p className="text-ma-text-secondary dark:text-ma-off-white text-sm text-center font-bold">No Items found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
