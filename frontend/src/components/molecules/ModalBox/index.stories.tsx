import { ComponentMeta, ComponentStory } from '@storybook/react'
import ModalBox from './index'

export default {
  component: ModalBox,
  tags: ['autodocs'],
} as ComponentMeta<typeof ModalBox>

const Template: ComponentStory<typeof ModalBox> = (args) => (
  <ModalBox {...args} />
)

export const Default = Template.bind({})
Default.args = {
  open: true,
  onClose: () => {},
}
