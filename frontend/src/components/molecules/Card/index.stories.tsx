import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from './index'
import phone from '@Assets/icons/Phone.svg'

export default {
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  src: phone,
  alt: 'Phone image',
  heading: 'Phone',
  subheading: '(555) 555-5555',
  width: '331px',
}
