import { WeatherDataContextProvider } from '../store/weather';
import HomePageContent from '../components/HomePageContent';

export default function HomePage() {
  return (
    <WeatherDataContextProvider>
      <HomePageContent />
    </WeatherDataContextProvider>
  );
}
