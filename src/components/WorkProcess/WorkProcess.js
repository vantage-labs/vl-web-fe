import React from 'react';
import { Fade } from "react-awesome-reveal";
import hicon from '../../images/icon/process-icon.svg'
import pImg from '../../images/process/illistration.png'
import pImg2 from '../../images/shape/pattern.png'
import sIcon1 from '../../images/icon/search01.svg'
import sIcon2 from '../../images/icon/user-icon.png'
import sIcon3 from '../../images/icon/clipboar02.svg'
import sIcon4 from '../../images/icon/medal-star.svg'
import { useTranslation } from 'react-i18next';


const WorkProcess = (props) => {


    const {t} = useTranslation();


    const Process = [
        {
            id: "01",
            title: t("workflowSection.steps.0.headline"),
            subTitle: t("workflowSection.steps.0.description"),
            icon: sIcon1,
            direction: 'one',
        },
        {
            id: "02",
            title:  t("workflowSection.steps.1.headline"),
            subTitle: t("workflowSection.steps.1.description"),
            icon: sIcon2,
            direction: 'two',
        },
        {
            id: "03",
            title:  t("workflowSection.steps.2.headline"),
            subTitle: t("workflowSection.steps.2.description"),
            icon: sIcon3,
            direction: 'three',
        },
        {
            id: "04",
            title:  t("workflowSection.steps.3.headline"),
            subTitle: t("workflowSection.steps.3.description"),
            icon: sIcon4,
            direction: 'four',
        },
        {
            id: "05",
            title:  t("workflowSection.steps.4.headline"),
            subTitle: t("workflowSection.steps.4.description"),
            icon: sIcon4,
            direction: 'five',
        },

    ]
    return (
        <section className="process pt-130 pb-100 pos-rel" style={{ backgroundColor: "#0F55DC" }}>
            <div className="container">
                <div className="sec-title--two text-center mb-90">
                    <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms"><img
                                src={hicon} alt="" />Our working process</div>
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                        <div>
                            <h2 className="title clr-white wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">{t("workflowSection.title")}</h2>
                        </div>
                    </Fade>
                </div>
                <div className="row flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="sa-process_right">
                            <Fade direction='right' triggerOnce={'false'} duration={1200} delay={9}>
                                <div>
                                    <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                                        <img className="updown" src={pImg} alt="" />
                                    </div>
                                </div>
                            </Fade>
                            <div className="process_shape"><img src={pImg2} alt="" /></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sa-process_left">
                            {Process.map((process, pitem) => (
                                <div className={`process-item process-item--${process.direction}`} key={pitem}>
                                    <div className="xb-item--icon">
                                        <img src={process.icon} alt="" />
                                    </div>
                                    <h4 className="xb-item--title">{process.title}</h4>
                                    <p className="xb-item--contact">{process.subTitle}</p>
                                    <span className="xb-item--number">{process.id}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkProcess;