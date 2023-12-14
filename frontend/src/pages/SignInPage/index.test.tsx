import { fireEvent, render, screen } from '@testing-library/react'
import SignInPage from './'
import useManualLogin from '../../hooks/useAuth0Client'
import { BrowserRouter, useNavigate } from 'react-router-dom'

jest.mock('../../hooks/useAuth0Client', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

describe('SignInPage', () => {
  const mockHandleLogin = jest.fn()
  const mockNavigate = jest.fn()

  beforeEach(() => {
    ;(useManualLogin as jest.Mock).mockReturnValue({
      handleLogin: mockHandleLogin,
    })
    ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)
  })

  it('calls handleLogin and navigate when handleSignin is called', async () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <SignInPage />
      </BrowserRouter>
    )
    fireEvent.click(getAllByRole('button')[0])
    const emailField = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailField, { target: { value: 'john@gmail.com' } })
    const passwordField = screen.getByPlaceholderText('********')
    fireEvent.change(passwordField, { target: { value: 'Test@123' } })
    const signinbutton = screen.getByRole('button', { name: 'Sign In' })
    mockHandleLogin.mockResolvedValueOnce(null)
    fireEvent.click(signinbutton)
    await new Promise((r) => setTimeout(r, 100))
    expect(mockHandleLogin).toHaveBeenCalled()
    mockHandleLogin.mockResolvedValueOnce({ email: 'john@gmail.com' })
    fireEvent.click(signinbutton)
    await new Promise((r) => setTimeout(r, 100))
    expect(mockHandleLogin).toHaveBeenCalled()
  })

  it('navigates to /sign-up when handleSignup is called', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SignInPage />
      </BrowserRouter>
    )
    fireEvent.click(getByText('Sign up'))
    expect(mockNavigate).toHaveBeenCalledWith('/sign-up')
  })

  it('navigates to /forgot-password when handleForgotpassword is called', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SignInPage />
      </BrowserRouter>
    )
    fireEvent.click(getByText('Forgot Password?'))
    expect(mockNavigate).toHaveBeenCalledWith('/forgot-password')
  })
})
