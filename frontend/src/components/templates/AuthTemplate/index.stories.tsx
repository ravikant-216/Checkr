import { Meta, StoryFn } from '@storybook/react'
import { AuthTemplate, AuthTemplateProps } from '.'
import { SigninCard } from '@/components/organisms/SigninCard'

export default {
  component: AuthTemplate,
} as Meta

const Template: StoryFn<AuthTemplateProps> = (args) => (
  <AuthTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {
  rightComponent: 'RightComponent',
}
export const WithComponent = Template.bind({})
WithComponent.args = {
  rightComponent: <SigninCard />,
}
