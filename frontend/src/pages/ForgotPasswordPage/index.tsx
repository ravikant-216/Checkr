import { useState } from 'react'
import ForgotPassword from '@/components/organisms/ForgotPasswordAndOtpCard'
import { AuthTemplate } from '@/components/templates/AuthTemplate'
import { useNavigate } from 'react-router-dom'
import StatusModal from '@/components/molecules/StatusModal'
import theme from '@/themes'
import { OTP_MESSAGE } from '@/strings/constant'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleSubmit = () => {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
      navigate('/otp-verify')
    }, 3300)
  }

  return (
    <AuthTemplate>
      <ForgotPassword
        varient="forgotPassword"
        height="90vh"
        handleSubmit={handleSubmit}
        handleBackButton={() => navigate('/login')}
        sx={{
          width: theme.spacing(120),
          padding: theme.spacing(10, 12.5, 12.5, 12.5),
          boxShadow: `0px 4px 28px 0px ${theme.palette.shadow.SHADOW_GEAY}`,
          border: theme.spacing(0.75),
          height: theme.spacing(168),
          backgroundColor: `${theme.palette.structural.STRUCTURAL_WHITE}`,
        }}
      ></ForgotPassword>

      <StatusModal open={open} message={OTP_MESSAGE} />
    </AuthTemplate>
  )
}

export default ForgotPasswordPage
