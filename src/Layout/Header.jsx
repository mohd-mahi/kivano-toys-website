import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setActive(false);
  }, [location.pathname]);

  const menuData = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Products", path: "/products" },
    { label: "Download Brochure", path: "/download-brochure" },
    { label: "Contact Us", path: "/contact-us" },
  ];
  const headerRef = useRef(null);
  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight || 0;

    const scrollFunction = () => {
      if (window.pageYOffset > headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);
  return (
    <header className={`header ${isSticky ? "sticky" : ""}`} ref={headerRef}>
      {/* overlay */}
      <div
        className={`overlay ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      ></div>
      <div className="container">
        <div className="navbar-container-wrapper">
          <div className="logo-container">
            <NavLink to="/">
              <img src="/images/kivano-toys-logo.png" alt="" />
            </NavLink>
          </div>
          {/* menu  */}
          <div className={`menubar ${active ? "active" : ""}`}>
            <ul>
              {menuData.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-right-box">
            <div className="search-box">
              <button className="icon-button">
                {/* <img src="/images/search-icon.png" alt="" /> */}
                <span
                  className="icon-button-img"
                  style={{
                    WebkitMaskImage: 'url("/images/magnifying-glass.png")',
                    maskImage: 'url("/images/magnifying-glass.png")',
                  }}
                ></span>
              </button>
            </div>
            <button className="icon-button">
              <span
                className="icon-button-img"
                style={{
                  WebkitMaskImage: 'url("/images/shopping-cart.png")',
                  maskImage: 'url("/images/shopping-cart.png")',
                }}
              ></span>
              {/* <img src="/images/shopping-cart.png" alt="" /> */}
            </button>
            <button
              type="button"
              className={`hamburger-menu ${active ? "active" : ""}`}
              onClick={() => setActive(!active)}
            >
              <span className="lines-one lines"></span>
              <span className="lines-two lines"></span>
              <span className="lines-three lines"></span>
            </button>
          </div>
          {/* hamburger-menu  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
