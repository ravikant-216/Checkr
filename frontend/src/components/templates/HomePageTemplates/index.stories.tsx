import { Meta, StoryObj } from '@storybook/react'
import HomePageTeamplates from '.'
import { Stack } from '@mui/material'

const meta: Meta<typeof HomePageTeamplates> = {
  component: HomePageTeamplates,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof HomePageTeamplates>

export const Example: Story = {
  args: {
    label: 'Candidates',
    children: (
      <Stack spacing={2} sx={{ p: 2 }}>
        <div>Home</div>
      </Stack>
    ),
  },
}

export default meta
