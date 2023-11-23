import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from './index'
import analytics from '@Assets/icons/Analytics.svg'

export default {
  component: Card,
  tags: ['autodocs'],
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  src: analytics,
  alt: 'Analytics',
  heading: 'Analytics',
}
export const DefaultSelected = Template.bind({})
DefaultSelected.args = {
  src: analytics,
  alt: 'Analytics',
  heading: 'Analytics',
  selected: true,
}
