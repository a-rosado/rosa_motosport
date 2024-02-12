import React, { useRef } from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { Formik, Form } from 'formik';
import { m } from "framer-motion";

// Component
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import { Checkbox, Input, TextArea } from '../../Components/Form/Form'
import Buttons from '../../Components/Button/Buttons'
import { ContactFormStyle03Schema } from '../../Components/Form/FormSchema';
import MessageBox from '../../Components/MessageBox/MessageBox';
import Overlap from '../../Components/Overlap/Overlap';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import { fadeIn } from '../../Functions/GlobalAnimations'
// import { resetForm, sendEmail } from '../../Functions/Utilities';
import SideButtons from "../../Components/SideButtons";

// images
// import Logo from "../../Assets/img/rosa-motosport/Rosa-logo.png"

// data
import axios from 'axios';


const ContactUsSimplePage = (props) => {

  const form = useRef(null)

  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: true }} type="reverse-scroll">
        <HeaderNav theme="light" expand="lg" menu="light" className="py-[0px] pr-[40%] lg:px-[15px] md:px-0" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                {/* <img className="" width="111" height="36" loading="lazy" src={Logo} alt='logo' /> */}
              
              </Navbar.Brand>
            </Link>
          </Col>
          <div className="col-auto hidden order-last md:block">
            <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse className="col-auto px-0 justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
          {/* <Col className="col-auto text-right pe-0">
            <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />
          </Col> */}
        </HeaderNav>
      </Header>
      {/* Header End */}
      <SideButtons />

      {/* Section Start */}
      <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="row-cols-2 row-cols-lg-3 row-cols-sm-2 md:gap-y-[50px] sm:gap-y-[30px] text-center">
            <Col>
              <i className="line-icon-Geo2-Love text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"></i>
              <div className="text-darkgray uppercase text-sm font-medium font-serif mb-[10px]">ROSAMOTOSPORT</div>
              <p className="w-[75%] lg:w-[90%] md:w-[60%] sm:w-[75%] xs:w-full mx-auto">123 Broadway, South Texas, TX 123456</p>
            </Col>
            <Col>
              <i className="line-icon-Headset text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"></i>
              <div className="text-darkgray uppercase text-sm font-medium font-serif mb-[10px]">CHAT</div>
              <p className="w-[70%] lg:w-full mx-auto">Phone: 1-254-452-0000</p>
            </Col>
            <Col>
              <i className="line-icon-Mail-Read text-gradient bg-fastblue text-[32px] mb-[30px] sm:mb-[10px] inline-block md:mb-[15px]"></i>
              <div className="text-darkgray uppercase text-sm font-medium font-serif mb-[10px]">E-MAIL US</div>
              <p className="w-[70%] lg:w-full mx-auto">
                <a aria-label="mail" href="mailto:info@yourdomain.com" className="hover:text-basecolor">rosamotosport@gmail.com</a><br />
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="pt-[160px] pb-[250px] lg:pt-[120px] md:pt-[95px] md:pb-[220px] sm:py-[80px] xs:py-[50px] relative bg-cover overflow-hidden bg-center bg-no-repeat bg-fixed lg:bg-local">
        <div className="absolute h-full w-full opacity-80 top-0 left-0 bg-gradient-custom-reverse"></div>
      
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="bg-lightgray pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]">
        <Container>
          <m.div  {...fadeIn} transitionDelay={0.5}>
            <Overlap value={20} className="relative p-32 lg:p-[104px] md:p-[60px] sm:p-[55px] xs:px-[22px] xs:py-[44px] shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white  rounded-custom">
              <Row className="justify-center" >
                <Col xl={6} lg={7} className="col-12 text-center mb-[4.5rem] md:mb-12">
                  <span className="font-serif mb-[5px] -tracking-[.5px] text-xmd block">Complete our contact form, and the team at Rosa Motosport will connect with you as soon as possible!</span>
                  <h4 className="font-serif font-semibold text-darkgray">How we can help you?</h4>
                </Col>
                <Col className="col-12">
                  <Formik
                    initialValues={{ name: '', email: '', mobileNumber: '', message: '', terms_condition: false }}
                    validationSchema={ContactFormStyle03Schema}
                    onSubmit={async (values, actions) => {
                      actions.setSubmitting(true)
                      // const response = await sendEmail(values)
                      // response.status === "success" && resetForm(actions)
                      axios.post("http://localhost:5000/contact", values).then((response) => {console.log(response)});
                    }}
                  >
                    {({ isSubmitting, status }) => (
                      <Form ref={form}>
                        <Row className="row-cols-1 row-cols-md-2">
                          <Col className="mb-16 sm:mb-[25px]">
                            <Input showErrorMsg={false} type="text" name="name" className="rounded-custom py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your name" />
                            <Input showErrorMsg={false} type="email" name="email" className="rounded-custom py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your email address" />
                            <Input showErrorMsg={false} type="tel" name="phone" className="rounded-custom py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" placeholder="Mobile number" />
                          </Col>
                          <Col className="mb-16 sm:mb-[20px]">
                            <TextArea className="rounded-custom border-[1px] border-solid border-[#dfdfdf] w-full py-[15px] px-[20px] text-md h-[210px] resize-none" rows="6" name="comment" placeholder="Your message"></TextArea>
                          </Col>
                          <Col className="text-left sm:mb-[20px]">
                            <Checkbox type="checkbox" name="terms_condition" className="inline-block mt-[4px]" labelClass="flex items-start">
                              <span className="ml-[10px] text-sm inline-block w-[85%]">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the<Link aria-label="checkbox" to="/privacy" target="_blank" className="text-darkgray underline hover:text-fastblue"> privacy policy</Link>.</span>
                            </Checkbox>
                          </Col>
                          <Col className="text-right sm:text-center">
                            <Buttons type="submit" className={`text-xs tracking-[1px] rounded-custom py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""}`} themeColor={["#28a745", "#007bff"]} size="md" color="#fff" title="Send Message" />
                          </Col>
                        </Row>
                        <AnimatePresence>
                          {status && <Row><Col xs={12}><div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] py-[10px]" theme="message-box01" variant="success" message="Your message has been sent successfully!" /></div></Col></Row>}
                        </AnimatePresence>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Overlap>
          </m.div>
          <Row className="justify-center">
            <Col lg={10} className="flex flex-row items-center justify-center text-center mt-[7.5rem]">
              <span className="col-auto w-[40px] h-[1px] bg-darkgray opacity-30"></span>
              <div className="font-serif font-medium text-lg text-darkgray px-[20px] md:text-xmd sm:leading-[22px]">We at Rosa Motosport love a good conversation, especially over coffee. Consider this your invitation to join us for a cup and chat about all things motorcycles. Let's connect and share our passion for sportbikes!</div>
              <span className="col-auto w-[40px] h-[1px] bg-darkgray opacity-30"></span>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

    

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
      {/* Footer End */}
    </div>
  )
}

export default ContactUsSimplePage