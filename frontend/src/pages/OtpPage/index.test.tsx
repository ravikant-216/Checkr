import { fireEvent, render, screen } from '@testing-library/react'
import OtpPage from '.'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from '@/themes'
import { CONTINUE, GO_BACK } from '@/strings/constant'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))
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
    ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)
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
})
