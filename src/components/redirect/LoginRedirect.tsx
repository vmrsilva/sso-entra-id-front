import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIsAuthenticated } from '@azure/msal-react'

export const LoginRedirect = () => {
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return null
}