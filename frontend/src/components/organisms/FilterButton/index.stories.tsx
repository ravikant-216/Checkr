import { Meta, StoryObj } from '@storybook/react'
import FilterButton from '.'
import { Stack, Typography } from '@mui/material'
import CheckboxLabels from '@/components/molecules/CheckBoxLabel'

const meta: Meta<typeof FilterButton> = {
  component: FilterButton,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof FilterButton>

export const Example: Story = {
  args: {
    children: (
      <Stack>
        <Typography variant="body2">Status</Typography>
        {[
          'All Status',
          'Pending',
          'Scheduled',
          'Dispute',
          'Canceled',
          'Undeliverable',
        ].map((item) => (
          <CheckboxLabels label={item} key={item} />
        ))}
      </Stack>
    ),
  },
}

export default meta
