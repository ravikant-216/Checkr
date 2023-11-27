import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TwinTypo, TwinTypoProps } from '.'

export default {
  component: TwinTypo,
} as Meta

const Template: StoryFn<TwinTypoProps> = (args) => <TwinTypo {...args} />

export const WithVariants = Template.bind({})
WithVariants.args = {
  typoOne: 'James Rodriguez',
  typoTwo: 'James.co',
  variantOne: 'body1',
  variantTwo: 'caption2',
}
export const WithGap = Template.bind({})
WithGap.args = {
  typoOne: 'James Rodriguez',
  typoTwo: 'James.co',
  variantOne: 'body1',
  variantTwo: 'caption2',
  gap: '4px',
}
