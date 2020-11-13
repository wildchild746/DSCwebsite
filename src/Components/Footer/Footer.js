import React from "react";
import "./Footer.css";
import PatternBlue from "../../Resources/Vectors/PatternBlue.svg";
import Instagram from "../../Resources/Vectors/Instagram.svg";
import Facebook from "../../Resources/Vectors/Facebook.svg";
import Linkedin from "../../Resources/Vectors/Linkedin.svg";

const Footer = () => (
  <footer id="Footer">
    <img className="img-fluid" src={PatternBlue} alt="PatternBlue" />
    <div className="container-fluid p-5">
      <div className="row p-5">
        <div className="col-lg-4 offset-lg-1">
          <h2 className="row text-light font-weight-bold">JOIN</h2>
          <h2 className="row text-light">The</h2>
          <h2 className="row text-light font-weight-bold">AMAZING</h2>
          <h2 className="row text-light">Group of</h2>
          <h2 className="row text-light font-weight-bold">YOUNG DEVELOPERS</h2>
        </div>
        <div className="col-lg-3">
          <h4 className="text-light">Subscribe to our newsletter</h4>
          <button id="SubscribeButton" className="btn btn-light">
            <h5>Subscribe</h5>
          </button>
        </div>
        <div className="col-lg-3">
          <h4 className="text-light">Follow us on:</h4>
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
          <div className="row"></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
