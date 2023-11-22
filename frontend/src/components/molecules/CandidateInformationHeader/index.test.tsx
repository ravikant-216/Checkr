import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CandidateInforHeader } from '.'

const mockFirstButtonClick = jest.fn()
const mockSecondButtonClick = jest.fn()

const defaultProps = {
  heading: 'Test Heading',
  firstButtonName: 'First Button',
  secondButtonName: 'Second Button',
  onfirstButtonclick: mockFirstButtonClick,
  onSecondButtonclick: mockSecondButtonClick,
}

test('without backIcon', () => {
  const { getByText, queryByTestId } = render(
    <CandidateInforHeader {...defaultProps} />
  )

  expect(getByText('Test Heading')).toBeInTheDocument()

  expect(getByText('First Button')).toBeInTheDocument()
  expect(getByText('Second Button')).toBeInTheDocument()

  expect(queryByTestId('back-icon')).not.toBeInTheDocument()
})

test('with backIcon', () => {
  const { getByText } = render(
    <CandidateInforHeader {...defaultProps} backIcon="path/to/backIcon" />
  )
  expect(getByText('Test Heading')).toBeInTheDocument()
  expect(getByText('Test Heading')).toBeInTheDocument()
})

test('handles button clicks correctly', () => {
  const { getByText } = render(<CandidateInforHeader {...defaultProps} />)
  fireEvent.click(getByText('First Button'))
  expect(mockFirstButtonClick).toHaveBeenCalled()

  fireEvent.click(getByText('Second Button'))
  expect(mockSecondButtonClick).toHaveBeenCalled()
})
