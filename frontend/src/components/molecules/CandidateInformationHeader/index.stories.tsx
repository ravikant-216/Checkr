import { Meta, StoryFn } from '@storybook/react'
import { CandidateInforHeader, CandidateInforHeaderProps } from '.'
import backIcon from '@Assets/icons/Back.svg'
import Export from '@Assets/icons/Export.svg'
import Addbox from '@Assets/icons/AddBox.svg'
import { Icon } from '@/components/atoms/Icon'
const meta: Meta<typeof CandidateInforHeader> = {
  component: CandidateInforHeader,
  argTypes: {
    onfirstButtonclick: {
      action: 'click',
    },
    onSecondButtonclick: {
      action: 'click',
    },
  },
}

const Template: StoryFn<CandidateInforHeaderProps> = (args) => (
  <CandidateInforHeader {...args} />
)

export const WithBackIcon = Template.bind({})
WithBackIcon.args = {
  heading: 'Jhon Smith',
  firstButtonName: 'Pre-Adverse Action',
  secondButtonName: 'Engage',
  backIcon: backIcon,
}

export const WithoutBackIcon = Template.bind({})
WithoutBackIcon.args = {
  heading: 'Candidates',
  firstButtonName: 'Export',
  secondButtonName: 'Manual Order',
  firstButtonIcon: <Icon src={Export} />,
  secondButtonIcon: <Icon src={Addbox} />,
}

export default meta
