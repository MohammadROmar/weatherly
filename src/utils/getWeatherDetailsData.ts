import { Compass, Gauge, Sunrise, Sunset } from 'lucide-react';

import { formateOpenWeatherMap } from './formateOpenWeatherMapDate';
import { getWindDirection } from './getWindDirection';
import type { WeatherData } from '../api/models';

export function getWeatherDetailsData(weatherData: WeatherData) {
  const { wind, main, sys } = weatherData;

  const details = [
    {
      title: 'Sunrise',
      value: formateOpenWeatherMap(sys.sunrise),
      icon: Sunrise,
      color: 'text-orange-500',
    },
    {
      title: 'Sunset',
      value: formateOpenWeatherMap(sys.sunset),
      icon: Sunset,
      color: 'text-blue-500',
    },
    {
      title: 'Wind Direction',
      value: `${getWindDirection(wind.deg)} (${wind.deg}°)`,
      icon: Compass,
      color: 'text-green-500',
    },
    {
      title: 'Pressure',
      value: `${main.pressure} hPa`,
      icon: Gauge,
      color: 'text-purple-500',
    },
  ];

  return details;
}
