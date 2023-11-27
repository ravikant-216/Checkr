import { ButtonComponent } from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import CheckboxLabels from '@/components/molecules/CheckBoxLabel'
import InputFieldWithTypography from '@/components/molecules/InputFieldWithTypograhy'
import { Box, styled } from '@mui/material'
import theme from '@/themes'
import { useState } from 'react'
import { PASSWORD_REGEX } from '@/utils/regex'
import {
  ALREADY_MEMBERS_LABEL,
  CHECK_BOX_LABEL,
  CONFIRM_PASSWORD,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDR,
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_LABEL,
  PASSWORD_DOESNOT_MATCH,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
  PLEASE_SIGN_UP,
  PRIVACY_POLICY_LABEL,
  SIGN_IN_BUTTON,
  SIGN_UP,
} from '@/strings/constant'
import { useAuthState } from '../SigninCard/hook'
import {
  CheckboxWrapper,
  HeadingWrapper,
  InputWrapper,
  TypoWrapper,
  Wrapper,
} from '../SigninCard'

export interface SignupProps {
  handleSignup?: () => void
  handleSignin?: () => void
}

const ButtonsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '20px',
  gap: '20px',
})

export const SignupCard = ({ handleSignin, handleSignup }: SignupProps) => {
  const {
    email,
    isValidEmail,
    password,
    isValidPassword,
    handleEmailChange,
    handlePasswordChange,
  } = useAuthState()
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [isValidConfirmPassword, setIsValidConfirmPassword] =
    useState<boolean>(true)
  const hanldeConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPassword = event.target.value
    setConfirmPassword(confirmPassword)
    setIsValidConfirmPassword(PASSWORD_REGEX.test(confirmPassword))
  }
  const isPasswordError = () => {
    return (
      !isValidConfirmPassword ||
      (confirmPassword !== password && confirmPassword.length > 0)
    )
  }

  const isButtonDisabled =
    isValidEmail &&
    isValidPassword &&
    isValidConfirmPassword &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0 &&
    confirmPassword == password
  return (
    <>
      {' '}
      <Wrapper>
        <HeadingWrapper>
          <Typography variant="h1" color={theme.palette.text.highEmphasis}>
            {SIGN_UP}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.mediumEmphasis}>
            {PLEASE_SIGN_UP}
          </Typography>
        </HeadingWrapper>
        <InputWrapper>
          <InputFieldWithTypography
            error={!isValidEmail}
            helperText={!isValidEmail ? INVALID_EMAIL_FORMAT : ''}
            type={'text'}
            onChange={handleEmailChange}
            label={EMAIL_LABEL}
            placeholder={EMAIL_PLACEHOLDR}
            typovariant="caption1"
            value={email}
          />
          <InputFieldWithTypography
            error={!isValidPassword}
            helperText={!isValidPassword ? INVALID_PASSWORD_LABEL : ''}
            type={'password'}
            onChange={handlePasswordChange}
            label={PASSWORD_LABEL}
            placeholder={PASSWORD_PLACEHOLDER}
            typovariant="caption1"
            value={password}
            data-testid="password-input"
          />
          <InputFieldWithTypography
            error={isPasswordError()}
            helperText={isPasswordError() ? PASSWORD_DOESNOT_MATCH : ''}
            type={'password'}
            onChange={hanldeConfirmPasswordChange}
            label={CONFIRM_PASSWORD}
            placeholder={PASSWORD_PLACEHOLDER}
            typovariant="caption1"
            value={confirmPassword}
            data-testid="confirm-password-input"
          />
        </InputWrapper>
        <CheckboxWrapper>
          <CheckboxLabels label={CHECK_BOX_LABEL} checked={false} />
          <Typography
            variant="body1"
            color={theme.palette.primary[500]}
            style={{ cursor: 'pointer' }}
          >
            {PRIVACY_POLICY_LABEL}
          </Typography>
        </CheckboxWrapper>
        <ButtonsWrapper>
          <ButtonComponent
            buttonVariant="contained"
            buttonText={SIGN_UP}
            buttonHeight="44px"
            borderRadius={4}
            backgroundColor={
              isButtonDisabled
                ? theme.palette.primary[500]
                : theme.palette.primary[400]
            }
            onClick={handleSignup}
            disabled={!isButtonDisabled}
            buttonTextColor={theme.palette.structural.STRUCTURAL_WHITE}
            data-testid="signup-button"
          />
        </ButtonsWrapper>
        <TypoWrapper>
          <Typography variant="body1" color={theme.palette.text.mediumEmphasis}>
            {ALREADY_MEMBERS_LABEL}
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.primary[500]}
            style={{ cursor: 'pointer' }}
            onClick={handleSignin}
          >
            {SIGN_IN_BUTTON}
          </Typography>
        </TypoWrapper>
      </Wrapper>
    </>
  )
}
