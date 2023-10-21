import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

function Profile() {
    return (
        <div className='profile'>
        <Container className="profile-container">
            <Card className="profile-card">
                <Row>
                    <Col md={4}>
                        <Image src="path/to/profile/image.jpg" alt="Profile Picture" className="profile-image" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Text className="profile-bio">
                                Insert bio here
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <div className="contact-info">
                <p className="location">Insert location here</p>
            </div>
        </Container>
        </div>
    );
}

export default Profile;
