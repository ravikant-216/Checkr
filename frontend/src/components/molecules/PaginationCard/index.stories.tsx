import { Meta, StoryFn } from '@storybook/react'
import { PaginationCard, PaginationCardProps } from '.'

export default {
  component: PaginationCard,
} as Meta

const Template: StoryFn<PaginationCardProps> = (args) => (
  <PaginationCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  width: '100%',
  height: '50px',
}

export const Filtered = Template.bind({})
Filtered.args = {
  width: '100%',
  height: '50px',
  isFiltered: true,
  count: '42',
}
