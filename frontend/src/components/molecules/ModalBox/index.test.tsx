import { fireEvent, render, screen } from '@testing-library/react'
import ModalBox from './index'
import { EXPORT_SUCCESS } from '@/strings/constant'

describe('ModalBox', () => {
  it('renders correctly when open', () => {
    render(<ModalBox open={true} onClose={() => {}} />)
    const textElement = screen.getByText(EXPORT_SUCCESS)
    expect(textElement).toBeInTheDocument()
  })

  it('does not render when not open', () => {
    render(<ModalBox open={false} onClose={() => {}} />)
    const modal = screen.queryByRole('presentation')
    expect(modal).not.toBeInTheDocument()
  })
  it('closes the modal box when overlay is clicked', () => {
    const mockOnClose = jest.fn()
    render(<ModalBox open={true} onClose={mockOnClose} />)

    const overlay = screen.getByTestId('modalOverlay')
    fireEvent.click(overlay)
    fireEvent.click(screen.getByTestId('modal'))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
