import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const ACTIVE_COLOR = "#D00404";
const INACTIVE_COLOR = "#ffffff";

const Navbar = () => {
  // STYLING LINK : Red color if link is active else white color
  function style() {
    return ({ isActive }) =>
      isActive
        ? {
            color: ACTIVE_COLOR,
          }
        : {
            color: INACTIVE_COLOR,
          };
  }

  const [openNav, setOpenNav] = useState(false);

  const toggleNavBar = () => {
    setOpenNav(false);
  };

  return (
    <div className="sticky shadow-md w-full top-0 left-0 md:flex md:justify-between bg-header-bg py-4">
      <h1 className="text-white text-xl md:ml-10 ml-5">Seguin Clément</h1>
      <div
        onClick={() => {
          setOpenNav(!openNav);
        }}
        className="text-2xl text-white absolute right-5 top-4 md:hidden cursor-pointer"
      >
        {openNav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <nav
        className={`bg-header-bg w-full md:w-auto md:static md:space-x-10 md:mr-10 text-lg flex md:mt-0 md:space-y-0 flex-col items-center md:flex md:flex-row space-y-4 mt-3 absolute pb-4 md:pb-0 ${
          openNav ? "top-10" : "top-[-500px]"
        }`}
      >
        <NavLink onClick={toggleNavBar} style={style()} to="/">
          Accueil
        </NavLink>
        <NavLink onClick={toggleNavBar} style={style()} to="/about"> 
         A propos 
         </NavLink>
        <NavLink onClick={toggleNavBar} style={style()} to="/skills">
          Compétences
        </NavLink>
        <NavLink onClick={toggleNavBar} style={style()} to="/projects">
          Projets
        </NavLink>
        <NavLink onClick={toggleNavBar} style={style()} to="/services">
          Services
        </NavLink>
        <NavLink onClick={toggleNavBar} style={style()} to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
