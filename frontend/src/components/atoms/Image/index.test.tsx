import { render } from '@testing-library/react'
import { Image } from '.'
import humanImage from '../.././../../public/assests/Images/humanImage.svg'

test('renders image component with specified props', () => {
  const { getByAltText } = render(<Image src={humanImage} alt="human image" />)

  const image = getByAltText('human image')

  expect(image).toBeInTheDocument()
})
