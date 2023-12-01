import { SigninCard } from '@/components/organisms/SigninCard'
import { AuthTemplate } from '@/components/templates/AuthTemplate'
import useManualLogin from '../../hooks/useAuth0Client'
import useGoogleLogin from '@/hooks/useGoogleLogin'
import { useNavigate } from 'react-router-dom'
import { WRONG_CREDENTIALS } from '@/strings/constant'

const SignInPage = () => {
  const navigate = useNavigate()
  const { handleLogin } = useManualLogin()
  const handleSubmit = async (email: string, password: string) => {
    const user = await handleLogin({ email, password })
    if (user) {
      navigate('/dashboard')
    } else {
      window.alert(WRONG_CREDENTIALS)
      navigate('/login')
    }
  }
  const handleGoogleLogin = useGoogleLogin()
  return (
    <AuthTemplate>
      <SigninCard
        handleSignin={handleSubmit}
        handleAuth={handleGoogleLogin}
        handleSignup={() => navigate('/sign-up')}
        handleForgotpassword={() => navigate('/forgot-password')}
      ></SigninCard>
    </AuthTemplate>
  )
}

export default SignInPage
