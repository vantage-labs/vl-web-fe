import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/shape/trangle-shape.png";
import icon2 from "../../images/icon/m_01.svg";
import icon3 from "../../images/icon/m_02.svg";
import icon4 from "../../images/icon/m_03.svg";
import icon5 from "../../images/icon/m_04.svg";
import icon7 from "../../images/icon/m_06.svg";
import icon11 from "../../images/icon/m_10.svg";
import icon12 from "../../images/icon/m_11.svg";
import icon13 from "../../images/icon/sms-white-icon01.svg";
import clogo1 from "../../images/logo/client-logo.svg";
import clogo2 from "../../images/logo/client-logo2.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import SelectCountry from "../lang/SelectLang";
import Services from "../../api/service";

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

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="xb-header-area"
      className="header-area header-style-two header-transparent"
    >
      <div className="header-top">
        <span>
          {" "}
          Enjoy 15% off on all annual plans until April 2025! Elevate your brand
          with Vntage Labs' cutting-edge digital solutions 🚀"
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
                  src="https://res.cloudinary.com/dilb4d364/image/upload/q_auto/f_auto/v1738732324/5_guo4lg.svg"
                  alt=""
                  style={{ maxWidth: "200px" }}
                />
              </Link>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="menu-item-has-children megamenu">
                    <Link onClick={ClickHandler} to="/">
                      <span>company</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <div className="mega_menu_wrapper">
                          <div className="container">
                            <div className="mega_menu_wrapper_inner">
                              <div className="">
                                <div className="">
                                  <div className="megamenu_pages_wrapper mb-5">
                                    <div className="row g-10">
                                      <div className="col-xl-4 col-md-4">
                                        <Link
                                          onClick={ClickHandler}
                                          className="iconbox_block_2"
                                          to="/about"
                                        >
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon2} alt="" />
                                            </small>
                                            <small className="iconbox_title">
                                              About Us
                                            </small>
                                          </span>
                                          <span className="description mb-0">
                                            Learn more about Vntage Labs.
                                          </span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link
                                          onClick={ClickHandler}
                                          className="iconbox_block_2"
                                          to="/pricing"
                                        >
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon3} alt="" />
                                            </small>
                                            <small className="iconbox_title">
                                              Our Pricing
                                            </small>
                                          </span>
                                          <span className="description mb-0">
                                            Streamlined Pricing{" "}
                                          </span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link
                                          onClick={ClickHandler}
                                          className="iconbox_block_2"
                                          to="/team"
                                        >
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon4} alt="" />
                                            </small>
                                            <small className="iconbox_title">
                                              Our team
                                            </small>
                                          </span>
                                          <span className="description mb-0">
                                            We are friendly Join our team.
                                          </span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link
                                          onClick={ClickHandler}
                                          className="iconbox_block_2"
                                          to="/service"
                                        >
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon5} alt="" />
                                            </small>
                                            <small className="iconbox_title">
                                              Services
                                            </small>
                                          </span>
                                          <span className="description mb-0">
                                            Happy to help you!
                                          </span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link
                                          onClick={ClickHandler}
                                          className="iconbox_block_2"
                                          to="/casestudy"
                                        >
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon7} alt="" />
                                            </small>
                                            <small className="iconbox_title">
                                              Casestudy
                                            </small>
                                          </span>
                                          <span className="description mb-0">
                                            Explore our all casestudy.
                                          </span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link
                                          onClick={ClickHandler}
                                          className="iconbox_block_2"
                                          to="/terms-conditions"
                                        >
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon11} alt="" />
                                            </small>
                                            <small className="iconbox_title">
                                              Terms & Conditions
                                            </small>
                                          </span>
                                          <span className="description mb-0">
                                            Your Rights and Responsibilities.
                                          </span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link
                                          onClick={ClickHandler}
                                          className="iconbox_block_2"
                                          to="/privacy-policy"
                                        >
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon12} alt="" />
                                            </small>
                                            <small className="iconbox_title">
                                              Privacy Policy
                                            </small>
                                          </span>
                                          <span className="description mb-0">
                                            Commitment to Confidentiality.
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="btns_group p-0 unordered_list justify-content-start">
                                    <li>
                                      <Link
                                        onClick={ClickHandler}
                                        to="/contact"
                                        className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black"
                                      >
                                        Get free consultation
                                      </Link>
                                    </li>
                                    <li>
                                      <div className="review_short_info_2">
                                        <div className="review_admin_logo">
                                          <img src={clogo1} alt="" />
                                        </div>
                                        <div className="review_info_content">
                                          <ul className="rating_block unordered_list">
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                          </ul>
                                          <div className="review_counter">
                                            From
                                            <b>200+</b> reviews
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="review_short_info_2">
                                        <div className="review_admin_logo">
                                          <img src={clogo2} alt="" />
                                        </div>
                                        <div className="review_info_content">
                                          <ul className="rating_block unordered_list">
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fas fa-star"></i>
                                            </li>
                                          </ul>
                                          <div className="review_counter">
                                            From
                                            <b>200+</b> reviews
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div className="col-xl-3">
                                  <div className="autpr_box">
                                    <div className="site_author">
                                      <div className="author_box">
                                        <div className="author_image bg-light">
                                          <img src={avatar} alt="" />
                                        </div>
                                        <div className="author_box_content">
                                          <h3 className="author_name text-white">
                                            Maverick Phoenix</h3>
                                          <span
                                            className="author_designation text-white">CEO
                                            At Innomax</span>
                                        </div>
                                      </div>
                                      <p className="mb-0 text-white">“As a CEO at
                                        innomax I have been voice crying in the
                                        wilderness, trying to make requirements
                                        clear, use every minute to deliver the
                                        result, and not reinvent the wheel. Here
                                        at innomax, I made that possible for the
                                        clients”. </p>
                                      <div className="author_box_quote">
                                        <img src={quote} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children megamenu">
                    <Link onClick={ClickHandler} to="/service">
                      <span>Services</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <div className="mega_menu_wrapper">
                          <div className="container">
                            <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
                              <div className="justify-content-lg-between">
                                <div className="">
                                  <div className="megamenu_widget_inner">
                                    <div className="row">
                                      <div className="col-xl-6">
                                        <div className="megamenu_widget">
                                          <ul className="icon_list unordered_list_block">
                                            {Services.slice(0, 3).map(
                                              (service, index) => (
                                                <li key={index}>
                                                  <Link
                                                    onClick={ClickHandler}
                                                    to={`/services/${service.slug}`}
                                                  >
                                                    <span className="icon_list_text">
                                                      {service.title}
                                                    </span>
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-xl-6">
                                        <div className="megamenu_widget">
                                          <ul className="icon_list unordered_list_block">
                                            {Services.slice(3, 5).map(
                                              (service, index) => (
                                                <li key={index}>
                                                  <Link
                                                    onClick={ClickHandler}
                                                    to={`/services/${service.slug}`}
                                                  >
                                                    <span className="icon_list_text">
                                                      {service.title}
                                                    </span>
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="social_area">
                                    <div className="social_inner ul_li">
                                      <h5>Follow Us:</h5>
                                      <ul className="social_icons_block unordered_list">
                                        <li>
                                          <Link onClick={ClickHandler} to="/">
                                            <i className="fab fa-facebook-f"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link onClick={ClickHandler} to="/">
                                            <i className="fab fa-linkedin-in"></i>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link onClick={ClickHandler} to="/">
                                            <svg
                                              width="18"
                                              height="18"
                                              viewBox="0 0 18 18"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M10.6774 7.62177L17.2342 0H15.6805L9.98719 6.61788L5.43998 0H0.195312L7.07159 10.0074L0.195312 18H1.74916L7.76141 11.0113L12.5636 18H17.8083L10.677 7.62177H10.6774ZM8.54921 10.0956L7.8525 9.09906L2.30903 1.16971H4.69564L9.16929 7.56895L9.866 8.56546L15.6812 16.8835H13.2946L8.54921 10.096V10.0956Z"
                                                fill="#0C111D"
                                              />
                                            </svg>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link onClick={ClickHandler} to="/">
                                            <i className="fab fa-dribbble"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <p className="career_link m-0">
                                      Looking for new career?{" "}
                                      <Link onClick={ClickHandler} to="/career">
                                        We’re Hiring
                                      </Link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="/casestudy">
                      <span>Casestudy</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} to="/casestudy">
                          <span>Casestudy</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/casestudy-details/Marketing"
                        >
                          <span>Casestudy Details</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="xb-header-wrap">
                <div
                  className={`xb-header-menu ${mobailActive ? "active" : ""}`}
                >
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <div
                      className="xb-menu-close xb-hide-xl xb-close"
                      onClick={() => setMobailState(!mobailActive)}
                    ></div>
                    <div className="xb-logo-mobile xb-hide-xl">
                      <Link onClick={ClickHandler} to="/" rel="home">
                        <img
                          src="https://res.cloudinary.com/dilb4d364/image/upload/q_auto/f_auto/v1738732324/5_guo4lg.svg"
                          alt=""
                          style={{ maxWidth: "200px" }}
                        />
                      </Link>
                    </div>
                    <div className="xb-header-mobile-search xb-hide-xl">
                      <form role="search" onSubmit={SubmitHandler}>
                        <input
                          type="text"
                          placeholder="Search..."
                          name="s"
                          className="search-field"
                        />
                        <button className="search-submit" type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div>
                    <nav className="xb-header-nav">
                      <MobileMenu />
                    </nav>
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
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
