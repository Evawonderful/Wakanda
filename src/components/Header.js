import React, {useState} from "react";
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
          

                <Navbar bg="light" variant="light" className="shadow py-0">
                    <Container>
                        
                        <Navbar.Brand href="#" className="ms-auto">
                            <img 
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                                alt="wakanda-logo" src={logo}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" className="">
                            <Nav className="flex-grow-1">
                            
                                <Nav.Item className="nav-link ms-auto">
                                    <Nav.Link href="#">Features</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link href="#">Pricing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link ">
                                    <Nav.Link href="#">FAQs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link href="#">Contacts</Nav.Link>
                                </Nav.Item>
                               
                                    <Stack className="ms-auto"
                                    direction="horizontal" 
                                    gap={3}
                                    
                                    >
                                    <Button variant="outline-success" className="login button">LOG IN </Button>

                                    <Button className="button" variant="success" value="GET STARTED" onMouseOver= {handleHover}>{buttonText}</Button>
                                </Stack>
                                
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

         
            
        )
    }
    export default Header;