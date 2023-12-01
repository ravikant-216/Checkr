import { render } from '@testing-library/react'
import { AuthTemplate } from '.'
import { RIGHT_COMPONENT } from '@/strings/constant'

test('renders AuthTemplate component with custom right component', () => {
  const { getByText, queryByText } = render(
    <AuthTemplate>
      <div>right component</div>
    </AuthTemplate>
  )

  expect(getByText('right component')).toBeInTheDocument()
  expect(queryByText('RIGHT_COMPONENT')).toBeNull()
})

test('renders AuthTemplate component with default right component', () => {
  const { getByText } = render(<AuthTemplate />)
  expect(getByText(RIGHT_COMPONENT)).toBeInTheDocument()
})
