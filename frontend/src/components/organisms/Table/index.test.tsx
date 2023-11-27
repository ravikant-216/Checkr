/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@testing-library/react'
import Table from '.'
import {
  CANDIDATE,
  CandidateInformationTableColumnDefination,
} from '@/__mocks__'
import { ThemeProvider } from '@emotion/react'
import theme from '@/themes'

describe('Table', () => {
  test('should render correctly', () => {
    const onPageChange = jest.fn()
    const onRowClick = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Table
          columns={CandidateInformationTableColumnDefination as any}
          data={CANDIDATE}
          onPageChange={onPageChange}
          onRowClick={onRowClick}
        />
      </ThemeProvider>
    )
    const nextButton = screen.getByText(2)
    fireEvent.click(nextButton)
    fireEvent.click(screen.getByText(CANDIDATE[0].name))
    expect(onRowClick).toBeCalled()
    expect(onPageChange).toBeCalled()
  })
  test('Cheking custom column definatiion properly render or not', () => {
    render(
      <ThemeProvider theme={theme}>
        <Table
          columns={CandidateInformationTableColumnDefination as any}
          data={CANDIDATE}
        />
      </ThemeProvider>
    )
    const chips = screen.getAllByTestId('custom-chip')
    expect(chips.length).toBe(CANDIDATE.length)
  })
})
