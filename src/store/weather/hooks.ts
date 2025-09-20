import { useContext } from 'react';

import { WeatherDataContext } from '.';

export function useWeatherDataContext() {
  const data = useContext(WeatherDataContext);

  if (!data) {
    throw new Error('Weather Data Context is null');
  }

  return data;
}
