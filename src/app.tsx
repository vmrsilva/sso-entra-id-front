import './app.css'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/home-page';
import ForecastPage from './pages/forecast-page';
import Header from './components/layout/header';
import Login from './pages/login';
import { ProtectedRoute } from './components/redirect/ProtectedRoute';
import { useIsAuthenticated } from '@azure/msal-react';

function App() {
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <>
      {/* <Header /> */}
      {isAuthenticated && !isLoginPage && <Header />}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          {/* Rota pública de login - redireciona se já estiver autenticado */}
          <Route path='login' element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login/>
          }/>
          
          {/* Rotas protegidas */}
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          
          <Route path="/forecast" element={
            <ProtectedRoute>
              <ForecastPage />
            </ProtectedRoute>
          } />
          
          {/* Redirecionamento para rotas não encontradas */}
          <Route path="*" element={
            <Navigate to={isAuthenticated ? "/" : "/login"} replace />
          } />
        </Routes>
      </main>
    </>
  );
}

export default App