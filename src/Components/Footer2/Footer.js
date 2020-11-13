import React from "react";
import "./Footer.css";
import PatternBlue from "../../Resources/Vectors/PatternBlue.svg";
import Instagram from "../../Resources/Vectors/Instagram.svg";
import Facebook from "../../Resources/Vectors/Facebook.svg";
import Linkedin from "../../Resources/Vectors/Linkedin.svg";

const Footer = () => (
  <footer id="Footer">
    <div className="container-fluid px-5">
      <div>
        <svg>
          <line x1="0" y1="0" x2="100" y2="100" fill="black" stroke="100" />
        </svg>
        <div className="row p-5">
          <div className="col-lg-4 offset-lg-1">
            <h1 className="row text-light font-weight-bold">JOIN</h1>
            <h1 className="row text-light">The</h1>
            <h1 className="row text-light font-weight-bold">AMAZING</h1>
            <h1 className="row text-light">Group of</h1>
            <h1 className="row text-light font-weight-bold">
              YOUNG DEVELOPERS
            </h1>
          </div>
          <div className="col-lg-3">
            <h3 className="text-light">Subscribe to our newsletter</h3>
            <button id="SubscribeButton" className="btn btn-light">
              <h4>Subscribe</h4>
            </button>
          </div>
          <div className="col-lg-3">
            <h3 className="text-light">Follow us on:</h3>
            <a
              className="m-2"
              href="https://www.instagram.com/dsc_aissmscoe/"
              target="_blank"
            >
              <img src={Instagram} alt="Instagram" width="40px" />
            </a>
            <a className="m-2" href="#" target="_blank">
              <img src={Facebook} alt="Facebook" width="40px" />
            </a>
            <a
              className="m-2"
              href="https://in.linkedin.com/company/dsc-aissmscoe-pune/"
              target="_blank"
            >
              <img src={Linkedin} alt="Linkedin" width="40px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
