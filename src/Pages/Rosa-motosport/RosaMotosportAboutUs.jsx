import React from 'react'

// Components
import { Header, HeaderNav, Menu} from "../../Components/Header/Header";
import FooterStyle01 from '../../Components/Footers/FooterStyle01'



// Libraries
import { Link } from "react-router-dom";
import { Col, Container, Row, Navbar } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'
import { Link as ScrollTo } from "react-scroll"

// images 
import R1MTrack02 from "../../Assets/img/rosa-motosport/r1/2024-R1MTRACK02.jpg"
import H2RTrack02 from "../../Assets/img/rosa-motosport/zx10r/H2RTRACK02.png"
// import Logo from "../../Assets/img/rosa-motosport/Rosa-logo.png"


const AboutUsPage = (props) => {

  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ md: true}} type="reverse-scroll">
        <HeaderNav fluid="fluid" theme="dark" className="py-[0px] pr-[20%] md:px-[15px] md:py-[20px] sm:px-0">
          <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                {/* <img className="" width="160" height="60" loading="lazy" src={Logo}  alt='logo' /> */}
                {/* <img className="" width="111" height="36" loading="lazy" src={Logo}  alt='logo' />
                <img className="" width="111" height="36" loading="lazy" src={Logo}  alt='logo' /> */}
              </Navbar.Brand>
            </Link>
          </Col>
          <Navbar.Toggle className="order-last md:ml-[17px]">
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-center col-auto col-lg-8">
            <Menu {...props} />
          </Navbar.Collapse>
        </HeaderNav>
      </Header>
      {/* Header End */}
     
      {/* Parallax Scrolling Start */}
      <div className="h-[1200px] lg:h-[580px] md:h-[550px] sm:h-[500px] xs:h-[380px] flex items-center overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(${R1MTrack02})` }}
></Parallax>
        <div className="absolute h-full w-full opacity-50 top-0 left-0 bg-darkgray"></div>
        <Container>
          <Row className="items-center justify-center">
            
            <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block p-0 -translate-x-1/2 sm:bottom-7 xs:bottom-[4.5rem] cursor-pointer">
              <i className="ti-arrow-down text-lg leading-[1] text-white bg-[#000000b3] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>
          </Row>
        </Container>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <section id="about" className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="font-serif">
            <Col lg={4} className="pe-lg-0 flex md:mb-[30px]">
              <div className="w-full md:h-[700px] sm:h-[550px] xs:h-[450px] cover-background" style={{ backgroundImage: `url(${H2RTrack02})`  }}></div>
            </Col>
            <Col lg={8} md={6} className="ps-lg-0 flex items-center sm:mb-[30px]">
                <div className="justify-center h-full w-full flex flex-col items-center bg-fastblue px-[5.5rem] lg:px-[3rem] md:p-16 py-24">
                <h2 className="text-white text-center font-sans mb-[20px] xs:mb-[15px]">About Us</h2>
                <p className="text-white font-sans text-xmd mb-[20px] xs:mb-[15px]">At Rosa Motosport, we are not just a motorcycle dealership; we are a vibrant hub for enthusiasts who share a deep passion for the exhilarating world of sportbikes. Our dedication to this thrilling lifestyle is reflected in our exclusive focus on Kawasaki and Yamaha motorcycles, two brands synonymous with groundbreaking performance and innovative design. By handpicking only the finest models from these esteemed manufacturers, we ensure that each bike in our showroom is a masterpiece of engineering and style, ready to fulfill the dreams of speed and adventure.
                <br></br>
                Our team at Rosa Motosport is fueled by a rich knowledge of these two iconic brands, offering insights and expertise that are second to none. This expertise, combined with our commitment to personalized service, ensures that every interaction with us is as memorable and unique as the motorcycles we cherish. Whether you're a seasoned rider or new to the sportbike world, our team is here to guide you through every step of your journey.
                <br></br>
                Choosing a Kawasaki or Yamaha from Rosa Motosport means more than just purchasing a motorcycle; it's about becoming a part of a community where every road is an opportunity for discovery, and every ride is an adventure in the making. We invite you to join us at Rosa Motosport, where the spirit of the ride unites us, and the open road beckons. Here, your passion for sportbikes is not just understood; it's celebrated..</p>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
      {/* Section End */}

      

      {/* Footer start */}
      <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
      {/* Footer end */}
    </div>
  )
}

export default AboutUsPage