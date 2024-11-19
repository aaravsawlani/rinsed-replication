import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import TodayDashboard from "views/admin/default/Today";
import Profile from "views/admin/profile";

// Icon Imports
import { MdHome, MdPerson, MdToday } from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Today",
    layout: "/admin",
    path: "today",
    icon: <MdToday className="h-6 w-6" />,
    component: <TodayDashboard />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
];
export default routes;