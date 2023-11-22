import { Meta, StoryObj } from '@storybook/react'
import Typography from '.'

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Typography>

export const Example: Story = {
  args: {
    children: 'Example',
  },
}

export default meta
