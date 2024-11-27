import React from "react";
import Card from "components/card";
import LineChart from "components/charts/LineChart";
import PieChart from "components/charts/PieChart";
import BarChart from "components/charts/BarChart";
import Widget from "components/widget/Widget";
import { FaDollarSign, FaChartLine, FaCar } from "react-icons/fa";

// Fake data for the charts
const pieChartDataWashesByType = [40, 30, 20, 10]; // Example: [Basic, Deluxe, Premium, Ultimate]

const barChartDataRevenueByWashType = [
  {
    name: "Basic",
    data: [2000],
  },
  {
    name: "Deluxe",
    data: [3000],
  },
  {
    name: "Premium",
    data: [4000],
  },
  {
    name: "Ultimate",
    data: [5000],
  },
];

const barChartDataAddOnServices = [
  {
    name: "Waxing",
    data: [1000],
  },
  {
    name: "Tire Shine",
    data: [1500],
  },
  {
    name: "Underbody Wash",
    data: [800],
  },
];

const lineChartDataWashSalesByTime = [
  {
    name: "Washes Sold",
    data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
];

const barChartDataWashVolumeByDay = [
  {
    name: "Monday",
    data: [100],
  },
  {
    name: "Tuesday",
    data: [150],
  },
  {
    name: "Wednesday",
    data: [200],
  },
  {
    name: "Thursday",
    data: [250],
  },
  {
    name: "Friday",
    data: [300],
  },
  {
    name: "Saturday",
    data: [350],
  },
  {
    name: "Sunday",
    data: [400],
  },
];

const barChartDataTopSellingAddOns = [
  {
    name: "Waxing",
    data: [1000],
  },
  {
    name: "Tire Shine",
    data: [1500],
  },
  {
    name: "Underbody Wash",
    data: [800],
  },
];

const lineChartDataRevenueGrowthByWashType = [
  {
    name: "Basic",
    data: [200, 250, 300, 350, 400, 450, 500],
  },
  {
    name: "Deluxe",
    data: [300, 350, 400, 450, 500, 550, 600],
  },
  {
    name: "Premium",
    data: [400, 450, 500, 550, 600, 650, 700],
  },
  {
    name: "Ultimate",
    data: [500, 550, 600, 650, 700, 750, 800],
  },
];

// Fake data for customer volume
const pieChartDataCustomerVolume = [60, 40]; // Example: [Repeat Customers, First-Time Customers]

const RetailWashDashboard = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Statistics */}
      <Widget
        icon={<FaCar className="h-6 w-6" />}
        title={"Total Washes Sold"}
        subtitle={"1,200"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Average Revenue Per Wash"}
        subtitle={"$25"}
      />
      <Widget
        icon={<FaChartLine className="h-6 w-6" />}
        title={"Discounted Wash Sales"}
        subtitle={"300"}
      />

      {/* Graphs */}
      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Washes Sold by Type</h4>
        <PieChart options={{}} series={pieChartDataWashesByType} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Revenue by Wash Type</h4>
        <BarChart chartData={barChartDataRevenueByWashType} chartOptions={{}} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Add-On Services Revenue</h4>
        <BarChart chartData={barChartDataAddOnServices} chartOptions={{}} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Wash Sales by Time of Day</h4>
        <LineChart options={{}} series={lineChartDataWashSalesByTime} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Wash Volume by Day of the Week</h4>
        <BarChart chartData={barChartDataWashVolumeByDay} chartOptions={{}} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Top-Selling Add-Ons</h4>
        <BarChart chartData={barChartDataTopSellingAddOns} chartOptions={{}} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Revenue Growth by Wash Type</h4>
        <LineChart options={{}} series={lineChartDataRevenueGrowthByWashType} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Volume from Repeat vs. First-Time Customers</h4>
        <PieChart options={{}} series={pieChartDataCustomerVolume} />
      </Card>
    </div>
  );
};

export default RetailWashDashboard; 