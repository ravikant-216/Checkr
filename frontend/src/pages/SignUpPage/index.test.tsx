import { fireEvent, render, screen } from '@testing-library/react'
import SignUpPage from './'
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

describe('SignUpPage', () => {
  const mockHandleSignUp = jest.fn()
  const mockNavigate = jest.fn()

  beforeEach(() => {
    ;(useManualLogin as jest.Mock).mockReturnValue({
      handleSignUp: mockHandleSignUp,
    })
    ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)
  })

  it('calls handleSignUp and navigate when handleSignup is called', async () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )
    fireEvent.click(getAllByRole('button')[0])
    const emailField = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailField, { target: { value: 'john@gmail.com' } })
    const passwordField = screen.getAllByPlaceholderText('********')
    passwordField.forEach((field) => {
      fireEvent.change(field, { target: { value: 'Test@123' } })
      fireEvent.change(field, { target: { value: 'Test@123' } })
    })
    mockHandleSignUp.mockResolvedValueOnce(null)
    fireEvent.click(screen.getByRole('button'))
    await new Promise((r) => setTimeout(r, 100))
    expect(mockHandleSignUp).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/login')

    mockHandleSignUp.mockResolvedValueOnce({ email: 'john@gmail.com' })
    fireEvent.click(screen.getByRole('button'))
    await new Promise((r) => setTimeout(r, 100))
    expect(mockHandleSignUp).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard')
  })

  it('navigates to /login when handleSignin is called', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )
    fireEvent.click(getByText('Sign In'))
    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })
})
