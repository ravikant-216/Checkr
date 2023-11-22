import { Meta, StoryObj } from '@storybook/react'
import Chip from '.'
import theme from '@/themes'

const meta: Meta<typeof Chip> = {
  component: Chip,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Chip>

export const Example1: Story = {
  args: {
    label: 'Example Chip',
    sx: {
      color: theme.palette.accent.ACCENT_YELLOW,
      background: theme.palette.accent.ACCENT_LIGHT_YELLOW,
    },
  },
}

export const Example2: Story = {
  args: {
    label: 'Example Chip',
    sx: {
      color: theme.palette.accent.ACCENT_GREEN,
      background: theme.palette.accent.ACCENT_LIGHT_GREEN,
    },
  },
}

export default meta
