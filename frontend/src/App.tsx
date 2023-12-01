import { useAuth0 } from '@auth0/auth0-react'
import SignInPage from './pages/SignInPage'
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import SignUpPage from './pages/SignUpPage'
import { Icon } from './components/atoms/Icon'
const UnAuthenticateRoute = () => {
  const { isAuthenticated } = useAuth0()
  if (!isAuthenticated) {
    return <Outlet />
  }
  return <Navigate to="/dashboard" />
}

const AuthenticateRoute = () => {
  const { isAuthenticated } = useAuth0()
  const user = localStorage.getItem('user')
  if (isAuthenticated || user) {
    return <Outlet />
  }
  return <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticateRoute />,
    children: [
      {
        path: 'dashboard',
        element: <Icon />, // will change this to dashboard component
      },
    ],
  },

  {
    path: '/',
    element: <UnAuthenticateRoute />,
    children: [
      {
        path: 'login',
        element: <SignInPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
    ],
  },
])

export const App = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()
  const setTokenToLocalStorage = useCallback(async () => {
    const token = await getAccessTokenSilently()
    localStorage.setItem('token', token)
  }, [getAccessTokenSilently])
  useEffect(() => {
    if (isAuthenticated) {
      setTokenToLocalStorage()
    }
  }, [isAuthenticated, setTokenToLocalStorage])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
