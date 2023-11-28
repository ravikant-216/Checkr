import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { PreviewNoticeModal } from '.'
jest.mock('@Assets/icons/Close.svg', () => 'CloseIcon')
jest.mock('@Assets/icons/Attachment.svg', () => 'AttachmentIcon')

describe('PreviewNoticeModal', () => {
  it('renders correctly with given props', () => {
    const props = {
      open: true,
      email: 'test@example.com',
      name: 'John Doe',
      handleSubmit: jest.fn(),
      handleClose: jest.fn(),
    }

    const { getByText, getByAltText } = render(
      <PreviewNoticeModal {...props} />
    )
    expect(getByText('To:')).toBeInTheDocument()
    expect(getByText('test@example.com')).toBeInTheDocument()
    expect(getByAltText('Close Icon')).toBeInTheDocument()
  })

  it('calls handleSubmit and handleClose on button click', () => {
    const props = {
      open: true,
      email: 'test@example.com',
      name: 'John Doe',
      handleSubmit: jest.fn(),
      handleClose: jest.fn(),
    }

    const { getByText } = render(<PreviewNoticeModal {...props} />)
    fireEvent.click(getByText('Submit Notice'))
    expect(props.handleSubmit).toHaveBeenCalled()
  })
})
