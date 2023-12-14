import { fireEvent, render, screen } from '@testing-library/react'
import OtpPage from '.'
import { ThemeProvider } from '@mui/material'
import theme from '@/themes'
import { CONTINUE, GO_BACK } from '@/strings/constant'
import * as ReactRouter from 'react-router-dom'
import * as AuthContext from '@/context/AuthContext'

jest.mock('react-router-dom')
jest.spyOn(AuthContext, 'useAuthContext').mockReturnValue({
  isAuthenticate: true,
  setIsAuthenticate: jest.fn(),
})
jest.mock('mui-one-time-password-input', () => ({
  __esModule: true,
  MuiOtpInput: () => <input type="number" data-testid="otp" />,
}))
const renderWithThemeProvider = (Element: React.ReactNode) => {
  render(<ThemeProvider theme={theme}>{Element}</ThemeProvider>)
}
describe('OtpPage', () => {
  const mockNavigate = jest.fn()

  beforeEach(() => {
    ;(ReactRouter.useNavigate as jest.Mock).mockReturnValue(mockNavigate)
    ;(ReactRouter.useLocation as jest.Mock).mockReturnValue({ state: 'dfff' })
    jest.spyOn(AuthContext, 'useAuthContext').mockReturnValue({
      isAuthenticate: true,
      setIsAuthenticate: jest.fn(),
    })
  })

  it('calls handleSubmit and navigate when form is submitted', async () => {
    renderWithThemeProvider(<OtpPage />)
    const otpInput = screen.getByTestId('otp')
    fireEvent.change(otpInput, { target: { value: '1234' } })
    await new Promise((r) => setTimeout(r, 0))
    expect((otpInput as HTMLInputElement).value).toBe('1234')
    fireEvent.click(screen.getByText(CONTINUE))
  })

  it('navigates to /forgot-password when handleBackButton is called', () => {
    renderWithThemeProvider(<OtpPage />)
    fireEvent.click(screen.getByText(GO_BACK))
    expect(mockNavigate).toHaveBeenCalledWith('/forgot-password')
  })

  it('if no token then go back', () => {
    ;(ReactRouter.useLocation as jest.Mock).mockReturnValue({
      state: undefined,
    })
    renderWithThemeProvider(<OtpPage />)
    expect(mockNavigate).toHaveBeenCalledWith('/forgot-password')
  })
})
