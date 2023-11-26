import { fireEvent, render, screen } from '@testing-library/react'

import { SigninCard } from '.'

describe('SignInCard', () => {
  it('shoud render signin', () => {
    render(<SigninCard />)
    const emailField = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailField, { target: { value: '' } })
    fireEvent.change(emailField, { target: { value: 'johngmail.com' } })
    fireEvent.change(emailField, { target: { value: 'john@gmail.com' } })
    const passwordField = screen.getByPlaceholderText('********')
    fireEvent.change(passwordField, { target: { value: '' } })
    fireEvent.change(passwordField, { target: { value: 'Test123' } })
    fireEvent.change(passwordField, { target: { value: 'Test@123' } })
    const signinbutton = screen.getByRole('button', { name: 'Sign In' })
    expect(signinbutton).not.toBeDisabled
  })
})
