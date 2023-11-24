import { Meta, StoryObj } from '@storybook/react'
import ForgotPassword from '.'

const meta: Meta<typeof ForgotPassword> = {
  component: ForgotPassword,
  tags: ['autodocs'],
  argTypes: {
    handleSubmit: {
      action: 'click',
    },
    handleBackButton: {
      action: 'click',
    },
  },
}

type Story = StoryObj<typeof ForgotPassword>

export const ForgotPasswordRender: Story = {
  args: {
    varient: 'forgotPassword',
  },
}

export const VerifyOtp: Story = {
  args: {
    varient: 'verifyOtp',
  },
}

export default meta
