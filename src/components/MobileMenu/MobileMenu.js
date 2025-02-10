import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        // submenu: [
        //     {
        //         id: 11,
        //         title: 'SEO Agency',
        //         link: '/home'
        //     },
        //     {
        //         id: 12,
        //         title: 'It Services',
        //         link: '/home-2'
        //     },
        //     {
        //         id: 13,
        //         title: 'AI & Data Solutions',
        //         link: '/home-3'
        //     },
        //     {
        //         id: 14,
        //         title: 'Cyber Security',
        //         link: '/home-4'
        //     },
        //     {
        //         id: 15,
        //         title: 'Cloud and Devops',
        //         link: '/home-5'
        //     },
        //     {
        //         id: 16,
        //         title: 'Help desk SaaS',
        //         link: '/home-6'
        //     },
        // ]
    },
    {
        id: 3,
        title: 'Pages',
        link: '/about',
        submenu: [
            {
                id: 31,
                title: 'About Us',
                link: '/about'
            },
            {
                id: 3222,
                title: 'Our Pricing',
                link: '/pricing'
            },
            {
                id: 322,
                title: 'Our team',
                link: '/team'
            },
            {
                id: 345,
                title: 'Services',
                link: '/service'
            },
            {
                id: 3455,
                title: 'Casestudy',
                link: '/casestudy'
            },
            {
                id: 3459,
                title: 'Terms & Conditions',
                link: '/terms-conditions'
            },
            {
                id: 3460,
                title: 'Privacy Policy',
                link: '/privacy-policy'
            },
        ]
    },
    {
        id: 5,
        title: 'Services',
        link: '/service',
        submenu: [
            {
                id: 51,
                title: 'Web Development',
                link: '/web-development'
            },
            {
                id: 52,
                title: 'Web Design UI',
                link: '/service-single/web-design-ui'
            },
            {
                id: 53,
                title: 'UI / UX',
                link: '/service-single/ui-ux'
            },
            {
                id: 54,
                title: 'Marketing Digital Packages',
                link: '/service-single/marketing-digital-packages'
            },
        ]
    },
    {
        id: 7,
        title: 'Casestudy',
        link: '/casestudy',
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="xb-menu-primary clearfix">
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="menu-item menu-item-has-children active">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <Link onClick={ClickHandler} className="active"
                                                            to={submenu.link}>{submenu.title}</Link>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <Link className="active"
                                to={item.link}>{item.title}</Link>
                        }
                    </ListItem>
                )
            })}
        </ul>
    )
}

export default MobileMenu;