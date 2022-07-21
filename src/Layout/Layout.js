import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col justify-between h-screen bg-bg-center fixed top-0 w-full">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
