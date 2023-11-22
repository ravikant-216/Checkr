import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import HumanImage from '../../../../public/assests/Images/humanImage.svg'
import { Image, ImgProps } from '.'

export default {
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
} as Meta

const Template: StoryFn<ImgProps> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: HumanImage,
  alt: 'human image',
  width: '100px',
  height: '100px',
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  src: HumanImage,
  alt: 'human image',
  width: '200px',
  height: '150px',
}
