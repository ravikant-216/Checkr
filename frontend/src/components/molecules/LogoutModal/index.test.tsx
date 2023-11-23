import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { LogoutModal, LogoutModelProps } from '.'

const mockHandleClose = jest.fn()
const mockHandleLogout = jest.fn()

const defaultProps: LogoutModelProps = {
  open: true,
  handleClose: mockHandleClose,
  handleLogout: mockHandleLogout,
}

test('renders LogoutModal component', () => {
  render(<LogoutModal {...defaultProps} />)
  expect(screen.getByText(/Confirm Logout/i)).toBeInTheDocument()
  expect(
    screen.getByText(/Are you sure you want to logout?/i)
  ).toBeInTheDocument()
})

test('handleClose when Cancel button is clicked', () => {
  render(<LogoutModal {...defaultProps} />)
  fireEvent.click(screen.getByText(/Cancel/i))
  expect(mockHandleClose).toHaveBeenCalled()
})
