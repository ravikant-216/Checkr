import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Navbar, NavbarProps } from './index'
import avatar from '@Assets/icons/Avatar.svg'

export default {
  component: Navbar,
} as Meta

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  userName: 'James Rodriguez',
  userInfo: 'James.co',
  avatar: avatar,
  handleLogout: action('handleLogout'),
  label: 'Candidates',
}
