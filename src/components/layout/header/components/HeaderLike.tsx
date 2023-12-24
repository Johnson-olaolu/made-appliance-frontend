import { RootState } from "@/store/appSlice";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";

const HeaderLike = () => {
  const likes = useSelector((state: RootState) => state.store.likes);
  return (
    <div className="relative dark:text-ma-white hover:text-ma-blue  dark:hover:text-ma-blue">
      <FaRegHeart role="button" className="" size={24} />
      {likes.length > 0 && (
        <div className="indicator-circle">
          <span>{likes.length}</span>
        </div>
      )}
    </div>
  );
};

export default HeaderLike;
