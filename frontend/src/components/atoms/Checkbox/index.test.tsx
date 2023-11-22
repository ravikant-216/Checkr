import { render, fireEvent } from '@testing-library/react'
import CheckBox from './'

describe('CheckBox', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<CheckBox />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('responds to user interaction', () => {
    const { getByRole } = render(<CheckBox />)
    const checkbox = getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })
})
