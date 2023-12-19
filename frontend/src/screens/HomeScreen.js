import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    try {
      const fetchProducts = async () => {
        const {data} = await axios.get('/api/products')
        setProducts(data)
      }
      fetchProducts()
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }, [])
  return (
    <>
      <h1 className="text-center">Latest products</h1>
      <Row>
        {products.map(product=> {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
            )
        })}
      </Row>
    </>
    );
};

export default HomeScreen;
