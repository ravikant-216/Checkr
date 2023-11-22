import { Story, Meta } from '@storybook/react'
import CheckboxLabels from '.'
import { CheckboxProps } from '@mui/material/Checkbox'

export default {
  component: CheckboxLabels,
} as Meta

const Template: Story<CheckboxProps> = (args) => <CheckboxLabels {...args} />

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}

export const Unchecked = Template.bind({})
Unchecked.args = {
  checked: false,
}
