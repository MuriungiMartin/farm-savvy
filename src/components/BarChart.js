import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  //get if mobile or tablet then set responsive to true and maintainAspectRatio to false
  // function isMobile() {
  //     return window.innerWidth < 768;
  //     }
  // function isTablet() {
  // return window.innerWidth >= 768 && window.innerWidth < 992;
  // }
  // function isDesktop() {
  // return window.innerWidth >= 992;
  // }

  const options = {
    scales: {
      y: [
        {
          id: "common",
          beginAtZero: true, // Customize as needed
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: true,
  };
  return <Bar data={chartData} options={options} />;
}

export default BarChart;
