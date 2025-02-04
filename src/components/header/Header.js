import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/shape/trangle-shape.png";
import icon13 from "../../images/icon/sms-white-icon01.svg";
import SelectCountry from "../lang/SelectLang";

const Header = (props) => {
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="xb-header-area"
      className="header-area header-style-two header-transparent"
    >
      <div className="header-top">
        <span>
          Enjoy 15% off on all annual plans until April 2025! Elevate your brand
          with Vantage Labs' cutting-edge digital solutions 🚀"
        </span>
        <span>
          <Link onClick={ClickHandler} to="/">
            Learn more
          </Link>
          <i className="far fa-angle-right"></i>
        </span>
        <div className="header-shape">
          <div className="shape shape--one">
            <img src={icon1} alt="" />
          </div>
          <div className="shape shape--two">
            <img src={icon1} alt="" />
          </div>
        </div>
      </div>
      <div
        className={`xb-header stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="header__wrap ul_li_between">
            <div className="header-logo">
              <Link onClick={ClickHandler} to="/">
                <img
                  src="https://res.cloudinary.com/dilb4d364/image/upload/v1738673851/1_ts1lxg.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  {/* Home */}
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <span>Home</span>
                    </Link>
                  </li>

                  {/* Company */}
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="#">
                      <span>Company</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} to="/about">
                          <span>About Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/service">
                          <span>Services</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/career">
                          <span>Career</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/terms-conditions">
                          <span>Terms & Conditions</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/pricing">
                          <span>Our Pricing</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/privacy-policy">
                          <span>Privacy Policy</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/team">
                          <span>Our Team</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/casestudy">
                          <span>Case Study</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Services */}
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="/service">
                      <span>Services</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/service/web-development"
                        >
                          <span>Web Development</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/service/web-design-ui"
                        >
                          <span>Web Design UI</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/service/ui-ux">
                          <span>UI / UX</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/service/marketing-digital"
                        >
                          <span>Marketing Digital Packages</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Case Study */}
                  <li>
                    <Link onClick={ClickHandler} to="/casestudy">
                      <span>Case Study</span>
                    </Link>
                  </li>

                  {/* Contact */}
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-bar-mobile side-menu d-xl-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobailState(!mobailActive)}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
            <div className="header-contact d-none d-md-block">
              <Link
                onClick={ClickHandler}
                to="/contact"
                className="thm-btn thm-btn--aso thm-btn--header-black"
              >
                Let’s talk
                <img src={icon13} alt="" />
              </Link>
            </div>
            <SelectCountry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
