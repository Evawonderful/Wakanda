import React, {useState} from "react";
import { Link } from "react-scroll";
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/wakanda.svg";
import '../styles/Header.css';


const Header= () => {
    const [buttonText, setButtonText] = useState('GET STARTED');

    function handleHover() {
        setButtonText('GET STARTED >');
      }

        return(
          

                <Navbar collapseOnSelect bg="light" variant="light" expand="lg" className="shadow">
                    <Container>
                        
                        <Navbar.Brand href="#" className="">
                            <img 
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                                alt="wakanda-logo" src={logo}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-lg-end">
                            <Nav className="ml-auto">
                            
                                <Nav.Item className="nav-link ">
                                    <Nav.Link eventKey="1" as={Link} to="features">Features</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link eventKey="2" as={Link} to="pricing">Pricing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link ">
                                    <Nav.Link eventKey="3" as={Link} to="faqs">FAQs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link eventKey="3" as={Link} to="contacts">Contacts</Nav.Link>
                                </Nav.Item>
                               
                                    <Stack className="ms-auto" 
                                    direction="horizontal" 
                                    gap={3}
                                    
                                    >
                                    <Button  variant="outline-success" className="login button">LOG IN </Button>

                                    <Button className="button" variant="success"  onMouseOver= {handleHover}>{buttonText}</Button>
                                </Stack>
                                
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

         
            
        )
    }
    export default Header;