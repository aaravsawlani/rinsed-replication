import React from "react";
import Card from "components/card";
import LineChart from "components/charts/LineChart";
import PieChart from "components/charts/PieChart";
import BarChart from "components/charts/BarChart";
import StackedBarChart from "components/charts/StackedBarChart";
import Widget from "components/widget/Widget";
import { FaDollarSign, FaChartLine, FaCar } from "react-icons/fa";

// Fake data for the charts
const barChartDataRevenueByServiceType = [
  {
    name: "Interior Cleaning",
    data: [2000],
  },
  {
    name: "Exterior Polishing",
    data: [3000],
  },
  {
    name: "Ceramic Coating",
    data: [4000],
  },
];

// New bar chart data for Detail Service Upgrade Rate by Wash Type
const barChartDataUpgradeRateByWashType = [
  {
    name: "Basic Wash to Premium",
    data: [50],
  },
  {
    name: "Basic Wash to Super",
    data: [30],
  },
  {
    name: "Premium to Ceramic",
    data: [20],
  },
];

const pieChartDataServicesByPopularity = [40, 30, 30]; // Example: [Interior Cleaning, Exterior Polishing, Ceramic Coating]

const lineChartDataServiceSalesOverTime = [
  {
    name: "Detail Services Sold",
    data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
];

const lineChartDataRevenueGrowth = [
  {
    name: "Revenue Growth",
    data: [200, 250, 300, 350, 400, 450, 500],
  },
];

const stackedBarChartDataRevenueByMembership = [
  {
    name: "Members",
    data: [5000],
  },
  {
    name: "Non-Members",
    data: [3000],
  },
];

const DetailServicesDashboard = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Statistics */}
      <Widget
        icon={<FaCar className="h-6 w-6" />}
        title={"Total Detail Services Sold"}
        subtitle={"1,200"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Detail Services Revenue"}
        subtitle={"$30,000"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Average Revenue per Detail Service"}
        subtitle={"$25"}
      />
      <Widget
        icon={<FaChartLine className="h-6 w-6" />}
        title={"Detail Service Upsell Success Rate"}
        subtitle={"20%"}
      />
      {/* New Statistics */}
      <Widget
        icon={<FaChartLine className="h-6 w-6" />}
        title={"Repeat Rate for Detail Services"}
        subtitle={"30%"} // Example value
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Revenue per Hour of All Detail Services"}
        subtitle={"$150"} // Example value
      />

      {/* Graphs */}
      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Revenue by Detail Service Type</h4>
        <BarChart chartData={barChartDataRevenueByServiceType} chartOptions={{}} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Detail Services by Popularity</h4>
        <PieChart options={{}} series={pieChartDataServicesByPopularity} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Detail Service Upgrade Rate by Wash Type</h4>
        <BarChart chartData={barChartDataUpgradeRateByWashType} chartOptions={{}} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Detail Service Sales Over Time</h4>
        <LineChart options={{}} series={lineChartDataServiceSalesOverTime} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Revenue Growth from Detail Services</h4>
        <LineChart options={{}} series={lineChartDataRevenueGrowth} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Detail Service Revenue by Membership vs. Non-Members</h4>
        <StackedBarChart chartData={stackedBarChartDataRevenueByMembership} chartOptions={{}} />
      </Card>
    </div>
  );
};

export default DetailServicesDashboard; 