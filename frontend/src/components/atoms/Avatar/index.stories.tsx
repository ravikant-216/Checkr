import { Meta, StoryObj } from '@storybook/react'
import Avatar from '.'
import avatar from '@Assets/icons/avatar.svg'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof Avatar>

export const AvatarWithPic: Story = {
  args: {
    src: avatar,
    alt: 'Avatar Photo',
  },
}

export const AvatarWithOutPic: Story = {
  args: {
    alt: 'Avatar Photo',
  },
}

export default meta
