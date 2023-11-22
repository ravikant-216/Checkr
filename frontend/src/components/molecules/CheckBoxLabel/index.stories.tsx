import { Meta, Story } from '@storybook/react'
import CheckboxLabels, { CheckboxLabelsProps } from '.'
import theme from '@/themes'

export default {
  component: CheckboxLabels,
  tags: ['autodocs'],
} as Meta

const Template: Story<CheckboxLabelsProps> = (args) => (
  <CheckboxLabels {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Remember me',
  checked: false,
  variant: 'body2',
  labelColor: theme.palette.text.mediumEmphasis,
}
export const Secondary = Template.bind({})
Secondary.args = {
  label: 'All Status',
  labelColor: theme.palette.text.highEmphasis,
  checked: true,
  variant: 'caption2',
}
