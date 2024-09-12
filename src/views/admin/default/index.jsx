import React from "react";
import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyWashes from "./components/WeeklyWashes";
import DailyRevenue from "./components/DailyRevenue";
import MembershipPieChart from "./components/MembershipPieChart";
import { IoMdCar } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";
import { FaUsers, FaMoneyBillWave } from "react-icons/fa";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import HourlyWashes from "./components/HourlyWashes";
import MembershipTable from "./components/MembershipTable";
import WeatherCard from "./components/WeatherCard";
import RecentReviews from "./components/RecentReviews";

const membershipTableData = [
  { name: "John Doe", membershipType: "Basic", washesThisMonth: 8, memberSince: "Jan 2023" },
  { name: "Jane Smith", membershipType: "Super", washesThisMonth: 12, memberSince: "Mar 2023" },
  { name: "Mike Johnson", membershipType: "Carnauba", washesThisMonth: 15, memberSince: "Feb 2023" },
  { name: "Emily Brown", membershipType: "Graphene", washesThisMonth: 20, memberSince: "Apr 2023" },
  { name: "David Lee", membershipType: "Basic", washesThisMonth: 6, memberSince: "May 2023" },
  { name: "Sarah Wilson", membershipType: "Super", washesThisMonth: 10, memberSince: "Jan 2023" },
  { name: "Tom Harris", membershipType: "Carnauba", washesThisMonth: 18, memberSince: "Mar 2023" },
  { name: "Lisa Chen", membershipType: "Graphene", washesThisMonth: 22, memberSince: "Feb 2023" },
  { name: "Alex Taylor", membershipType: "Basic", washesThisMonth: 7, memberSince: "Apr 2023" },
  { name: "Olivia White", membershipType: "Super", washesThisMonth: 14, memberSince: "May 2023" },
];

const Dashboard = () => {
  return (
    <div>
      {/* Card widgets */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<IoMdCar className="h-7 w-7" />}
          title={"Cars Washed Today"}
          subtitle={"156"}
        />
        <Widget
          icon={<FaMoneyBillWave className="h-6 w-6" />}
          title={"Today's Revenue"}
          subtitle={"$3,240"}
        />
        <Widget
          icon={<FaUsers className="h-7 w-7" />}
          title={"New Members Today"}
          subtitle={"12"}
        />
        <Widget
          icon={<WiDaySunny className="h-6 w-6" />}
          title={"Current Weather"}
          subtitle={"Sunny, 75°F"}
        />
        <Widget
          icon={<IoMdCar className="h-7 w-7" />}
          title={"Member Cars Washed"}
          subtitle={"78"}
        />
        <Widget
          icon={<FaUsers className="h-6 w-6" />}
          title={"Total Members"}
          subtitle={"1,567"}
        />
      </div>

      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <WeeklyWashes />
        <DailyRevenue />
      </div>

      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Hourly Washes */}
        <div>
          <HourlyWashes />
        </div>

        {/* Weather and Membership Pie Chart */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <WeatherCard />
          <MembershipPieChart />
        </div>

        {/* Membership Table */}
        <MembershipTable
          columnsData={columnsDataComplex}
          tableData={membershipTableData} // Add your membership data here
        />

        {/* Top Employees and Calendar */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <RecentReviews />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
