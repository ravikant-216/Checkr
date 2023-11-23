import { render, screen } from '@testing-library/react'
import Card, { CardProps } from '.'
import analytics from '@Assets/icons/Analytics.svg'
import theme from '@/themes'

describe('Card', () => {
  const props: CardProps = {
    src: analytics,
    alt: 'Analytics',
    heading: 'Analytics',
    selected: false,
  }

  it('should render the icon image', () => {
    render(<Card {...props} />)
    const icon = screen.getByAltText('Analytics')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src', props.src)
  })

  it('should render the heading text', () => {
    render(<Card {...props} />)
    const heading = screen.getByText(props.heading)
    expect(heading).toBeInTheDocument()
  })

  it('should render with the selected text color', () => {
    render(<Card {...props} selected />)
    const heading = screen.getByText(props.heading)
    expect(heading).toHaveStyle({
      color: theme.palette.primary[500],
    })
  })
})
