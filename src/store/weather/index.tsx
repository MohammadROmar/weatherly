import { createContext, type PropsWithChildren } from 'react';

import { useGeolocation } from '../../hooks/useGeolocation';
import {
  useWeatherQuery,
  useForecastQuery,
  useReverseGeocodeQuery,
} from '../../hooks/weatherQueries';
import type { UseQueryResult } from '@tanstack/react-query';
import type {
  Coordinates,
  ForecastData,
  GeocodeData,
  WeatherData,
} from '../../api/models';

type WeatherDataContextState = {
  handleRefresh: () => void;
  weatherQuery: UseQueryResult<WeatherData | null, Error>;
  forecastQuery: UseQueryResult<ForecastData | null, Error>;
  locationQuery: UseQueryResult<GeocodeData[] | null, Error>;
  geolocation: ReturnType<typeof useGeolocation>;
} | null;

export const WeatherDataContext = createContext<WeatherDataContextState>(null);

type WeatherDataContextProviderProps = {
  coordinates: Coordinates | null;
} & PropsWithChildren;

export function WeatherDataContextProvider({
  coordinates,
  children,
}: WeatherDataContextProviderProps) {
  const geolocation = useGeolocation();
  const { getLocation } = geolocation;

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);

  function handleRefresh() {
    getLocation();

    if (coordinates) {
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  }

  return (
    <WeatherDataContext.Provider
      value={{
        handleRefresh,
        weatherQuery,
        forecastQuery,
        locationQuery,
        geolocation,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}
