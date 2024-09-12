import React from "react";
import Card from "components/card";
import { WiDaySunny, WiRain, WiCloudy } from "react-icons/wi";

const WeatherCard = () => {
  // This would typically come from an API
  const weatherData = {
    temperature: 75,
    condition: "sunny",
    humidity: 45,
    windSpeed: 5,
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "sunny":
        return <WiDaySunny className="h-16 w-16 text-yellow-500" />;
      case "rainy":
        return <WiRain className="h-16 w-16 text-blue-500" />;
      case "cloudy":
        return <WiCloudy className="h-16 w-16 text-gray-500" />;
      default:
        return <WiDaySunny className="h-16 w-16 text-yellow-500" />;
    }
  };

  return (
    <Card extra="rounded-[20px] p-4">
      <div className="flex flex-col items-center">
        <h4 className="mb-2 text-xl font-bold text-navy-700 dark:text-white">
          Current Weather
        </h4>
        {getWeatherIcon(weatherData.condition)}
        <p className="mt-1 text-2xl font-bold text-navy-700 dark:text-white">
          {weatherData.temperature}°F
        </p>
        <p className="text-base text-gray-600">{weatherData.condition}</p>
        <div className="mt-4 flex w-full justify-between">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="text-base font-bold text-navy-700 dark:text-white">
              {weatherData.humidity}%
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600">Wind</p>
            <p className="text-base font-bold text-navy-700 dark:text-white">
              {weatherData.windSpeed} mph
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;