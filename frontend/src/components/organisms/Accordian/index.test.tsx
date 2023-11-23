import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomizedAccordions from './index'
import CardGrid from './CardGrid'
import { CardProps } from '../../molecules/Card'
import name from '@Assets/icons/Name.svg'

const CANDIDATE_DATA: CardProps[] = [
  {
    src: name,
    alt: 'name',
    heading: 'Name',
    subheading: 'John Smith',
  },
]

describe('CustomizedAccordions', () => {
  it('renders without crashing', () => {
    const setExpanded = jest.fn()
    const { getByText } = render(
      <CustomizedAccordions
        heading="Candidate Information"
        expanded={false}
        setExpanded={setExpanded}
      >
        <CardGrid cardData={CANDIDATE_DATA} />
      </CustomizedAccordions>
    )
    expect(getByText('Candidate Information')).toBeInTheDocument()
  })

  it('calls setExpanded when clicked', () => {
    const setExpanded = jest.fn()
    const { getByText } = render(
      <CustomizedAccordions
        heading="Candidate Information"
        setExpanded={setExpanded}
      >
        <CardGrid cardData={CANDIDATE_DATA} />
      </CustomizedAccordions>
    )
    fireEvent.click(getByText('Candidate Information'))
    expect(setExpanded).toHaveBeenCalled()
  })
})
