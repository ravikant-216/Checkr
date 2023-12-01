import { fireEvent, render, screen } from '@testing-library/react'

import { SigninCard } from '.'

describe('SignInCard', () => {
  it('shoud render signin', () => {
    const mockHandleSignup = jest.fn()
    const mockHandleForgotpassword = jest.fn()
    const mockHandleSignin = jest.fn()
    const mockHandleAuth = jest.fn()
    render(
      <SigninCard
        handleSignup={mockHandleSignup}
        handleForgotpassword={mockHandleForgotpassword}
        handleSignin={mockHandleSignin}
        handleAuth={mockHandleAuth}
      />
    )
    const emailField = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailField, { target: { value: '' } })
    fireEvent.change(emailField, { target: { value: 'johngmail.com' } })
    fireEvent.change(emailField, { target: { value: 'john@gmail.com' } })
    const passwordField = screen.getByPlaceholderText('********')
    fireEvent.change(passwordField, { target: { value: '' } })
    fireEvent.change(passwordField, { target: { value: 'Test123' } })
    fireEvent.change(passwordField, { target: { value: 'Test@123' } })
    const signinbutton = screen.getByRole('button', { name: 'Sign In' })
    fireEvent.click(signinbutton)
    expect(signinbutton).not.toBeDisabled
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
  })
})
