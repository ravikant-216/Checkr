import { fireEvent, render, screen } from '@testing-library/react'
import FilterButton from '.'
import { Stack, ThemeProvider, Typography } from '@mui/material'
import CheckboxLabels from '@/components/molecules/CheckBoxLabel'
import { FILTER } from '@/strings/constant'
import theme from '@/themes'

describe('Testing Filter Button', () => {
  it('Checks Filter Button Properly working or not', () => {
    render(
      <ThemeProvider theme={theme}>
        <FilterButton>
          <Stack>
            <Typography variant="body2">Status</Typography>
            {[
              'All Status',
              'Pending',
              'Scheduled',
              'Dispute',
              'Canceled',
              'Undeliverable',
            ].map((item) => (
              <CheckboxLabels label={item} key={item} />
            ))}
          </Stack>
        </FilterButton>
      </ThemeProvider>
    )
    const button = screen.getByText(FILTER)
    fireEvent.click(button)
    const checkbox = screen.getAllByRole('checkbox')
    expect(checkbox).toHaveLength(6)
    fireEvent.click(checkbox[0])
  })
})
