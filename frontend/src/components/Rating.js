import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value }) => {
  const stars = Array(5)
    .fill(null)
    .map((star, i) =>
      value >= i + 1 ? (
        <FaStar key={i} className="text-warning" />
      ) : value >= i + 0.5 ? (
        <FaStarHalfAlt key={i} className="text-warning" />
      ) : (
        <FaRegStar key={i} className="text-muted" />
      )
    );

  return (
    <Container>
      <Row>
        <Col>
          <span className="d-inline-block">{stars}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Rating;
