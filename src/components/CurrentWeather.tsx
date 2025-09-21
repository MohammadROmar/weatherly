import type { PropsWithChildren } from 'react';

import {
  CurrentWeatherContext,
  useCurrentWeatherContext,
} from '../store/current-weather';
import { useWeatherDataContext } from '../store/weather/hooks';
import Temperature from './Temperature';
import HumidityNWindSpeed from './HumidityNWindSpeed';
import { Card, CardContent } from './ui/card';
import { formatTemperature } from '../utils/formatTemperature';

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
        <h3 className="font-nexa text-xl font-semibold">{location.name}</h3>
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

        <Temperature
          min={temp_min}
          max={temp_max}
          className="gap-2 text-sm font-medium"
        />
      </div>
    </div>
  );
};

CurrentWeather.Stats = function Stats() {
  const { data } = useCurrentWeatherContext();
  const { humidity } = data.main;
  const { speed } = data.wind;

  return <HumidityNWindSpeed humidity={humidity} speed={speed} />;
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
