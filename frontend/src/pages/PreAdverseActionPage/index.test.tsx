import { fireEvent, render, screen } from '@testing-library/react'
import { PreAdverseActionPage } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Previewnotice page rendering', () => {
  it('shoud render Preview notice page', async () => {
    render(
      <MemoryRouter>
        <PreAdverseActionPage />
      </MemoryRouter>
    )
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
    render(
      <MemoryRouter>
        <PreAdverseActionPage />
      </MemoryRouter>
    )
    const checkbox = screen.getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    fireEvent.click(checkbox[1])
    const previewBUtton = screen.getByText('Preview Notice')
    fireEvent.click(previewBUtton)
    const closeicon = screen.getByAltText('Close Icon')
    fireEvent.click(closeicon)
  })
  it('when clicked on back icon', () => {
    render(
      <MemoryRouter>
        <PreAdverseActionPage />
      </MemoryRouter>
    )
    const backIcon = screen.getByAltText('back')
    fireEvent.click(backIcon)
  })
  it('when clicked on backdrop of status modal', async () => {
    render(
      <MemoryRouter>
        <PreAdverseActionPage />
      </MemoryRouter>
    )
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
