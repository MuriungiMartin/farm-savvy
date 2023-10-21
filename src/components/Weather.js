/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
//import { Line } from "chart.js";
import axios from "axios";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import "chart.js/auto";

const allWeatherData = [
  //enter the following dataset: labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],Temparaturedata: [5, 7, 3, 6, 4], Rainfaldata: [25, 27, 28, 26, 24],
  {
    day: "Day 1",
    temperature: 25,
    rainfall: 5,
  },
  {
    day: "Day 2",
    temperature: 27,
    rainfall: 7,
  },
  {
    day: "Day 3",
    temperature: 28,
    rainfall: 3,
  },
  {
    day: "Day 4",
    temperature: 26,
    rainfall: 6,
  },
  {
    day: "Day 5",
    temperature: 24,
    rainfall: 4,
  },
];

function Weather() {
  function handleSetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // You can use these coordinates to fetch location information from a service
        // For simplicity, we'll just set the coordinates as the location
        // setLocation(
        //   `Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`
        // );
         console.log(latitude, longitude);
         axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
        .then((response) => {
          const locationData = response.data;
          let locationName = locationData.name;
          if (!locationName) {
            locationName = "";
            if (locationData.address.road) {
              locationName += locationData.address.road + ", ";
            }
            if (locationData.address.suburb) {
              locationName += locationData.address.suburb + ", ";
            }
            if (locationData.address.city) {
              locationName += locationData.address.city + ", ";
            }
            if (locationData.address.country) {
              locationName += locationData.address.country;
            }
          }
          setLocation(locationName);
        })
        .catch((error) => {
          console.error("Geocoding error:", error);
        });
      });
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }

  const [Location, setLocation] = useState("Your Location");
  const [weatherData, setWeatherData] = useState({});
  const [animateCharts, setAnimateCharts] = useState(true);
  const initialWeatherData = {
    //
    temperature: 25, // Replace with actual temperature data
    cloudCover: "Partly Cloudy", // Replace with actual cloud data
    rainfall: 5, // Replace with actual rainfall data
  };

  const [initialChartData, setInitialChartData] = useState({
    labels: allWeatherData.map((data) => data.day),
    datasets: [
      {
        label: "Temperature (°C)",
        data: allWeatherData.map((data) => data.temperature),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        yAxisID: "common", // Associate with the 'temperature' y-axis
      },
      {
        label: "Rainfall (mm)",
        data: allWeatherData.map((data) => data.rainfall),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        yAxisID: "common", // Associate with the 'rainfall' y-axis
      },
    ],
  });

  useEffect(() => {
    handleSetLocation();
    setWeatherData(initialWeatherData);
    setInitialChartData(initialChartData);
    setTimeout(() => {
      setAnimateCharts(true);
    }, 1000);
  }, []);

  return (
    <div>
      {
        //center the card and add some margin to the top
      }
      <Card style={{ width: "18rem", marginTop: "100px" }} class="card">
        <Card.Header>
          <h5>{Location}</h5>
        </Card.Header>
        <Card.Body>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Clouds: {weatherData.cloudCover}</p>
          <p>Rainfall: {weatherData.rainfall} mm</p>
        </Card.Body>
      </Card>
      <br />
      <br />
      <h4
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Weather Forecast Weekly
      </h4>
      <div className={`chart-container ${animateCharts ? "animate" : ""}`}>
      <div style={{ display: "flex" }}>
          <div style={{ width: "50%", marginRight: "10px" }} className="chart">
            <LineChart chartData={initialChartData} />
          </div>
          <div style={{ width: "50%" }} className="chart">
            <BarChart chartData={initialChartData} />
          </div>
        </div>
        </div>
        <br />
        <br />
        <h4
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Weather Forecast Monthy
        </h4>
      
      <div className={`chart-container ${animateCharts ? "animate" : ""}`}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", marginRight: "10px" }} className="chart">
            <LineChart chartData={initialChartData} />
          </div>
          <div style={{ width: "50%" }} className="chart">
            <BarChart chartData={initialChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
