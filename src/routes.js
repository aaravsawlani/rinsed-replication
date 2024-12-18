import React from "react";

// Admin Imports
import Overview from "views/admin/default/Overview";
import TodayDashboard from "views/admin/default/Today";
import MembersDashboard from "views/admin/default/Members";
import OnlineSalesDashboard from "views/admin/default/OnlineSales";
import DownsellsDashboard from "views/admin/default/Downsells";
import CCDeclineDashboard from "views/admin/default/CCDecline";
import RetailWashDashboard from "views/admin/default/RetailWashDashboard";
import DetailServicesDashboard from "views/admin/default/DetailServicesDashboard";
import MembersList from "views/admin/default/MembersList";
import Profile from "views/admin/profile";

// Icon Imports
import { MdHome, MdPerson, MdToday, MdGroup, MdShoppingCart, MdTrendingDown, MdCreditCard, MdLocalCarWash, MdBuild, MdList } from "react-icons/md";

const routes = [
  {
    name: "Overview",
    layout: "/admin",
    path: "overview",
    icon: <MdHome className="h-6 w-6" />,
    component: <Overview />,
  },
  {
    name: "Today",
    layout: "/admin",
    path: "today",
    icon: <MdToday className="h-6 w-6" />,
    component: <TodayDashboard />,
  },
  {
    name: "Members",
    layout: "/admin",
    path: "members",
    icon: <MdGroup className="h-6 w-6" />,
    component: <MembersDashboard />,
  },
  {
    name: "Online Sales",
    layout: "/admin",
    path: "online-sales",
    icon: <MdShoppingCart className="h-6 w-6" />,
    component: <OnlineSalesDashboard />,
  },
  {
    name: "Downsells",
    layout: "/admin",
    path: "downsells",
    icon: <MdTrendingDown className="h-6 w-6" />,
    component: <DownsellsDashboard />,
  },
  {
    name: "CC Decline",
    layout: "/admin",
    path: "cc-decline",
    icon: <MdCreditCard className="h-6 w-6" />,
    component: <CCDeclineDashboard />,
  },
  {
    name: "Retail Wash",
    layout: "/admin",
    path: "retail-wash",
    icon: <MdLocalCarWash className="h-6 w-6" />,
    component: <RetailWashDashboard />,
  },
  {
    name: "Detail Services",
    layout: "/admin",
    path: "detail-services",
    icon: <MdBuild className="h-6 w-6" />,
    component: <DetailServicesDashboard />,
  },
  {
    name: "Members List",
    layout: "/admin",
    path: "members-list",
    icon: <MdList className="h-6 w-6" />,
    component: <MembersList />,
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