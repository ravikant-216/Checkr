import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import CandidatePage from '.'
import usePagination from '@/hooks/usePagination'
import { CANDIDATES } from '@/__mocks__'
import { ThemeProvider } from '@mui/material'
import theme from '@/themes'
import {
  EXPORT_CSV,
  EXPORT_REPORT,
  FILTER,
  PRE_ADVANCE_ACTION_NOTICE_SENT,
} from '@/strings/constant'
import * as Router from 'react-router-dom'

jest.mock('@/hooks/usePagination')
jest.mock('react-router-dom')

const Render = () =>
  render(
    <ThemeProvider theme={theme}>
      <CandidatePage />
    </ThemeProvider>
  )
describe('Candidate Page Testing', () => {
  test('Check Pagination Working or not', () => {
    const fetchParticularPage = jest.fn()
    ;(usePagination as jest.Mock).mockReturnValue({
      data: CANDIDATES,
      fetchParticularPage,
    })
    Render()
    const getNextPageButton = screen.getByRole('button', {
      name: /2/i,
    })
    fireEvent.click(getNextPageButton)
    expect(fetchParticularPage).toHaveBeenCalled()
  })
  test('Testing Searching', () => {
    const fetchParticularPage = jest.fn()
    ;(usePagination as jest.Mock).mockReturnValue({
      data: CANDIDATES,
      fetchParticularPage,
    })
    Render()
    const searchInput = screen.getByRole('textbox')
    fireEvent.change(searchInput, {
      target: {
        value: '2',
      },
    })
    screen.findByText('Results Found')
  })
  test('Testing Status filter', async () => {
    const fetchParticularPage = jest.fn()
    ;(usePagination as jest.Mock).mockReturnValue({
      data: CANDIDATES,
      fetchParticularPage,
    })
    Render()
    fireEvent.click(screen.getByText(FILTER))
    const checkbox = screen.getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    screen.findByText('Results Found')
  })
  test('Testing Adjudication filter', async () => {
    const fetchParticularPage = jest.fn()
    ;(usePagination as jest.Mock).mockReturnValue({
      data: CANDIDATES,
      fetchParticularPage,
    })
    Render()
    fireEvent.click(screen.getByText(FILTER))
    const checkbox = screen.getAllByRole('checkbox')
    fireEvent.click(checkbox[5])
    screen.findByText('Results Found')
  })
  test('Testing the export modal', async () => {
    const fetchParticularPage = jest.fn()
    ;(usePagination as jest.Mock).mockReturnValue({
      data: CANDIDATES,
      fetchParticularPage,
    })
    Render()
    const exportButton = screen.getByRole('button', {
      name: /export/i,
    })
    fireEvent.click(exportButton)
    screen.findByText(EXPORT_CSV)
    const datePickerIcon = screen.getAllByAltText('Date Picker Icon')
    expect(datePickerIcon).toHaveLength(2)
    fireEvent.click(datePickerIcon[0])
    fireEvent.click(screen.getAllByText('1')[1])
    fireEvent.click(datePickerIcon[1])
    fireEvent.click(screen.getAllByText('3')[2])
    await waitFor(() => {
      const submitButton = screen.getByText(EXPORT_REPORT)
      expect(submitButton).toBeEnabled()
      fireEvent.click(submitButton)
      screen.findByText(PRE_ADVANCE_ACTION_NOTICE_SENT)
    })
  })
  test('Testing the Row click', async () => {
    const fetchParticularPage = jest.fn()
    ;(usePagination as jest.Mock).mockReturnValue({
      data: CANDIDATES,
      fetchParticularPage,
    })
    jest.spyOn(Router, 'useNavigate').mockReturnValue(jest.fn())
    Render()
    fireEvent.click(screen.getByText(CANDIDATES[0].name))
    expect(Router.useNavigate).toHaveBeenCalled()
  })
})
