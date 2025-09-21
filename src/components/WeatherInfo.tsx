import { RefreshCw } from 'lucide-react';

import { useWeatherDataContext } from '../store/weather/hooks';
import LoadingSkeleton from './LoadingSkeleton';
import HourlyTemperature from './HourlyTemperature';
import WeatherCard from './CurrentWeatherInfo';
import { NoLocation } from './WeatherErrors';
import WeatherDetails from './WeatherDetails';

type WeatherInfoProps = { getLocation: () => void };

function WeatherInfo({ getLocation }: WeatherInfoProps) {
  const { weatherQuery, forecastQuery, locationQuery } =
    useWeatherDataContext();

  if (
    weatherQuery.isPending ||
    forecastQuery.isPending ||
    locationQuery.isPending
  ) {
    return <LoadingSkeleton />;
  }

  if (weatherQuery.error || forecastQuery.error || locationQuery.error) {
    return (
      <section>
        <NoLocation
          title="Error"
          description="Failed to fetch weather data. Please try again."
          action="Retry"
          icon={RefreshCw}
          getLocation={getLocation}
        />
      </section>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 lg:flex-row">
        <WeatherCard />
        <HourlyTemperature />
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        <WeatherDetails />
      </div>
    </div>
  );
}

export default WeatherInfo;
