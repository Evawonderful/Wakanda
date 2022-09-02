import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Features.css';
import group975 from '../assets/Group 975.png';
import group951 from '../assets/Group 951.png';
import group1187 from '../assets/Group 1187.png';
import {business, customers, staff} from "../data";

const Features = () =>{
    return(
        <div className="features">
       
            <Container >

                <span  className="feature-header ">FEATURES</span>
                <h3 className="feature-caption">Wakanda CRM is Built to Bridge the Gap between <br/> your Business and Customers, Management and Staff.</h3>
                
                <Row className="mt-5">
                    <Col>
                        <span className="biz mb-2">BUSINESS/CUSTOMER MANAGEMENT</span>
                        {business.map((business) => (
                            <Row className="py-2" >
                            <Col className="p-0"><img src={business.icon} className="biz-icons"/></Col>
                            <Col className=" p-0 text-start">
                                <h5 className=" biz-caption">{business.caption}</h5>
                                <h6 className="biz-text">{business.text}</h6>
                            </Col>
                
                        </Row>

                        ))}
                        <Button className="mt-4" variant="success" >GET STARTED NOW &#62;</Button>
                    </Col>
                    <Col>
                        <img src={group975} className="img-fluid"/>
                    </Col>
                </Row>


                <Row className="mt-5">
                    <Col>
                        <img src={group951} className="img-fluid"/>
                    </Col>
                    <Col>
                        <span className="biz mb-2">CUSTOMER EMPOWERMENT</span>
                        {customers.map((customer) => (
                            <Row className="py-2 ">
                            <Col className="p-0"><img src={customer.icon} className="biz-icons"/></Col>
                            <Col className=" p-0 text-start">
                                <h5 className=" biz-caption">{customer.caption}</h5>
                                <h6 className="biz-text">{customer.text}</h6>
                            </Col>
                
                        </Row>

                        ))}
                        <Button className="mt-4" variant="success" >GET STARTED NOW &#62;</Button>
                    </Col>
                
                </Row>

                <Row className="mt-5">
                    <Col>
                        <span className="biz mb-2">STAFF MANAGEMENT</span>
                        {business.map((staff) => (
                            <Row className="py-2 mt-2">
                            <Col className="p-0"><img src={staff.icon} className="biz-icons"/></Col>
                            <Col className=" p-0 text-start">
                                <h5 className=" biz-caption">{staff.caption}</h5>
                                <h6 className="biz-text">{staff.text}</h6>
                            </Col>
                
                        </Row>

                        ))}
                        <Button className="mt-4" variant="success" >GET STARTED NOW &#62;</Button>
                    </Col>
                    <Col>
                        <img src={group1187} className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features;