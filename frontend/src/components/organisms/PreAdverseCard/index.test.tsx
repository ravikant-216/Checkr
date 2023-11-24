import { render, fireEvent } from '@testing-library/react'
import PreAdverseCard from '.'
import { BUTTON_TEXT, TITLE } from '@/strings/constant'

describe('PreAdverseCard', () => {
  const mockOnPreviewClick = jest.fn()
  const mockOnBackClick = jest.fn()

  it('renders without crashing', () => {
    render(
      <PreAdverseCard
        onPreviewClick={mockOnPreviewClick}
        onBackClick={mockOnBackClick}
      />
    )
  })

  it('renders all static texts', () => {
    const { getByText } = render(
      <PreAdverseCard
        onPreviewClick={mockOnPreviewClick}
        onBackClick={mockOnBackClick}
      />
    )
    expect(getByText(TITLE)).toBeInTheDocument()
  })

  it('calls onBackClick when back icon is clicked', () => {
    const { getByAltText } = render(
      <PreAdverseCard
        onPreviewClick={mockOnPreviewClick}
        onBackClick={mockOnBackClick}
      />
    )
    fireEvent.click(getByAltText('back'))
    expect(mockOnBackClick).toHaveBeenCalled()
  })

  it('changes checkbox state when clicked', () => {
    const { getAllByRole, getByText } = render(
      <PreAdverseCard
        onPreviewClick={mockOnPreviewClick}
        onBackClick={mockOnBackClick}
      />
    )
    const checkbox = getAllByRole('checkbox')
    fireEvent.click(checkbox[0])
    fireEvent.click(checkbox[1])
    fireEvent.click(getByText(BUTTON_TEXT))
    expect(mockOnPreviewClick).toHaveBeenCalled()
  })
})
