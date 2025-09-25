import { Compass, Gauge, Sunrise, Sunset } from 'lucide-react';

import { formatOpenWeatherMap } from './formatOpenWeatherMapDate';
import { getWindDirection } from './getWindDirection';
import type { WeatherData } from '../api/models';

export function getWeatherDetailsData(weatherData: WeatherData) {
  const { wind, main, sys } = weatherData;

  const details = [
    {
      title: 'Sunrise',
      value: formatOpenWeatherMap(sys.sunrise),
      icon: Sunrise,
      color: 'text-orange-500',
    },
    {
      title: 'Sunset',
      value: formatOpenWeatherMap(sys.sunset),
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
