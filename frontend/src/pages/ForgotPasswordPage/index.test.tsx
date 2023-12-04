import { act, fireEvent, render, screen } from '@testing-library/react'
import ForgotPasswordPage from '.'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from '@/themes'
import { EMAIL_PLACEHOLDER, GO_BACK, RESET_PASSWORD } from '@/strings/constant'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))
jest.mock('mui-one-time-password-input', () => ({
  __esModule: true,
  MuiOtpInput: () => <input type="text" />,
}))
const renderWithThemeProvider = (Element: React.ReactNode) => {
  render(<ThemeProvider theme={theme}>{Element}</ThemeProvider>)
}
describe('ForgotPasswordPage', () => {
  const mockNavigate = jest.fn()

  beforeEach(() => {
    ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)
  })

  it('calls handleSubmit and navigate when form is submitted', async () => {
    renderWithThemeProvider(<ForgotPasswordPage />)
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    fireEvent.change(emailInput, { target: { value: 'aritra@gmail.com' } })
    fireEvent.click(screen.getByText(RESET_PASSWORD))
    await act(() => new Promise((r) => setTimeout(r, 3300)))
    expect(mockNavigate).toHaveBeenCalledWith('/otp-verify')
  })

  it('navigates to /login when handleBackButton is called', () => {
    renderWithThemeProvider(<ForgotPasswordPage />)
    fireEvent.click(screen.getByText(GO_BACK))
    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })
})
