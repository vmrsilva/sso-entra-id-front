import { useMsal, useIsAuthenticated } from '@azure/msal-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return { isAuthenticated }
}