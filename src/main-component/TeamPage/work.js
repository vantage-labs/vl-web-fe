import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/icon/tp-work-icon01.svg";
import icon2 from "../../images/icon/tp-work-icon02.svg";
import icon3 from "../../images/icon/tp-work-icon03.svg";
import icon4 from "../../images/icon/tp-work-icon04.svg";
import icon5 from "../../images/icon/tp-work-icon05.svg";
import icon6 from "../../images/icon/tp-work-icon06.svg";
import iIcon from "../../images/icon/eye-icon.svg";
import iIcon2 from "../../images/icon/sms-white-icon01.svg";

const workItems = [
  {
    id: 1,
    icon: icon1,
    title: "Collaborative Teamwork",
    content:
      "At Vntage Labs, we emphasize collaboration, ensuring that all team members work together seamlessly to deliver top-notch solutions.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Skill Development & Growth",
    content:
      "We provide in-house training, mentorship programs, and industry certifications to help employees sharpen their skills and achieve career growth.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Modern Workspace Environment",
    content:
      "Our offices are equipped with advanced technology, a creative atmosphere, and flexible spaces to boost productivity and innovation.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Competitive Compensation",
    content:
      "We ensure competitive salaries, performance-based bonuses, and clear growth paths for every team member to thrive professionally.",
  },
  {
    id: 5,
    icon: icon5,
    title: "Project Diversity",
    content:
      "At Vntage Labs, you’ll work on projects from various industries, gaining exposure to multiple domains and cutting-edge technologies.",
  },
  {
    id: 6,
    icon: icon6,
    title: "Employee-Centric Culture",
    content:
      "We believe our employees are our greatest asset. We foster an inclusive and supportive environment to ensure everyone feels valued.",
  },
];

const WorkSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={`work  pb-130 ${props.bg}`}>
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <div className="sub-title">
            <img src={iIcon} alt="" />
            Why work with us
          </div>
          <h2 className="title">Why join Vntage Labs?</h2>
        </div>
        <div className="tp-work-wrapp">
          <div className="row mt-none-30">
            {workItems.map((item) => (
              <div className="col-lg-6 mt-30" key={item.id}>
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">{item.title}</h3>
                      <p className="xb-item--content">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="header-contact text-center mt-60">
            <Link
              onClick={ClickHandler}
              to="/contact"
              className="thm-btn thm-btn--aso thm-btn--header-black"
            >
              Let’s talk
              <img src={iIcon2} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
