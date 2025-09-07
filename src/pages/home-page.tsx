import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">POC SSO</h1>
      <div className="card">
        <AuthenticatedTemplate>
          <p>Você está <b>autenticado</b>!</p>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p> Você<b> não</b> está autenticado .</p>
        </UnauthenticatedTemplate>
      </div>
    </div>
  )
}

export default HomePage