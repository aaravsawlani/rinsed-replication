import React from "react";
import Card from "components/card";
import LineChart from "components/charts/LineChart";
import PieChart from "components/charts/PieChart";
import BarChart from "components/charts/BarChart";
import Widget from "components/widget/Widget";
import { FaDollarSign, FaShoppingCart, FaChartLine } from "react-icons/fa";

// Fake data for the charts
const pieChartData = [50, 30, 20]; // Example: [Basic Wash, Premium Wash, Memberships]
const pieChartDataSalesByRegion = [40, 35, 25]; // Example: [North, South, West]
const pieChartDataFirstTimeVsReturning = [60, 40]; // Example: [First-Time Customers, Returning Customers]

const lineChartDataSalesTrends = [
  {
    name: "Online Sales",
    data: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600],
  },
];

const barChartDataPromoCodes = [
  {
    name: "Promo Code Usage",
    data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
];

const OnlineSalesDashboard = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Statistics */}
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Online Revenue Today"}
        subtitle={"$1,200"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Online Revenue This Week"}
        subtitle={"$8,400"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Online Revenue This Month"}
        subtitle={"$36,000"}
      />
      <Widget
        icon={<FaShoppingCart className="h-6 w-6" />}
        title={"Memberships Sold Today"}
        subtitle={"10"}
      />
      <Widget
        icon={<FaShoppingCart className="h-6 w-6" />}
        title={"Memberships Sold This Week"}
        subtitle={"70"}
      />
      <Widget
        icon={<FaShoppingCart className="h-6 w-6" />}
        title={"Memberships Sold This Month"}
        subtitle={"300"}
      />
      <Widget
        icon={<FaChartLine className="h-6 w-6" />}
        title={"Conversion Rate"}
        subtitle={"3.5%"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Average Order Value (AOV)"}
        subtitle={"$120"}
      />
      <Widget
        icon={<FaChartLine className="h-6 w-6" />}
        title={"Abandoned Cart Rate"}
        subtitle={"25%"}
      />

      {/* Graphs */}
      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Online Sales by Product/Service</h4>
        <PieChart options={{}} series={pieChartData} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Sales by Region</h4>
        <PieChart options={{}} series={pieChartDataSalesByRegion} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">First-Time vs. Returning Customers</h4>
        <PieChart options={{}} series={pieChartDataFirstTimeVsReturning} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Daily Online Sales Trends</h4>
        <LineChart options={{}} series={lineChartDataSalesTrends} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Promo Code Usage</h4>
        <BarChart chartData={barChartDataPromoCodes} chartOptions={{}} />
      </Card>
    </div>
  );
};

export default OnlineSalesDashboard; 