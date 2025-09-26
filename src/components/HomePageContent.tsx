import { MapPin } from 'lucide-react';

import { useWeatherDataContext } from '../store/weather/hooks';
import LoadingSkeleton from '../components/LoadingSkeleton';
import FavoriteCities, { FavoritesSkeleton } from './FavoriteCities';
import WeatherHeading from './WeatherHeading';
import WeatherInfo from '../components/WeatherInfo';
import { NoLocation, LocationError } from './WeatherErrors';

export default function HomePageContent() {
  const { handleRefresh, geolocation } = useWeatherDataContext();

  const { coordinates, error, isLoading, getLocation } = geolocation;
  const isFetching = false;

  if (isLoading) {
    return (
      <>
        <FavoritesSkeleton />

        <section className="space-y-6">
          <WeatherHeading
            title="My Location"
            isFetching={isFetching}
            handleRefresh={handleRefresh}
          />
          <LoadingSkeleton />
        </section>
      </>
    );
  }

  if (error) {
    return <LocationError error={error} getLocation={getLocation} />;
  }

  if (!coordinates) {
    return (
      <section>
        <NoLocation
          title="Location Required"
          description="Please enable location access to see you local weather."
          action="Enable Location"
          icon={MapPin}
          getLocation={getLocation}
        />
      </section>
    );
  }

  return (
    <>
      <FavoriteCities />

      <section className="space-y-6">
        <WeatherHeading
          title="My Location"
          isFetching={isFetching}
          handleRefresh={handleRefresh}
        />
        <WeatherInfo getLocation={getLocation} />
      </section>
    </>
  );
}
