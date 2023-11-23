import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import CustomizedAccordions, { CustomizedAccordionsProps } from '.'
import { CANDIDATE_DATA } from '@/strings/constant'
import CardGrid from './CardGrid'

export default {
  tags: ['autodocs'],
  component: CustomizedAccordions,
} as Meta

const Template: Story<CustomizedAccordionsProps> = (args) => {
  const [expanded1, setExpanded1] = useState(false)
  return (
    <CustomizedAccordions
      {...args}
      expanded={expanded1}
      setExpanded={setExpanded1}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  heading: 'Candidate Information',
  children: <CardGrid cardData={CANDIDATE_DATA} />,
}
