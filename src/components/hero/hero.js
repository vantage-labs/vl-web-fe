import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Bg from "../../images/bg/hero-bg02.jpg";
import heroImg2 from "../../images/hero/hero-img03.png";
import heroImg3 from "../../images/hero/hero-img04.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="hero o-hidden hero-style-two pos-rel pt-120 bg_img"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="xb-hero">
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1000}
                  delay={9}
                >
                  <div>
                    <h1
                      className="xb-item--title wow fadeInUp"
                      data-wow-duration="600ms"
                    >
                      {t("hero.headline")}
                      <br /> <span>{t("hero.headline2")}</span>
                    </h1>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1200}
                  delay={9}
                >
                  <div>
                    <p
                      className="xb-item--content wow fadeInUp lh-base"
                      data-wow-delay="100ms"
                      data-wow-duration="600ms"
                    >
                      {t("hero.subheadline")}
                    </p>
                  </div>
                </Fade>
                {/* <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                    <div>
                                        <ul className="xb-item--item list-unstyled wow fadeInUp" data-wow-delay="200ms"
                                            data-wow-duration="600ms">
                                            <li><i className="far fa-check"></i> Recover lost traffic</li>
                                            <li><i className="far fa-check"></i> Boost organic traffic</li>
                                            <li><i className="far fa-check"></i> Get more sales</li>
                                        </ul>
                                    </div>
                                </Fade> */}
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1600}
                  delay={9}
                >
                  <div>
                    <div
                      className="xb-btn mt-60 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="600ms"
                    >
                      <Link
                        to="/contact"
                        className="thm-btn thm-btn--aso thm-btn--aso_yellow"
                      >
                        {t("hero.cta")}
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <Fade
                  direction="right"
                  triggerOnce={"false"}
                  duration={1200}
                  delay={9}
                >
                  <img
                    className="wow fadeInRight"
                    data-wow-duration="600ms"
                    src="https://res.cloudinary.com/dilb4d364/image/upload/q_auto/f_auto/v1738741049/1_xpa2xj.png"
                    alt=""
                  />
                </Fade>
                <div className="out-image">
                  <div className="img img--one updown-2">
                    <Fade
                      direction="down"
                      triggerOnce={"false"}
                      duration={1200}
                      delay={9}
                    >
                      <img
                        className="wow fadeInDown"
                        data-wow-delay="100ms"
                        data-wow-duration="600ms"
                        src={heroImg2}
                        alt=""
                      />
                    </Fade>
                  </div>
                  <div className="img img--two updown-3">
                    <Fade
                      direction="up"
                      triggerOnce={"false"}
                      duration={1200}
                      delay={9}
                    >
                      <img
                        className="wow fadeInUp"
                        data-wow-delay="300ms"
                        data-wow-duration="600ms"
                        src={heroImg3}
                        alt=""
                      />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll-down active">
          <AnchorLink href="#about" className="scrollspy-btn">
            <span></span>
            <span></span>
            <span></span>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
