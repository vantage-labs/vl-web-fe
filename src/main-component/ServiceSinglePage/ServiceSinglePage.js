import React, { Fragment, useState, useEffect } from "react";
import Services from "../../api/service";
import { useParams } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Header from "../../components/header/Header";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import Bg from "../../images/bg/page_bg01.jpg";
import icon from "../../images/icon/ser-01.svg";
import srImg from "../../images/shape/brd_shape.png";
import sImg1 from "../../images/icon/sd-icon01.svg";
import shape from "../../images/shape/sd-shape.png";
import sicon from "../../images/icon/check-icon.svg";

const ServiceSinglePage = (props) => {

    // State untuk menyimpan detail service
    const [serviceDetails, setServiceDetails] = useState(null);
    const [headImg, setHeadImg] = useState(""); // State untuk image

    const { slug } = useParams();

    const ServiceDetails = Services.find((item) => item.slug === slug);

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const foundService = Services.find((item) => item.slug === slug);
        if (foundService) {
            setServiceDetails(foundService);
            setHeadImg(foundService.headImg);
        }
    }, [slug]); // Akan dipanggil setiap kali slug berubah

    
    if (!serviceDetails) {
        return <div>Loading...</div>; // Mencegah error sebelum data tersedia
    }

    return (
        <Fragment>
            <div className="sco_agency">
                <Header />
                <main className="page_content services-page">
                    <section
                        className="page-title  pt-200 pos-rel bg_img"
                        style={{ backgroundImage: `url(${Bg})` }}
                    >
                        <div className="container">
                            <div className="page-title-wrap sd-title-wrap">
                                <div className="row mt-none-30 align-items-end">
                                    <div className="col-lg-9 mt-30">
                                        <div className="page-title-box">
                                            <span className="sub-title">
                                                <img src={icon} alt="Vntage Labs Asset" />{" "}
                                                {ServiceDetails.title} Services
                                            </span>
                                            <h2 className="title">{ServiceDetails.headingOne}</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-30">
                                        <div className="sd-right-img pos-rel">
                                            <dotlottie-player
                                                key={headImg} // Menjadikan headImg sebagai key agar re-render terjadi
                                                src={headImg}
                                                background="transparent"
                                                speed="1"
                                                style={{ maxWidth: "850px" }}
                                                loop
                                                autoplay
                                            ></dotlottie-player>

                                            <div className="sd-arrow-shape">
                                                <img
                                                    className="xbzoominzoomup"
                                                    src={srImg}
                                                    alt="Vntage Labs Asset"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="sd-ser-content_wrap pb-50">
                        <div className="container">
                            <div className="sd-ser-content">
                                <h2 className="sd-title">{ServiceDetails.headingTwo}</h2>
                                <p className="sd-content">{ServiceDetails.subHeadingTwo}</p>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Service process</h2>
                                <p className="sd-content">{ServiceDetails.serviceProcess}</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                {ServiceDetails.stepServiceProcess.map((item, i) => (
                                    <div className="sd-process-item">
                                        <div className="xb-item--icon">
                                            <img src={sImg1} alt="Vntage Labs Asset" />
                                        </div>
                                        <h3 className="xb-item--title">{item.title}</h3>
                                        <p className="xb-item--contact">{item.description}</p>
                                        <span className="xb-item--number">{item.step}</span>
                                    </div>
                                ))}
                                <div className="sd-shape">
                                    <img src={shape} alt="Vntage Labs Asset" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-service_wrap pt-115 pb-60">
                        <div className="container">
                            <div className="sd-ser-outcome">
                                <div className="sd-heading">
                                    <h2 className="sd-title">Services outcome</h2>
                                    <p className="sd-content">
                                        {ServiceDetails.serviceOutcomeDescriptions}:
                                    </p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        {ServiceDetails.serviceOutcome.map((item, i) => (
                                            <li key={i}>
                                                <img src={sicon} alt="Vntage Labs Asset" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="7e90gBu4pas"
                onClose={() => setOpen(false)}
            />
        </Fragment>
    );
};
export default ServiceSinglePage;
