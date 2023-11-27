import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Navbar, NavbarProps } from './index'
describe('Navbar Component', () => {
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
  })
  it('handles logout click', () => {
    const { getByAltText } = render(<Navbar {...defaultProps} />)
    fireEvent.click(getByAltText('logout icon'))
    expect(defaultProps.handleLogout).toHaveBeenCalled()
  })
})
