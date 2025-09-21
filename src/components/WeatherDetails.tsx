import { useWeatherDataContext } from '../store/weather/hooks';
import { getWeatherDetailsData } from '../utils/getWeatherDetailsData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function WeatherDetails() {
  const { weatherQuery } = useWeatherDataContext();

  const weatherData = weatherQuery.data;

  let content = <p>No data available</p>;

  if (weatherData) {
    const details = getWeatherDetailsData(weatherData);

    content = (
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {details.map((detail) => (
          <li
            key={detail.title}
            className="flex items-center gap-3 rounded-lg border p-4"
          >
            <detail.icon className={`size-5 ${detail.color}`} />
            <div>
              <h4 className="text-sm leading-none font-medium">
                {detail.title}
              </h4>
              <p className="text-muted-foreground text-sm">{detail.value}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3 className="font-nexa">Weather Details</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
