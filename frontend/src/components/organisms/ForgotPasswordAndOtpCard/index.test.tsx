import { fireEvent, render, screen } from '@testing-library/react'
import ForgotPassword from '.'
import {
  CONTINUE,
  EMAIL_NOT_EXIST,
  EMAIL_PLACEHOLDER,
  GO_BACK,
  INVALID_EMAIL,
  RESET_PASSWORD,
} from '@/strings/constant'
import { ThemeProvider } from '@emotion/react'
import theme from '@/themes'

jest.mock('mui-one-time-password-input', () => ({
  __esModule: true,
  MuiOtpInput: () => <input type="text" data-testid="otp" />,
}))

const renderWithThemeProvider = (Element: React.ReactNode) => {
  render(<ThemeProvider theme={theme}>{Element}</ThemeProvider>)
}

describe('Forgot Password And Send otp test', () => {
  test('Cheking Forgot Password Properly Render ot not', () => {
    const handleSubmit = jest.fn()
    const handleBack = jest.fn()
    renderWithThemeProvider(
      <ForgotPassword
        varient="forgotPassword"
        handleSubmit={handleSubmit}
        handleBackButton={handleBack}
      />
    )
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    fireEvent.change(emailInput, { target: { value: 'aritra@gmail.com' } })
    fireEvent.click(screen.getByText(RESET_PASSWORD))
    expect(handleSubmit).toBeCalled()
    fireEvent.click(screen.getByText(GO_BACK))
    expect(handleBack).toBeCalled()
  })

  test('Invalid Email Then it will show invalid email message', () => {
    const handleSubmit = jest.fn()
    const handleBack = jest.fn()
    renderWithThemeProvider(
      <ForgotPassword
        varient="forgotPassword"
        handleSubmit={handleSubmit}
        handleBackButton={handleBack}
      />
    )
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    fireEvent.change(emailInput, { target: { value: 'aritra' } })
    screen.getByText(INVALID_EMAIL)
  })

  test('Cheking Verify Otp', () => {
    const handleSubmit = jest.fn()
    const handleBack = jest.fn()
    renderWithThemeProvider(
      <ForgotPassword
        varient="verifyOtp"
        handleSubmit={handleSubmit}
        handleBackButton={handleBack}
      />
    )
    const otp = screen.getByTestId('otp')
    fireEvent.change(otp, { target: { value: '1234' } })
    fireEvent.click(screen.getByText(CONTINUE))
  })

  test('Testing Invalid Email Message', () => {
    const handleSubmit = jest.fn()
    const handleBack = jest.fn()
    const handleResetError = jest.fn()
    renderWithThemeProvider(
      <ForgotPassword
        varient="forgotPassword"
        handleSubmit={handleSubmit}
        handleBackButton={handleBack}
        hasEmailEror={false}
        handleResetError={handleResetError}
      />
    )
    screen.findByText(EMAIL_NOT_EXIST)
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    fireEvent.change(emailInput, { target: { value: 'aritra@gmail.com' } })
    expect(handleResetError).toHaveBeenCalled()
  })
})
