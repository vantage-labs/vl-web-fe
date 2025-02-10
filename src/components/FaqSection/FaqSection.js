import React, { useState } from "react";
import hicon from "../../images/icon/magic.svg";
import { Fade } from "react-awesome-reveal";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useTranslation } from "react-i18next";

const FaqSection = (props) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const { t } = useTranslation();

  return (
    <section className="faq pb-140">
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
                FAQ’s
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
                {t("faqSection.title")}
              </h2>
            </div>
          </Fade>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="xb-faq wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="600ms"
            >
              <Accordion
                open={open}
                toggle={toggle}
                className="accordion_box clearfix list-unstyled"
              >
                <AccordionItem className="block">
                  <AccordionHeader targetId="1" className="acc-btn">
                    <span className="number">01_</span>{" "}
                    {t("faqSection.questions.0.question")}
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="1" className="acc_body">
                    <div className="content">
                      <p>{t("faqSection.questions.0.answer")}</p>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="2" className="acc-btn">
                    <span className="number">02_</span>
                    {t("faqSection.questions.1.question")}
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="2" className="acc_body">
                    <div className="content">
                      <p>{t("faqSection.questions.1.answer")}</p>
                      {/* <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul> */}
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="3" className="acc-btn">
                    <span className="number">03</span> _{" "}
                    {t("faqSection.questions.2.question")}
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="3" className="acc_body">
                    <div className="content">
                      <p>{t("faqSection.questions.2.answer")}</p>
                      {/* <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul> */}
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="4" className="acc-btn">
                    <span className="number">04</span> _{" "}
                    {t("faqSection.questions.3.question")}
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="4" className="acc_body">
                    <div className="content">
                      <p>{t("faqSection.questions.3.answer")}</p>
                      {/* <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul> */}
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
