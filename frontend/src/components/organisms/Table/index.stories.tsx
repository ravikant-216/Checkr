/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react'
import Table from '.'
import TableHeader from '../TableHeader'
import { STATUSES } from '@/strings/constant'
import {
  CANDIDATE,
  CandidateInformationTableColumnDefination,
} from '@/__mocks__'

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: {
    columns: CandidateInformationTableColumnDefination as any,
    data: CANDIDATE,
    tableHeader: (
      <TableHeader
        statuses={STATUSES}
        handleSearchChange={() => {}}
        onSelectedItemsChange={() => {}}
      />
    ),
  },
}

export default meta
