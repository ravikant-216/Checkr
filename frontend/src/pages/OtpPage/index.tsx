import ForgotPassword from '@/components/organisms/ForgotPasswordAndOtpCard'
import { AuthTemplate } from '@/components/templates/AuthTemplate'
import { useNavigate } from 'react-router-dom'
import theme from '@/themes'

const OtpPage = () => {
  const navigate = useNavigate()

  return (
    <AuthTemplate>
      <ForgotPassword
        varient="verifyOtp"
        height="90vh"
        handleSubmit={() => navigate('/login')}
        handleBackButton={() => navigate('/forgot-password')}
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
