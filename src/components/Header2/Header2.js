import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import icon2 from '../../images/icon/m_01.svg'
import icon3 from '../../images/icon/m_02.svg'
import icon4 from '../../images/icon/m_03.svg'
import icon5 from '../../images/icon/m_04.svg'
import icon6 from '../../images/icon/m_05.svg'
import icon7 from '../../images/icon/m_06.svg'
import icon8 from '../../images/icon/m_07.svg'
import icon9 from '../../images/icon/m_08.svg'
import icon10 from '../../images/icon/m_09.svg'
import icon11 from '../../images/icon/m_10.svg'
import icon12 from '../../images/icon/m_11.svg'
import logo from '../../images/logo/logo-white.svg'
import logo2 from '../../images/logo/logo-black02.svg'
import clogo1 from '../../images/logo/client-logo.svg'
import clogo2 from '../../images/logo/client-logo2.svg'
import avatar from '../../images/bg/avatar.png'
import quote from '../../images/icon/quote.png'
import mImg from '../../images/casestudy/mm_img.png'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header2 = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (

        <div id="xb-header-area" className="header-area header-style-one header-transparent">
            <div className={`xb-header stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container-fluid">
                    <div className="header__wrap pd-70 ul_li_between">
                        <div className="header-logo">
                            <Link onClick={ClickHandler} to="/" className="logo01"><img src={logo} alt="" /></Link>
                            <Link onClick={ClickHandler} to="/" className="logo02"><img src={logo2} alt="" /></Link>
                        </div>
                        <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/"><span>Home</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/"><span>SEO Agency</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-2"><span>It Services</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-3"><span>AI & Data Solutions</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-4"><span>Cyber Security</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-5"><span>Cloud and Devops</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-6"><span>Help desk SaaS</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children megamenu">
                                        <Link onClick={ClickHandler} to="/"><span>company</span></Link>
                                        <ul className="submenu">
                                            <li>
                                                <div className="mega_menu_wrapper">
                                                    <div className="container">
                                                        <div className="mega_menu_wrapper_inner">
                                                            <div className="row">
                                                                <div className="col-xl-9">
                                                                    <div className="megamenu_pages_wrapper mb-5">
                                                                        <div className="row g-10">
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/about">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon2} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">About
                                                                                            Us</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Learn more about Innomax
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/pricing">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon3} alt="" />
                                                                                        </small>
                                                                                        <small className="iconbox_title">Our
                                                                                            Pricing</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Streamlined Pricing </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/team">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon4} alt="" />
                                                                                        </small>
                                                                                        <small className="iconbox_title">Our
                                                                                            team</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        We are friendly Join our team.
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/service">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon5} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Services</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Happy to help you!
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/service-single/Niche-research">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon6} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Services
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Happy to help you!
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/casestudy">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon7} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Casestudy</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Explore our all casestudy.
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/career">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon8} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Career</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Happy to help you! </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/career-details">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon9} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Career
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span className="description mb-0"> We
                                                                                        are friendly Join our
                                                                                        team.</span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/casestudy-details/Marketing">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon10} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Casestudy
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span
                                                                                        className="description mb-0">Explore
                                                                                        our all casestudy.</span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/terms-conditions">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon11} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Terms
                                                                                            & Conditions</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">Your
                                                                                        Rights and
                                                                                        Responsibilities.</span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/privacy-policy">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon12} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Privacy
                                                                                            Policy</small>
                                                                                    </span>
                                                                                    <span
                                                                                        className="description mb-0">Commitment
                                                                                        to Confidentiality.</span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul
                                                                        className="btns_group p-0 unordered_list justify-content-start">
                                                                        <li>
                                                                            <Link onClick={ClickHandler} to="/contact"
                                                                                className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black">Get
                                                                                free consultation</Link>
                                                                        </li>
                                                                        <li>
                                                                            <div className="review_short_info_2">
                                                                                <div className="review_admin_logo">
                                                                                    <img src={clogo1} alt="" />
                                                                                </div>
                                                                                <div className="review_info_content">
                                                                                    <ul
                                                                                        className="rating_block unordered_list">
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className="review_counter">From
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
                                                                                    <ul
                                                                                        className="rating_block unordered_list">
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className="review_counter">From
                                                                                        <b>200+</b> reviews
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-xl-3">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children megamenu">
                                        <Link onClick={ClickHandler} to="/service"><span>Services</span></Link>
                                        <ul className="submenu">
                                            <li>
                                                <div className="mega_menu_wrapper">
                                                    <div className="container">
                                                        <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
                                                            <div className="row justify-content-lg-between">
                                                                <div className="col-xl-8">
                                                                    <div className="megamenu_widget_inner">
                                                                        <div className="row">
                                                                            <div className="col-xl-6">
                                                                                <div className="megamenu_widget">
                                                                                    <ul
                                                                                        className="icon_list unordered_list_block">
                                                                                        <li>
                                                                                            <Link onClick={ClickHandler}
                                                                                                to="/service-single/Niche-research">
                                                                                                <span
                                                                                                    className="icon_list_text">International
                                                                                                    SEO</span>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link onClick={ClickHandler}
                                                                                                to="/service-single/Niche-research">
                                                                                                <span
                                                                                                    className="icon_list_text">Niche
                                                                                                    research</span>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link onClick={ClickHandler}
                                                                                                to="/service-single/Niche-research">
                                                                                                <span
                                                                                                    className="icon_list_text">Link
                                                                                                    building </span>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link onClick={ClickHandler}
                                                                                                to="/service-single/Niche-research">
                                                                                                <span
                                                                                                    className="icon_list_text">Enterprise
                                                                                                    SEO</span>
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xl-6">
                                                                                <div className="megamenu_widget">
                                                                                    <ul
                                                                                        className="icon_list unordered_list_block">
                                                                                        <li>
                                                                                            <Link onClick={ClickHandler}
                                                                                                to="/service-single/Niche-research">
                                                                                                <span
                                                                                                    className="icon_list_text">Penalty
                                                                                                    recovery</span>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link onClick={ClickHandler}
                                                                                                to="/service-single/Niche-research">
                                                                                                <span
                                                                                                    className="icon_list_text">Content
                                                                                                    optimization</span>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link onClick={ClickHandler}
                                                                                                to="/service-single/Niche-research">
                                                                                                <span
                                                                                                    className="icon_list_text">Technical
                                                                                                    SEO</span>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link onClick={ClickHandler}
                                                                                                to="/service-single/Niche-research">
                                                                                                <span
                                                                                                    className="icon_list_text">Competitor
                                                                                                    analysis</span>
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="social_area">
                                                                        <div className="social_inner ul_li">
                                                                            <h5>Follow Us:</h5>
                                                                            <ul
                                                                                className="social_icons_block unordered_list">
                                                                                <li>
                                                                                    <Link onClick={ClickHandler} to="/">
                                                                                        <i
                                                                                            className="fab fa-facebook-f"></i>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link onClick={ClickHandler} to="/">
                                                                                        <i
                                                                                            className="fab fa-linkedin-in"></i>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link onClick={ClickHandler} to="/">
                                                                                        <svg width="18" height="18"
                                                                                            viewBox="0 0 18 18"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path
                                                                                                d="M10.6774 7.62177L17.2342 0H15.6805L9.98719 6.61788L5.43998 0H0.195312L7.07159 10.0074L0.195312 18H1.74916L7.76141 11.0113L12.5636 18H17.8083L10.677 7.62177H10.6774ZM8.54921 10.0956L7.8525 9.09906L2.30903 1.16971H4.69564L9.16929 7.56895L9.866 8.56546L15.6812 16.8835H13.2946L8.54921 10.096V10.0956Z"
                                                                                                fill="#0C111D" />
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
                                                                        <p className="career_link m-0">Looking for new
                                                                            career? <Link onClick={ClickHandler} to="/career">We’re
                                                                                Hiring</Link></p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="megamenu_case">
                                                                        <h3>Software</h3>
                                                                        <h4>Madical SEO success..</h4>
                                                                        <img src={mImg} alt="" />
                                                                        <Link onClick={ClickHandler} className="megamenu_btn" to="/casestudy">
                                                                            <span className="btn_label">Read
                                                                                casestudy</span>
                                                                            <span className="btn_icon">
                                                                                <svg width="13" height="13"
                                                                                    viewBox="0 0 13 13" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path
                                                                                        d="M13 1C13 0.447715 12.5523 2.00008e-07 12 -5.28728e-08L3 7.47917e-07C2.44771 4.10743e-07 2 0.447716 2 1C2 1.55228 2.44772 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292894L0.292893 11.2929L1.70711 12.7071Z"
                                                                                        fill="white" />
                                                                                </svg>
                                                                            </span>
                                                                        </Link>
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
                                        <Link onClick={ClickHandler} to="/casestudy"><span>Casestudy</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/casestudy"><span>Casestudy</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/casestudy-details/Marketing"><span>Casestudy Details</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/blog"><span>Blog</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/blog"><span>Blog</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single/AI-in-Neuroimaging-IXICOs-Cloud-Transformation"><span>Blog Details</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/contact"><span>Contact</span></Link></li>
                                </ul>
                            </nav>
                            <div className="xb-header-wrap">
                                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                                    <div className="xb-header-menu-scroll lenis lenis-smooth">
                                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                                        <div className="xb-logo-mobile xb-hide-xl">
                                            <Link onClick={ClickHandler} to="/" rel="home"><img src="assets/img/logo/logo-black.svg"
                                                alt="" /></Link>
                                        </div>
                                        <div className="xb-header-mobile-search xb-hide-xl">
                                            <form role="search" onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="Search..." name="s"
                                                    className="search-field" />
                                                <button className="search-submit" type="submit"><i
                                                    className="far fa-search"></i></button>
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
                            <button className="xb-nav-mobile" onClick={() => setMobailState(!mobailActive)}>
                                <i className="far fa-bars"></i>
                            </button>
                        </div>
                        <div className="header-contact d-none d-md-block">
                            <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--header btn-effect_1">Let’s talk
                                <span><svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9036 0H8.09835C3.6325 0 0 3.63251 0 8.09835V10.2235C0 14.6883 3.6325 18.3208 8.09738 18.3208H8.41206L7.88759 21.1734C7.806 21.6202 8.0022 22.065 8.38876 22.3059C8.56844 22.4176 8.76852 22.473 8.96957 22.473C9.20073 22.473 9.43091 22.3992 9.62614 22.2535L14.8884 18.3218H18.9026C23.3675 18.3218 27 14.6893 27 10.2244V8.09835C27.001 3.63251 23.3685 0 18.9036 0ZM25.2527 10.2225C25.2527 13.7239 22.404 16.5726 18.9026 16.5726H14.598C14.4096 16.5726 14.226 16.6338 14.0745 16.7464L9.90683 19.8603L10.3216 17.6041C10.3682 17.3486 10.2992 17.0864 10.1331 16.8863C9.96705 16.6872 9.72132 16.5716 9.462 16.5716H8.09738C4.59599 16.5716 1.74729 13.7229 1.74729 10.2215V8.09835C1.74729 4.59696 4.59599 1.74826 8.09738 1.74826H18.9026C22.404 1.74826 25.2527 4.59696 25.2527 8.09835V10.2225Z" fill="#D44A00" />
                                    <path d="M8.39173 7.75342C7.61473 7.75342 6.98535 8.38279 6.98535 9.1598C6.98535 9.93681 7.61473 10.5662 8.39173 10.5662C9.16874 10.5662 9.79811 9.93681 9.79811 9.1598C9.79714 8.38279 9.16777 7.75342 8.39173 7.75342Z" fill="#D44A00" />
                                    <path d="M13.5006 7.75342C12.7236 7.75342 12.0942 8.38279 12.0942 9.1598C12.0942 9.93681 12.7236 10.5662 13.5006 10.5662C14.2776 10.5662 14.907 9.93681 14.907 9.1598C14.907 8.38279 14.2776 7.75342 13.5006 7.75342Z" fill="#D44A00" />
                                    <path d="M18.6095 7.75342C17.8325 7.75342 17.2031 8.38279 17.2031 9.1598C17.2031 9.93681 17.8325 10.5662 18.6095 10.5662C19.3865 10.5662 20.0159 9.93681 20.0159 9.1598C20.0159 8.38279 19.3865 7.75342 18.6095 7.75342Z" fill="#D44A00" />
                                </svg></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header2;