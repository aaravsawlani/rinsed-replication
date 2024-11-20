import React from "react";
import Card from "components/card";
import LineChart from "components/charts/LineChart";
import PieChart from "components/charts/PieChart";
import Widget from "components/widget/Widget";
import { FaUsers, FaChartLine, FaDollarSign } from "react-icons/fa";

// Fake data for the charts
const pieChartData = [40, 30, 20, 10]; // Example: [Basic, Super, Premium, VIP]

const lineChartDataActiveMembers = [
  {
    name: "Active Members",
    data: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250],
  },
];

const lineChartDataChurn = [
  {
    name: "Voluntary Churn",
    data: [5, 4, 6, 5, 7, 6, 5, 4, 6, 5, 7, 6, 5, 4, 6, 5, 7, 6, 5, 4, 6, 5, 7, 6, 5, 4, 6, 5, 7, 6, 5],
  },
  {
    name: "Involuntary Churn",
    data: [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
  },
  {
    name: "Total Churn",
    data: [7, 7, 8, 8, 9, 9, 7, 7, 8, 8, 9, 9, 7, 7, 8, 8, 9, 9, 7, 7, 8, 8, 9, 9, 7, 7, 8, 8, 9, 9, 7],
  },
];

const lineChartDataUpgradesDowngrades = [
  {
    name: "Upgrades",
    data: [3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 5, 4, 3],
  },
  {
    name: "Downgrades",
    data: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
  },
  {
    name: "Net",
    data: [2, 2, 4, 4, 4, 2, 2, 2, 4, 4, 4, 2, 2, 2, 4, 4, 4, 2, 2, 2, 4, 4, 4, 2, 2, 2, 4, 4, 4, 2, 2],
  },
];

const MembersDashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Statistics */}
      <Widget
        icon={<FaUsers className="h-6 w-6" />}
        title={"Total Members"}
        subtitle={"1,567"}
      />
      <Widget
        icon={<FaUsers className="h-6 w-6" />}
        title={"Members Signed Up Today"}
        subtitle={"12"}
      />
      <Widget
        icon={<FaUsers className="h-6 w-6" />}
        title={"Members Signed Up in Last 7 Days"}
        subtitle={"84"}
      />
      <Widget
        icon={<FaChartLine className="h-6 w-6" />}
        title={"Average Member Visit Frequency"}
        subtitle={"3.5 visits/month"}
      />
      <Widget
        icon={<FaDollarSign className="h-6 w-6" />}
        title={"Average Member Revenue"}
        subtitle={"$120"}
      />
      <Widget
        icon={<FaUsers className="h-6 w-6" />}
        title={"At Risk Members"}
        subtitle={"45"}
      />

      {/* Graphs */}
      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Total Active Members Over Last 3 Months</h4>
        <LineChart options={{}} series={lineChartDataActiveMembers} />
      </Card>

      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Total Members by Plan Type</h4>
        <PieChart options={{}} series={pieChartData} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Churn Over Last 3 Months</h4>
        <LineChart options={{}} series={lineChartDataChurn} />
      </Card>

      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Plan Upgrades and Downgrades Over Time</h4>
        <LineChart options={{}} series={lineChartDataUpgradesDowngrades} />
      </Card>
    </div>
  );
};

export default MembersDashboard; 