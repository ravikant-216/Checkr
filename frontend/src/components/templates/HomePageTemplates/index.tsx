import { Navbar } from '@/components/organisms/Navbar'
import { NavbarLabel } from '@/utils/types'
import { Grid, Stack } from '@mui/material'
import avatar from '@Assets/icons/Avatar.svg'
import useLogout from '@/hooks/useLogout'

interface HomePageTeamplatesProps {
  label: NavbarLabel
  children: React.ReactNode
}

const HomePageTeamplates = ({ label, children }: HomePageTeamplatesProps) => {
  const logout = useLogout()
  return (
    <Grid container p={3}>
      <Grid item xs={1.8}>
        <Navbar
          label={label}
          handleLogout={logout}
          userName="James Rodriguez"
          userInfo="James.co"
          avatar={avatar}
        />
      </Grid>
      <Grid item xs={10}>
        <Stack spacing={2} ml={6} sx={{ p: 2 }} width={'98%'} mt={6.5}>
          {children}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default HomePageTeamplates
