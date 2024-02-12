import React, {useState, useEffect} from 'react';
import './rosa.css';


// Libraries
import { Col, Container, Row, Navbar } from 'react-bootstrap'


// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import RosaShop from './Components/RosaShop';

import SideButtons from "../../Components/SideButtons";

// Data
import { inventoryData} from './Components/inventoryData';
// import axios from 'axios'

  const RosaInventoryPage = (props) => {
    /* const [smallSuperSport, setSmallSuperSport] = useState()
    const [middleSuperSport, setMiddleSuperSport] = useState()
    const [largeSuperSport, setLargeSuperSport] = useState()
    const [hyperSport, setHyperSport] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchMotorcycles = async () => {
          setIsLoading(true);
          try {
            const responses = await Promise.all([
              axios.get('http://localhost:5000/smallsupersports'),
              axios.get('http://localhost:5000/middlesupersports'),
              axios.get('http://localhost:5000/largesupersports'),
              axios.get('http://localhost:5000/hypersports'),
            ]);
            
            // Correctly extract data from each response and update state
            setSmallSuperSport(responses[0].data);
            setMiddleSuperSport(responses[1].data);
            setLargeSuperSport(responses[2].data);
            setHyperSport(responses[3].data);
          } catch (err) {
            setError(err.message);
          } finally {
            setIsLoading(false);
          }
        };
      
        fetchMotorcycles();
      }, []); // Assuming setIsLoading, setError, and the state setters are defined elsewhere in your component
      
  
 // Function to fetch details for a specific motorcycle, like the Yamaha R3
 const fetchMotorcycleDetails = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/smallsupersports/${id}`);
      // You can now do something with the specific motorcycle details
      // For example, open a modal with the details or navigate to a detail page
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }; */
// Define the order of categories
const categoryOrder = ["Beginner", "Intermediate", "Advanced", "Hyper"];

// Sort the motorcycles based on the defined category order
const sortedInventoryData = inventoryData.sort((a, b) => {
  return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
});


    return (
        <div style={props.style}>
            {/* Header Start */}
            <Header topSpace={{ desktop: true }} type="reverse-scroll">
                <HeaderNav theme="light" expand="lg" className="px-[30px] py-[0px] md:px-0" containerClass="sm:px-0">
                    <div className="col-auto hidden order-last md:block">
                        <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </Navbar.Toggle>
                    </div>
                    <Navbar.Collapse className="col-auto col-lg-8 justify-center md:!px-0">
                        <Menu {...props} />
                    </Navbar.Collapse>
                    
                </HeaderNav>
            </Header>
            {/* Header End */}
            <SideButtons />
            

            {/* Section Start */}
            <section className="bg-[#fff] pt-0 py-[130px] px-[5%] lg:py-[90px] md:py-[75px] sm:py-[50px] xs:px-0">
                <Container fluid>
                    <Row>
                        <Col className="px-0">
                            <div className="flex flex-wrap justify-center -mx-2">
                                 {/* Pass the entire sliced dataset to RosaShop */}
                                <RosaShop filter={true} className="w-full h-auto" grid="flex flex-row flex-wrap" data={inventoryData.slice(0,16)} />
                                </div>
                                    </Col>
                                        </Row>
                                </Container>
                    </section>

            {/* Section End */}

            {/* Footer start */}
            <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
            {/* Footer End */}
        </div>
    )
}

export default RosaInventoryPage