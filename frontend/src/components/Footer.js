import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-white fs-3 fw-bold" style={{letterSpacing: "0.5rem"}}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Chaman Mart &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}

export default Footer;
