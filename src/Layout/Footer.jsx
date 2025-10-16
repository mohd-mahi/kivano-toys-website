import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const menuData = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Download Brochure", path: "/brochure" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-container-wrapper">
          <div className="row justify-content-between align-items-center g-5">
            <div className="col-sm-auto  ">
              <div className="footer-logo">
                <NavLink to="/">
                  <img src="/images/footer-logo.png" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="col-auto d-lg-flex d-none">
              <ul className="footer-list">
                {menuData.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.path}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-auto ">
              <ul className="footer-social-media">
                <li>
                  {" "}
                  <a href="#" target="blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            <b> © </b> 2025. Kivana Toys. All Rights Reserved. A{" "}
            <a href="#">Transactify</a> Product
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
