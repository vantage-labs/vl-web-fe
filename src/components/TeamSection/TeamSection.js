import { useRef, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import Teams from "../../api/team";
import { Link } from "react-router-dom";

import bg from "../../images/team/team-bg.jpg";
import hicon from "../../images/icon/cap.svg";

const TeamSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="team pt-140 pb-140">
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <Fade
            direction="down"
            triggerOnce={"false"}
            duration={1000}
            delay={9}
          >
            <div>
              <div
                className="sub-title wow fadeInDown"
                data-wow-duration="600ms"
              >
                <img src={hicon} alt="Vntage Labs Asset" />
                Our specialists
              </div>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={"false"} duration={1200} delay={9}>
            <div>
              <h2
                className="title wow fadeInDown"
                data-wow-delay="150ms"
                data-wow-duration="600ms"
              >
                Dedicated Professionals
              </h2>
            </div>
          </Fade>
        </div>
        <div className="sa-team pos-rel">
          <div className="team-slider swiper-container">
            <div className="swiper-wrapper">
              <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                speed={1800}
                parallax={true}
                ref={swiperRef}
                breakpoints={{
                  1600: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {Teams.map((team, tsm) => (
                  <SwiperSlide key={tsm}>
                    <div className="team-item">
                      <div className="xb-item--content pos-rel">
                        <div className="xb-item--img">
                          <img src={bg} alt="Vntage Labs Asset" />
                        </div>
                        <div className="xb-item--item">
                          <span className="xb-item--skill">
                            {team.exprience}
                          </span>
                          <span className="xb-item--reating">
                            <i className="fas fa-star"></i> {team.rating}
                          </span>
                        </div>
                      </div>
                      <div className="xb-item--inner ul_li_between align-items-end">
                        <div className="xb-item--holder">
                          <div className="xb-item--avatar">
                            <img
                              src={team.tImg}
                              alt="Our proudly specially team member"
                              style={{ borderRadius: "100%" }}
                            />
                          </div>
                          <div className="xb-item--author">
                            <h3 className="xb-item--name">{team.name}</h3>
                            <span className="xb-item--desig">{team.title}</span>
                          </div>
                        </div>
                        <ul className="xb-item--social-link ul_li">
                          <li>
                            <a
                              href={`https://linkedin.com/in/${team.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={ClickHandler}
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://instagram.com/${team.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={ClickHandler}
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="team-btn">
            <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}>
              <i className="fal fa-angle-left"></i>
            </div>
            <div
              className="sa-swiper-btn active swiper-button-next"
              ref={nextRef}
            >
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
          <div
            className="xb-btn text-center mt-50 wow fadeInUp"
            data-wow-duration="600ms"
          >
            <Link
              onClick={ClickHandler}
              to="/team"
              className="thm-btn thm-btn--aso"
            >
              Meet our all team member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
