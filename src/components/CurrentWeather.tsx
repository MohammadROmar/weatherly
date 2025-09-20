import { ArrowDown, ArrowUp, Droplets, Wind } from 'lucide-react';

import {
  CurrentWeatherContext,
  useCurrentWeatherContext,
} from '../store/current-weather';
import type { GeocodeData, WeatherData } from '../api/models';
import { Card, CardContent } from './ui/card';
import { formatTemperature } from '../utils/formatTemperature';

type CurrentWeatherProps = {
  data?: WeatherData;
  locationData?: GeocodeData;
  children?: React.ReactNode;
};

export default function CurrentWeather({
  data,
  locationData,
  children,
}: CurrentWeatherProps) {
  if (!data) return <p>No temperature info</p>;

  return (
    <CurrentWeatherContext.Provider value={{ data, location: locationData }}>
      <Card className="overflow-hidden">
        <CardContent className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
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
      <div className="flex items-end gap-1">
        <h3 className="text-xl font-semibold">{location.name}</h3>
        {location.state && (
          <p className="text-muted-foreground">, {location.state}</p>
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
    <div className="flex items-center gap-2">
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
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2">
        <Droplets className="size-4 text-blue-500" />
        <p className="flex flex-col space-y-0.5">
          <span className="text-sm font-medium">Humidity</span>
          <span className="text-muted-foreground text-sm">{humidity}%</span>
        </p>
      </div>

      <div className="flex items-center gap-2">
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
