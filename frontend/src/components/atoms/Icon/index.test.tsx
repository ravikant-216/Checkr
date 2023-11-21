import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Icon } from '.'
import user from '../../../../public/assests/icons/user.svg'
describe('Icon component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Icon />)
    const icon = getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })

  it('renders with specified props', () => {
    const testSrc = user
    const testAlt = 'User Icon'
    const testWidth = '50px'
    const testHeight = '50px'

    const { getByAltText } = render(
      <Icon src={testSrc} alt={testAlt} width={testWidth} height={testHeight} />
    )

    const icon = getByAltText(testAlt) as HTMLImageElement

    expect(icon.src).toContain(testSrc)
  })

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(<Icon onClick={onClickMock} />)
    const icon = getByTestId('icon')

    fireEvent.click(icon)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
