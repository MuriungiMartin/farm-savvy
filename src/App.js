/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import UserDashboard from "./marketplace/dashboard";
export default function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

function NavBar() {
  return (
    <div>
      {
        //Align contents to the center and increase space between elements
      }
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
              <a class="navbar-brand mt-2 mt-lg-0" href="./index.html">
                <img
                  src="./logo192.png"
                  height="25"
                  alt="Farm Savvy"
                  loading="lazy"
                />
              </a>
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
                <li class="nav-item">
                  <Link to="/marketplace" class="nav-link">
                    Farm Marketplace
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Farm Management
                  </a>
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
                <Button variant="outline-success">Search</Button>
              </Form>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                class="rounded-circle shadow-4"
                width="50px"
                alt="Avatar"
              />
              <span class="badge rounded-pill badge-notification bg-danger">
               3
              </span>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <br />

        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/marketplace" element={<UserDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
