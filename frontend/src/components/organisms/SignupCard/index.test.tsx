import { fireEvent, render, screen } from '@testing-library/react'

import { SignupCard } from '.'

describe('SignUpCard', () => {
  it('shoud render signup', () => {
    render(<SignupCard />)
    const emailField = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailField, { target: { value: 'johngmail.com' } })
    fireEvent.change(emailField, { target: { value: 'john@gmail.com' } })
    const passwordField = screen.getAllByPlaceholderText('********')
    passwordField.forEach((field) => {
      fireEvent.change(field, { target: { value: 'Test123' } })
      fireEvent.change(field, { target: { value: 'Test@123' } })
    })
  })
})
