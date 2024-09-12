import Card from "components/card";
import React from "react";

const TopEmployees = () => {
  const employees = [
    { name: "John Doe", washes: 45, rating: 4.8 },
    { name: "Jane Smith", washes: 42, rating: 4.7 },
    { name: "Mike Johnson", washes: 38, rating: 4.9 },
  ];

  return (
    <Card extra="rounded-[20px] p-4">
      <div className="mb-8 flex items-center justify-between">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Top Employees
        </h4>
      </div>
      <div className="flex flex-col">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="mb-3 flex items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <div className="flex items-center">
              <div className="ml-4">
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  {employee.name}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {employee.washes} washes
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="mr-1 text-sm font-bold text-navy-700 dark:text-white">
                {employee.rating}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopEmployees;