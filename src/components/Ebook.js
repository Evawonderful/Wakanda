import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ebook from "../assets/ebook.png";
import '../styles/Ebook.css';

const Ebook = () => {
    return(
        <>
            <Container className="mt-5 ">
                <Row className="mt-2 align-items-center justify-content-between">
                    <Col><img className="img-fluid" src={ebook}/></Col>
                    <Col className="ebook-col ">
                    <h3 className="ebook-title ">FREE! EBOOK</h3>
                    <p className="ebook-text">7 Reasons You Need To Turn Your Business To A Mobile Business</p>
                    <Button className="mt-2 now-btn " variant="success" >GET IT NOW </Button>
                    </Col>
                    
                </Row>
                

            </Container>
        </>
    )
}
export default Ebook;