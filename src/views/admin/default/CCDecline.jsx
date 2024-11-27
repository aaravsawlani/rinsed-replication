import React from "react";
import Card from "components/card";
import LineChart from "components/charts/LineChart";
import BarChart from "components/charts/BarChart";
import StackedBarChart from "components/charts/StackedBarChart";
import Widget from "components/widget/Widget";
import { FaDollarSign, FaChartLine, FaCreditCard } from "react-icons/fa";

// Fake data for the charts
const lineChartDataDeclinesOverTime = [
  {
    name: "Declined Transactions",
    data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
];

const barChartDataDeclineRateByTier = [
  {
    name: "Basic",
    data: [10, 15, 20],
  },

];

const stackedBarChartDataRevenueRecovered = [
  {
    name: "Basic",
    data: [1000, 2000, 3000],
  },

];

const CCDeclineDashboard = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Statistics */}
      <Widget
        icon={<FaCreditCard className="h-6 w-6" />}
        title={"Total Declined Transactions"}
        subtitle={"150"}
      />
      <Widget
        icon={<FaChartLine className="h-6 w-6" />}
        title={"Decline Recovery Rate"}
        subtitle={"60%"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Revenue Recovered from Declines"}
        subtitle={"$12,000"}
      />

      {/* Graphs */}
      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Declines Over Time</h4>
        <LineChart options={{}} series={lineChartDataDeclinesOverTime} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Decline Rate by Membership Tier</h4>
        <BarChart chartData={barChartDataDeclineRateByTier} chartOptions={{}} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Revenue Recovered by Membership Tier</h4>
        <StackedBarChart chartData={stackedBarChartDataRevenueRecovered} chartOptions={{}} />
      </Card>
    </div>
  );
};

export default CCDeclineDashboard; 