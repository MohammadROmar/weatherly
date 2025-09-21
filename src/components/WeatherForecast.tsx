import { useWeatherDataContext } from '../store/weather/hooks';
import Temperature from './Temperature';
import HumidityNWindSpeed from './HumidityNWindSpeed';
import { getDailyForecastData } from '../utils/getDailyForecastData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function WeatherForecast() {
  const { forecastQuery } = useWeatherDataContext();

  const forecastData = forecastQuery.data;

  let content = <p>No data available</p>;

  if (forecastData) {
    const nextDaysData = getDailyForecastData(forecastData.list);

    content = (
      <ul className="space-y-4">
        {nextDaysData.map((day) => {
          const date = new Date(day.date);
          const formattedDate = date.toLocaleDateString('en', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          });

          return (
            <li
              key={day.date}
              className="grid grid-cols-3 items-center gap-4 rounded-lg border p-4 max-sm:grid-cols-1 md:max-lg:grid-cols-1"
            >
              <div>
                <h4 className="font-medium">
                  <time dateTime={date.toISOString()}>{formattedDate}</time>
                </h4>
                <p className="text-muted-foreground text-sm capitalize">
                  {day.weather.description}
                </p>
              </div>

              <Temperature
                min={day.temp_min}
                max={day.temp_max}
                className="justify-start"
              />
              <HumidityNWindSpeed humidity={day.humidity} speed={day.wind} />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3 className="font-nexa">5-Day Forecast</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
