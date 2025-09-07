// import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
// import { loginRequest } from '../auth/auth-config';

// function HomePage() {

//     const { instance } = useMsal();
//     const activeAccount = instance.getActiveAccount();
  
//     const handleLoginRedirect = () => {
//       instance
//         .loginRedirect({
//           ...loginRequest,
//           prompt: 'create',
//         })
//         .catch((error: any) => {
//           console.error(error);
//           throw error;
//         });
//     };
  
//     const handleLogoutRedirect = () => {
//       instance.logoutRedirect({
//         postLogoutRedirectUri: '/',
//       });
//     };


//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold mb-8">POC SSO</h1>
//       <div className="card">
//         <AuthenticatedTemplate>
//           <p>Você está <b>autenticado</b>!</p>
//         </AuthenticatedTemplate>
//         <UnauthenticatedTemplate>
//           <p> Você<b> não</b> está autenticado .</p>
//         </UnauthenticatedTemplate>
//         <UnauthenticatedTemplate>
//           <button className="btn btn-ghost btn-sm" onClick={handleLoginRedirect}>Login</button>
//         </UnauthenticatedTemplate>
//       </div>
//     </div>
//   )
// }

// export default HomePage

import { useMsal } from '@azure/msal-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIsAuthenticated } from '@azure/msal-react'

export const Login = () => {
  const { instance } = useMsal()
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  const handleLogin = () => {
    instance.loginRedirect({
      scopes: ['user.read']
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Entrar com Microsoft
      </button>
    </div>
  )
}

export default Login