import { ReactNode } from 'react'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate()

  return (
    <>
      <AuthenticatedTemplate>
        {children}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div className="flex flex-col items-center justify-center min-h-screen">    
            
          <button 
            onClick={() => navigate('/login')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Fazer Login
          </button>
        </div>
      </UnauthenticatedTemplate>
    </>
  )
}