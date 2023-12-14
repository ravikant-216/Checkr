import { Box, Button, Stack, SxProps, styled, useTheme } from '@mui/material'
import LeftIcon from '@Assets/icons/Arrow_Back_Blue.svg'
import { Icon } from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import {
  CONTINUE,
  DONT_RECEIVE_OTP,
  EMAIL_PLACEHOLDER,
  FORGOT_PASSWORD,
  GO_BACK,
  INVALID_EMAIL,
  NO_WORRIES_WE_LLC,
  OTP_SENT,
  PLEASE_ENTER_OTP,
  RESEND_OTP,
  RESET_PASSWORD,
} from '@/strings/constant'
import InputFieldWithTypography from '@/components/molecules/InputFieldWithTypograhy'
import { ButtonComponent } from '@/components/atoms/Button'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react'
import { EMAIL_REGEX } from '@/utils/regex'

interface ForgotPasswordProps {
  varient: 'forgotPassword' | 'verifyOtp'
  handleSubmit: (val: string) => void
  handleBackButton: () => void
  sx?: SxProps
  height?: string
  width?: string
  hasEmailEror?: boolean
  handleResetError?: () => void
}

const StyledButton = styled(Button)({
  width: 'fit-content',
  marginLeft: -1,
})

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  boxShadow: `0px 4px 28px 0px ${theme.palette.shadow.SHADOW_GEAY}`,
  borderRadius: 1.5,
}))

const ForgotPassword = ({
  varient,
  handleSubmit,
  sx,
  height,
  width,
  handleBackButton,
  hasEmailEror,
  handleResetError,
}: ForgotPasswordProps) => {
  const theme = useTheme()
  const [value, setValue] = useState('')
  const [emailError, setEmailError] = useState<boolean>()

  const handleOtpChange = (otp: string) => {
    setValue(otp)
  }

  const handleForgotPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleResetError?.()
    setValue(e.target.value)
    if (!EMAIL_REGEX.test(e.target.value)) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }

  const handleOnSubmit = () => {
    setValue('')
    handleSubmit(value)
  }
  const helperText = hasEmailEror
    ? 'Email Not Exist'
    : emailError
    ? INVALID_EMAIL
    : ''

  return (
    <StyledBox width={width} height={height} px={12} py={6.75} sx={sx}>
      <Stack>
        <StyledButton
          startIcon={<Icon src={LeftIcon} alt="left" />}
          onClick={handleBackButton}
        >
          {GO_BACK}
        </StyledButton>
        <Stack gap={6}>
          <Stack gap={2}>
            <Typography variant="h1">
              {varient === 'forgotPassword'
                ? FORGOT_PASSWORD
                : PLEASE_ENTER_OTP}
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.text.mediumEmphasis}
            >
              {varient === 'forgotPassword' ? NO_WORRIES_WE_LLC : OTP_SENT}
            </Typography>
          </Stack>
          {varient === 'forgotPassword' ? (
            <InputFieldWithTypography
              type="email"
              label="Email"
              onChange={handleForgotPassword}
              helperText={helperText}
              error={emailError || hasEmailEror}
              placeholder={EMAIL_PLACEHOLDER}
              value={value}
            />
          ) : (
            <MuiOtpInput value={value} onChange={handleOtpChange} />
          )}
          <ButtonComponent
            onClick={handleOnSubmit}
            disabled={emailError ?? value.length < 4}
            buttonText={
              varient === 'forgotPassword' ? RESET_PASSWORD : CONTINUE
            }
            buttonVariant="contained"
          />
          {varient === 'verifyOtp' && (
            <Stack direction="row" gap={1} justifyContent="center">
              <Typography>{DONT_RECEIVE_OTP}</Typography>
              <Typography color={theme.palette.primary[500]} display="inline">
                {RESEND_OTP}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </StyledBox>
  )
}

export default ForgotPassword
