import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import { MdHome, MdLock } from "react-icons/md";

const routes = [
  {
    name: "Overview",
    layout: "/admin",
    path: "overview",
    icon: <MdHome className="h-6 w-6" />,
    component: <Overview />,
  },
  {
    name: "Analytics",
    layout: "/admin",
    path: "analytics",
    icon: <MdTrendingUp className="h-6 w-6" />,
    subRoutes: [
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
    ],
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