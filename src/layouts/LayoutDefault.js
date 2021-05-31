import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const LayoutDefault = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutDefault;
