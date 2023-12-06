import React, { useState } from 'react'
import Card from '@/components/molecules/SideNavItem'
import { Box, styled } from '@mui/material'
import Typography from '@/components/atoms/Typography'
import Avatar from '@/components/atoms/Avatar'
import { Icon } from '@/components/atoms/Icon'
import logout from '@Assets/icons/logout.svg'
import theme from '@/themes'
import { RECRUIT, navItems } from '@/strings/constant'
import { NavbarLabel } from '@/utils/types'
import { useNavigate } from 'react-router-dom'
import { LogoutModal } from '@/components/molecules/LogoutModal'

export interface NavbarProps {
  userName?: string
  userInfo?: string
  avatar?: string
  handleLogout?: () => void
  label: NavbarLabel
}
const Wrapper = styled(Box)({
  width: "min('238px','90vw')",
  minHeight: "min('720px','97vh')",
  height: '97vh',
  boxShadow: `0px 4px 28px 0px ${theme.palette.shadow.SHADOW_GEAY}`,
  backgroundColor: `${theme.palette.structural.STRUCTURAL_WHITE}`,
  border: '6px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '8px',
})

const NavWrapper = styled(Box)({
  padding: '30px 20px 0 20px',
})
const Section = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
})

const NavItems = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  cursor: 'pointer',
})
const StyledCard = styled(Card)({
  backgroundColor: `${theme.palette.primary[300]}`,
})
const LogoutSection = styled(Box)({
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderTop: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
  alignItems: 'center',
  gap: '12px',
})
const TypoWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '-8px',
})
export const Navbar: React.FC<NavbarProps> = ({
  userName,
  userInfo,
  avatar,
  handleLogout,
  label,
}) => {
  const [navItem, setNavItem] = useState<string>(label)
  const [isLogoutModel, setIsLogoutModel] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleNavItemClick = (heading: string) => {
    setNavItem(heading)
    if (heading === 'Candidates') {
      navigate('/dashboard')
    } else {
      navigate('/adverse-action')
    }
  }
  const handleLogoutModel = () => {
    setIsLogoutModel((prev) => !prev)
  }
  return (
    <Wrapper>
      <NavWrapper>
        <Typography
          variant="h1"
          color={theme.palette.primary.dark}
          style={{ marginLeft: '14px', marginBottom: '10px' }}
        >
          {RECRUIT}
        </Typography>
        <NavItems>
          {navItems.map((item) => (
            <StyledCard
              key={item.id}
              heading={item.heading}
              src={item.src}
              onClick={() =>
                (item.heading === 'Candidates' ||
                  item.heading === 'Adverse Actions') &&
                handleNavItemClick(item.heading)
              }
              selected={navItem === item.heading}
            />
          ))}
        </NavItems>
      </NavWrapper>
      <LogoutSection>
        <Section>
          <Avatar src={avatar} />
          <TypoWrapper>
            <Typography variant="body1" color={theme.palette.text.highEmphasis}>
              {userName}
            </Typography>
            <Typography
              variant="caption2"
              color={theme.palette.text.lowEmphasis}
            >
              {userInfo}
            </Typography>
          </TypoWrapper>
        </Section>
        <Icon
          src={logout}
          alt="logout icon"
          height={'20px'}
          width={'20px'}
          style={{ cursor: 'pointer', marginLeft: '10px' }}
          onClick={handleLogoutModel}
        />
      </LogoutSection>
      <LogoutModal
        open={isLogoutModel}
        handleLogout={handleLogout}
        handleClose={handleLogoutModel}
      />
    </Wrapper>
  )
}
