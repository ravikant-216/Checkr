import { Meta, StoryObj } from '@storybook/react'
import ExportCandidateModal from '.'

const meta: Meta<typeof ExportCandidateModal> = {
  component: ExportCandidateModal,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof ExportCandidateModal>

export const Example: Story = {
  args: {
    open: true,
  },
}

export default meta
