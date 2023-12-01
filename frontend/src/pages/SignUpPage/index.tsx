import { SignupCard } from '@/components/organisms/SignupCard'
import { AuthTemplate } from '@/components/templates/AuthTemplate'
import useManualLogin from '../../hooks/useAuth0Client'
import { useNavigate } from 'react-router-dom'
import { EXIST_CANDIDATES } from '@/strings/constant'

const SignUpPage = () => {
  const navigate = useNavigate()
  const { handleSignUp } = useManualLogin()
  const handleSubmit = async (email: string, password: string) => {
    const user = await handleSignUp({ email, password })
    if (user) {
      navigate('/dashboard')
    } else {
      window.alert(EXIST_CANDIDATES)
      navigate('/login')
    }
  }
  return (
    <AuthTemplate>
      <SignupCard
        handleSignup={handleSubmit}
        handleSignin={() => {
          navigate('/login')
        }}
      ></SignupCard>
    </AuthTemplate>
  )
}

export default SignUpPage
