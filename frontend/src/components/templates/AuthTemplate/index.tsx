import { Icon } from '@/components/atoms/Icon'
import theme from '@/themes'
import { Grid, styled } from '@mui/material'
import Illustration from '@Assets/Images/humanImage.svg'
import { RIGHT_COMPONENT } from '@/strings/constant'
const RightContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: `${theme.palette.primary[100]}`,
})

const LeftContainer = styled(RightContainer)({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})

export interface AuthTemplateProps {
  children?: React.ReactNode
}

export const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <Grid container>
      <LeftContainer item xs={6} md={6}>
        <Icon src={Illustration} alt="Human Image" />
      </LeftContainer>
      <RightContainer item xs={12} md={6}>
        {children ?? RIGHT_COMPONENT}
      </RightContainer>
    </Grid>
  )
}
