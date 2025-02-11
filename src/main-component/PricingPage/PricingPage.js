import React, { Fragment } from "react";
import CountUp, { useCountUp } from "react-countup";
import Header from "../../components/header/Header";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Bg from "../../images/bg/page_bg01.jpg";
import CtaSection from "../../components/CtaSection/CtaSection";
import icon from "../../images/icon/dollar-icon.svg";
import sImg2 from "../../images/shape/brd_shape.png";
import PricingSection from "./Pricing";
import FaqSection from "../../components/FaqSection/FaqSection";

const PricingPage = (props) => {
  useCountUp({
    end: "56656",
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="container">
            <div className="page-title-wrap pg-title-wrap">
              <div className="row mt-none-30 align-items-start">
                <div className="col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <img src={icon} alt="Vntage Labs Asset" /> Simple pricing
                    </span>
                    <h2 className="title">
                      Find the perfect package <br /> to optimize your
                      business's <br /> online growth and achieve impactful
                      results
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="pg-img-right pos-rel">
                    <dotlottie-player
                      src="https://lottie.host/0dfbb818-ea4c-4499-8fea-d35f5cad516c/GzsggZRfQl.lottie"
                      background="transparent"
                      speed="1"
                      style={{ maxWidth: "500px" }}
                      loop
                      autoplay
                    ></dotlottie-player>
                    <div className="pg-arrow-shape">
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
        <section className="fanfact pg-fan-bg pt-100 pb-125">
          <div className="container">
            <div className="pg-fanfact-wrap ul_li_between mt-none-30">
              <div className="ap-fanfact-item pg-fanfact-item mt-30">
                <h2 className="xb-item--number">
                  <CountUp end={75} enableScrollSpy />%
                </h2>
                <span className="xb-item--text">
                  Increase in organic traffic
                </span>
                <p className="xb-item--content">
                  Vntage Labs' tailored strategies result in a 75% growth in
                  organic traffic for our clients within the first year.
                </p>
              </div>
              <div className="ap-fanfact-item pg-fanfact-item mt-30">
                <h2 className="xb-item--number">
                  <CountUp end={60} enableScrollSpy />%
                </h2>
                <span className="xb-item--text">Boost in lead generation</span>
                <p className="xb-item--content">
                  Our data-driven approaches help clients achieve a 60% increase
                  in high-quality leads year-over-year.
                </p>
              </div>
              <div className="ap-fanfact-item pg-fanfact-item mt-30">
                <h2 className="xb-item--number">
                  <CountUp end={85} enableScrollSpy />%
                </h2>
                <span className="xb-item--text">Client retention rate</span>
                <p className="xb-item--content">
                  With exceptional results and support, Vntage Labs maintains an
                  85% client retention rate across industries.
                </p>
              </div>
            </div>
          </div>
          <span id="counter" className="d-none" />
        </section>

        <PricingSection />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PricingPage;
