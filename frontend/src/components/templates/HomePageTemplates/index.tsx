import { Navbar } from '@/components/organisms/Navbar'
import { NavbarLabel } from '@/utils/types'
import { Grid, Stack } from '@mui/material'
import avatar from '@Assets/icons/Avatar.svg'
import theme from '@/themes'

interface HomePageTeamplatesProps {
  label: NavbarLabel
  children: React.ReactNode
}

const HomePageTeamplates = ({ label, children }: HomePageTeamplatesProps) => {
  return (
    <Grid
      container
      p={3}
      style={{ backgroundColor: theme.palette.primary[100] }}
    >
      <Grid item xs={1.8}>
        <Navbar
          label={label}
          userName="James Rodriguez"
          userInfo="James.co"
          avatar={avatar}
        />
      </Grid>
      <Grid item xs={10}>
        <Stack spacing={2} sx={{ p: 2 }} width={'100%'}>
          {children}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default HomePageTeamplates
