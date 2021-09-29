import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    debugger
    return (
        <Card className="my-3">
        <a href={`./product/${product._id}`}>
            <Card.Img src={product.image}></Card.Img>
        </a>
        <Card.Body>
        <a href={`./product/${product._id}`}>
            <Card.Title as='div'>
                <strong>
                    {product.name}
                </strong>
            </Card.Title>
        </a>
            <Card.Text as='div'>
                {product.rating}/5 Rating<br/>{product.numReviews} Reviews
            </Card.Text>
            <Card.Text as='h4'>
                Price: ₹{product.price}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default Product
