import { ButtonComponent } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import CheckboxLabels from '@/components/molecules/CheckBoxLabel'
import InputFieldWithTypography from '@/components/molecules/InputFieldWithTypograhy'
import { Box, Divider, styled } from '@mui/material'
import Google from '@Assets/icons/googleLogo.svg'
import Github from '@Assets/icons/github.svg'
import theme from '@/themes'
import {
  DONT_HAVE_ACCOUNT,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDR,
  FORGT_PASSWORD,
  INVALID_EMAIL_FORMAT,
  OR,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
  PLEASE_ENTER_CREDENTIALS,
  REMEMBER_ME,
  SIGN_IN,
  SIGN_IN_WITH_GITHUB,
  SIGN_IN_WITH_GOOGLE,
  SIGN_UP,
} from '@/strings/constant'
import { useAuthState } from './hook'
import { ChangeEvent, useState } from 'react'

export interface SiginProps {
  handleSignup?: () => void
  handleForgotpassword?: () => void
  handleSignin: (email: string, password: string) => void
  handleAuth?: () => void
}
export const Wrapper = styled(Box)({
  width: '480px',
  padding: '40px 50px 50px 50px',
  boxShadow: `0px 4px 28px 0px ${theme.palette.shadow.SHADOW_GEAY}`,
  border: '6px',
  height: '672px',
  backgroundColor: `${theme.palette.structural.STRUCTURAL_WHITE}`,
})
export const HeadingWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})
export const InputWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  paddingTop: '25px',
})
export const CheckboxWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '10px 0 0 0',
  alignItems: 'center',
  margin: '0 0 0 -10px',
})
export const ButtonWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '8px',
  gap: '20px',
})
export const TypoWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '30px',
  gap: '2px',
  justifyContent: 'center',
})

export const SigninCard = ({
  handleAuth,
  handleForgotpassword,
  handleSignin,
  handleSignup,
}: SiginProps) => {
  const {
    email,
    isValidEmail,
    password,
    isValidPassword,
    handleEmailChange,
    handlePasswordChange,
  } = useAuthState()
  const isButtonDisabled =
    isValidEmail && isValidPassword && email.length > 0 && password.length > 0
  const [checked, setChecked] = useState<boolean>(false)
  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <>
      {' '}
      <Wrapper>
        <HeadingWrapper>
          <Typography variant="h1" color={theme.palette.text.highEmphasis}>
            {SIGN_IN}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.mediumEmphasis}>
            {PLEASE_ENTER_CREDENTIALS}
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
            type={'password'}
            onChange={handlePasswordChange}
            label={PASSWORD_LABEL}
            placeholder={PASSWORD_PLACEHOLDER}
            typovariant="caption1"
            value={password}
          />
        </InputWrapper>
        <CheckboxWrapper>
          <CheckboxLabels
            label={REMEMBER_ME}
            checked={checked}
            onChange={handleChecked}
          />
          <Typography
            variant="body1"
            color={theme.palette.primary[500]}
            style={{ cursor: 'pointer' }}
            onClick={handleForgotpassword}
          >
            {FORGT_PASSWORD}
          </Typography>
        </CheckboxWrapper>
        <ButtonWrapper>
          <ButtonComponent
            buttonVariant="contained"
            buttonText={SIGN_IN}
            buttonHeight="44px"
            borderRadius={4}
            backgroundColor={
              isButtonDisabled
                ? theme.palette.primary[500]
                : theme.palette.primary[400]
            }
            onClick={() => handleSignin(email, password)}
            disabled={!isButtonDisabled}
            buttonTextColor={theme.palette.structural.STRUCTURAL_WHITE}
          />
          <Divider style={{ padding: '8px 0px' }}>
            {
              <Typography
                variant="body2"
                color={theme.palette.text.mediumEmphasis}
              >
                {OR}
              </Typography>
            }
          </Divider>
          <ButtonComponent
            buttonVariant="outlined"
            buttonText={SIGN_IN_WITH_GOOGLE}
            buttonIcon={<Icon alt="Google Icon" src={Google} />}
            buttonHeight="48px"
            buttonBorder={`1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`}
            buttonTextColor={theme.palette.text.highEmphasis}
            borderRadius={4}
            backgroundColor={theme.palette.structural.STRUCTURAL_WHITE}
            onClick={handleAuth}
          />
          <ButtonComponent
            buttonVariant="outlined"
            buttonText={SIGN_IN_WITH_GITHUB}
            buttonIcon={<Icon alt="Github Icon" src={Github} />}
            buttonHeight="48px"
            buttonBorder={`1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`}
            buttonTextColor={theme.palette.text.highEmphasis}
            borderRadius={4}
            backgroundColor={theme.palette.structural.STRUCTURAL_WHITE}
          />
        </ButtonWrapper>
        <TypoWrapper>
          <Typography variant="body1" color={theme.palette.text.mediumEmphasis}>
            {DONT_HAVE_ACCOUNT}
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.primary[500]}
            style={{ cursor: 'pointer' }}
            onClick={handleSignup}
          >
            {SIGN_UP}
          </Typography>
        </TypoWrapper>
      </Wrapper>
    </>
  )
}
