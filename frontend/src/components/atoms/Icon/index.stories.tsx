import { Meta, StoryFn } from '@storybook/react'
import { Icon, IconProps } from '.'
import user from '../../../../public/assests/icons/user.svg'
import calendar from '../../../../public/assests/icons/Calendar.svg'
export default {
  component: Icon,
  title: 'Atoms/Icon',
  argTypes: {
    height: { control: 'text' },
    width: { control: 'text' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  src: user,
  alt: 'user icon',
  width: '50px',
  height: '50px',
  style: { cursor: 'pointer' },
}
export const CustomSize = Template.bind({})
CustomSize.args = {
  src: calendar,
  alt: 'calendar Icon',
  width: '100px',
  height: '80px',
  style: { cursor: 'pointer' },
}
