import { useState } from 'react';
import { useForecasts } from '../hooks/use-student'
import { Forecast } from '../services/forecast-api'

function ForecastPage() {
  const { data: students, isLoading, error } = useForecasts()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Ocorreu um erro: {error.message}</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Temperaturas</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Situação</th>
              <th>Cº</th>
              <th>Fº</th>

            </tr>
          </thead>
          <tbody>
            {students?.map((forecast: Forecast) => (
              <tr key={forecast.id}>
                  <td>{forecast.id}</td>
                <td>{forecast.date.toString()}</td>
                <td>{forecast.summary}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ForecastPage