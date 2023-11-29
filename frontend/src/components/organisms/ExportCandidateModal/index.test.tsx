import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ExportCandidateModal from '.'
import { EXPORT_REPORT } from '@/strings/constant'

describe('ExportCandidateModal', () => {
  test('should render correctly', async () => {
    const onClose = jest.fn()
    const handleExport = jest.fn()
    render(
      <ExportCandidateModal
        open={true}
        onClose={onClose}
        handleExport={handleExport}
      />
    )
    const datePickerIcon = screen.getAllByAltText('Date Picker Icon')
    expect(datePickerIcon).toHaveLength(2)
    fireEvent.click(datePickerIcon[0])
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(datePickerIcon[1])
    fireEvent.click(screen.getAllByText('3')[1])
    await waitFor(() => {
      const submitButton = screen.getByText(EXPORT_REPORT)
      expect(submitButton).toBeEnabled()
      fireEvent.click(submitButton)
      expect(handleExport).toBeCalled()
    })
  })
})
