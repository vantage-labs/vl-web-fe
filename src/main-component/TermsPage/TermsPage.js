import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Bg from "../../images/bg/page_bg01.jpg";
import CtaSection from "../../components/CtaSection/CtaSection";
import icon from "../../images/icon/magic.svg";
import gImg1 from "../../images/gallery/cp-img01.jpg";
import gImg2 from "../../images/gallery/cp-img02.jpg";
import gImg3 from "../../images/gallery/cp-img03.jpg";
import gImg4 from "../../images/gallery/cp-img04.jpg";
import gImg5 from "../../images/gallery/cp-img05.jpg";
import gImg6 from "../../images/gallery/cp-img06.jpg";

const TermsPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title cp-page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-center">
                <div className="col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <img src={icon} alt="" />
                      Terms & Conditions
                    </span>
                    <h2 className="title">
                      Vntage Labs website terms & <br /> conditions your access
                      and <br /> usage rights
                    </h2>
                    <span className="page-update_time">
                      Updated on : December 10th, 2024
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="cp-img-slide">
                    <div className="cp-img-inner ul_li">
                      <div className="cp-item marquee-first">
                        <div className="xb-img">
                          <img src={gImg1} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg2} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg3} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg1} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg2} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg3} alt="" />
                        </div>
                      </div>
                      <div className="cp-item marquee-2">
                        <div className="xb-img">
                          <img src={gImg4} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg5} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg6} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg4} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg5} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg6} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="terms&conditions-section cp-det-bg">
          <div className="container">
            <div className="terms-section_inner pt-120 pb-75">
              <div className="row">
                <div className="col-lg-11">
                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Copyright and Intellectual Property Usage
                    </h2>
                    <p>
                      All content on this website, including text, graphics,
                      logos, and trademarks, is the intellectual property of
                      Vntage Labs and is protected by copyright, trademark, and
                      other relevant laws. Unauthorized use, reproduction, or
                      distribution of this material may violate these laws,
                      leading to potential legal consequences. Vntage Labs is
                      not responsible for any third-party logos present on the
                      site; their copyright remains with their respective
                      owners. Users agree not to copy, republish, download,
                      transmit, modify, rent, loan, sell, distribute, license,
                      or create derivative works from any content or services
                      offered through this site without explicit permission.
                    </p>
                    <p>
                      Images on this website may include licensed stock photos,
                      to which Vntage Labs does not claim copyright ownership.
                      All other trademarks and trade names are the properties of
                      their respective owners.
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Services Offered
                    </h2>
                    <p>
                      Vntage Labs provides the following services:
                      <ul>
                        <li>Web application development</li>
                        <li>Landing page design</li>
                        <li>UI/UX design</li>
                        <li>Social media management and strategy</li>
                      </ul>
                      Payment options include:
                      <ul>
                        <li>One-time full payment</li>
                        <li>
                          Split payment: 50% upfront and 50% upon final
                          agreement from both parties
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Ownership of Content
                    </h2>
                    <p>
                      Upon project completion:
                      <ul>
                        <li>
                          Clients retain full copyright, including designs,
                          content, and websites, under their name.
                        </li>
                        <li>
                          Vntage Labs retains the right to showcase completed
                          projects as part of its portfolio unless explicitly
                          restricted by the client.
                        </li>
                        <li>
                          Clients are granted an{" "}
                          <strong>exclusive license</strong>, allowing them to
                          assign maintenance tasks or further develop the
                          project through other agencies.
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">Use of Website</h2>
                    <p>
                      Certain educational materials, templates, and tools are
                      provided on the website, but access is restricted to
                      active clients. Unauthorized use of website content,
                      including copying, reproducing, or distributing materials,
                      is strictly prohibited.
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">Data Privacy</h2>
                    <p>
                      <strong>Data Collection:</strong> Vntage Labs collects
                      essential information such as name, email, phone number,
                      business goals, and business models to analyze and
                      research for projects.
                      <br />
                      All client data is securely managed and used strictly for
                      project-related purposes, adhering to confidentiality
                      agreements.
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">Payment Terms</h2>
                    <p>
                      <strong>Payment Structure:</strong>
                      <ul>
                        <li>
                          50% upfront payment before the start of the project.
                        </li>
                        <li>50% upon final project approval.</li>
                      </ul>
                      <strong>Refund Policy:</strong>
                      <br></br>
                      Refunds are calculated based on the work completed,
                      measured against Key Performance Indicators (KPIs).
                      <ul>
                        <li>
                          If 20% of the work is completed, 30% of the upfront
                          payment is refunded.
                        </li>
                        <li>
                          If 89% of the work is completed, the client is
                          required to pay the remaining 39%.
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Responsibilities and Guarantees
                    </h2>
                    <p>
                      Vntage Labs ensures structured traffic improvements but
                      does not guarantee specific ROI or results beyond its
                      agreed deliverables. The agency's liability is limited to
                      services explicitly outlined in the project agreement.
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Dispute Resolution
                    </h2>
                    <p>
                      In case of disputes:
                      <ul>
                        <li>
                          Both parties must attempt to resolve the issue
                          amicably within 14 business days.
                        </li>
                        <li>
                          If unresolved, mediation is to be sought under
                          Indonesian law.
                        </li>
                        <li>
                          Should mediation fail, disputes will be settled in
                          Indonesian courts under applicable national laws.
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Third-Party Tools and Software
                    </h2>
                    <p>
                      Vntage Labs may use third-party tools or software to
                      facilitate project completion. Clients may establish
                      direct agreements with third-party providers to enhance
                      the project.
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Termination of Services
                    </h2>
                    <p>
                      The agreement may be terminated under the following
                      conditions:
                      <ul>
                        <li>
                          <strong>Client-initiated termination:</strong> The
                          client must compensate Vntage Labs for completed work
                          as per the agreed KPIs.
                        </li>
                        <li>
                          <strong>Agency-initiated termination:</strong> Vantage
                          Labs will refund payments proportionate to incomplete
                          deliverables.
                        </li>
                        <li>
                          Penalty fees may apply if either party terminates the
                          agreement without valid cause.
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Legal Disclaimer
                    </h2>
                    <p>
                      All information provided on this website is accurate to
                      the best of Vntage Labs’ knowledge but may contain
                      typographical errors or inaccuracies. The agency disclaims
                      all implied warranties, including but not limited to,
                      fitness for a specific purpose. Use of services or
                      materials is at the client's discretion and risk.
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">
                      Limitation of Liability
                    </h2>
                    <p>
                      Vntage Labs is not liable for direct or indirect damages,
                      including lost data or profits, regardless of prior
                      notice. This limitation of liability may not apply in
                      jurisdictions that prohibit such exclusions.
                    </p>
                  </div>

                  <div className="item-details-widget">
                    <h2 className="item_details_info_title">Contact</h2>
                    <p>
                      <Link
                        onClick={ClickHandler}
                        to="/contact"
                        className="details-link"
                      >
                        Click here
                      </Link>{" "}
                      to contact us regarding this Terms & Conditions or other
                      related issues. You can also send us an e-mail <br /> on: 
                      <a href="mailto:cs@vntagelabs.com">cs@vntagelabs.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CtaSection cClass={"bg"} />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TermsPage;
