import { useSearchParams } from 'react-router-dom';

import { WeatherDataContextProvider } from '../store/weather';
import CityPageContent from '../components/CityPageContent';
import type { Coordinates } from '../api/models';

export default function CityPage() {
  const [searchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  const coordinates: Coordinates | null =
    lat && lon
      ? {
          lat: parseFloat(lat),
          lon: parseFloat(lon),
        }
      : null;

  return (
    <WeatherDataContextProvider coordinates={coordinates}>
      <CityPageContent />
    </WeatherDataContextProvider>
  );
}
