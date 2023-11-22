import { render, screen } from '@testing-library/react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '.'

describe('Testing TextField', () => {
  test('Checking properly rednder or not', () => {
    render(<TextField type="text" data-testid="test" />)
    screen.findAllByTestId('test')
  })

  test('With Start Icon end icon render properly', () => {
    render(
      <TextField
        type="text"
        data-testid="test"
        startIcon={<SearchIcon data-testid="start" />}
        endIcon={<SearchIcon data-testid="end" />}
      />
    )
    screen.findAllByTestId('test')
    screen.findByTestId('start')
    screen.findByTestId('end')
  })
})
