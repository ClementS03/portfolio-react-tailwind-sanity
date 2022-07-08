import React from "react";
import { NavLink } from "react-router-dom";

const ACTIVE_COLOR = "#D00404"
const INACTIVE_COLOR = "#ffffff"

const Navbar = () => {
  return (
    <nav className="space-x-10">
      <NavLink
        style={({ isActive }) => 
          isActive
            ? {
                color: ACTIVE_COLOR,
              }
            : {
                color: INACTIVE_COLOR,
              }
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => 
        isActive
          ? {
              color: ACTIVE_COLOR,
            }
          : {
              color: INACTIVE_COLOR,
            }
      }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => 
        isActive
          ? {
              color: ACTIVE_COLOR,
            }
          : {
              color: INACTIVE_COLOR,
            }
      }
        to="/skills"
      >
        Skills
      </NavLink>
      <NavLink
        style={({ isActive }) => 
        isActive
          ? {
              color: ACTIVE_COLOR,
            }
          : {
              color: INACTIVE_COLOR,
            }
      }
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        style={({ isActive }) => 
        isActive
          ? {
              color: ACTIVE_COLOR,
            }
          : {
              color: INACTIVE_COLOR,
            }
      }
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        style={({ isActive }) => 
        isActive
          ? {
              color: ACTIVE_COLOR,
            }
          : {
              color: INACTIVE_COLOR,
            }
      }
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
