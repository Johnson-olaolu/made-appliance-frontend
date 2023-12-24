import React from "react";
import { FaRegUser } from "react-icons/fa6";

const HeaderUser = () => {
  return (
    <div className=" hover:text-ma-blue dark:text-ma-white dark:hover:text-ma-blue">
      <FaRegUser role="button" className=" " size={24} />
    </div>
  );
};

export default HeaderUser;
