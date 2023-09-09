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
    <div onClick={() => handleThemeChange()} className={`switch-container ${theme}`}>
      <div className="switch-child"></div>
    </div>
  );
};

export default Switch;
