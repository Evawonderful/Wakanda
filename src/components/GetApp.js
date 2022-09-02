import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/GetApp.css';
import Stack from "react-bootstrap/Stack";
import playstore from "../assets/Playstore.png";
import applestore from "../assets/APPSTORE.png";



const GetApp = () => {
    return(
        <div className="me-auto ">
            <Container className="d-flex justify-content-center rounded get-app">
            <Row className="align-content-center">
                <Col className="col-8 align-self-center"> 
                    <h3>Get the Wakanda App</h3>
                    <p>Enjoy alot more awesome features on the Wakanda Mobile App</p>
                </Col>
                <Col className="col-4">
                    <Stack className="ms-auto"
                        direction="vertical"
                        gap={2}>
                            <a> <img className="img-fluid" src={applestore}/> </a>
                            <a> <img className="img-fluid" src={playstore}/> </a>
                            

                    </Stack>
                </Col>
            </Row>

        </Container>
        </div>
        
    )
}

export default GetApp;