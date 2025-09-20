import { MapPin, RefreshCw } from 'lucide-react';

import { useWeatherDataContext } from '../store/weather/hooks';
import LoadingSkeleton from '../components/LoadingSkeleton';
import WeatherInfo from '../components/WeatherInfo';
import { NoLocation, LocationError } from './WeatherErrors';
import { Button } from '../components/ui/button';

type WeatherHeadingProps = { handleRefresh: () => void; isFetching: boolean };

export default function HomePageContent() {
  const { handleRefresh, geolocation } = useWeatherDataContext();

  const { coordinates, error, isLoading, getLocation } = geolocation;
  const isFetching = false;

  if (isLoading) {
    return (
      <section className="space-y-6">
        <WeatherHeading isFetching={isFetching} handleRefresh={handleRefresh} />
        <LoadingSkeleton />
      </section>
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
    <section className="space-y-6">
      <WeatherHeading isFetching={isFetching} handleRefresh={handleRefresh} />
      <WeatherInfo getLocation={getLocation} />
    </section>
  );
}

function WeatherHeading({ handleRefresh, isFetching }: WeatherHeadingProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-nexa text-left text-xl">My Location</h2>
      <Button
        aria-label="Refresh"
        size="icon"
        variant="outline"
        onClick={handleRefresh}
        disabled={isFetching}
      >
        <RefreshCw className={`size-4 ${isFetching ? 'animate-spin' : ''}`} />
      </Button>
    </div>
  );
}
