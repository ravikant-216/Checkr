import ForgotPassword from '@/components/organisms/ForgotPasswordAndOtpCard'
import { AuthTemplate } from '@/components/templates/AuthTemplate'
import { useLocation, useNavigate } from 'react-router-dom'
import theme from '@/themes'
import { useCallback, useEffect } from 'react'
import { TOKEN } from '@/strings/constant'
import { useAuthContext } from '@/context/AuthContext'

const OtpPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const token = location?.state as string
  const { setIsAuthenticate } = useAuthContext()

  const handleBack = useCallback(() => {
    navigate('/forgot-password')
  }, [navigate])

  const handleSubmit = () => {
    localStorage.setItem(TOKEN, token)
    setIsAuthenticate(true)
    navigate('/dashboard')
  }

  useEffect(() => {
    if (!token) {
      handleBack()
    }
  }, [token, handleBack])

  return (
    <AuthTemplate>
      <ForgotPassword
        varient="verifyOtp"
        height="90vh"
        handleSubmit={handleSubmit}
        handleBackButton={handleBack}
        sx={{
          width: theme.spacing(120),
          padding: theme.spacing(10, 12.5, 12.5, 12.5),
          boxShadow: `0px 4px 28px 0px ${theme.palette.shadow.SHADOW_GEAY}`,
          border: theme.spacing(0.75),
          height: theme.spacing(168),
          backgroundColor: `${theme.palette.structural.STRUCTURAL_WHITE}`,
        }}
      ></ForgotPassword>
    </AuthTemplate>
  )
}

export default OtpPage
