import React from "react";
import { Fade } from "react-awesome-reveal";
import Bg from "../../images/bg/hero-bg03.png";
import hImg1 from "../../images/shape/hero03.png";
import hImg2 from "../../images/shape/hero04.png";
import hImg3 from "../../images/shape/hero-linear.png";
import hImg4 from "../../images/shape/hero-linear02.png";
import hImg5 from "../../images/shape/hero-linear03.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Hero4 = () => {
  return (
    <section
      className="hero hero-style-three pos-rel pt-120 bg_img"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="hero_wrap pt-90">
          <div className="xb-hero text-center">
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1000}
              delay={9}
            >
              <div>
                <h1
                  className="xb-item--title wow skewIn"
                  data-wow-delay="000ms"
                  data-wow-duration="900ms"
                >
                  Securing
                </h1>
              </div>
            </Fade>
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1400}
              delay={9}
            >
              <div>
                <div
                  className="xb-item--holder wow fadeInUp"
                  data-wow-delay="150ms"
                  data-wow-duration="600ms"
                >
                  <p className="xb-item--content">
                    Your Organization's Digital Landscape from Cyber Risks
                  </p>
                  <div className="hero-btn">
                    <Link
                      onClick={ClickHandler}
                      to="/about"
                      className="blc-btn"
                    >
                      <span>
                        Explore solutions <i className="far fa-angle-right"></i>
                      </span>
                      <span className="btn-shape">
                        <svg
                          width="362"
                          height="78"
                          viewBox="0 0 362 78"
                          fill="none"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.5 22.7183L25.5093 1.39453H337.972L361.5 22.7092V56.5515L337.98 76.6051H25.5093L0.5 55.2813V22.7183Z"
                            fill="url(#paint0_linear_1600_9966956)"
                            stroke="#23263C"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1600_9966956"
                              x1="1.29285"
                              y1="38.9973"
                              x2="362"
                              y2="33.9973"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#431DAB" />
                              <stop offset="1" stopColor="#AE6DFE" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="btn-shape2">
                        <svg
                          width="271"
                          height="60"
                          viewBox="0 0 271 60"
                          fill="none"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.5 17.2308L20.1225 0.5H252.042L270.5 17.2217V43.7692L252.05 59.5H20.1225L0.5 42.7692V17.2308Z"
                            fill="#010315"
                            stroke="url(#paint0_linear_1742_661)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1742_661"
                              x1="271"
                              y1="61.5556"
                              x2="232.791"
                              y2="-3.08978"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#6780D2" />
                              <stop offset="1" stopColor="#2F3B8D" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="xb-shape">
        <div className="shape shape--one">
          <img src={hImg1} alt="Vntage Labs Asset" />
        </div>
        <div className="shape shape--two">
          <img src={hImg2} alt="Vntage Labs Asset" />
        </div>
        <div className="shape shape--three">
          <img src={hImg3} alt="Vntage Labs Asset" />
        </div>
        <div className="shape shape--four">
          <img src={hImg4} alt="Vntage Labs Asset" />
        </div>
        <div className="shape shape--five">
          <img src={hImg5} alt="Vntage Labs Asset" />
        </div>
      </div>
      <div className="sc_hero_video">
        <video
          className="responsive-video"
          loop
          muted
          playsInline
          autoPlay
          style={{ width: "100%", height: "100%" }}
        >
          <source
            src="https://html.xpressbuddy.com/Vntage Labs/cyber_security_hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Hero4;
