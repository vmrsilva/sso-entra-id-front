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

// export const getStudent = async (id: number): Promise<Student> => {
//   const response = await apiClient(`/students/${id}`);
//   return response.data;
// };

// export const createStudent = async (student: Student): Promise<Student> => {
//   const response = await apiClient.post(`/students`, student);
//   return response.data;
// };

// export const updateStudent = async (id: number, student: Student): Promise<Student> => {
//   const response = await apiClient.put(`/students/${id}`, student);
//   return response.data;
// };

// export const deleteStudent = async (id: number): Promise<void> => {
//   await apiClient.delete(`/students/${id}`);
// };