import { useAuth0 } from '@auth0/auth0-react'

const useLogout = () => {
  const { logout } = useAuth0()
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin + '/login',
      },
    })
    localStorage.removeItem('user')
  }
  return handleLogout
}

export default useLogout
