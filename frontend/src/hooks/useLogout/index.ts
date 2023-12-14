import { useAuthContext } from '@/context/AuthContext'
import { useAuth0 } from '@auth0/auth0-react'

const useLogout = () => {
  const { logout } = useAuth0()
  const { setIsAuthenticate } = useAuthContext()
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin + '/login',
      },
    })
    localStorage.clear()
    setIsAuthenticate(false)
  }
  return handleLogout
}

export default useLogout
