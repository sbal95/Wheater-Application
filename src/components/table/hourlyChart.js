import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJson } from "chart.js/auto";
import { useSelector } from "react-redux";

const HourlyChart = () => {
  const x = useSelector((state) => state.hourData);
  const [forData, setForData] = useState(x);
  const getForData = () => {
    setForData(x);
  };
  const [data, setData] = useState({
    labels: forData.map((hour, i) => (i < 10 ? `0${i} : 00` : `${i} : 00`)),
    datasets: [
      {
        color: "aqua",
        label: "TEMPERATURE",
        data: forData.map((hour, i) => hour),
        backgroundColor: "aqua",
      },
    ],
    options: {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "aqua",
            font: {
              size: 18,
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          beginAtZero: false,
          ticks: {
            color: "aqua",
          },
        },
        y: {
          grid: {
            display: true,
          },
          beginAtZero: true,
          ticks: {
            color: "aqua",
          },
        },
      },
    },
  });

  useEffect(() => {
    getForData();
    if (forData[0] !== data.datasets[0].data[0]) {
      setData({
        labels: forData.map((hour, i) => (i < 10 ? `0${i} : 00` : `${i} : 00`)),
        datasets: [
          {
            color: "aqua",
            label: "TEMPERATURE",
            data: forData.map((hour, i) => hour),
            backgroundColor: "aqua",
          },
        ],
        options: {
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "aqua",
                font: {
                  size: 18,
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: true,
              },
              beginAtZero: true,
              ticks: {
                color: "aqua",
              },
            },
            y: {
              grid: {
                display: true,
              },
              beginAtZero: true,
              ticks: {
                color: "aqua",
              },
            },
          },
        },
      });
    }
  }, [x]);

  return (
    <div className="container mx-auto bg-opacity-75 bg-slate-800 ">
      <div className="py-2 px-[25%]">
        <Bar data={data} options={data.options} />
      </div>
    </div>
  );
};

export default HourlyChart;
