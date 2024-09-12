import BarChart from "components/charts/BarChart";
import { barChartDataDailyRevenue } from "variables/charts";
import { barChartOptionsDailyRevenue } from "variables/charts";
import { MdArrowDropUp } from "react-icons/md";
import Card from "components/card";

const DailyRevenue = () => {
  return (
    <Card extra="pb-7 p-[20px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
          <p className="text-sm font-medium leading-4 text-gray-600">
            Daily Revenue
          </p>
          <p className="text-[34px] font-bold text-navy-700 dark:text-white">
            $3,240
            <span className="text-sm font-medium leading-6 text-gray-600">
              Today
            </span>
          </p>
        </div>
        <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-green-500">
            <MdArrowDropUp className="h-5 w-5" />
            <p className="font-bold"> +2.45% </p>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full pt-10 pb-0">
        <BarChart
          chartData={barChartDataDailyRevenue}
          chartOptions={barChartOptionsDailyRevenue}
        />
      </div>
    </Card>
  );
};

export default DailyRevenue;