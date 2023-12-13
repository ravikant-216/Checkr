import { Navbar } from '@/components/organisms/Navbar'
import { NavbarLabel } from '@/utils/types'
import { Stack, styled } from '@mui/material'
import avatar from '@Assets/icons/Avatar.svg'
import useLogout from '@/hooks/useLogout'

interface HomePageTeamplatesProps {
  label: NavbarLabel
  children: React.ReactNode
}

const FirstChildStack = styled(Stack)(() => ({
  position: 'fixed',
  zIndex: 999,
  left: '24px',
  top: '15px',
}))

const HomePageTeamplates = ({ label, children }: HomePageTeamplatesProps) => {
  const logout = useLogout()
  return (
    <Stack direction="row" alignItems="flex-start">
      <FirstChildStack>
        <Navbar
          label={label}
          handleLogout={logout}
          userName="James Rodriguez"
          userInfo="James.co"
          avatar={avatar}
        />
      </FirstChildStack>
      <Stack spacing={2} ml={68} sx={{ p: 2 }} flex={1} mt={6.5}>
        {children}
      </Stack>
    </Stack>
  )
}

export default HomePageTeamplates
