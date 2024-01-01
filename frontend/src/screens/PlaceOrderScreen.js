import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";
import { ORDER_CREATE_RESET } from "../constants.js";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  return (
    <>
    <CheckoutSteps step1 step2 step3 step4 />
    <Row>
      <Col md={8}>Column 1</Col>
      <Col md={4}>Column 2</Col>
    </Row>
    </>
  )
};

export default PlaceOrderScreen;
