import type { DailyForecast, ForecastData } from '../api/models';

export function getDailyForecastData(forecastList: ForecastData['list']) {
  const dailyForecast = forecastList.reduce(
    (acc, forecast) => {
      const date = new Date(forecast.dt * 1000);
      const formattedDate = date.toLocaleDateString('en');

      if (!acc[formattedDate]) {
        acc[formattedDate] = {
          temp_min: forecast.main.temp_min,
          temp_max: forecast.main.temp_max,
          humidity: forecast.main.humidity,
          wind: forecast.wind.speed,
          weather: forecast.weather[0],
          date: forecast.dt,
        };
      } else {
        acc[formattedDate].temp_min = Math.min(
          acc[formattedDate].temp_min,
          forecast.main.temp_min,
        );
        acc[formattedDate].temp_max = Math.min(
          acc[formattedDate].temp_max,
          forecast.main.temp_max,
        );
      }

      return acc;
    },
    {} as Record<string, DailyForecast>,
  );

  const nextDays = Object.values(dailyForecast).slice(0, 6);

  return nextDays;
}
