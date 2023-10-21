/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form,  Modal,  ModalBody,  NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Weather from "../components/Weather";
import UserDashboard from "../marketplace/dashboard";
import LandingPage from "../components/landingpage";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import Createseller from "../profiles/createseller";
import UserLogin from "../profiles/userlogin";
import { useEffect, useState } from "react";
import Profile from "../profiles/profile"
import OrderCard from "../marketplace/vieworder";

function NavBar() {
const username = localStorage.getItem("username");

function getUserimage()
{
  const url = `https://localhost:7228/api/User/get userImage?username=${username}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200) {
      setImage(this.responseText);
    } else {
     setImage("https://i.pravatar.cc/400?img=70");

    }
  };
}


const [showModal, setShowModal] = useState(false);
const handleClosemodal = () => setShowModal(false);
const handleShowModal = () => setShowModal(true);
const [showDropdown, setShowDropdown] = useState(false);
const [showDropdownMarket, setShowDropdownMarket] = useState(false);
const handleShowProfile = () => {
  window.location.href = "/profile";
}
const [image, setImage] = useState("");

const signOut = () => {
  localStorage.clear();
  window.location.href = "/";
}

useEffect(() => {
  setImage();
  getUserimage();
}
,[]);


  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{height: "50px", color: "white"}}>
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/weather" class="link2">
                    Weather
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Plants
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Livestock
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="/marketplace" class="nav-link">
                    Seller
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/buyer" class="nav-link">
                    Buyer
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Savvy Management" class="nav-link">
                    Savvy Management
                  </Link>
                </li>
              </ul>
            </div>
              {/* <span class="navbar-toggler-icon"></span> */}
            </button>

            <Link to="/" class="navbar-brand mt-2 mt-lg-0">
              <FaHome className="me-2" />
            </Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/weather" class="nav-link" style={{}}>
                    Weather
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> 
                    Plants
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Livestock
                  </a>
                </li>
                <NavDropdown title="Savvy Marketplace" show={showDropdownMarket} onMouseEnter={() => setShowDropdownMarket(true)} onMouseLeave={() => setShowDropdownMarket(false)}>
                    <Link to="/marketplace" className="dropdown-item">
                      Seller
                    </Link>
                    <NavDropdown.Item href="/buyer">Buyer</NavDropdown.Item>
                  </NavDropdown>
                <li class="nav-item">
                  <Link to="/Savvy Management" class="nav-link">
                    Savvy Management
                  </Link>
                </li>
              </ul>
            </div>

            
            <div class="d-flex align-items-center">
                         <NavDropdown title="Sign In" class="nav-link" show={showDropdown} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <NavDropdown.Item onClick={handleShowModal}>Sign In</NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowModal}>Sign Up</NavDropdown.Item>
              </NavDropdown>
              <Modal show={showModal} onHide={handleClosemodal} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>                
                <ModalBody>
                

                    <UserLogin />
                    </ModalBody>
                    <Modal.Footer>
                      <p>Don't have an account? <Link to="/Createseller" onClick={handleClosemodal}>Sign Up</Link></p>
                    </Modal.Footer>
                </Modal>
              <a class="text-reset me-3" href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
              <Form className="d-flex" style={{height: "40px"}}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {/* <Button variant="outline-success" style={{ marginLeft: "10px",marginRight: "10px", height: "40px" }} >
                  Search
                </Button> */}
              </Form>
              <span>
              <img
                src={`data:image/png;base64, ${image}`}
                style={{ margin: "10px", borderRadius: "10px" }}
                width="50px"
                height="50px"
                alt="Avatar"
                onClick={handleShowProfile}
              />
              {localStorage.getItem("username")}
              </span>
              <span class="badge rounded-pill badge-notification bg-danger" style={{margin: "10px"}}>
                3
              </span>
                 <button style={{marginLeft: "30px"}}>
                  <FaSignOutAlt onClick={signOut}/>
                  </button>
            </div>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/Createseller" element={<Createseller />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/marketplace" element={<UserDashboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/buyer" element={<UserDashboard />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/OrderCard" element={<OrderCard />} />
        </Routes>
      </Router>
      <br />
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
}
export default NavBar;
