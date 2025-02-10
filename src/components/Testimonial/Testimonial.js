import { useRef, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import tImg1 from "../../images/testimonial/sa-tas05.png";
import tImg2 from "../../images/testimonial/sa-tas01.png";
import tImg3 from "../../images/testimonial/sa-tas02.png";
import tImg4 from "../../images/testimonial/sa-tas03.png";

import icon1 from "../../images/testimonial/tes-logo02.png";
import icon2 from "../../images/testimonial/tes-logo01.png";
import icon3 from "../../images/testimonial/tes-logo03.png";
import icon4 from "../../images/testimonial/tes-logo04.png";
import icon5 from "../../images/testimonial/tes-logo05.png";

import quote from "../../images/icon/quta.png";
import hicon from "../../images/icon/like-icon.svg";

const testimonial = [
  {
    id: "01",
    tImg: tImg1,
    logo: icon1,
    Des: "Vntage Labs transformed our digital strategy. Their custom solutions helped us reach new international markets with ease.",
    Name: "Michael Johnson",
    sub: "Marketing Lead at InnovateCo",
    country: "London, UK",
  },
  {
    id: "02",
    tImg: tImg2,
    logo: icon2,
    Des: "Partnering with Vntage Labs was the best decision for our business. Their AI-driven strategies boosted our ROI by over 200%.",
    Name: "Sophia Brown",
    sub: "CEO at GrowthHub",
    country: "New York, USA",
  },
  {
    id: "03",
    tImg: tImg3,
    logo: icon3,
    Des: "The team at Vntage Labs truly understands the importance of transparency and performance. Our website traffic tripled in just 6 months.",
    Name: "Daniel Martinez",
    sub: "CTO at Skyware Solutions",
    country: "Sydney, Australia",
  },
  {
    id: "04",
    tImg: tImg4,
    logo: icon4,
    Des: "With Vntage Labs' data-driven approach, we were able to secure top rankings for competitive keywords in our industry.",
    Name: "Emily Carter",
    sub: "Digital Strategist at TechHive",
    country: "Toronto, Canada",
  },
  {
    id: "05",
    logo: icon5,
    Des: "Their expertise in web development and UI/UX design helped us launch a platform that exceeded our clients' expectations.",
    Name: "Benjamin Lee",
    sub: "Product Manager at BrightPath",
    country: "Berlin, Germany",
  },
  {
    id: "06",
    logo: icon5,
    Des: "From custom CRM solutions to enterprise SEO, Vntage Labs provided unmatched services that helped our business grow exponentially.",
    Name: "Olivia Wilson",
    sub: "Operations Manager at ScaleUp",
    country: "Singapore",
  },
];

const Testimonial = (props) => {
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

  return (
    <section className={`testimonial o-hidden pb-140 ${props.tClass}`}>
      <div className="container">
        <div className="sa-tes_top pos-rel mb-60">
          <div className="sec-title--two">
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
                  99% positive feedback
                </div>
              </div>
            </Fade>
            <Fade
              direction="up"
              triggerOnce={"false"}
              duration={1200}
              delay={9}
            >
              <div>
                <h2
                  className="title wow fadeInDown"
                  data-wow-delay="150ms"
                  data-wow-duration="600ms"
                >
                  Feedback That Speaks
                </h2>
              </div>
            </Fade>
          </div>
          <div className="sa-tes_button">
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
        </div>
      </div>
      <div className="sa-testimonial-slider-inner">
        <div className="sa-testimonial-slider">
          <div className="swiper-wrapper">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={5}
              loop={true}
              speed={1800}
              parallax={true}
              ref={swiperRef}
              breakpoints={{
                1600: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                576: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {testimonial.map((testimonial, tsm) => (
                <SwiperSlide key={tsm}>
                  <div className="sa-testimonial-item">
                    <div className="xb-item--inner">
                      <div className="xb-item--quta">
                        <img src={quote} alt="Vntage Labs Asset" />
                      </div>
                      <p className="xb-item--content">"{testimonial.Des}"</p>
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--author">
                          <h3 className="xb-item--name">{testimonial.Name}</h3>
                          <span className="xb-item--desig">
                            {testimonial.sub}
                          </span>
                          <div className="xb-item--logo">
                            <img
                              src={testimonial.logo}
                              alt="Vntage Labs Asset"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
