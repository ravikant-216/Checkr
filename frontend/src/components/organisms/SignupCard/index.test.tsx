import { fireEvent, render, screen } from '@testing-library/react'

import { SignupCard } from '.'

describe('SignUpCard', () => {
  it('shoud render signup', () => {
    const mockHandleSignup = jest.fn()
    const mockHandleSignin = jest.fn()
    render(
      <SignupCard
        handleSignup={mockHandleSignup}
        handleSignin={mockHandleSignin}
      />
    )
    const emailField = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailField, { target: { value: 'johngmail.com' } })
    fireEvent.change(emailField, { target: { value: 'john@gmail.com' } })
    const passwordField = screen.getAllByPlaceholderText('********')
    passwordField.forEach((field) => {
      fireEvent.change(field, { target: { value: 'Test123' } })
      fireEvent.change(field, { target: { value: 'Test@123' } })
    })
  })
  it('shoud render signup', () => {
    const mockHandleSignup = jest.fn()
    const mockHandleSignin = jest.fn()
    render(
      <SignupCard
        handleSignup={mockHandleSignup}
        handleSignin={mockHandleSignin}
      />
    )
    const emailField = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailField, { target: { value: 'johngmail.com' } })
    fireEvent.change(emailField, { target: { value: 'john@gmail.com' } })
    const passwordField = screen.getAllByPlaceholderText('********')
    passwordField.forEach((field) => {
      fireEvent.change(field, { target: { value: 'Test@123' } })
      fireEvent.change(field, { target: { value: 'Test@123' } })
    })
    fireEvent.click(screen.getByRole('button'))
    expect(mockHandleSignup).toHaveBeenCalled()
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
  })
})
