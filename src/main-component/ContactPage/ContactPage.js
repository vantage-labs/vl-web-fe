import React, { Fragment } from "react";
import ContactSection from "../../components/ContactSection";
import Header from "../../components/header/Header";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Bg from "../../images/bg/page_bg01.jpg";
import CtaSection from "../../components/CtaSection/CtaSection";
import icon from "../../images/icon/music-icon.svg";
import bImg2 from "../../images/shape/brd_shape.png";

const TeamPage = (props) => {
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
                      <img src={icon} alt="Vntage Labs Asset" /> Contact us
                    </span>
                    <h2 className="title">
                      Connect with our team for <br /> innovative solutions and{" "}
                      <br /> your digital success
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 mt-30">
                  <div className="sd-right-img pos-rel">
                    <dotlottie-player
                      src="https://lottie.host/db405d1e-253f-456a-9609-5d7de23c8bf0/W7lY2Qqkt6.lottie"
                      background="transparent"
                      speed="1"
                      style={{ maxWidth: "500px" }}
                      loop
                      autoplay
                    ></dotlottie-player>
                    <div className="sd-arrow-shape style-3">
                      <img
                        className="xbzoominzoomup"
                        src={bImg2}
                        alt="Vntage Labs Asset"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamPage;
