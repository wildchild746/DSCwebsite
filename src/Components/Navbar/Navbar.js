import React, { useState } from "react";
import DSC_Logo_Light from "../../Resources/Images/DSC_AISSMS_College_of_Engineering_Logo_Light.png";
import DSC_Logo_Dark from "../../Resources/Images/DSC_AISSMS_College_of_Engineering_Logo_Dark.png";
import "./Navbar.css";
import Switch from "../Switch/Switch";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(true);
  const changeBackground = () => {
    if (window.scrollY <= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav
      className={`fixed-top navbar navbar-expand-lg navbar-${
        props.dark === 1 ? "dark dark" : "light"
      }${!navbar || window.innerWidth < 992 ? " scrolled" : ""}`}
      id="Navbar"
    >
      <a className="navbar-brand mx-auto" href="#">
        <img
          src={props.dark === 1 ? DSC_Logo_Dark : DSC_Logo_Light}
          width="250px"
          alt="DSC_Logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Switch
          LHS="Light Side"
          RHS="Dark Side"
          switchDarkMode={props.switchDarkMode}
          dark={props.dark}
        />
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active col">
            <a className="nav-link text-monospace" href="#">
              Home
            </a>
          </li>
          <li className="nav-item active col">
            <a className="nav-link text-monospace" href="#">
              Team
            </a>
          </li>
          <li className="nav-item active col">
            <a className="nav-link text-monospace" href="#">
              Events
            </a>
          </li>
          <li className="nav-item active col">
            <a className="nav-link text-monospace" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item active col">
            <a className="nav-link text-monospace" href="#">
              ContactUs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
