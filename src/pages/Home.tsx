import { useGeolocation } from '../hooks/useGeolocation';
import { WeatherDataContextProvider } from '../store/weather';
import HomePageContent from '../components/HomePageContent';

export default function HomePage() {
  const { coordinates } = useGeolocation();

  return (
    <WeatherDataContextProvider coordinates={coordinates}>
      <HomePageContent />
    </WeatherDataContextProvider>
  );
}
