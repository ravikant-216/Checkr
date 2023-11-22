import { Meta, StoryObj } from '@storybook/react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '.'

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof TextField>

export const Example: Story = {
  args: {
    name: 'name',
  },
}

export const WithSearchIcon: Story = {
  args: {
    startIcon: <SearchIcon />,
  },
}

export default meta
