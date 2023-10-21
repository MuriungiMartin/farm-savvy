/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Createseller() {
  const Style = {
    backgroundImage: "url(images/teaplantation.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [firstName, setFirstName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  function registeruser(e) {
    let res;
    e.preventDefault();
    console.log("registering user");
    const regurl = "http://localhost:82/api/User/register";

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.split(",")[1];

      const data = {
        username: firstName,
        email: email,
        location: address,
        phoneno: phoneNumber,
        password: password,
        confirmPassword: confirmPassword,
        bio: bio,
        category: category,
        image: base64String,
      };

      const xhr = new XMLHttpRequest();
      xhr.open("POST", regurl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.send(JSON.stringify(data));
      xhr.onload = function () {
        if (this.status === 200) {
          res = JSON.parse(this.responseText);
          toast.success(res.message);
          setTimeout(() => {
            window.location.href = "/marketplace";
          }, 3000);
        } else {
          // res = JSON.parse(this.responseText);
          toast.error(this.responseText);
          setTimeout(() => {
            window.location.href = "/marketplace";
          }, 3000);
        }
      };
    };

    e.preventDefault();
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  return (
    <div style={Style}>
      <div
        className="container"
        style={{ marginTop: "100px", padding: "20px" }}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1>Seller Registration</h1>
                <form>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>Bio</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>Category</label>
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <Form.Group
                      controlId="image"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label>Image</Form.Label>
                      <Form.Control type="file" onChange={handleImageChange} />
                      {image && (
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Uploaded Image"
                          style={{ marginTop: "10px", maxWidth: "100%" }}
                        />
                      )}
                    </Form.Group>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={registeruser}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Createseller;
