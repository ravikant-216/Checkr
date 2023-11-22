import { Meta, StoryFn } from '@storybook/react'
import theme from '@/themes'
import { ButtonAtomProps, ButtonComponent } from '.'
import { Search } from '@mui/icons-material'

export default {
  component: ButtonComponent,
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },

    disabled: { control: 'boolean' },
    buttonWidth: { control: 'text' },
    buttonText: { control: 'text' },
    backgroundColor: { control: 'color' },
    buttonHeight: { control: 'text' },
    buttonTextColor: { control: 'color' },
    buttonBorder: { control: 'text' },
    bordeRadius: { control: 'number' },
  },
} as Meta

const Template: StoryFn<ButtonAtomProps> = (args) => (
  <ButtonComponent {...args} />
)
export const SignIn = Template.bind({})
SignIn.args = {
  borderRadius: 5,
  buttonVariant: 'text',
  buttonTextColor: theme.palette.structural.STRUCTURAL_WHITE,
  buttonText: 'Sign In',
  backgroundColor: theme.palette.primary[500],
  sx: {
    padding: '8px 16px',
  },
  buttonHeight: '44px',
  buttonWidth: '384px',
}
export const DisabledButton = Template.bind({})
DisabledButton.args = {
  borderRadius: 5,
  disabled: true,
  buttonHeight: '44px',
  buttonWidth: '384px',
  buttonVariant: 'contained',
  buttonTextColor: theme.palette.structural.STRUCTURAL_WHITE,
  buttonText: 'Sign up',
  backgroundColor: theme.palette.primary[400],
}

export const IconButton = Template.bind({})
IconButton.args = {
  buttonIcon: <Search />,
  borderRadius: 5,
  buttonHeight: '38px',
  buttonWidth: '147px',
  buttonVariant: 'contained',
  buttonTextColor: theme.palette.structural.STRUCTURAL_WHITE,
  buttonText: 'Manual Order',
  backgroundColor: theme.palette.primary[500],
}

export const Cancel = Template.bind({})
Cancel.args = {
  backgroundColor: theme.palette.structural.STRUCTURAL_WHITE,
  buttonBorder: '1px solid grey',
  borderRadius: 5,
  buttonVariant: 'outlined',
  buttonTextColor: theme.palette.text.mediumEmphasis,
  buttonText: 'Cancel',
}
