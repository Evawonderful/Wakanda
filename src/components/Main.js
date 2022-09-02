import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rightImage from '../assets/Group 971.png';
import global from "../assets/global-connection.png"
import sales from "../assets/sales.png"
import email from "../assets/email-marketing.png"

import '../styles/Main.css';

const Main = () =>{
    return(
        <>
            <Container className="mt-5 ">
                <Row > 
                    <Col className="pt-5 m-5 caption">
                    <h3>Organize Your Sales.</h3>
                    <h3>Build Great Relationships.</h3>
                    <h3>Save Time.</h3>
                    <Button className="mt-4" variant="success" >GET STARTED NOW &#62;</Button>
                    </Col>

                    <Col className="mt-0">
                        <img className="img-fluid float-end right-img" src={rightImage} alt="bg-layer"/>
                    </Col>
                </Row>
                
            </Container>
            <span className="left"></span>
            <Container className="mt-5 text-center">
                <h2 className="pt-5">How can Wakanda CRM help you grow your business?</h2>
                <Row className="pt-5">
                    <Col>
                        <img src={global} className="img-fluid grow" alt="gloabl-connection"/>
                        <p className="grow-text">Build deeper connections with <br/> your customers with ease.</p>
                                    
                    </Col>
                    <Col>
                        <img src={sales} className="img-fluid grow" alt="sales"/>
                        <p className="grow-text">Manage your sales process</p>
                    </Col>
                    <Col>
                        <img src={email} className="img-fluid grow" alt="email-marketing"/>
                        <p className="grow-text">Automate your everyday <br/> task and save time.</p>
                    </Col>

                </Row>
            </Container>
            
        </>
    )
}

export default Main;