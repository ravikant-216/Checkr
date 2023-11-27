import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { SiginProps, SigninCard } from '.'

export default {
  component: SigninCard,
} as Meta

const Template: StoryFn<SiginProps> = (args) => <SigninCard {...args} />

export const Default = Template.bind({})
Default.args = {
  handleSignup: action('handleSignup'),
  handleForgotpassword: action('handleForgotpassword'),
  handleSignin: action('handleSignin'),
  handleAuth: action('handleAuth'),
}
