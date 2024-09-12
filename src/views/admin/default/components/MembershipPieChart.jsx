import React from "react";
import Card from "components/card";
import Chart from "react-apexcharts";

const MembershipPieChart = () => {
  const pieChartOptions = {
    labels: ["Basic", "Super", "Carnauba", "Graphene"],
    colors: ["#4318FF", "#6AD2FF", "#FFAA0D", "#FF5733"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#4318FF", "#6AD2FF", "#FFAA0D", "#FF5733"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  const pieChartData = [30, 40, 20, 10];

  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Membership Distribution
          </h4>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <Chart
          options={pieChartOptions}
          series={pieChartData}
          type="pie"
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#4318FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">Basic</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">
            30%
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">Super</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            40%
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#FFAA0D]" />
            <p className="ml-1 text-sm font-normal text-gray-600">Carnauba</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            20%
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#FF5733]" />
            <p className="ml-1 text-sm font-normal text-gray-600">Graphene</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            10%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MembershipPieChart;