import React from "react";
import Card from "components/card";
import PieChart from "components/charts/PieChart";
import BarChart from "components/charts/BarChart";
import Widget from "components/widget/Widget";
import { FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { IoMdCar } from "react-icons/io";

// Fake data for the charts
const pieChartData = {
  totalCars: [40, 30, 30], // Example: [Basic, Super, Premium]
  memberCars: [20, 15, 15],
  nonMemberCars: [20, 15, 15],
  newMemberships: [5, 3, 2], // Example: [Basic, Super, Premium]
};

const barChartData = [
  {
    name: "Cars Washed",
    data: [5, 10, 15, 20, 25, 30, 35, 40, 38, 35, 30, 25, 20, 15, 12, 8, 5, 3, 1, 0, 0, 0, 0, 0],
  },
];

const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
  },
  fill: {
    type: "solid",
    colors: ["#4D96FF"],
  },
};

const TodayDashboard = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Total Cars Washed by Type */}
      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Total Cars Washed by Type</h4>
        <PieChart options={{}} series={pieChartData.totalCars} />
      </Card>

      {/* Total Member Cars Washed by Type */}
      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Total Member Cars Washed by Type</h4>
        <PieChart options={{}} series={pieChartData.memberCars} />
      </Card>

      {/* Total Non-Member Cars Washed by Type */}
      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Total Non-Member Cars Washed by Type</h4>
        <PieChart options={{}} series={pieChartData.nonMemberCars} />
      </Card>

      {/* Total Cars Washed Per Hour */}
      <Card extra="p-4 col-span-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">Total Cars Washed Per Hour</h4>
        <BarChart chartData={barChartData} chartOptions={barChartOptions} />
      </Card>

      {/* Day's Revenue */}
      <Widget
        icon={<FaMoneyBillWave className="h-6 w-6" />}
        title={"Day's Revenue"}
        subtitle={"$3,240"}
      />

      {/* Average Revenue Per Wash */}
      <Widget
        icon={<IoMdCar className="h-6 w-6" />}
        title={"Average Revenue Per Wash"}
        subtitle={"$54"}
      />

      {/* New Memberships Sold by Type */}
      <Card extra="p-4">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">New Memberships Sold by Type</h4>
        <PieChart options={{}} series={pieChartData.newMemberships} />
      </Card>

      {/* Total New Memberships Sold */}
      <Widget
        icon={<FaUsers className="h-6 w-6" />}
        title={"Total New Memberships Sold"}
        subtitle={"10"}
      />
    </div>
  );
};

export default TodayDashboard;
