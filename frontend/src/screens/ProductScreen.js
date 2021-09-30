import React from "react";
import products from "../products";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import Button from "@restart/ui/esm/Button";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

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
              <Row>
              <Button className='btn-block' type='button' disabled={product.countInStock === 0}>ADD TO CART</Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>;
};

export default ProductScreen;
