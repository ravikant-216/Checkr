import { render, screen } from '@testing-library/react'
import Chip from '.'

describe('Test Chip Component', () => {
  test('Checking Properly Render or not', () => {
    render(<Chip label="Hello" />)
    screen.getByText('Hello')
  })
})
