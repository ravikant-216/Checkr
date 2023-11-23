import { Meta, StoryObj } from '@storybook/react'
import InputFieldWithTypography from '.'

const meta: Meta<typeof InputFieldWithTypography> = {
  component: InputFieldWithTypography,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
}

type Story = StoryObj<typeof InputFieldWithTypography>

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
}
export const Name: Story = {
  args: {
    type: 'text',
    label: 'Name',
    placeholder: 'Enter Your Name',
  },
}

export default meta
