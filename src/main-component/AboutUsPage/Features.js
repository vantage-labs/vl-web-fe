import React from "react";
import sIcon1 from "../../images/icon/ab-page-icon01.svg";
import sIcon2 from "../../images/icon/ab-page-icon02.svg";
import sIcon3 from "../../images/icon/ab-page-icon03.svg";
import sIcon4 from "../../images/icon/ab-page-icon04.svg";

const FeaturesSection = (props) => {
  return (
    <section className="fanfact pt-125 pb-125">
      <div className="container">
        <div className="ap-feature_wrap">
          <div className="row mt-none-30">
            <div className="col-lg-3 col-md-6 mt-30">
              <div
                className="ap-feature-item wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="600ms"
              >
                <div className="xb-item--icon">
                  <img src={sIcon1} alt="Deliver Results Icon" />
                </div>
                <h4 className="xb-item--title">Deliver Results</h4>
                <p className="xb-item--content">
                  At Vantage Labs, delivering results means driving measurable
                  success for your brand.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-30">
              <div
                className="ap-feature-item wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="600ms"
              >
                <div className="xb-item--icon">
                  <img src={sIcon2} alt="Being Proactive Icon" />
                </div>
                <h4 className="xb-item--title">Being Proactive</h4>
                <p className="xb-item--content">
                  At Vantage Labs, being proactive means anticipating challenges
                  and delivering innovative solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-30">
              <div
                className="ap-feature-item wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="600ms"
              >
                <div className="xb-item--icon">
                  <img src={sIcon3} alt="Sustainable Growth Icon" />
                </div>
                <h4 className="xb-item--title">Sustainable Growth</h4>
                <p className="xb-item--content">
                  Sustainable growth means creating strategies that ensure
                  long-term success and scalability.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-30">
              <div
                className="ap-feature-item wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="600ms"
              >
                <div className="xb-item--icon">
                  <img src={sIcon4} alt="Maximize Speed Icon" />
                </div>
                <h4 className="xb-item--title">Maximize Speed</h4>
                <p className="xb-item--content">
                  We focus on delivering quick, efficient, and impactful
                  solutions to meet your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
