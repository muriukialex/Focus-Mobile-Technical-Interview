import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3 style={{ fontFamily: "'Catamaran', 'sans-serif'" }}>
            Amazin'<i className="fas fa-check"></i>
          </h3>
        </div>

        <div className="footer-center">
          <div className="footer-custom">
            <i className="fa fa-map-marker"></i>
            <span>Kim Street,Nairobi</span>
          </div>

          <div className="footer-custom">
            <i className="fa fa-phone"></i>
            <span>+254792531972</span>
          </div>

          <div className="footer-custom">
            <i className="fa fa-envelope"></i>
            <a
              href="mailto:alexmuriukimaina254@gmail.com"
              style={{ textDecoration: "none", color: "#000" }}
            >
              support@amazin.com
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-company-about">
            <span>About Amazin'</span>
            <div>
              <Link to="/about">About</Link>
            </div>
            Amazin' started from a small apartment in downtown Nairobi with two
            enterpreneurs motivated to make online shopping as seamless and
            trustworthy as possible.
          </div>

          <div className="footer-icons">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/a_tinydev">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/alex-muriuki-maina/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/tinydev-ke">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p className="footer-company-name">Amazin' © 2021 - </p>
      </footer>
    </div>
  );
};

export default Footer;
