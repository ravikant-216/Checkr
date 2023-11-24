import { Story, Meta } from '@storybook/react'
import TableHeader, { TableHeaderProps } from './'
import { action } from '@storybook/addon-actions'
import { STATUS, ADJUDICATION, STATUSES } from '@/strings/constant'

export default {
  component: TableHeader,
} as Meta

const Template: Story<TableHeaderProps> = (args) => <TableHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  handleSearchChange: action('handleSearchChange'),
  onSelectedItemsChange: action('onSelectedItemsChange'),
  statuses: STATUS,
  adjudication: ADJUDICATION,
}
export const Filter = Template.bind({})
Filter.args = {
  handleSearchChange: action('handleSearchChange'),
  onSelectedItemsChange: action('onSelectedItemsChange'),
  statuses: STATUSES,
}
