import { render, screen } from '@testing-library/react'
import phone from '@Assets/icons/Phone.svg'
import Card from '.'

describe('Card', () => {
  it('renders correctly', () => {
    render(
      <Card
        src={phone}
        alt="Phone"
        heading="Card heading"
        subheading="Card subheading"
        width="300px"
      />
    )

    const imageElement = screen.getByAltText('Phone')
    const headingElement = screen.getByText('Card heading')
    const subheadingElement = screen.getByText('Card subheading')

    expect(imageElement).toBeInTheDocument()
    expect(headingElement).toBeInTheDocument()
    expect(subheadingElement).toBeInTheDocument()
  })
})
