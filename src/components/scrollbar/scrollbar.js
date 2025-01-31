import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'

const Scrollbar = () => {

    return (
        <ul className="smothscroll">
            <li><AnchorLink href='#scrool'><i className="far fa-arrow-up"></i></AnchorLink></li>
        </ul>

    )
}

export default Scrollbar;
