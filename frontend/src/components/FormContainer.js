import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {/* Children is a special prop that allows you to pass components as data to other components */}
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
