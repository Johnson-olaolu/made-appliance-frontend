import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState, changeDarkMode } from "@/store/appSlice";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
