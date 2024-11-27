import React from "react";
import Card from "components/card";
import LineChart from "components/charts/LineChart";
import PieChart from "components/charts/PieChart";
import BarChart from "components/charts/BarChart";
import Widget from "components/widget/Widget";
import { FaDollarSign, FaChartLine, FaExchangeAlt } from "react-icons/fa";
import StackedBarChart from "components/charts/StackedBarChart";

// Fake data for the charts
const barChartDataDownsellsByTier = [
  {
    name: "Downsells by Plan Tier",
    data: [30, 20, 10], // Example: [Premium to Basic, Super to Basic, Premium to Super]
  },
];

const lineChartDataMonthlyTrends = [
  {
    name: "Monthly Downsell Trends",
    data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
];

// New pie chart data for Recovery Revenue by Tier
const pieChartDataRecoveryRevenueByTier = [50, 30, 20]; // Example: [Basic, Premium, Unlimited]

const barChartDataLTVComparison = [
  {
    name: "Downsold Customers",
    data: [5000],
  },
  {
    name: "Canceled Customers",
    data: [3000],
  },
];

const lineChartDataRetentionRates = [
  {
    name: "3 Months",
    data: [80, 75, 70, 65, 60, 55, 50],
  },
  {
    name: "6 Months",
    data: [70, 65, 60, 55, 50, 45, 40],
  },
  {
    name: "12 Months",
    data: [60, 55, 50, 45, 40, 35, 30],
  },
];

const barChartDataRevenueByTier = [
  {
    name: "Revenue by Downsell Tier",
    data: [2000, 1500, 1000], // Example: [Premium to Basic, Super to Basic, Premium to Super]
  },
];

// Fake data for revenue recovered over time
const stackedBarChartDataRevenueRecovered = [
  {
    name: "Basic",
    data: [2000, 2500, 3000, 3500, 4000], // Example data over time
  },
  {
    name: "Premium",
    data: [1500, 2000, 2500, 3000, 3500],
  },
  {
    name: "Unlimited",
    data: [1000, 1500, 2000, 2500, 3000],
  },
];

const DownsellsDashboard = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Statistics */}
      <Widget
        icon={<FaExchangeAlt className="h-6 w-6" />}
        title={"Total Downsells Offered"}
        subtitle={"150"}
      />
      <Widget
        icon={<FaExchangeAlt className="h-6 w-6" />}
        title={"Total Downsells Accepted"}
        subtitle={"90"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Revenue Recovered from Downsells"}
        subtitle={"$12,000"}
      />
      <Widget
        icon={<FaChartLine className="h-6 w-6" />}
        title={"Downsell Conversion Rate"}
        subtitle={"60%"}
      />

      {/* Graphs */}
      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Downsells by Plan Tier</h4>
        <BarChart chartData={barChartDataDownsellsByTier} chartOptions={{}} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Recovery Revenue by Tier</h4>
        <PieChart options={{}} series={pieChartDataRecoveryRevenueByTier} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Monthly Downsell Trends</h4>
        <LineChart options={{}} series={lineChartDataMonthlyTrends} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Lifetime Value (LTV) of Downsold Customers</h4>
        <BarChart chartData={barChartDataLTVComparison} chartOptions={{}} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Customer Retention After Downsells</h4>
        <LineChart options={{}} series={lineChartDataRetentionRates} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Revenue by Downsell Tier</h4>
        <BarChart chartData={barChartDataRevenueByTier} chartOptions={{}} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Revenue Recovered Over Time</h4>
        <StackedBarChart chartData={stackedBarChartDataRevenueRecovered} chartOptions={{}} />
      </Card>
    </div>
  );
};

export default DownsellsDashboard; 