/* eslint-disable */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const toggleAnalytics = () => {
    setIsAnalyticsOpen(!isAnalyticsOpen);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        if (route.name === "Analytics") {
          return (
            <div key={index}>
              <div className="relative mb-3 flex hover:cursor-pointer" onClick={toggleAnalytics}>
                <li className="my-[3px] flex cursor-pointer items-center px-8">
                  <span className="font-medium text-gray-600">
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p className="leading-1 ml-4 flex font-medium text-gray-600">
                    Analytics
                  </p>
                </li>
              </div>
              {isAnalyticsOpen && (
                <ul className="pl-8">
                  {route.subRoutes.map((subRoute, subIndex) => (
                    <Link key={subIndex} to={subRoute.layout + "/" + subRoute.path}>
                      <li className="my-[3px] flex cursor-pointer items-center px-8">
                        <span className={`font-medium text-gray-600`}>
                          {subRoute.icon ? subRoute.icon : <DashIcon />}{" "}
                        </span>
                        <p className="leading-1 ml-4 flex font-medium text-gray-600">
                          {subRoute.name}
                        </p>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          );
        } else {
          return (
            <Link key={index} to={route.layout + "/" + route.path}>
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li
                  className="my-[3px] flex cursor-pointer items-center px-8"
                  key={index}
                >
                  <span
                    className={`${
                      activeRoute(route.path) === true
                        ? "font-bold text-brand-500 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      activeRoute(route.path) === true
                        ? "font-bold text-navy-700 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.name}
                  </p>
                </li>
                {activeRoute(route.path) ? (
                  <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                ) : null}
              </div>
            </Link>
          );
        }
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
