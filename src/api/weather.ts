import { API_CONFIG } from './config';
import type {
  Coordinates,
  WeatherData,
  ForecastData,
  GeocodeData,
} from './models';

class WeatherAPI {
  private createURL(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });

    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.statusText}`);
    }

    const responseBody = await response.json();

    return responseBody;
  }

  async getCurrentWeather({ lat, lon }: Coordinates) {
    const url = this.createURL(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchData<WeatherData>(url);
  }

  async getForecast({ lat, lon }: Coordinates) {
    const url = this.createURL(`${API_CONFIG.BASE_URL}/forecast`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchData<ForecastData>(url);
  }

  async reverseGeocode({ lat, lon }: Coordinates) {
    const url = this.createURL(`${API_CONFIG.GEO}/reverse`, {
      lat: lat.toString(),
      lon: lon.toString(),
      limit: 1,
    });

    return this.fetchData<GeocodeData[]>(url);
  }

  async searchLocation(query: string) {
    const url = this.createURL(`${API_CONFIG.GEO}/direct`, {
      q: query,
      limit: 5,
    });

    return this.fetchData<GeocodeData[]>(url);
  }
}

const weatherAPI = new WeatherAPI();
export { weatherAPI };
