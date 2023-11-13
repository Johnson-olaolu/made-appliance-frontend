"use client";
import { IProduct } from "@/services/types";
import { RootState } from "@/store/appSlice";
import { addProductCart, reduceProductCart } from "@/store/productSlice";
import React, { useMemo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export interface IAddToCart {
  product: IProduct;
}

const AddToCartButton: React.FC<IAddToCart> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.product.cart);
  const onClickAddCartProduct = (isInCart: boolean) => {
    if (isInCart) {
      dispatch(reduceProductCart(product.id));
    } else {
      dispatch(addProductCart(product));
    }
  };
  const isInCart = useMemo(() => {
    return cart.findIndex((p) => p.product.id === product.id) !== -1;
  }, [cart, product]);
  return (
    <>
      {isInCart ? (
        <div className="">
          <div className=" flex items-center gap-8">
            <button
              onClick={() => dispatch(reduceProductCart(product.id))}
              className="h-12 shadow-lg rounded font-bold text-lg w-12  bg-ma-light-blue flex items-center justify-center text-white "
            >
              <FaMinus />
            </button>
            <span className="">{cart.find((p) => p.product.id == product.id)?.amount}</span>
            <button
              onClick={() => dispatch(addProductCart(product))}
              className="h-12 shadow-lg rounded font-bold text-lg w-12  bg-ma-light-blue flex items-center justify-center text-white "
            >
              <FaPlus />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addProductCart(product))}
          className=" h-12 shadow-lg rounded font-bold text-lg w-full  bg-ma-light-blue  text-white relative hover:shadow-none"
        >
          <MdOutlineAddShoppingCart className=" absolute left-4 top-1/2 transform -translate-y-1/2" size={24} />
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
