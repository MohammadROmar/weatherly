import { RefreshCw } from 'lucide-react';

import { useWeatherDataContext } from '../store/weather/hooks';
import LoadingSkeleton from './LoadingSkeleton';
import WeatherCard from './CurrentWeatherInfo';
import { NoLocation } from './WeatherErrors';

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
      <NoLocation
        title="Error"
        description="Failed to fetch weather data. Please try again."
        action="Retry"
        icon={RefreshCw}
        getLocation={getLocation}
      />
    );
  }

  const locationData = locationQuery.data?.[0];

  return (
    <div className="grid gap-6">
      <div>
        <WeatherCard
          weatherData={weatherQuery.data ? weatherQuery.data : undefined}
          locationData={locationData}
        />
      </div>
      <div></div>
    </div>
  );
}

export default WeatherInfo;
