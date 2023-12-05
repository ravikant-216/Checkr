import { fireEvent, render, screen } from '@testing-library/react'
import { PreAdverseActionPage } from '.'
import * as Router from 'react-router-dom'

jest.mock('react-router-dom')

describe('Previewnotice page rendering', () => {
  beforeEach(() => {
    jest.spyOn(Router, 'useNavigate').mockReturnValue(jest.fn())
  })

  it('if location state null then redirect to home page', () => {
    const location = jest.spyOn(Router, 'useLocation')
    ;(location as jest.Mock).mockReturnValue({ state: {} })
    render(<PreAdverseActionPage />)
    expect(Router.useNavigate).toHaveBeenCalled()
  })

  it('shoud render Preview notice page', async () => {
    render(<PreAdverseActionPage />)
    const checkbox = screen.getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    fireEvent.click(checkbox[1])
    const previewBUtton = screen.getByText('Preview Notice')
    fireEvent.click(previewBUtton)
    const submitBUtton = screen.getByText('Submit Notice')
    fireEvent.click(submitBUtton)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    expect(screen.getByText('RECRUIT')).toBeInTheDocument()
  })
  it('when clicked on close icon ', () => {
    render(<PreAdverseActionPage />)
    const checkbox = screen.getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    fireEvent.click(checkbox[1])
    const previewBUtton = screen.getByText('Preview Notice')
    fireEvent.click(previewBUtton)
    const closeicon = screen.getByAltText('Close Icon')
    fireEvent.click(closeicon)
  })
  it('when clicked on back icon', () => {
    render(<PreAdverseActionPage />)
    const backIcon = screen.getByAltText('back')
    fireEvent.click(backIcon)
  })
  it('when clicked on backdrop of status modal', async () => {
    render(<PreAdverseActionPage />)
    const checkbox = screen.getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    fireEvent.click(checkbox[1])
    const previewBUtton = screen.getByText('Preview Notice')
    fireEvent.click(previewBUtton)
    const submitBUtton = screen.getByText('Submit Notice')
    fireEvent.click(submitBUtton)
    const modalBackdrop: Element | null =
      document.querySelector('.MuiBackdrop-root')

    if (modalBackdrop) {
      fireEvent.click(modalBackdrop)
    }
  })
})
