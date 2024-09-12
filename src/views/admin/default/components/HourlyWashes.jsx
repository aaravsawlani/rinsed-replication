import React from "react";
import Card from "components/card";
import BarChart from "components/charts/BarChart";
import { MdBarChart } from "react-icons/md";

const HourlyWashes = () => {
  const barChartDataHourlyWashes = [
    {
      name: "Cars Washed",
      data: [10, 5, 3, 2, 1, 2, 4, 8, 15, 25, 30, 35, 40, 38, 35, 30, 25, 20, 15, 12, 8, 5, 3, 1],
    },
  ];

  const barChartOptionsHourlyWashes = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
      },
      theme: "dark",
    },
    xaxis: {
      categories: ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
      show: true,
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "10px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      color: "black",
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },
    grid: {
      borderColor: "rgba(163, 174, 208, 0.3)",
      show: true,
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        opacity: 0.5,
      },
      column: {
        opacity: 0.5,
      },
    },
    fill: {
      type: "solid",
      colors: ["#5E37FF"],
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "40px",
      },
    },
  };

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Hourly Car Washes
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart
            chartData={barChartDataHourlyWashes}
            chartOptions={barChartOptionsHourlyWashes}
          />
        </div>
      </div>
    </Card>
  );
};

export default HourlyWashes;