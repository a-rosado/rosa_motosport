import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Libraries
import { Col, Container, Nav, Navbar, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from "swiper";
import Lightbox from 'react-18-image-lightbox';

// Components
import Header, { HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from '../../../Components/Header/Header'
import RosaShop from './RosaShop';
import FooterStyle01 from "../../../Components/Footers/FooterStyle01";
// import { resetForm } from "../../../Functions/Utilities";
import SideButtons from "../../../Components/SideButtons";

// Data
import axios from 'axios';

// img
import zx4rLeftshot from "../../../Assets/img/rosa-motosport/ZX4r/zx4r-leftshot.png"
import infoTech from "../../../Assets/img/rosa-motosport/ZX4r/zx4r-infotech.png"
import zx4rrightshot from "../../../Assets/img/rosa-motosport/ZX4r/zx4r-side-shot.png"
import zx4r from "../../../Assets/img/rosa-motosport/ZX4r/zx4r.jpeg"
import zx4rTrack from "../../../Assets/img/rosa-motosport/ZX4r/zx4rtrack.png"


const swiperData = [
  {
    img: zx4rLeftshot
  },
  {
    img: infoTech
  },
  {
    img: zx4rrightshot
  },
  {
    img: zx4r
  },
 
]




const SingleProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0)
  const swiperRef = React.useRef(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  import("../../../Functions/Utilities").then(module => {
    module.InputField(1);
  })

  const handleClick = (i) => {
    setIsOpen(true)
    setPhotoIndex(i)
  }

   // Extract the productId from the URL
   let { productId } = useParams()

const [product, setproduct] = useState({});

useEffect(() => {
    const fetchMotorcycles = async () => {
      
      try {
    axios.get('http://localhost:5000/smallsupersports/65bb1494dc202575b9368097').then(( response => 
    {setproduct(response.data)
        console.log(response.data)}))
        
        // Correctly extract data from each response and update state
       
      } catch (err) {
   
       }
    };
  
    fetchMotorcycles();
  }, []); // Assuming setIsLoading, setError, and the state setters are defined elsewhere in your component

   // If the product is not found, you might want to handle it
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="single-product" style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: true }} type="reverse-scroll">
        <HeaderNav fluid="fluid" theme="light" bg="white" menu="light" className="px-[35px] py-[0px] md:px-0 border-b border-b-[#0000001a]" containerClass="sm:px-0">
          
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
          
        </HeaderNav>
      </Header>
      {/* Header End */}
      <SideButtons />
      {/* Section Start */}
      <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden">
        <Container>
          <Row>
            <Col className="col-12 flex flex-column flex-lg-row align-items-md-center" >
              <div className="w-[60%] md:w-full">
                <Row>
                  <Col lg={{ span: 9, order: 2 }} className="relative product-image md:mb-[10px] px-lg-0">
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[Navigation, Thumbs]}
                      className="mySwiper2 w-full product-images-box">
                      {
                        swiperData.map((item, i) => {
                          return (
                            <SwiperSlide key={i} onClick={() => handleClick(i)}>
                              <img src={item.img} alt="products" width="512" height="652.8" className="w-full" />
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper>

                    {isOpen && (
                     <Lightbox
                        imageCaption={`${photoIndex + 1} of ${swiperData.length}`}
                        mainSrc={swiperData[photoIndex].img}
                        onCloseRequest={() => setIsOpen(false)}
                        nextSrc={swiperData[(photoIndex + 1) % swiperData.length]}
                        prevSrc={swiperData[(photoIndex + swiperData.length - 1) % swiperData.length]}
                        onMovePrevRequest={() =>
                          setPhotoIndex((photoIndex + swiperData.length - 1) % swiperData.length)
                        }
                        onMoveNextRequest={() =>
                          setPhotoIndex((photoIndex + 1) % swiperData.length)
                        }
                        reactModalProps={{ contentLabel: "Example Modal" }}
                      />
                    )}
                  </Col>
                   <Col lg={{ order: 1, span: 3 }} className="relative single-product-thumb flex justify-center md:mb-[50px] sm:mb-[40px]"> 
                    <Swiper
                      ref={swiperRef}
                      direction="horizontal"
                      onSwiper={setThumbsSwiper}
                      spaceBetween={15}
                      slidesPerView={3.2}
                      modules={[Navigation, Thumbs]}
                      navigation={{ el: ".swiper-thumb-next-prev" }}
                      className="mySwiper overflow-hidden absolute h-full pb-[40px] md:pb-0 md:relative"
                      breakpoints={{
                        992: {
                          direction: "vertical"
                        }
                      }}
                    >
                      {
                        swiperData.map((item, i) => {
                          return (
                            <SwiperSlide className="overflow-hidden" key={i}>
                              <img loading="lazy" src={item.img} alt="products" width="" height="" className="w-full" />
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper> 
                      <div className="swiper-thumb-next-prev text-center"> 
                     <div className="swiper-thumb-prev" onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <i className="fa fa-chevron-up"></i>
                      </div>
                      <div className="swiper-thumb-next" onClick={() => swiperRef.current.swiper.slideNext()}>
                        <i className="fa fa-chevron-down"></i>
                      </div> 
                     </div>  
                  </Col>
                </Row>
              </div>
              <div className="w-[40%] md:w-full product-summary pl-28 lg:pl-20 md:pl-0">
                <div className="breadcrumb text-sm p-0">
                  <ul>
                    <li><Link aria-label="homepage-link" to="/">Home</Link></li>
                    <li><Link aria-label="shop-link" to="/Rosa-motorsport-RosaMotosportInventory">Inventory</Link></li>
                    <li>ZX4R</li>
                  </ul>
                </div>
                <div className="flex items-center my-14 md:my-6">
                  <div className="flex-grow">
                    <div className="text-darkgray font-medium text-xlg font-serif mb-[5px]">{product.model}</div>
                    <span className="text-xmd">
                      Starting at $9,399 MSRP</span>
                  </div>
                </div>
                <div className="mt-16">
                  <div className="flex flex-wrap">
                    {/* will use later  */}
                    {/* <Buttons ariaLabel="add-to-cart" onClick={e => e.preventDefault()} className="btn-fill font-medium font-serif rounded-none uppercase" themeColor="#232323" color="#fff" size="md" title="add to cart" /> 
                    <div className="mt-[25px] w-full">
                      <Link aria-label="add-to-wishlist" onClick={e => e.preventDefault()} to="#" className="uppercase text-xs font-serif mr-[25px] font-medium"><i className="feather-heart align-middle mr-[5px]"></i>Add to wishlist</Link>
                    </div>*/}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="border-mediumgray pt-0 py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container fluid>
          <Row>
            <Col>
              <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
                <Row className="tab-style-07">
                  <Col lg={12} className="p-0">
                    <Nav className="justify-center uppercase font-serif font-medium text-center cursor-pointer border-b border-t border-solid border-mediumgray mb-36 md:flex-nowrap md:mb-[72px] sm:mb-[66px] sm:border-b-0 xs:mb-[35px]">
                      <Nav.Item>
                        <Nav.Link className="block text-darkgray border-b-[3px] border-solid border-transparent py-[30px] px-[40px] mb-0" eventKey={0} >Description</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="block text-darkgray border-b-[3px] border-solid border-transparent py-[30px] px-[40px] mb-0" eventKey={1} >Additional information</Nav.Link>
                      </Nav.Item>
                      
                    </Nav>
                  </Col>
                  <Col lg={12} className="p-0">
                    <Container>
                      <Col>
                        <Tab.Content>
                          <Tab.Pane eventKey={0} >
                            <Row className="items-center">
                              <Col xl={5} lg={6} className="md:mb-[50px]">
                              <table className="w-full">
                                  <tbody>
                                    <tr className="border-b border-[#e8e8e8] py-[10px] px-[15px]">
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Engine type</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.engine?.engineType}</td>
                                    </tr>
                                    <tr className="bg-lightgray border-b border-[#e8e8e8] py-[10px] px-[15px]">
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Displacement</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.engine?.displacement}</td>
                                    </tr>
                                    <tr className="border-b border-[#e8e8e8] ">
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Fuel delivery</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.engine?.fuelDelivery}</td>
                                    </tr>
                                    <tr className="bg-lightgray border-b border-[#e8e8e8] ">
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Transmission</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.engine?.transmission}</td>
                                    </tr>
                                    <tr>
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Electronic rider aids</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.engine?.electronicRiderAids}</td>
                                    </tr>
                                    <tr>
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Front suspension</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.chassis?.frontSuspension}</td>
                                    </tr>
                                    <tr>
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Rear suspension</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.chassis?.rearSuspension}</td>
                                    </tr>
                                    <tr>
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Front tire</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.chassis?.frontTire}</td>
                                    </tr>
                                    <tr>
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Rear tire</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.chassis?.rearTire}</td>
                                    </tr>
                                    <tr>
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Front brakes</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.chassis?.frontBrakes}</td>
                                    </tr>
                                    <tr>
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Rear brakes</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.chassis?.rearBrakes}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                {/* <Lists theme="list-style-04" data={ListData} animation={fadeIn} /> */}
                              </Col>
                              <Col lg={6} xl={{ offset: 1 }}>
                                <img loading="lazy" width="564" height="564" src={zx4rTrack} alt="products" />
                              </Col>
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey={1}>
                            <Row className="tems-center">
                              <Col>
                                <table className="w-full">
                                  <tbody>
                                    <tr className="border-b border-[#e8e8e8] py-[10px] px-[15px]">
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Fuel Capacity</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.dimensions?.fuelCapacity}</td>
                                    </tr>
                                    <tr className="bg-lightgray border-b border-[#e8e8e8] py-[10px] px-[15px]">
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Curb weight</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.dimensions?.curbWeight}</td>
                                    </tr>
                                    <tr className="border-b border-[#e8e8e8] ">
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Wheel base</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.dimensions?.wheelbase}</td>
                                    </tr>
                                    <tr className="bg-lightgray border-b border-[#e8e8e8] ">
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Special featured</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.details?.specialFeatures}</td>
                                    </tr>
                                    <tr>
                                      <th className="text-darkgray font-medium w-[150px] px-[15px]">Color choices</th>
                                      <td className="py-[10px] px-[15px]">{product?.specs?.details?.colorChoices}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Container>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start 
      <section className="border-t border-mediumgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="row justify-center">
            <Col lg={5} md={6} className="font-serif font-medium text-center mb-16 sm:mb-8">
              <span className="uppercase inline-block mb-[5px]">You may also like</span>
              <h5 className="text-darkgray -tracking-[.5px]">Related products</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="xs:px-0">
              <RosaShop filter={false} grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center" data={inventoryData.slice(0, 4)} />
            </Col>
          </Row>
        </Container>
      </section>
      Section End */}

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
      {/* Footer End */}
    </div>
  )
}

export default SingleProduct

