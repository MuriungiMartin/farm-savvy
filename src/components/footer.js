import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark py-3" style={{textAlign: "center", marginTop: "100px", color: "white"}}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>About Us</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            malesuada, sapien vel bibendum bibendum, velit sapien bibendum
                            ipsum, non bibendum elit massa ac elit.
                        </p>
                    </Col>
                    <Col md={3}>
                        <h5>Connect</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">
                                    <FaFacebook /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaTwitter /> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                            <Button variant="success">Get in Touch</Button>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr />
                        <p className="text-center">
                            &copy; {new Date().getFullYear()} Farm Savvy. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
