import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Navbar, NavbarProps } from './index'
import * as Router from 'react-router-dom'

jest.mock('react-router-dom')

describe('Navbar Component', () => {
  beforeEach(() => {
    jest.spyOn(Router, 'useNavigate').mockReturnValue(jest.fn())
  })
  const defaultProps: NavbarProps = {
    userName: 'John Doe',
    userInfo: 'Software Engineer',
    avatar: 'path/to/avatar.jpg',
    handleLogout: jest.fn(),
    label: 'Candidates',
  }
  it('renders with default props', () => {
    const { getByText } = render(<Navbar {...defaultProps} />)
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('Software Engineer')).toBeInTheDocument()
  })
  it('handles navigation item click', () => {
    const { getByText } = render(<Navbar {...defaultProps} />)
    fireEvent.click(getByText('Adverse Actions'))
    fireEvent.click(getByText('Candidates'))
    expect(Router.useNavigate).toHaveBeenCalled()
  })
  it('handles logout click', () => {
    const { getByAltText } = render(<Navbar {...defaultProps} />)
    fireEvent.click(getByAltText('logout icon'))
    expect(defaultProps.handleLogout).toHaveBeenCalled()
  })
})
