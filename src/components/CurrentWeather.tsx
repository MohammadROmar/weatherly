import { ArrowDown, ArrowUp, Droplets, Wind } from 'lucide-react';
import type { PropsWithChildren } from 'react';

import {
  CurrentWeatherContext,
  useCurrentWeatherContext,
} from '../store/current-weather';
import { Card, CardContent } from './ui/card';
import { formatTemperature } from '../utils/formatTemperature';
import { useWeatherDataContext } from '../store/weather/hooks';

export default function CurrentWeather({ children }: PropsWithChildren) {
  const { weatherQuery, locationQuery } = useWeatherDataContext();

  const weatherData = weatherQuery.data;
  const locationData = locationQuery.data?.[0];

  if (!weatherData) return <p>No temperature info</p>;

  return (
    <CurrentWeatherContext.Provider
      value={{ data: weatherData, location: locationData }}
    >
      <Card className="overflow-hidden">
        <CardContent className="flex flex-col gap-6 p-6 md:flex-row">
          {children}
        </CardContent>
      </Card>
    </CurrentWeatherContext.Provider>
  );
}

CurrentWeather.LocationInfo = function LocationInfo() {
  const { location } = useCurrentWeatherContext();
  if (!location) return null;

  return (
    <div className="space-y-2">
      <div className="flex gap-1 max-md:flex-col md:items-end">
        <h3 className="text-xl font-semibold">{location.name}</h3>
        {location.state && (
          <p className="text-muted-foreground">
            <span className="max-md:hidden">, </span>
            {location.state}
          </p>
        )}
      </div>
      <p className="text-muted-foreground text-sm">{location.country}</p>
    </div>
  );
};

CurrentWeather.TemperatureDisplay = function TemperatureDisplay() {
  const { data } = useCurrentWeatherContext();
  const { temp, feels_like, temp_min, temp_max } = data.main;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="font-nexa text-7xl font-bold">{formatTemperature(temp)}</p>

      <div className="space-y-1">
        <p className="text-muted-foreground text-sm font-medium">
          Feels like {formatTemperature(feels_like)}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium">
          <p className="flex items-center gap-1 text-blue-500">
            <ArrowDown className="size-3" />
            <span>{formatTemperature(temp_min)}</span>
          </p>

          <p className="flex items-center gap-1 text-red-500">
            <ArrowUp className="size-3" />
            <span>{formatTemperature(temp_max)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

CurrentWeather.Stats = function Stats() {
  const { data } = useCurrentWeatherContext();
  const { humidity } = data.main;
  const { speed } = data.wind;

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-1 items-center gap-2">
        <Droplets className="size-4 text-blue-500" />
        <p className="flex flex-col space-y-0.5">
          <span className="text-sm font-medium">Humidity</span>
          <span className="text-muted-foreground text-sm">{humidity}%</span>
        </p>
      </div>

      <div className="flex flex-1 items-center gap-2">
        <Wind className="size-4 text-blue-500" />
        <p className="flex flex-col space-y-0.5">
          <span className="text-sm font-medium">Wind Speed</span>
          <span className="text-muted-foreground text-sm">{speed} m/s</span>
        </p>
      </div>
    </div>
  );
};

CurrentWeather.Icon = function Icon() {
  const { data } = useCurrentWeatherContext();
  const { icon, description } = data.weather[0];

  return (
    <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center">
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={description}
        aria-labelledby="weather-description"
        className="size-full object-contain"
      />
      <div className="absolute bottom-0 text-center">
        <p id="weather-description" className="text-sm font-medium capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};
