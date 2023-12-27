import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
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
                  <Badge pill bg="success" style={{ marginLeft: "0.3rem" }}>
                    {cartItems.length > 0 &&
                      cartItems.reduce((acc, cur) => acc + cur.qty, 0)}
                  </Badge>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item className="d-flex align-items-end">
                      <FaUser />
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item href="/logout">
                    <RiLogoutCircleLine />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
