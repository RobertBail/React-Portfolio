import React from "react";
import { NavLink } from "react-router-dom";

export default function NavTabs() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
      <NavTabs
        links={[
         
          <NavLink key={1} className="nav-link text-light" to="/">
            About Me
          </NavLink>,
          <NavLink key={2} className="nav-link text-light" to="/portfolio">
          Portfolio
         </NavLink>,
         <NavLink key={3} className="nav-link text-light" to="/resume">
          Resume
         </NavLink>,
         <NavLink key={4} className="nav-link text-light" to="/contact">
           Contact
         </NavLink>
        ]}
      />
    );
  }