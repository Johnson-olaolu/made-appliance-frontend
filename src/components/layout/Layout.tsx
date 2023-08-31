import React from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
