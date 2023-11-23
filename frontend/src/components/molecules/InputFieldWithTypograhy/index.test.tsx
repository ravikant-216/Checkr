import { fireEvent, render, screen } from '@testing-library/react'
import InputFieldWithTypography from '.'

describe('Testing InputFieldWithTypograhy', () => {
  test('Checking type text working or not properly', () => {
    const onChange = jest.fn()
    render(
      <InputFieldWithTypography
        type="text"
        onChange={onChange}
        label="Name"
        data-testid="input"
      />
    )
    const input = screen.getByTestId('input').querySelector('input')
    fireEvent.change(input as HTMLInputElement, {
      target: { value: 'ap' },
    })
    expect(input as HTMLInputElement).toHaveValue('ap')
  })
  test('Checking type password working or not properly', () => {
    const onChange = jest.fn()
    render(
      <InputFieldWithTypography
        type="password"
        onChange={onChange}
        label="Name"
        data-testid="input"
      />
    )
    const input = screen.getByTestId('input').querySelector('input')
    expect(input?.getAttribute('type') as string).toEqual('password')
    const endIcon = screen.getByAltText('endIcon')
    fireEvent.click(endIcon)
    expect(input?.getAttribute('type') as string).toEqual('text')
  })
})
