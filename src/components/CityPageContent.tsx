import { useParams } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';

import { useWeatherDataContext } from '../store/weather/hooks';
import FavoriteButton from './FavoriteButton';
import LoadingSkeleton from './LoadingSkeleton';
import WeatherHeading from './WeatherHeading';
import WeatherInfo from './WeatherInfo';
import { NoLocation } from './WeatherErrors';

export default function CityPageContent() {
  const params = useParams();

  const { weatherQuery, forecastQuery } = useWeatherDataContext();

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <NoLocation
        title="Error"
        description="Failed to load weather data. Please try again."
        icon={RefreshCw}
        action="Try Again"
        getLocation={() => {
          weatherQuery.refetch();
          forecastQuery.refetch();
        }}
      />
    );
  }

  if (weatherQuery.isPending || forecastQuery.isPending || !params.cityName) {
    return <LoadingSkeleton />;
  }

  function handleRefresh() {
    weatherQuery.refetch();
    forecastQuery.refetch();
  }

  const isFetching = weatherQuery.isRefetching || forecastQuery.isRefetching;

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <WeatherHeading
            title={`${params.cityName}, ${weatherQuery.data?.sys.country}`}
            isFetching={isFetching}
          />
        </div>

        <FavoriteButton
          data={
            weatherQuery.data
              ? { ...weatherQuery.data, name: params.cityName }
              : null
          }
        />
      </div>
      <WeatherInfo getLocation={handleRefresh} />
    </section>
  );
}
