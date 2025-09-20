import { createContext, useContext } from 'react';

import type { GeocodeData, WeatherData } from '../api/models';

type WeatherContextState = {
  data: WeatherData;
  location?: GeocodeData;
};

export const CurrentWeatherContext = createContext<WeatherContextState | null>(
  null,
);

export function useCurrentWeatherContext() {
  const ctx = useContext(CurrentWeatherContext);
  if (!ctx)
    throw new Error('CurrentWeather.* must be used within <CurrentWeather>');
  return ctx;
}
