import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const OrderCard = ({ listing }) => {
    return (
        <Row>
            {listing.map((item) => (
                <Col md={4} key={item.id}>
                   
                        <Card.Img variant="top" src={item.picture} />
                        <Card.Body>
                            <Card.Title>{item.ordered_by}</Card.Title>
                            <Card.Text>
                                Price: {item.price} <br />
                                Quantity: {item.quantity} <br />
                                Location: {item.location}
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                </Col>
            ))}
        </Row>
    );
};
export default OrderCard;
