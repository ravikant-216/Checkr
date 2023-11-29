import { Navbar } from '@/components/organisms/Navbar'
import { NavbarLabel } from '@/utils/types'
import { Grid, Stack } from '@mui/material'
import avatar from '@Assets/icons/Avatar.svg'

interface HomePageTeamplatesProps {
  label: NavbarLabel
  children: React.ReactNode
}

const HomePageTeamplates = ({ label, children }: HomePageTeamplatesProps) => {
  return (
    <Grid container p={3}>
      <Grid item xs={2.5}>
        <Navbar
          label={label}
          userName="James Rodriguez"
          userInfo="James.co"
          avatar={avatar}
        />
      </Grid>
      <Grid item xs={9.5}>
        <Stack spacing={2} sx={{ p: 2 }}>
          {children}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default HomePageTeamplates
