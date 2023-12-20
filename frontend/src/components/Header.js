import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

function header() {
  return (
    <header>
      <Navbar bg="secondary" variant="dark" expand="md" collapseOnSelect>
        <Container className="fw-bold">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="logo"
                width="30"
                height="30"
                style={{ borderRadius: "50%", marginRight: "0.2rem" }}
              />
              Chaman Mart
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default header;