import { render, screen } from '@testing-library/react'
import Typography from '.'

describe('Testing Typography Component', () => {
  test('Check proper render or not', () => {
    render(<Typography>Hi</Typography>)
    screen.getByText('Hi')
  })
})
