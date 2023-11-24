import { render, fireEvent } from '@testing-library/react'
import TableHeader from './index'
import theme from '@/themes'
import { ThemeProvider } from '@mui/material'
import CheckboxFilter from './checkboxFilter'

const adjudication: string[] = ['All', 'Engaged', 'Pre adverse action']

describe('TableHeader', () => {
  const handleSearchChangeMock = jest.fn()
  const onSelectedItemsChangeMock = jest.fn()

  const props = {
    handleSearchChange: handleSearchChangeMock,
    onSelectedItemsChange: onSelectedItemsChangeMock,
    statuses: ['All Status', 'Clear', 'Consider'],
  }

  it('renders without crashing', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <TableHeader {...props} adjudication={adjudication} />
      </ThemeProvider>
    )
    expect(getByText('Candidate Information')).toBeInTheDocument()
  })

  it('calls handleSearchChange when search input changes', () => {
    const { getByPlaceholderText, getAllByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <TableHeader {...props} />
      </ThemeProvider>
    )
    fireEvent.change(getByPlaceholderText('Search any candidate'), {
      target: { value: 'test' },
    })
    expect(handleSearchChangeMock).toHaveBeenCalledWith('test')
    fireEvent.click(getByText('Filter'))
    const checkbox = getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    expect(onSelectedItemsChangeMock).toHaveBeenCalledWith(
      ['All Status', 'Clear', 'Consider'],
      []
    )
  })
  it('calls onSelectedItemsChangeMock when checked', () => {
    const { getAllByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <TableHeader {...props} adjudication={adjudication} />
      </ThemeProvider>
    )
    fireEvent.click(getByText('Filter'))
    const checkbox = getAllByRole('checkbox')
    fireEvent.click(checkbox[1])
    fireEvent.click(checkbox[2])
    fireEvent.click(checkbox[2])
    fireEvent.click(checkbox[4])
    fireEvent.click(checkbox[4])
    expect(onSelectedItemsChangeMock).toHaveBeenCalledWith(
      ['All Status', 'Clear', 'Consider'],
      []
    )
  })
  it('calls onSelectedItemsChangeMock when checked', () => {
    const { getAllByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <TableHeader {...props} adjudication={adjudication} />
      </ThemeProvider>
    )
    fireEvent.click(getByText('Filter'))
    const checkbox = getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    fireEvent.click(checkbox[3])
    fireEvent.click(checkbox[3])
    expect(onSelectedItemsChangeMock).toHaveBeenCalledWith(
      ['All Status', 'Clear', 'Consider'],
      []
    )
  })
})
describe('CheckboxFilter', () => {
  const onSelectedItemsChangeMock = jest.fn()

  const props = {
    onSelectedItemsChange: onSelectedItemsChangeMock,
    statuses: ['All Status', 'Clear', 'Consider'],
  }

  it('renders without crashing', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CheckboxFilter {...props} />
      </ThemeProvider>
    )
    fireEvent.click(getByText('Filter'))
    expect(getByText('Status')).toBeInTheDocument()
  })
  it('renders without crashing', () => {
    const { getByText, getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <CheckboxFilter {...props} adjudication={adjudication} />
      </ThemeProvider>
    )
    fireEvent.click(getByText('Filter'))
    const checkbox = getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    fireEvent.click(checkbox[0])
    fireEvent.click(checkbox[3])
    fireEvent.click(checkbox[3])
    fireEvent.click(checkbox[4])
    expect(getByText('Status')).toBeInTheDocument()
  })
})
