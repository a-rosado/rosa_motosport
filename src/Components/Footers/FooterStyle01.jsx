import React, { memo } from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { PropTypes } from "prop-types";

// Components

import FooterMenu, { Footer } from './Footer';


// Data
import FooterData from './FooterData';


const FooterStyle01 = (props) => {
    return (
        <Footer theme={props.theme} className={`${props.className ? ` ${props.className}` : ""}`}>
            <div className="py-[5%] lg:py-[95px] md:py-[50px]">
                <Container>
                    <Row>
                        <FooterMenu data={FooterData.slice(0, 2)} lg={6} sm={6} className="lg:pl-[50px] xl:px-[15px] md:mb-[40px] xs:mb-[25px]" titleClass="capitalize" />
                        <Col lg={2} sm={6} className="xs:mb-[25px]">
                            <span className="mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]">Get in touch</span>
                            <p className="w-[85%] mb-[15px]">123 Broadway, South Texas, TX 123456</p>
                            <div><i className="feather-phone-call text-sm mr-[10px] text-themecolor"></i>1-254-452-0000</div>
                            <div><i className="feather-mail text-sm mr-[10px] text-themecolor"></i><a aria-label="mail" href="mailTo:info@yourdomain.com">rosamotosport@gmail.com</a></div>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </Footer>
    )
}

FooterStyle01.defaultProps = {
    data: FooterData,
    className: "bg-darkgray text-[#828282]",
    logo: "/assets/img/webp/logo-white.webp",
    theme: "light"
}

FooterStyle01.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
}

export default memo(FooterStyle01)
