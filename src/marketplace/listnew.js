import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/marketplace.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * 
 {
  "id": 0,
  "user_username": "Amuj Isokum",
  "name": "Fresh Fish",
  "price": 200,
  "quantity": 2000,
  "image": "string"
}

 */

function AddProduceListing() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
  
  };
    const username = localStorage.getItem('username');
    const url = "https://localhost:7228/api/Listings/add produce";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const reader = new FileReader();

        reader.onload = () => {
          const base64String = reader.result.split(',')[1];
    
        const formData={
            "id": 0,
            "user_username": username,
            "name": name,
            "price": price,
            "quantity": quantity,
            "image": base64String
        }
    //     try {
    //         const response =  fetch(url, {
    //             method: 'POST',
    //             body: formData
    //         });
    //         if (!response.ok) {
    //             toast.error(this.responseText);
    //         }
    //         toast.success(this.responseText);
    //         setTimeout(() => {
    //           //  window.location.href = "/marketplace";
    //           }, 3000);
    //         // TODO: Add logic to handle successful submission
    //     } catch (error) {
    //         console.error(error);
    //            window.location.reload();
    //     }
    // }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhr.send(JSON.stringify(formData));
    xhr.onload = function () {
        let res = JSON.parse(this.responseText);
        if (this.status ===200) {
            toast.success(res.message);
            setTimeout(() => {
                window.location.href = "/marketplace";
                }
            , 3000);
        }
        else {
            toast.error(res.message);
        }
    };
};
    event.preventDefault();


    if (image) {
        reader.readAsDataURL(image);
      }
      else{
        toast.error("Please upload an image");
      }
    
    };

    return (
        <div>
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
            <Form.Group controlId="price" style={{marginBottom: "10px"}}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
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
              <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            </div>
    );
}

export default AddProduceListing;
