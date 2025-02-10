import React, { Fragment } from "react";
import CaseStudySection from "./CaseSection";
import Header from "../../components/header/Header";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Bg from "../../images/bg/page_bg01.jpg";
import CtaSection from "../../components/CtaSection/CtaSection";
import icon from "../../images/icon/eye-icon.svg";
import sImg2 from "../../images/shape/brd_shape.png";

const CaseStudySingle = (props) => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title  pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="container">
            <div className="page-title-wrap sd-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-lg-9 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <img src={icon} alt="Vntage Labs Asset" /> Casestudy
                      details
                    </span>
                    <h2 className="title">
                      Discover our case studies <br /> highlighting
                      transformative <br /> SEO and IT solutions
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 mt-30">
                  <div className="sd-right-img pos-rel">
                    <dotlottie-player
                      src="https://lottie.host/959d6574-049d-4ede-af43-e26c5aa0a2d3/gps8ZzOzH7.lottie"
                      background="transparent"
                      speed="1"
                      style={{ width: "300px" }}
                      loop
                      autoplay
                    ></dotlottie-player>
                    <div className="sd-arrow-shape style-2">
                      <img
                        className="xbzoominzoomup"
                        src={sImg2}
                        alt="Vntage Labs Asset"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CaseStudySection />
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CaseStudySingle;
