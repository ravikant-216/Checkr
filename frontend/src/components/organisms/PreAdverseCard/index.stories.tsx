import { Meta, Story } from '@storybook/react'
import PreAdverseCard, { PreAdverseCardProps } from '.'
import { action } from '@storybook/addon-actions'

export default {
  component: PreAdverseCard,
} as Meta

const Template: Story<PreAdverseCardProps> = (args) => (
  <PreAdverseCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  onPreviewClick: action('onPreviewClick'),
  onBackClick: action('onBackClick'),
}
