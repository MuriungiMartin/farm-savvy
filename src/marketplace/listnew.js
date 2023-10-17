import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './marketplace.css';

function AddProduceListing() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);
        try {
            const response = await fetch('/api/produce', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error('Failed to submit produce listing');
            }
            window.location.reload();
            // TODO: Add logic to handle successful submission
        } catch (error) {
            console.error(error);
               window.location.reload();
        }
    
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group controlId="name" style={{marginBottom: "10px"}}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="description" style={{marginBottom: "10px"}}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="price" style={{marginBottom: "10px"}}>
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="image" style={{marginBottom: "10px"}}>
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="file"
                    onChange={handleImageChange}
                />
                {image && (
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded produce"
                        style={{ marginTop: "10px", maxWidth: "100%" }}
                    />
                )}
            </Form.Group>

            <Button variant="success" type="submit" style={{marginTop:"20px"}}>
                Submit
            </Button>
        </Form>
    );
}

export default AddProduceListing;
