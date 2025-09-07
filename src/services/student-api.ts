import apiClient from './api-client';

export interface Forecast {
  id: string;
  date: Date;
  summary: string;
  temperatureC: string;
  temperatureF: string;
}

export const getStudents = async (): Promise<Forecast[]> => {
  const response = await apiClient(`/WeatherForecast`);
  return response.data;
};
