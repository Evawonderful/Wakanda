import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from "react-bootstrap/Stack"
import logo from "../assets/logo.png";
import "../styles/Footer.css";
import instagram from "../assets/Instgram.png";
import facebook from "../assets/Facebook.png";
import mail from "../assets/mail-outline.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import twitter from "../assets/Twitter.png";


const Footer = () => {
    return(
        <div className="footer-body">
            <div className="container-fluid">
                <Row style={{backgroundColor: "#00A85A", paddingTop:"100px", paddingBottom:"20px"}}>
                    <Col>
                        <img src={logo} width="50%" className="img-fluid"/>
                    </Col>
                    <Col>
                        <div className=" flex-column ">
                            <Nav.Item className="nav-link link-success ">LINKS</Nav.Item>
                            <Nav.Item className="nav-link link-secondary py-3 ">About Us</Nav.Item>
                            <Nav.Item className="nav-link link-secondary py-3">Our Offers</Nav.Item>
                            <Nav.Item className="nav-link link-secondary py-3">Pricing</Nav.Item>
                            <Nav.Item className="nav-link link-secondary py-3">FAQs</Nav.Item>
                        </div>
                    </Col>
                    <Col>
                        <div className=" flex-column ">
                            <Nav.Item className="nav-link link-success ">CONTACTS</Nav.Item>
                            <Nav.Item className="nav-link link-secondary py-3 "><img src={location}/><span className="px-2">42 Montgomery Rd, Yaba, Lagos.</span></Nav.Item>
                            <Nav.Item className="nav-link link-secondary py-3 "><img src={mail}/><span className="px-2">Christian@african-founders.com</span><br/><span as="nav-item" className="px-5">abiodun@african-funders.com</span></Nav.Item>
                            <Nav.Item className="nav-link link-secondary py-3 "><img src={phone}/> <span className="px-2">08064289402</span></Nav.Item>
                            <Nav.Item className=" py-3 ">
                                <Stack direction="horizontal" gap={2}>
                                    <img src={facebook}/>
                                    <img src={instagram}/>
                                    <img src={twitter}/>

                                </Stack>
                            </Nav.Item>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center" style={{backgroundColor: "#A9D046"}}> <p>Made with &#10084; by African Founders</p></Row>
            </div>
        </div>
    )
}

export default Footer;