"use client";
import { RootState, changeDarkMode } from "@/store/appSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Switch = () => {
  const dispatch = useDispatch();
  let theme = useSelector((state: RootState) => state.app.theme);

  const handleThemeChange = () => {
    dispatch(changeDarkMode(theme === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <div onClick={() => handleThemeChange()} className={`switch-container ${theme} hidden sm:block`}>
        <div className="switch-child"></div>
      </div>
      <div className="sm:hidden block">
        <select
          className=" text-ma-text-primary dark:text-ma-off-white bg-transparent cursor-pointer font-medium"
          name=""
          id=""
          onChange={() => handleThemeChange()}
        >
          <option selected={theme === "light"} value="Light">
            Light
          </option>
          <option selected={theme === "dark"} value="Dark">
            Dark
          </option>
        </select>
      </div>
    </>
  );
};

export default Switch;
