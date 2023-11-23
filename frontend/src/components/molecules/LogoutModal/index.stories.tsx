import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { LogoutModal, LogoutModelProps } from '.'

export default {
  component: LogoutModal,
} as Meta

const Template: StoryFn<LogoutModelProps> = (args) => <LogoutModal {...args} />

export const Default = Template.bind({})
Default.args = {
  open: true,
  handleClose: action('handleClose'),
  handleLogout: action('handleLogout'),
}
