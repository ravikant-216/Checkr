import { useAuth0 } from '@auth0/auth0-react'

const useGoogleLogin = () => {
  const { loginWithRedirect } = useAuth0()
  const handleGoogleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'google-oauth2',
      },
    })
  }
  return handleGoogleLogin
}

export default useGoogleLogin
