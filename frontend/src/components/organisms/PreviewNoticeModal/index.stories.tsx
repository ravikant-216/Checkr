import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { PreviewNoticeModal, PreviewNoticeModalProps } from '.'

export default {
  component: PreviewNoticeModal,
} as Meta

const Template: StoryFn<PreviewNoticeModalProps> = (args) => (
  <PreviewNoticeModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  open: true,
  handleClose: action('handleClose'),
  handleSubmit: action('handleSubmit'),
  email: 'sample@email.com',
  name: 'John Doe',
}
