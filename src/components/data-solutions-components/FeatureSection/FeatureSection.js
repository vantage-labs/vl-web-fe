import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../../images/icon/da-fea_icon01.svg'
import icon2 from '../../../images/icon/da-fea_icon02.svg'
import icon3 from '../../../images/icon/da-fea_icon03.svg'
import icon4 from '../../../images/icon/da-fea_icon04.svg'

import hicon from '../../../images/icon/flower-icon-blue.svg'

const Features = [
    {
        title: 'Dispersed data',
        des: 'Your data is held in multiple sources, making it difficult to get a single view of the truth.',
        icon: icon1,
        col:'col-lg-4 col-md-6 fea-col',
    },
    {
        title: 'Skills shortage',
        des: 'You struggle to get data into an accessible format and act on generated insights.',
        icon: icon2,
        col:'col-lg-2 col-md-6 fea-col',
    },
    {
        title: 'Business adoption',
        des: 'Senior stakeholders don’t understand the untapped value that data and AI can bring.',
        icon: icon3,
        col:'col-lg-2 col-md-6 fea-col',
    },
    {
        title: 'Solution design',
        des: 'You have the insights but can’t grasp the technology to drive the business forward.',
        icon: icon4,
        col:'col-lg-4 col-md-6 fea-col',
    },


]


const FeatureSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="feature pt-150 pb-150" style={{ backgroundColor: '#f4f5fc' }}>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-8">
                        <div className="da-sec-titlte text-center mb-70">
                            <span className="sub_title"><span><img src={hicon} alt=""/></span>Challenge</span>
                            <h2 className="title">Can’t see the wood from the trees? Don’t let good data go to waste</h2>
                        </div>
                    </div>
                </div>
                <div className="da-feature-wrap">
                    <div className="row g-0">
                        {Features.map((features, fitem) => (
                            <div className={features.col} key={fitem}>
                                <div className="da-feature-item">
                                    <div className="xb-item--holder">
                                        <div className="xb-item--icon"><img src={features.icon} alt="" /></div>
                                        <h3 className="xb-item--title">{features.title}</h3>
                                        <p className="xb-item--content">{features.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xb-btn text-center mt-70">
                    <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--data thm-btn--data_blue">
                        <div className="xb-item--hidden"><span className="xb-item--hidden-text">Book a Discover Call</span></div>
                        <div className="xb-item--holder">
                            <span className="xb-item--text xb-item--text1">Book a Discover Call</span>
                            <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
                            <span className="xb-item--text xb-item--text2">Book a Discover Call</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;