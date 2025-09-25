import { useQuery } from '@tanstack/react-query';

import { weatherAPI } from '../api/weather';
import type { Coordinates } from '../api/models';

export function useWeatherQuery(coordinates: Coordinates | null) {
  return useQuery({
    queryKey: ['weater', coordinates],
    queryFn: () =>
      coordinates ? weatherAPI.getCurrentWeather(coordinates) : null,
    enabled: !!coordinates,
  });
}

export function useForecastQuery(coordinates: Coordinates | null) {
  return useQuery({
    queryKey: ['forecast', coordinates],
    queryFn: () => (coordinates ? weatherAPI.getForecast(coordinates) : null),
    enabled: !!coordinates,
  });
}

export function useReverseGeocodeQuery(coordinates: Coordinates | null) {
  return useQuery({
    queryKey: ['location', coordinates],
    queryFn: () =>
      coordinates ? weatherAPI.reverseGeocode(coordinates) : null,
    enabled: !!coordinates,
  });
}

export function useSearchLocation(query: string) {
  return useQuery({
    queryKey: ['search-location', query],
    queryFn: () => weatherAPI.searchLocation(query),
    enabled: query.length >= 3,
  });
}
