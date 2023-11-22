import { render, fireEvent } from '@testing-library/react'
import { ButtonComponent } from '.'

describe('ButtonAtom component', () => {
  test('applying variant to button', () => {
    const buttonVariant = 'contained'
    render(<ButtonComponent buttonVariant={buttonVariant} />)
    expect(`MuiButton-${buttonVariant}`).toHaveClass
  })
  test('renders button with given text', () => {
    const buttonText = 'Sign Up'
    const { getByText } = render(<ButtonComponent buttonText={buttonText} />)
    const buttonElement = getByText(buttonText)
    expect(buttonElement).toBeInTheDocument
  })

  test('onClick when button is clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <ButtonComponent buttonText="Sign Up" onClick={onClick} />
    )
    const buttonElement = getByText('Sign Up')
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
