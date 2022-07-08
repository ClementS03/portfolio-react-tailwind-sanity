import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="bg-header-bg text-white p-5 flex justify-between">
      <h1 className="text-xl">Seguin Clément</h1>
      <Navbar />
    </div>
  );
};

export default Header;
