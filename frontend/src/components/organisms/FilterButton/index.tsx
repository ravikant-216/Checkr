import { Icon } from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import {
  Box,
  Button,
  Divider,
  MenuItemProps,
  Popover,
  Stack,
  popoverClasses,
  styled,
  useTheme,
} from '@mui/material'
import React, { ReactNode, useState } from 'react'
import Filter from '@Assets/icons/Filter.svg'
import { FILTER } from '@/strings/constant'

export type ChildElementTpe = Array<{
  element: React.JSX.Element
  MenuItemProps?: MenuItemProps
}>

interface DropDownButtonProps {
  children: ReactNode
}

const StyledPopover = styled(Popover)(({ theme }) => ({
  [`&. ${popoverClasses.paper}`]: {
    mt: 1,
    border: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
    borderRadius: 1.25,
  },
}))

const FilterButton = ({ children }: DropDownButtonProps): React.ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()

  const toogleDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  return (
    <Box>
      <Stack width="fit-content" onClick={toogleDropdown}>
        <Button
          variant="outlined"
          startIcon={<Icon src={Filter} alt="Filter" />}
          sx={{
            color: theme.palette.text.mediumEmphasis,
            borderColor: theme.palette.structural.STRUCTURAL_STROKE,
            ':hover': {
              borderColor: theme.palette.structural.STRUCTURAL_STROKE,
            },
          }}
        >
          <Typography variant="body1">{FILTER}</Typography>
        </Button>
      </Stack>
      <StyledPopover
        open={Boolean(anchorEl)}
        onClick={toogleDropdown}
        anchorEl={anchorEl}
        onClose={toogleDropdown}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Stack width={theme.spacing(71.25)} borderRadius="6px">
          <Typography variant="body1" my={3} ml={4}>
            {FILTER}
          </Typography>
          <Divider />
          <Stack ml={4} my={3}>
            {children}
          </Stack>
        </Stack>
      </StyledPopover>
    </Box>
  )
}

export default FilterButton
