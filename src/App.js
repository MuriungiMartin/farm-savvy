/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from "./footer";
import BackToTopButton from "./backtotop";
import { Form, Button, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import UserDashboard from "./marketplace/dashboard";
import LandingPage from "./landingpage";
import { FaHome } from "react-icons/fa";
import Createseller from "./profiles/createseller";
export default function App() {
  return (
    <div>
      <div>
        <Router>
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <Link to="/" class="navbar-brand mt-2 mt-lg-0">
                  <Link to="/" className="navbar-brand mt-2 mt-lg-0">
                    <FaHome className="me-2" />
                  </Link>
                </Link>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/weather" class="nav-link">
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
                  <NavDropdown title="Savvy Marketplace">
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
                <a class="text-reset me-3" href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" style={{ margin: "10px" }}>
                    Search
                  </Button>
                </Form>
                <img
                  //src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                  src="https://i.pravatar.cc/400?img=70"
                  class="rounded-circle shadow-4"
                  width="50px"
                  alt="Avatar"
                  style={{ margin: "10px" }}
                />
                <span class="badge rounded-pill badge-notification bg-danger">
                  3
                </span>
              </div>
            </div>
          </nav>
          <br />
          <Routes>
            <Route path="/weather" element={<Weather />} />
            <Route path="/marketplace" element={<UserDashboard />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/createseller" element={<Createseller />} />
          </Routes>
        </Router>
        <br />
        <br />
        <br />
        {/* <Footer /> */}
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
