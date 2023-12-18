import { RootState } from "@/store/appSlice";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";

const HeaderLike = () => {
  const likes = useSelector((state: RootState) => state.store.likes);
  return (
    <div className="relative hover:text-ma-blue">
      <FaRegHeart role="button" className=" " size={24} />
      {likes.length > 0 && <span className="indicator-circle">{likes.length}</span>}
    </div>
  );
};

export default HeaderLike;
