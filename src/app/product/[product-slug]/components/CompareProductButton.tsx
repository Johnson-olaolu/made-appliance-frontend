"use client";
import { IProduct } from "@/services/types";
import { RootState } from "@/store/appSlice";
import { addProductCompare, removeProductCompare } from "@/store/productSlice";
import React, { useMemo } from "react";
import { FaHeart } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { RiRefreshLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

interface ILikeProductButton {
  product: IProduct;
}
const CompareProductButton: React.FC<ILikeProductButton> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const compares = useSelector((state: RootState) => state.product.compares);

  const isCompared = useMemo(() => {
    return compares.findIndex((p) => p.id === product.id) !== -1;
  }, [compares, product]);

  const onClickLikeProduct = (isCompared: boolean) => {
    if (isCompared) {
      dispatch(removeProductCompare(product.id));
    } else {
      dispatch(addProductCompare(product));
    }
  };
  return (
    <button className="flex gap-2 items-center" onClick={() => onClickLikeProduct(isCompared)}>
      {isCompared ? (
        <RiRefreshLine size={24} className="text-ma-light-blue" />
      ) : (
        <>
          <RiRefreshLine size={24} className="text-ma-text-secondary dark:text-ma-off-white" />
          <span className="text-sm text-ma-text-secondary dark:text-ma-off-white">Compare</span>
        </>
      )}
    </button>
  );
};

export default CompareProductButton;
