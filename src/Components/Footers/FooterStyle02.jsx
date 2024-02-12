import React, { memo } from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PropTypes } from "prop-types";

// components

import FooterMenu, { Footer } from './Footer';

// Data
import FooterData from './FooterData'

// images
import Logo from "../../Assets/img/rosa-motosport/Rosa-logo.png"

const iconData = [
    {
        color: "#828282",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
    },
    {
        color: "#828282",
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble"
    },
    {
        color: "#828282",
        link: "https://twitter.com/",
        icon: "fab fa-twitter"
    },
    {
        color: "#828282",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
    },
]

const FooterStyle02 = (props) => {
    return (
        <Footer theme={props.theme} className={`${props.className ? ` ${props.className}` : ""}`}>
            <div className="py-[5%] lg:py-[8%] md:pb-0 xs:py-[8%]">
                <Container>
                    <Row className="md:text-start justify-start">
                        <Col lg={{ span: 3, order: 0 }} md={5} sm={{ span: 6, order: 1 }} className="md:mb-[50px] xs:mb-[25px]">
                            <Link aria-label="link" to="/" className="mb-[20px] block">
                                <img alt="logo" src={props.logo} width="111" height="36" />
                            </Link>
                        </Col>
                        <FooterMenu className="xl:px-[15px] md:mb-[40px] xs:mb-[25px]" data={FooterData.slice(0, 3)} lg={{ span: 2, order: 0 }} sm={{ span: 4, order: 3 }} titleClass="capitalize" />
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom py-[35px] border-t border-[#ffffff1a]">
                <Container>
                    <Row>
                        <Col md={6} className="md:mb-[0.75rem] xs:mb-[15px]">
                            <ul className="flex sm:justify-center md:justify-start xs:flex-col">
                                <li className="mr-[35px] md:mr-[20px] xl:mb-0 xs:mb-[7px]"><Link aria-label="link" to="#">Privacy policy</Link></li>
                                <li className="mr-[35px] md:mr-[20px] xl:mb-0 xs:mb-[7px]"><Link aria-label="link" to="#">Legal notice</Link></li>
                                <li className="xl:mb-0"><Link aria-label="link" to="#">Terms of service</Link></li>
                            </ul>
                        </Col>
                        <Col md={6} className="text-right sm:text-center xs:text-left">
                            <span className="inline-block">&copy; {new Date().getFullYear()} Litho is Proudly Powered by <a aria-label="themezaa" rel="noreferrer" href="https://www.themezaa.com/" target="_blank" className="text-themecolor underline underline-offset-4"> ThemeZaa</a></span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Footer>
    )
}

FooterStyle02.defaultProps = {
    data: FooterData,
    logo: "/assets/img/webp/logo-white.webp"
}

FooterStyle02.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
}

export default memo(FooterStyle02)