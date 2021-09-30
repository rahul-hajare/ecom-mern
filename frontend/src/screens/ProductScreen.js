import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  },[match])

  return<>
    <Link className='btn btn-light my-3' to='/'>Go Back</Link>
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid></Image>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
          <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Description:</b> {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col  md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                  Price: 
                </Col>
                <Col>
                  <strong>₹{product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Status:
                </Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-block' type='button' disabled={product.countInStock === 0}>ADD TO CART</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>;
};

export default ProductScreen;
