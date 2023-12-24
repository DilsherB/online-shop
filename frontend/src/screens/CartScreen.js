import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <h1
          className="text-decoration-underline border border-2 px-5 py-2 rounded-pill"
          style={{ width: "max-content" }}
        >
          Shopping Cart
        </h1>
      </div>
      <Row className="d-flex justify-content-between">
        <Col md={7}>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty. <Link to="/">Select Products</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="text-center d-flex justify-content-between">
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={4}>
                      <Link to={`/product/${item._id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      <strong>${item.price}</strong>
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) => {
                          addToCartHandler(item, Number(e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <h2 className="text-center">
                Subtotal of {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                items
              </h2>
              <ListGroup.Item>
                <div className="d-flex justify-content-around">
                  <span>Subtotal(Rs): </span>{" "}
                  <span>
                    {cartItems
                      .reduce((acc, item) => acc + item.price * item.qty, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button
                    className={`${
                      cartItems.length === 0 && "disabled btn-secondary"
                    }`}
                    onClick={checkoutHandler}
                  >
                    Proceed to Checkout
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
