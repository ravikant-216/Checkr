import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PaginationCard, PaginationCardProps } from './index'
import { paginationcardDetails } from '@/strings/constant'

describe('PaginationCard', () => {
  const defaultProps: PaginationCardProps = {
    width: '100%',
    height: '50px',
  }

  it('renders without crashing', () => {
    const { container } = render(<PaginationCard {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders correctly when not filtered', () => {
    const { getByText } = render(<PaginationCard {...defaultProps} />)
    expect(getByText(paginationcardDetails.count)).toBeInTheDocument()
    expect(getByText(paginationcardDetails.result)).toBeInTheDocument()
  })

  it('renders correctly when filtered', () => {
    const { getByText } = render(
      <PaginationCard {...defaultProps} isFiltered count="42" />
    )
    expect(getByText('42')).toBeInTheDocument()
    expect(getByText(paginationcardDetails.resultsfound)).toBeInTheDocument()
  })
})
