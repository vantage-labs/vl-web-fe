import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactFrom/ContactForm";
import icon1 from "../../images/icon/call-calling.svg";
import icon2 from "../../images/icon/icon-sms.svg";

const ContactSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className="contact pt-85">
        <div className="container">
          <div className="row pb-130 mt-none-30">
            <div className="col-lg-8 mt-30">
              <div className="cs-contact-wrap cs-contact-form cd-contact-form item-contact_form">
                <h2 className="xb-title">Send us a message</h2>
                <p className="xb-content">
                  Give us a chance to serve and bring magic to your brand.
                </p>
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-4 mt-30">
              <div className="item-contact_info">
                <div className="xb-item--inner">
                  <div className="xb-item--top">
                    <h3 className="xb-item--title">Contact Info</h3>
                    <span className="xb-item--hotline">
                      <img src={icon1} alt="" /> +(62) 851 9592 2910
                    </span>
                    <span className="xb-item--email">
                      <img src={icon2} alt="" /> hello@vantagelabs.com
                    </span>
                    <ul className="social_icons_block list-unstyled ul_li">
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/contact"
                          aria-label="Facebook"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/contact"
                          aria-label="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/contact"
                          aria-label="Linkedin"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-info_widget">
                    <h3 className="xb-title">Indonesia office</h3>
                    <span className="xb-location">
                      Grand Slipi Tower, <br />
                      Jl. Jend Jl. Jelambar Barat No.22-24 Lt 9 Unit O, Jelambar
                      Baru, Kec. Grogol petamburan,
                      <br />
                      Kota Jakarta Barat 11480
                    </span>
                  </div>
                  <hr className="breack-line" />
                  <div className="contact-info_widget">
                    <h3 className="xb-title">our office open time</h3>
                    <span className="xb-location">
                      Mon - Sat : 8.00-5.00 <br /> Sunday : Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gmap_canvas bg-light">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.881935295231!2d106.78430940000001!3d-6.1465558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7923c637ec1%3A0xdd47f4571803ffb7!2sPT%20Boxity%20Central%20Indonesia!5e0!3m2!1sen!2sid!4v1739192368014!5m2!1sen!2sid?output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
