import CurrentWeather from './CurrentWeather';

export default function WeatherCard() {
  return (
    <CurrentWeather>
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
