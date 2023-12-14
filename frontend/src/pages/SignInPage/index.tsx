import { SigninCard } from '@/components/organisms/SigninCard'
import { AuthTemplate } from '@/components/templates/AuthTemplate'
import useManualLogin from '../../hooks/useAuth0Client'
import useGoogleLogin from '@/hooks/useGoogleLogin'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignInPage = () => {
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false)
  const navigate = useNavigate()
  const { handleLogin } = useManualLogin()
  const handleSubmit = async (email: string, password: string) => {
    const user = await handleLogin({ email, password })
    setInvalidCredentials(false)
    if (user) {
      navigate('/dashboard')
    } else {
      setInvalidCredentials(true)
    }
  }
  const handleGoogleLogin = useGoogleLogin()
  const inputHandleChange = () => {
    setInvalidCredentials(false)
  }
  return (
    <AuthTemplate>
      <SigninCard
        handleSignin={handleSubmit}
        handleAuth={handleGoogleLogin}
        handleSignup={() => navigate('/sign-up')}
        handleForgotpassword={() => navigate('/forgot-password')}
        invalidCredentials={invalidCredentials}
        inputHandleChange={inputHandleChange}
      ></SigninCard>
    </AuthTemplate>
  )
}

export default SignInPage
