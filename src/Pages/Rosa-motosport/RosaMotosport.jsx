import React from "react";

// Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-scroll-parallax";
import { m } from "framer-motion";

// Component
import Header, { HeaderNav, Menu } from "../../Components/Header/Header";
import Buttons from '../../Components/Button/Buttons'
import { fadeIn } from "../../Functions/GlobalAnimations";
import SideButtons from "../../Components/SideButtons";
import InViewPort from "../../Components/InViewPort";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
// Data

// Image
import OverView from "../../Assets/vid/overview ride.mp4"
// import Logo from "../../Assets/img/rosa-motosport/Rosa-logo.png"
import Zx10r40th from "../../Assets/img/rosa-motosport/zx10r/Zx10r-40th-anniversary.png"
import R1HomePage from "../../Assets/img/rosa-motosport/r1/R1-homepage.png"




const CorporatePage = (props) => {
  const swiperRef = React.useRef(null);
  return (
    <div style={props.style}>
      <SideButtons />
      {/* Header Start*/}
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
          <Navbar.Toggle className="order-last md:ml-[10px]">
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
      {/* Header end*/}
      {/* Section Start */}
      <m.section className="relative full-screen overflow-hidden landscape:md:h-[500px]" {...fadeIn}>
      <Parallax className="lg-no-parallax bg-cover cover-background absolute bg-top left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-40, 40]}>
  <video
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1 // Ensuring video stays in the background
    }}
    autoPlay={true}
    loop={true}
    muted={true}
    src={OverView}
    controls={false}
  />
</Parallax>
        <div className="absolute h-full w-full opacity-30 top-0 left-0 bg-gradient-to-r from-[#040506] to-[#130e3e] rotate-[30px]"></div>
        <Container className="h-full text-center justify-center">
          <Row className="h-full justify-center">
            <Col
              xl={6}
              lg={7}
              md={10}
              className="justify-center flex-col relative flex text-center"
            >
              <h1 className="text-xlg pb-24 font-semibold text-[#fff] text-shadow-large font-serif landscape:md:mb-[70px]">
                Rosa Motosports
              </h1>
              {/* Modal Component Start */}
              {/* <CustomModal.Wrapper
              >
              </CustomModal.Wrapper> */}
              {/* Modal Component End */}
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}
      {/* Section Start */}
      <m.section
        className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
        {...fadeIn}
      >
        <Container>
          <Row className="items-center justify-center md:items-start sm:text-center">
            <Col lg={4} md={6} className="md:mb-[50px]">
              <m.div className="inline-block text-center w-[300px] py-14 px-[15px] relative" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                <div className="border-r-0 border-solid	border-[10px] border-basecolor h-full w-[67px] block absolute bottom-0 left-0"></div>
                <h1 className="text-[80px] leading-[72px] mb-0 mr-[15px] font-semibold tracking-[-5px] text-darkgray font-serif inline-block align-middle">
                  15
                </h1>
                <div className="w-[40%] leading-[20px] font-medium text-darkgray text-xmd font-serif text-left relative inline-block align-middle lg:w-[50%] sm:w-[35%]">
                  Years serving you and our comunity
                </div>
                <div className="border-l-0 border-solid	border-[10px] border-basecolor h-full w-[67px] block absolute bottom-0 right-0"></div>
              </m.div>
            </Col>
            <Col lg={3} md={4}>
              <m.div {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                <span className="mb-[20px] text-md font-serif uppercase block font-semibold">
                  Since 2009
                </span>
              </m.div>
            </Col>
            <Col lg={5} md={10}>
              <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }}>
                <p className="w-[84%] mb-[25px] block lg:w-full">
                At Rosa Motosport, we're more than just a motorcycle dealership; we're a community of enthusiasts dedicated to the thrill of the ride. Our passion for sportbikes drives us to offer a curated selection of the finest models, each promising unparalleled performance and style. We pride ourselves on expert knowledge and personalized service, ensuring every customer's experience is as exceptional as the bikes we sell. Join us in our journey, where every road leads to discovery and every ride is an adventure waiting to be embraced.
                </p>
                <Buttons
                  to="/Rosa-motosport-RosaMotosportAboutUs"
                  className="font-medium font-serif uppercase btn-link text-md after:bg-black after:h-[1px] after:!-bottom-[5px] hover:text-darkgray md:text-md md:mb-[15px]"
                  color="#232323"
                  title="About company"
                  size="xl"
                />
              </m.div>
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}
      
      <InViewPort>
        {/* Section Start */}
        <section className="bg-gradient-custom py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row className="justify-center">
              <Col className="pt-12 text-center mb-24">
                <m.h2 className="heading-4 font-semibold -tracking-[1px] text-white font-serif" {...fadeIn} >
                Sportbikes, where the symphony of speed and precision meets the road, igniting the spirit of adventure in every turn.
                </m.h2>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <m.section
          className="cover-background py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
          style={{
            backgroundImage:
              "url(/assets/img/webp/home-corporate-hand-crafted-bg.webp)",
          }}
          {...fadeIn}
        >
          <Container>
            <Row className="items-center justify-center">
              <Col xs={10} lg={6} className="relative">
                <div className="relative">
                  <Parallax className="lg-no-parallax w-[70%]" speed={0}>
                    <img width="100%" height="100%" alt="" src={Zx10r40th}/>
                  </Parallax>
                  <Parallax className="lg-no-parallax flex justify-center items-center w-1/2 bg-no-repeat absolute bottom-0 right-[15px] lg:!left-auto lg:!top-[150px] sm:!top-[100px]" speed={20}>
                    <img width="341.25px" height="349.78px" alt="" src={R1HomePage} />
                  </Parallax>
                </div>
              </Col>
              <Col xs={10} xl={{ span: 4 }} lg={{ span: 5, offset: 1 }} className="md:mt-[15%] xs:mt-[18%]">
                <m.h2 className="heading-4 mb-16 font-semibold -tracking-[1px] text-darkgray font-serif" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                Kawasaki and Yamaha, Where Every Detail Echoes the Pulse of Performance and Precision.
                </m.h2>
                <m.span className="mb-[5px] font-serif text-darkgray font-medium block" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                  Kawasaki
                </m.span>
                <m.p className="mb-0 w-[85%]" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
                Experience the adrenaline rush with a Kawasaki sport bike - where engineering meets exhilaration. These bikes are designed for those who dare to chase speed with precision, offering cutting-edge technology and unmatched performance. With a Kawasaki, you're not just buying a bike; you're embracing a legacy of power and agility.
                </m.p>
                <m.span className="h-[1px] my-12 bg-mediumgray w-full block sm:my-6" {...{ ...fadeIn, transition: { delay: 0.6 } }}></m.span>
                <m.span className="mb-[5px] font-serif text-darkgray font-medium block" {...{ ...fadeIn, transition: { delay: 0.7 } }}>
                  Yamaha
                </m.span>
                <m.p className="mb-0 w-[85%]" {...{ ...fadeIn, transition: { delay: 0.8 } }}>
                Step into the world of Yamaha sport bikes, where every ride is an adventure in precision and power. These machines are crafted for those who crave the thrill of speed, coupled with unmatched agility and control. With a Yamaha, you're not just choosing a bike; you're embracing a legacy of racing excellence and innovative design. Experience the exhilaration of every curve and the freedom of the open road. Yamaha sport bikes: where passion meets performance, and every journey becomes a memory.
                </m.p>
                <m.div {...{ ...fadeIn, transition: { delay: 1 } }}>
                  <Buttons
                    className="font-medium font-serif uppercase hover:text-darkgray btn-expand mt-[56px]"
                    size="lg"
                    color="#232323"
                    themeColor="#2ed47c"
                    to="/Rosa-motorsport-RosaMotosportInventory"
                    title="Explore More"
                  />
                </m.div>
              </Col>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        <section className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:[50px]">
          <Container>
            <m.div className="row justify-center">
              <m.div className="col col-lg-6 cpl-md-8 col-sm-10 mb-24 text-center" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                <h2 className="heading-4 font-semibold -tracking-[1px] text-darkgray font-serif">
                  Experience our track oriented Supersport from Kawasaki and Yamaha
                </h2>
              </m.div>
            </m.div>
           
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start 
        <m.section
          className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"
          {...fadeIn}
        >
          <Container>
            <Row className="justify-center">
              <Col lg={6} md={8} className="mb-20 text-center xs:mb-16">
                <h2 className="heading-4 font-semibold -tracking-[1px] text-darkgray font-serif">
                  Meet the people
                </h2>
                <p className="w-[80%] mb-0 my-0 mx-auto xs:w-full">
                  Lorem ipsum dolor amet consectetur adipiscing elit eiusmod
                  tempor incididunt ut labore et dolore magna
                </p>
              </Col>
            </Row>
            <Team
              themeColor="dark"
              theme="team-style-01"
              data={TeamData01}
              grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-10"
              animation={fadeIn}
              carousel={true}
              overlay={["#2ed47ce6", "#e8a626e6"]}
              animationDelay={0.3}
            />
          </Container>
        </m.section>
         Section End */}

        {/* Section Start */}

        {/* Footer Start */}
        <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
        {/* Footer Start */}
      </InViewPort>
    </div>
  );
};

export default CorporatePage;