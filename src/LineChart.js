import React from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';


function LineChart({ chartData }) {
    // function isMobile() {
    // return window.innerWidth < 768;
    // }
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
              id: 'common',
              beginAtZero: true, // Customize as needed
            },
          ],
        },
        responsive: true,
         maintainAspectRatio: true
      };
  return <Line data={chartData} options={options} />;

}

export default LineChart;