import SignInPage from './pages/SignInPage'
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import CandidateDetailPage from './pages/CandidateDetailPage'
import CandidatePage from './pages/CandidatePage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import OtpPage from './pages/OtpPage'
import { PreAdverseActionPage } from './pages/PreAdverseActionPage'
import { AdverseActionPage } from './pages/AdverseActionPage'
import { useAuthContext } from './context/AuthContext'

const UnAuthenticateRoute = () => {
  const { isAuthenticate } = useAuthContext()
  if (isAuthenticate) {
    return <Navigate to="/dashboard" />
  }
  return <Outlet />
}

const AuthenticateRoute = () => {
  const { isAuthenticate } = useAuthContext()
  if (isAuthenticate) {
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
        element: <CandidatePage />, // will change this to dashboard component
      },
      {
        path: 'candidate/:id',
        element: <CandidateDetailPage />,
      },
      {
        path: 'pre-adverse-action',
        element: <PreAdverseActionPage />,
      },
      {
        path: 'adverse-action',
        element: <AdverseActionPage />,
      },
      {
        path: '*',
        element: <Navigate to="/dashboard" />,
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
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'otp-verify',
        element: <OtpPage />,
      },
      {
        path: '*',
        element: <Navigate to="/login" />,
      },
    ],
  },
])

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
