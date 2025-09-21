import { useWeatherDataContext } from '../store/weather/hooks';
import TemperatureChart from './TemperatureChart';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { formateOpenWeatherMap } from '../utils/formateOpenWeatherMapDate';

function HourlyTemperature() {
  const { forecastQuery } = useWeatherDataContext();

  let content = <p>No data available</p>;

  if (forecastQuery.data) {
    const forecastData = forecastQuery.data.list.slice(0, 8).map((item) => ({
      time: formateOpenWeatherMap(item.dt),
      temperature: Math.round(item.main.temp),
      feels_like: Math.round(item.main.feels_like),
    }));

    content = (
      <div className="h-[200px] w-full">
        <TemperatureChart forecastData={forecastData} />
      </div>
    );
  }

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>
          <h3 className="font-nexa">Today's Temperature</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default HourlyTemperature;
