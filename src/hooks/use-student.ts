import { useQuery } from '@tanstack/react-query';
import { getForecast } from '../services/forecast-api';

export const useForecasts = () => {
  return useQuery({
    queryKey: ['students'],
    queryFn: getForecast
  });
};