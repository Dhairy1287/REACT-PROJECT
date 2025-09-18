import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Wind, Droplets, Thermometer } from "lucide-react";
import { motion } from "framer-motion";

export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    name,
    sys,
    main,
    weather,
    wind,
    clouds,
  } = data;

  const weatherInfo = weather[0];
  const tempC = (main.temp - 273.15).toFixed(1);
  const feelsLikeC = (main.feels_like - 273.15).toFixed(1);

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="w-full max-w-md shadow-2xl rounded-2xl bg-white/80 backdrop-blur">
        <CardContent className="p-6 space-y-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{name}, {sys.country}</h1>
            <p className="text-gray-600 capitalize">{weatherInfo.description}</p>
          </div>

          <div className="flex justify-center items-center gap-4">
            <Thermometer className="w-8 h-8 text-red-500" />
            <span className="text-4xl font-bold">{tempC}°C</span>
          </div>
          <p className="text-center text-gray-700">Feels like: {feelsLikeC}°C</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Droplets className="text-blue-500" />
              <span>Humidity: {main.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="text-gray-500" />
              <span>Clouds: {clouds.all}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="text-green-600" />
              <span>Wind: {wind.speed} m/s</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Pressure:</span>
              <span>{main.pressure} hPa</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Example usage:
// <WeatherCard data={yourApiResponse} />
