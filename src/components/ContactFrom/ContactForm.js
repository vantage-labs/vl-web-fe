import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import emailjs from 'emailjs-com';

const ContactForm = (props) => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [validator] = useState(
        new SimpleReactValidator({
            className: 'errorMessage',
        })
    );

    const [isSubmitting, setIsSubmitting] = useState(false);

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setIsSubmitting(true);
            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                forms,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
                .then(
                    (result) => {
                        alert('Message sent successfully!');
                        setForms({
                            name: '',
                            email: '',
                            phone: '',
                            message: '',
                        });
                        setIsSubmitting(false);
                    },
                    (error) => {
                        alert('Failed to send the message, please try again later.');
                        console.error('EmailJS Error:', error.text);
                        setIsSubmitting(false);
                    }
                );
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={submitHandler} className="contact-form">
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text1">Name*</label>
                        <div className="input-box">
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text2">Email*</label>
                        <div className="input-box">
                            <input
                                value={forms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field">
                        <label htmlFor="text3">Phone*</label>
                        <div className="input-box">
                            <input
                                value={forms.phone}
                                type="tel"
                                name="phone"
                                className="form-control"
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field text-field">
                        <label htmlFor="text5">Message</label>
                        <div className="input-box">
                            <textarea
                                value={forms.message}
                                name="message"
                                className="form-control"
                                placeholder="How can we help you?"
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            ></textarea>
                            {validator.message('message', forms.message, 'required')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cp-det-btn mt-20 d-grid">
                <button className="cp-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send us a message'}{' '}
                    <i className="fal fa-arrow-right"></i>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
