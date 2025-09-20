import CurrentWeather from './CurrentWeather';
import type { GeocodeData, WeatherData } from '../api/models';

export default function WeatherCard({
  weatherData,
  locationData,
}: {
  weatherData?: WeatherData;
  locationData?: GeocodeData;
}) {
  return (
    <CurrentWeather data={weatherData} locationData={locationData}>
      <div className="space-y-6">
        <CurrentWeather.LocationInfo />
        <CurrentWeather.TemperatureDisplay />
        <CurrentWeather.Stats />
      </div>

      <div className="flex flex-col items-center justify-center">
        <CurrentWeather.Icon />
      </div>
    </CurrentWeather>
  );
}
