import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import shape1 from "../../images/shape/line-shape03.png";
import shape2 from "../../images/shape/line-shape04.png";
import shape3 from "../../images/shape/pattern02.png";
import shape4 from "../../images/shape/monitor-shape.png";
import shape5 from "../../images/shape/blur-shape.png";

const RoadmapSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const roadmapData = [
    {
      quarter: "Q-1",
      year: "2021",
      title: "Vntage Labs was founded",
      content:
        "In January 2021, Vntage Labs was founded by a group of digital marketing enthusiasts in the USA. Starting from a small co-working space, the team of six shared a vision to revolutionize how businesses grow online through cutting-edge SEO strategies and digital solutions.",
    },
    {
      quarter: "Q-4",
      year: "2021",
      title: "First major milestone achieved",
      content:
        "By the end of 2021, Vntage Labs had secured its first 20 clients, delivering over 50 successful SEO audits and marketing strategies. The team grew to 15 full-time employees, and they moved into their first official office—a small but modern space in downtown Seattle.",
    },
    {
      quarter: "Q-2",
      year: "2022",
      title: "Expanding into international markets",
      content:
        "In mid-2022, Vntage Labs expanded its reach to international markets, gaining clients from the UK, Canada, and Australia. They also introduced advanced analytics and AI-driven SEO solutions, solidifying their position as an emerging leader in the digital marketing space.",
    },
    {
      quarter: "Q-4",
      year: "2023",
      title: "Recognized as a top digital agency",
      content:
        "By the end of 2023, Vntage Labs was recognized as one of the fastest-growing digital agencies in the US. The team had grown to 75 employees, and the company had completed over 500 projects across various industries, including e-commerce, finance, and healthcare.",
    },
    {
      quarter: "Q-2",
      year: "2024",
      title: "Global expansion and industry recognition",
      content:
        "In 2024, Vntage Labs expanded operations to Europe and Asia, setting up satellite offices in London and Singapore. They gained recognition for their innovative SEO and digital transformation strategies, earning awards at industry conferences such as SMX Advanced and Digital Summit.",
    },
    {
      quarter: "Q-1",
      year: "2025",
      title: "Present",
      content:
        "Today, Vntage Labs is a team of over 150 professionals working globally to help businesses achieve online excellence. With a commitment to innovation and client success, the company continues to lead the way in SEO, web development, and digital marketing solutions.",
    },
  ];

  return (
    <section
      className="roadmap roadmap-pb pt-130 pb-200 pos-rel"
      style={{ backgroundColor: "#0e1b3b" }}
    >
      <div className="container">
        <div className="sa-tes_top roadmap-top pos-rel mb-85">
          <div className="sec-title--two">
            <div
              className="sub-title sub-title--strock wow fadeInDown"
              data-wow-duration="600ms"
            >
              <img
                src="assets/img/icon/process-icon.svg"
                alt="Vntage Labs Asset"
              />
              Our Journey
            </div>
            <h2
              className="title clr-white wow fadeInDown"
              data-wow-delay="150ms"
              data-wow-duration="600ms"
            >
              Our Journey 0 to 200 Clients
            </h2>
          </div>
          <div className="sa-tes_button roadmap-button">
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
      <div className="roadmap-slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          spaceBetween={50}
          speed={400}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          breakpoints={{
            1600: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="raodmap-slider"
        >
          {roadmapData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="roadmap-item">
                <div className="xb-item--top">
                  <img src={shape1} alt="Vntage Labs Asset" />
                  <span className="xb-item--ques">{item.quarter}</span>
                  <img src={shape2} alt="Vntage Labs Asset" />
                </div>
                <div className="xb-item--holder">
                  <span className="xb-item--year">{item.year}</span>
                  <h3 className="xb-item--title">{item.title}</h3>
                  <p className="xb-item--content">{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>
      <div className="roadmap-shape">
        <div className="shape shape--one">
          <img src={shape3} alt="Vntage Labs Asset" />
        </div>
        <div className="shape shape--two">
          <img src={shape4} alt="Vntage Labs Asset" />
        </div>
        <div className="shape shape--three">
          <img src={shape5} alt="Vntage Labs Asset" />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSlider;
