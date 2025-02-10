import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import icon from "../../images/icon/dollar-icon.svg";
import picon from "../../images/icon/pricing-icon01.svg";
import picon2 from "../../images/icon/pricing-icon02.svg";
import picon3 from "../../images/icon/pricing-icon03.svg";
import check from "../../images/icon/check-icon.svg";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="pricing pt-130 pb-130">
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
                <img src={icon} alt="" />
                Our best pricing
              </div>
            </div>
          </Fade>
          <Fade
            direction="down"
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
                We offered best pricing
              </h2>
            </div>
          </Fade>
        </div>

        <div className="xb-pricing-nav-wrap text-center mb-110">
          <Nav
            tabs
            className="xb-pricing-nav ul_li_center nav nav-tabs"
            id="myTab"
            role="tablist"
          >
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => toggle("1")}
              >
                Billed Yearly <span>15% Discount</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => toggle("2")}
              >
                Billed Monthly
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <div className="pg-pricing_content">
          <TabContent activeTab={activeTab} id="myTabContent">
            {/* Yearly Tab Content */}
            <TabPane tabId="1">
              <Row className="mt-none-30">
                {/* Pricing Plan 1 */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item pos-rel">
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <img src={picon} alt="" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Basic</h3>
                          <span className="xb-item--text">
                            Minimum investment project for startups.
                          </span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$2000</h2>
                        <span className="xb-item--time">Per Year</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li>
                          <img src={check} alt="" /> UI/UX Design
                        </li>
                        <li>
                          <img src={check} alt="" /> Backend System Development
                        </li>
                        <li>
                          <img src={check} alt="" /> On-Page SEO Optimization
                        </li>
                        <li>
                          <img src={check} alt="" /> One Month Performance
                          Monitoring
                        </li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link
                          onClick={ClickHandler}
                          to="/contact"
                          className="cp-btn"
                        >
                          Choose your plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Pricing Plan 2 */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item active pos-rel">
                    <span className="xb-item--top-text">Most popular ✨</span>
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <img src={picon2} alt="" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Standard</h3>
                          <span className="xb-item--text">
                            Suitable for businesses with more growth needs.
                          </span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$3500</h2>
                        <span className="xb-item--time">Per Year</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li>
                          <img src={check} alt="" /> All features of Basic
                          Package
                        </li>
                        <li>
                          <img src={check} alt="" /> Technical SEO Optimization
                        </li>
                        <li>
                          <img src={check} alt="" /> Content Creation &
                          Optimization
                        </li>
                        <li>
                          <img src={check} alt="" /> Monthly Reports for 6
                          Months
                        </li>
                        <li>
                          <img src={check} alt="" /> High-Quality Link Building
                        </li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link
                          onClick={ClickHandler}
                          to="/contact"
                          className="cp-btn"
                        >
                          Choose your plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Pricing Plan 3 */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item pos-rel">
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <img src={picon3} alt="" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Premium</h3>
                          <span className="xb-item--text">
                            Perfect for enterprises and large businesses.
                          </span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$5500</h2>
                        <span className="xb-item--time">Per Year</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li>
                          <img src={check} alt="" /> All features of Standard
                          Package
                        </li>
                        <li>
                          <img src={check} alt="" /> Full Website & Technical
                          SEO Audit
                        </li>
                        <li>
                          <img src={check} alt="" /> Competitor Analysis &
                          Monitoring
                        </li>
                        <li>
                          <img src={check} alt="" /> Advanced Backlink Campaigns
                        </li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link
                          onClick={ClickHandler}
                          to="/contact"
                          className="cp-btn"
                        >
                          Choose your plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>

            {/* Monthly Tab Content */}
            <TabPane tabId="2">
              <Row className="mt-none-30">
                {/* Pricing Plan 1 (Monthly - Basic) */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item pos-rel">
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <img src={picon} alt="" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Basic</h3>
                          <span className="xb-item--text">
                            Minimum investment project for startups.
                          </span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$180</h2>
                        <span className="xb-item--time">Per Month</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li>
                          <img src={check} alt="" /> UI/UX Design
                        </li>
                        <li>
                          <img src={check} alt="" /> Backend System Development
                        </li>
                        <li>
                          <img src={check} alt="" /> On-Page SEO Optimization
                        </li>
                        <li>
                          <img src={check} alt="" /> One Month Performance Monitoring
                        </li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link onClick={ClickHandler} to="/contact" className="cp-btn">
                          Choose your plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Pricing Plan 2 (Monthly - Standard) */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item active pos-rel">
                    <span className="xb-item--top-text">Most popular ✨</span>
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <img src={picon2} alt="" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Standard</h3>
                          <span className="xb-item--text">
                            Suitable for businesses with more growth needs.
                          </span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$320</h2>
                        <span className="xb-item--time">Per Month</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li>
                          <img src={check} alt="" /> All features of Basic Package
                        </li>
                        <li>
                          <img src={check} alt="" /> Technical SEO Optimization
                        </li>
                        <li>
                          <img src={check} alt="" /> Content Creation & Optimization
                        </li>
                        <li>
                          <img src={check} alt="" /> Monthly Reports for 6 Months
                        </li>
                        <li>
                          <img src={check} alt="" /> High-Quality Link Building
                        </li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link onClick={ClickHandler} to="/contact" className="cp-btn">
                          Choose your plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Pricing Plan 3 (Monthly - Premium) */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item pos-rel">
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <img src={picon3} alt="" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Premium</h3>
                          <span className="xb-item--text">
                            Perfect for enterprises and large businesses.
                          </span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$480</h2>
                        <span className="xb-item--time">Per Month</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li>
                          <img src={check} alt="" /> All features of Standard Package
                        </li>
                        <li>
                          <img src={check} alt="" /> Full Website & Technical SEO Audit
                        </li>
                        <li>
                          <img src={check} alt="" /> Competitor Analysis & Monitoring
                        </li>
                        <li>
                          <img src={check} alt="" /> Advanced Backlink Campaigns
                        </li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link onClick={ClickHandler} to="/contact" className="cp-btn">
                          Choose your plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>

          </TabContent>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
