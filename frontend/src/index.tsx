import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './themes'
import { Auth0Provider } from '@auth0/auth0-react'
const root = document.getElementById('root')

if (root !== null) {
  createRoot(root).render(
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN!}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
        authorizationParams={{
          redirect_uri: window.location.origin + '/login',
          audience: process.env.REACT_APP_AUTH0_AUDIENCE!,
        }}
      >
        <App />
      </Auth0Provider>
    </ThemeProvider>
  )
}
