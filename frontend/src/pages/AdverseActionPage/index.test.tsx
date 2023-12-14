import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AdverseActionPage } from '.'
import * as Api from '@/api/api'
import { ADVERSE_ACTIONS } from '@/strings/constant'
import { ThemeProvider } from '@mui/material'
import theme from '@/themes'
import { act } from 'react-dom/test-utils'
import * as Router from 'react-router-dom'
import * as AuthContext from '@/context/AuthContext'

jest.mock('@/api/api')
jest.mock('react-router-dom')
jest.mock('@/context/AuthContext')
describe('AdverseActionPage', () => {
  beforeEach(() => {
    jest.spyOn(Router, 'useNavigate').mockReturnValue(jest.fn())

    jest.spyOn(AuthContext, 'useAuthContext').mockReturnValue({
      isAuthenticate: true,
      setIsAuthenticate: jest.fn(),
    })

    jest.spyOn(Api, 'getAllAdverseAction').mockReturnValue(
      Promise.resolve([
        {
          id: '5d1f55ca-91b7-4dfa-8228-7c15094a8a91',
          name: 'Arianna',
          status: 'SCHEDULED',
          pre_notice_date: '2023-06-01T18:40:52.658Z',
          post_notice_date: '2023-04-23T01:18:18.280Z',
        },
        {
          id: 'dfdbc813-421a-4435-987a-a36dbd57f336',
          name: 'Rickie',
          status: 'SCHEDULED',
          pre_notice_date: '2023-03-21T01:51:33.023Z',
          post_notice_date: '2023-10-02T04:39:38.218Z',
        },
        {
          id: 'c02c36c6-d9cc-47a7-9cbd-0af05d086a31',
          name: 'Dayana',
          status: 'SCHEDULED',
          pre_notice_date: '2023-09-17T11:57:18.947Z',
          post_notice_date: '2022-12-27T17:02:57.178Z',
        },
        {
          id: '4f498527-7a4f-4364-b979-76beaedbfc0d',
          name: 'Virginie',
          status: 'SCHEDULED',
          pre_notice_date: '2023-10-13T03:17:35.279Z',
          post_notice_date: '2023-11-27T06:00:33.629Z',
        },
      ])
    )
  })
  test('Checking properly or not', async () => {
    act(() => {
      render(
        <ThemeProvider theme={theme}>
          <AdverseActionPage />
        </ThemeProvider>
      )
    })
    await waitFor(() => {
      screen.getAllByText(ADVERSE_ACTIONS)
      fireEvent.click(screen.getAllByTestId('icon')[0])
      expect(Router.useNavigate).toHaveBeenCalled()
    })
  })
})
