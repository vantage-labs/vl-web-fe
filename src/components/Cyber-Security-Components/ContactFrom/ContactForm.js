import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        company: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                company: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form className="contact-form" onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text1">Your name</label>
                        <div className="input-box">
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text2">Email</label>
                        <div className="input-box">
                            <input
                                value={forms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>
                    {validator.message('email', forms.email, 'required|email')}
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text3">Phone</label>
                        <div className="input-box">
                            <input
                                value={forms.phone}
                                type="phone"
                                name="phone"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>
                    {validator.message('phone', forms.phone, 'required|phone')}
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text4">Company name</label>
                        <div className="input-box">
                            <input
                                value={forms.company}
                                type="company"
                                name="company"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>
                    {validator.message('company', forms.company, 'required|phone')}
                </div>
                <div className="col-lg-12">
                    <div className="input-field text-field">
                        <label htmlFor="text5">How can we help you today?</label>
                        <div className="input-box">
                            <textarea
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                value={forms.message}
                                type="text"
                                name="message"
                                className="form-control">
                            </textarea>
                        </div>
                    </div>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="contact-btn">
                <button type="submit" className="blc-btn">
                    <span>Submit now <i className="far fa-angle-right"></i></span>
                    <span className="btn-shape">
                        <svg width="362" height="78" viewBox="0 0 362 78" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 22.7183L25.5093 1.39453H337.972L361.5 22.7092V56.5515L337.98 76.6051H25.5093L0.5 55.2813V22.7183Z" fill="url(#paint0_linear_1600_9966932)" stroke="#23263C" />
                            <defs>
                                <linearGradient id="paint0_linear_1600_9966932" x1="1.29285" y1="38.9973" x2="362" y2="33.9973" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#431DAB" />
                                    <stop offset="1" stopColor="#AE6DFE" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="btn-shape2">
                        <svg width="271" height="60" viewBox="0 0 271 60" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 17.2308L20.1225 0.5H252.042L270.5 17.2217V43.7692L252.05 59.5H20.1225L0.5 42.7692V17.2308Z" fill="#010315" stroke="url(#paint0_linear_1742_661333)" />
                            <defs>
                                <linearGradient id="paint0_linear_1742_661333" x1="271" y1="61.5556" x2="232.791" y2="-3.08978" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#6780D2" />
                                    <stop offset="1" stopColor="#2F3B8D" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    )
}

export default ContactForm;