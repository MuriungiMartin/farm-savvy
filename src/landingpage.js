import React from "react";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaRegMap,
  FaResolving,
  FaPagelines,
  FaGlobeAfrica,
  FaAdn,
  FaWarehouse,
  FaDatabase,
} from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FcPlanner } from "react-icons/fc";
import {
  PiNewspaperClippingThin,
  PiWaveTriangle,
  PiWaveformThin,
} from "react-icons/pi";

const images = [
  {
    url: "https://media.istockphoto.com/id/1130476096/photo/weather-forecast-symbol-data-presentation-with-graph-and-chart-on-freshness-clean-nature.jpg?s=2048x2048&w=is&k=20&c=fQe2onff5aYm-YVrnzJsTpw5YKe7Scy_kVPG8GXmzHY=",
    caption: "Welcome to Our Farming Site",
    description: "Explore the world of agriculture and farming.",
  },
  {
    url: "https://media.istockphoto.com/id/1208165737/photo/african-women-plucking-tea-leaves-on-plantation-east-africa.jpg?s=2048x2048&w=is&k=20&c=pCI4NqmHCa92JaQ0yqsHchCILvIQb0o6oK2Yj4Fsfpc=",
    caption: "Discover New Plant Varieties",
    description: "Learn about the latest crops and farming techniques.",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/11/25/16/20/african-4652428_1280.jpg",
    caption: "Join Our Community",
    description: "Connect with other farmers and share your experiences.",
  },
];

const testimonials = [
  {
    name: "Juma Mukotsi",
    title: "Farmer",
    image: "./images/farmman0.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum ipsum, non bibendum elit massa ac elit.",
  },
  {
    name: "Amuj Isokum",
    title: "Buyer",
    image: "./images/farmman1.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum ipsum, non bibendum elit massa ac elit.",
  },
  {
    name: "Kazija Mwana",
    title: "Farmer",
    image: "./images/farmwoman0.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum ipsum, non bibendum elit massa ac elit.",
  },
  {
    name: "Bi. Farashuu",
    title: "Buyer",
    image: "./images/farmwoman1.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum ipsum, non bibendum elit massa ac elit.",
  },
  {
    name: "Spekta Seif",
    title: "Farmer",
    image: "./images/farmman2.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum ipsum, non bibendum elit massa ac elit.",
  },
  {
    name: "Mwana wa Giningi",
    title: "Buyer",
    image: "./images/farmwoman2.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum ipsum, non bibendum elit massa ac elit.",
  },
];

const features = [
  {
    icon: AiOutlineGlobal,
    title: "Forecasting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: FcPlanner,
    title: "Planning",
    description: "Praesent eget urna non erat malesuada malesuada.",
  },
  {
    icon: FaRegMap,
    title: "Advisory",
    description: "Vestibulum euismod justo in massa dictum, eget cursus.",
  },
  //resources
  {
    icon: FaResolving,
    title: "Resources",
    description: "Vestibulum euismod justo in massa dictum, eget cursus.",
  },
  //news
  {
    icon: PiNewspaperClippingThin,
    title: "News",
    description: "Vestibulum euismod justo in massa dictum, eget cursus.",
  },
  //Trade
  {
    icon: FaPagelines,
    title: "Trade",
    description: "Vestibulum euismod justo in massa dictum, eget cursus.",
  },
];

const ourPartners = [
  {
    icon: FaGlobeAfrica,
    title: "Ministry of Agriculture",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: PiWaveformThin,
    title: "Kenya Meteorological Agency",
    description: "Praesent eget urna non erat malesuada malesuada.",
  },
  {
    icon: FaAdn,
    title: "Ministry of Industrialization, Trade & Investment",
    description: "Vestibulum euismod justo in massa dictum, eget cursus.",
  },
  {
    icon: FaWarehouse,
    title: "Ministry of Livestock & Fisheries",
    description: "Vestibulum euismod justo in massa dictum, eget cursus.",
  },
  {
    icon: FaDatabase,
    title: "Ministry of Natural Resources & Tourism",
    description: "Vestibulum euismod justo in massa dictum, eget cursus.",
  },
  {
    icon: PiWaveTriangle,
    title: "Ministry of Water",
    description: "Vestibulum euismod justo in massa dictum, eget cursus.",
  },
];

const LandingPage = () => {
  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.url}
              alt={image.caption}
              style={{ height: "600px", transition: "opacity 1s ease-in-out" }}
            />
            <Carousel.Caption
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "40px" }}
            >
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="my-5" style={{ textAlign: "center" }}>
        <Row>
          <Col xs={12} md={4}>
            <h2>Our Services</h2>
            <p>
              Discover a wide range of services for farmers and agricultural
              enthusiasts.
              <br />
              We provide a platform for farmers to connect with buyers and learn
              about the latest farming techniques.
              <br />
              We also provide a platform for buyers to connect with farmers and
              learn about the latest crops and farming techniques. We also
              provide weather forecasts for your location with the latest
              weather data to guide you in your farming decisions.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h2>Latest News</h2>
            <p>
              Stay updated with the latest news and trends in the farming
              industry.
              <br />
              Get the latest news on the farming industry and learn about the
              latest crops and farming techniques.
              <br />
              Access the latest weather data for your location to guide you in
              your farming decisions.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h2>Get Started</h2>
            <p>
              Want to interact with us? Join as a farmer/seller or buyer to take
              your craft to the next level!
            </p>
            <div className="text-center">
              <Button variant="secondary">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="my-5" style={{ textAlign: "center" }}>
        <strong>
          {" "}
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              color: "#333",
            }}
          >
            Testimonials
          </h2>
        </strong>
        <Carousel interval={2000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  height: "600px",
                  borderRadius: "1%",
                  //  width: "100%",
                  transition: "opacity 1s ease-in-out",
                }}
              />
              <Carousel.Caption
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "40px",
                }}
              >
                <h3 style={{ color: "#fff", fontStyle: "oblique" }}>
                  {testimonial.name}
                </h3>
                <p style={{ color: "#fff" }}>{testimonial.title}</p>
                <p style={{ color: "#fff" }}>{testimonial.quote}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container className="my-5" style={{ textAlign: "center" }}>
        <h2
          className="text-center"
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#333",
          }}
        >
          Features & Benefits
        </h2>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} xs={12} md={4} className="text-center mb-4">
              <feature.icon
                style={{
                  fontSize: "4rem",
                  color: "green",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "#333",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{ fontSize: "1.2rem", lineHeight: "1.5", color: "#666" }}
              >
                {feature.description}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="my-5" style={{ textAlign: "center" }}>
        <h2
          className="text-center"
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#333",
          }}
        >
          Our Partners
        </h2>
        <Row>
          {ourPartners.map((ourPartner, index) => (
            <Col key={index} xs={12} md={4} className="text-center mb-4">
              <ourPartner.icon
                style={{
                  fontSize: "4rem",
                  color: "green",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "#333",
                }}
              >
                {ourPartner.title}
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.5",
                  color: "#666",
                }}
              >
                {ourPartner.description}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
