import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    // Prevent page from refreshing
    e.preventDefault();
    console.log("submit");
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {/* Form onSubmit takes a function */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3"></Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          // value is the state variable
          value={email}
          // onChange is the function that changes the state variable
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        <Form.Group controlId="password" className="my-3"></Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          // value is the state variable
          value={password}
          // onChange is the function that changes the state variable
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        <Button type="submit" variant="primary" className="mt-2">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer? {/* ?redirect= is a query string */}
          <Link to="/register">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
