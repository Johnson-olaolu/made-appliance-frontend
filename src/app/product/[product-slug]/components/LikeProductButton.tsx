"use client";
import { IProduct } from "@/services/types";
import { RootState } from "@/store/appSlice";
import { likeProduct, unLikeProduct } from "@/store/productSlice";
import React, { useMemo } from "react";
import { FaHeart } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

interface ILikeProductButton {
  product: IProduct;
}
const LikeProductButton: React.FC<ILikeProductButton> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const likes = useSelector((state: RootState) => state.product.likes);

  const isLiked = useMemo(() => {
    return likes.findIndex((p) => p.id === product.id) !== -1;
  }, [likes, product]);

  const onClickLikeProduct = (isLiked: boolean) => {
    if (isLiked) {
      dispatch(unLikeProduct(product.id));
    } else {
      dispatch(likeProduct(product));
    }
  };
  return (
    <button className="flex gap-2 items-center" onClick={() => onClickLikeProduct(isLiked)}>
      {isLiked ? (
        <FaHeart size={24} className="text-ma-red" />
      ) : (
        <>
          <FiHeart size={24} className="text-ma-text-secondary dark:text-ma-off-white" />
          <span className="text-sm text-ma-text-secondary dark:text-ma-off-white">Add to wishlist</span>
        </>
      )}
    </button>
  );
};

export default LikeProductButton;
