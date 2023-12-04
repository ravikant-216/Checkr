import { fireEvent, render, screen } from '@testing-library/react'
import CandidateDetailPage from '.'
import * as Router from 'react-router-dom'
import { CANDIDATES } from '@/__mocks__'
import CandidateService from '@/services/CandidateService'
import { ThemeProvider } from '@mui/material'
import theme from '@/themes'
import {
  CANDIDATE_INFO,
  ENGAGE,
  PRE_ADERVE_ACTION,
  REPORT_INFORMATION_TEXT,
} from '@/strings/constant'

jest.mock('react-router-dom')
jest.mock('@/services/CandidateService')

describe('Testing candidate detail page', () => {
  beforeEach(() => {
    const praram = jest.spyOn(Router, 'useParams')
    jest.spyOn(Router, 'useNavigate').mockReturnValue(jest.fn())
    ;(praram as jest.Mock).mockReturnValue({ id: '1' })
    ;(CandidateService.getCandidateById as jest.Mock).mockReturnValue(
      CANDIDATES[0]
    )
    ;(CandidateService.updateCandidateById as jest.Mock).mockReturnValue(
      jest.fn()
    )
    render(
      <ThemeProvider theme={theme}>
        <CandidateDetailPage />
      </ThemeProvider>
    )
  })

  test('testing properly render or not', () => {
    expect(CandidateService.getCandidateById).toHaveBeenCalled()
    screen.getAllByText(CANDIDATES[0].name)
    fireEvent.click(screen.getByText(CANDIDATE_INFO))
    fireEvent.click(screen.getByText(REPORT_INFORMATION_TEXT))
    screen.getByText('Dec 1, 2016 12:00:00 PM')
  })
  test('Testing preadverse action properly working or not', () => {
    fireEvent.click(screen.getByText(PRE_ADERVE_ACTION))
    expect(Router.useNavigate).toHaveBeenCalled()
  })
  test('Testing engage properly working or not', () => {
    fireEvent.click(screen.getByText(ENGAGE))
    expect(Router.useNavigate).toHaveBeenCalled()
    expect(CandidateService.updateCandidateById).toHaveBeenCalled()
  })

  test('Testing Back button on Click', () => {
    fireEvent.click(screen.getAllByTestId('icon')[0])
    expect(Router.useNavigate).toHaveBeenCalled()
  })
})
