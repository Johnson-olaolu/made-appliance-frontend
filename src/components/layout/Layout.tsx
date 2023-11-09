"use client";
import React, { useEffect } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState, changeDarkMode, changeScreenSize } from "@/store/appSlice";
import { screenSizes } from "@/utils/constants";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  let theme = useSelector((state: RootState) => state.app.theme);
  if (!theme) {
    // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    dispatch(changeDarkMode(theme));
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleResize = (width: number) => {
      if (width <= screenSizes.sm) {
        dispatch(changeScreenSize("Mobile"));
      } else if (width <= screenSizes.lg) {
        dispatch(changeScreenSize("Tablet"));
      } else {
        dispatch(changeScreenSize("Desktop"));
      }
    };

    handleResize(screen.width);

    const handleWindowResize = (e: Event) => {
      handleResize(screen.width);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
