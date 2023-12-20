import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const { id: productId } = useParams();
  useEffect(() => {
    try {
      const getProduct = async () => {
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      };
      getProduct();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }, [productId]);
  return (
    <>
      <Link to="/" className="btn btn-light my-2 mx-3">
        Go Back
      </Link>
      <Row className="mx-3">
        <Col md={4} className="text-center">
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                  <strong>Price: </strong> Rs. {product.price}
                </ListGroup.Item> */}
              <ListGroup.Item className="d-inline-flex">
                <strong>Rating: </strong>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description: </strong> {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs. {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button
                    className={`btn-block ${
                      product.countInStock === 0 ? "btn-secondary disabled" : ""
                    }`}
                    type="button"
                  >
                    Add to Cart
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

export default ProductScreen;