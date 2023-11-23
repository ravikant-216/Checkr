import { fireEvent, render, screen } from '@testing-library/react'
import DatePicker from '.'

describe('Testing Datepicker', () => {
  test('Cheking properly render or not', () => {
    const onChange = jest.fn()
    render(<DatePicker onChange={onChange} data-testid="calender" />)
    const calenderButton = screen.getByAltText('Date Picker Icon')
    fireEvent.click(calenderButton)
    fireEvent.click(screen.getByText(1))
    expect(onChange).toBeCalled()
  })
  test('Cheking properly render with min and max date', () => {
    const onChange = jest.fn()
    render(
      <DatePicker
        onChange={onChange}
        data-testid="calender"
        minDate="12/12/2022"
        maxDate="12/12/2023"
      />
    )
    screen.getByAltText('Date Picker Icon')
  })
})
