
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UserLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle login logic here
        const url = "http://localhost:82/api/User/login";
        const data = {
            username: username,
            password: password,
        };
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.send(JSON.stringify(data));
        xhr.onload = function () {
            console.log(this.responseText);
            if (this.status === 200) {
                let res = JSON.parse(this.responseText);
                toast.success("Welcome "+ res.username);
                localStorage.setItem("token", res.token);
                localStorage.setItem("username", username);
                setTimeout(() => {
                 window.location.href = "/marketplace";
                }, 3000);
            } else {
                toast.error(this.responseText);
            }
        };
    };

    return (
        <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail" style={{ marginBottom: "20px" }}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={{ marginBottom: "20px" }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {/* {errorMessage && <Form.Text className="text-danger">{errorMessage}</Form.Text>} */}
                    </Form.Group>

                    <Button variant="outline-success" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />                
             </div>
    );
};

export default UserLogin;
