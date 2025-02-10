import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Bg from "../../images/bg/page_bg01.jpg";
import CtaSection from "../../components/CtaSection/CtaSection";
import icon from "../../images/icon/magic-icon.svg";
import Video from "../../images/video.mp4";
import FeaturesSection from "./Features";
import WhyChoose from "./WhyChoose";
import FunfactSection from "./Funfact";
import Roadmap from "./Roadmap";
import AwardSection from "./AwardSection";
import GallerySection from "../CareerPage/Gallery";

const AboutUsPage = (props) => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-xl-9 col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <img src={icon} alt="Vntage Labs Asset" /> About Vntage
                      Labs
                    </span>
                    <h2 className="title">
                      Unlocking new heights of digital success: how our
                      innovative solutions transform visibility and growth.
                    </h2>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 mt-30">
                  <div className="count-box">
                    <h2 className="number">
                      9 <span className="suffix">+</span>
                    </h2>
                    <span className="text">Years of experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="about-video pt-75">
          <div className="container">
            <div className="career_video">
              <video loop muted playsInline autoPlay>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <FeaturesSection />
        <div style={{ backgroundColor: "#f6f6f8" }}>
          <WhyChoose />
          <FunfactSection />
        </div>
        <Roadmap />
        <AwardSection />
        <GallerySection pClass={"pt-130"} />
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutUsPage;
