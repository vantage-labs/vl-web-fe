import React from "react";
import { Fade } from "react-awesome-reveal";
import CountUp, { useCountUp } from "react-countup";
import fImg1 from "../../../images/fanfact/img01.png";
import fImg2 from "../../../images/fanfact/img02.png";
import fImg3 from "../../../images/fanfact/img03.png";
import fImg4 from "../../../images/fanfact/img04.png";
import fImg5 from "../../../images/fanfact/img05.png";
import fImg6 from "../../../images/fanfact/img06.png";
import sIcon1 from "../../../images/icon/fun_icon01.png";
import sIcon2 from "../../../images/icon/fun_icon02.png";
import sIcon3 from "../../../images/icon/fun_icon03.png";

const FunFact = [
  {
    number: "56",
    title: "Managing",
    subTitle: "We re already helping to manage 56K+ of companies in the world.",
    text: "Companies trust us",
    symbol: "K+",
    icon: sIcon1,
    funImg1: fImg1,
    funImg2: fImg2,
    duration: 800,
  },
  {
    number: "1200",
    title: "Supported by over",
    subTitle: "Available worldwide, we re currently active in 30 countries.",
    text: "Employees in 30 countries",
    symbol: "+",
    icon: sIcon2,
    style: "fanfact-icon--two",
    funImg1: fImg3,
    funImg2: fImg4,
    duration: 900,
  },
  {
    number: "100",
    title: "Working in",
    subTitle:
      "We  re assures clients of live successful outcomes, our confidence and reliability.",
    text: "Results Guaranteed",
    symbol: "%",
    icon: sIcon3,
    style: "fanfact-icon--three",
    funImg1: fImg5,
    funImg2: fImg6,
    duration: 1000,
  },
];

const FunFactSection = (props) => {
  useCountUp({
    end: "56656",
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <section className="fanfact o-hidden pt-140 pb-145">
      <div className="container">
        <div className="row mt-none-40 justify-content-center">
          {FunFact.map((funfact, fitem) => (
            <div className="col-lg-4 col-md-8 mt-40" key={fitem}>
              <Fade
                direction="up"
                triggerOnce={"false"}
                duration={funfact.duration}
                delay={6}
              >
                <div>
                  <div
                    className="fanfact-item wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="600ms"
                  >
                    <div className="xb-item--holder pos-rel z-1">
                      <h5 className="xb-item--title">{funfact.title}</h5>
                      <p className="xb-item--content">{funfact.subTitle}</p>
                      <span className="xb-item--number">
                        <CountUp end={funfact.number} enableScrollSpy />
                        {funfact.symbol}
                      </span>
                      <span className="xb-item--text">{funfact.text}</span>
                    </div>
                    <div className={`fanfact-icon ${funfact.style}`}>
                      <div className="icon icon--one">
                        <img src={funfact.funImg1} alt="Vntage Labs Asset" />
                      </div>
                      <div className="icon icon--two">
                        <img src={funfact.funImg2} alt="Vntage Labs Asset" />
                      </div>
                      <div className="icon icon--three">
                        <img src={funfact.icon} alt="Vntage Labs Asset" />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
      <span id="counter" className="d-none" />
    </section>
  );
};

export default FunFactSection;
