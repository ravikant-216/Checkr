import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { SignupProps, SignupCard } from '.'

export default {
  component: SignupCard,
} as Meta

const Template: StoryFn<SignupProps> = (args) => <SignupCard {...args} />

export const Default = Template.bind({})
Default.args = {
  handleSignup: action('handleSignup'),
  handleSignin: action('handleSignin'),
}
