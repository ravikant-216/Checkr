import { Stack, Typography } from '@mui/material'
import React from 'react'
import theme from '@/themes'
import TextField from '@/components/atoms/TextField'
import { Icon } from '@/components/atoms/Icon'
import searchIcon from '@Assets/icons/search.svg'
import moreIcon from '@Assets/icons/More.svg'
import CheckboxFilter, { CheckboxFilterProps } from './checkboxFilter'
import { styled } from '@mui/material/styles'
import { CANDIDATE_INFO, CANDIDATE_SEARCH } from '@/strings/constant'

export interface TableHeaderProps extends CheckboxFilterProps {
  handleSearchChange: (value: string) => void
}

const StyledStack = styled(Stack)({
  background: theme.palette.structural.STRUCTURAL_WHITE,
  borderRadius: theme.spacing(1.25),
  padding: theme.spacing(3),
})

const StyledIconStack = styled(Stack)({
  padding: theme.spacing(2),
  cursor: 'pointer',
  borderRadius: theme.spacing(1.25),
  border: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
})

const TableHeader = ({
  handleSearchChange,
  onSelectedItemsChange,
  statuses,
  adjudication = [],
}: TableHeaderProps) => {
  return (
    <StyledStack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Typography variant="subtitle1" color={theme.palette.text.highEmphasis}>
        {CANDIDATE_INFO}
      </Typography>
      <Stack direction={'row'} gap={4}>
        <TextField
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleSearchChange(event.target.value)
          }
          sx={{ width: theme.spacing(86), borderRadius: theme.spacing(1.25) }}
          inputProps={{ sx: { marginLeft: theme.spacing(-3) } }}
          startIcon={
            <Icon
              src={searchIcon}
              height={theme.spacing(5)}
              width={theme.spacing(5)}
            />
          }
          placeholder={CANDIDATE_SEARCH}
        />
        <CheckboxFilter
          statuses={statuses}
          adjudication={adjudication}
          onSelectedItemsChange={onSelectedItemsChange}
        ></CheckboxFilter>
        <StyledIconStack>
          <Icon
            src={moreIcon}
            height={theme.spacing(5)}
            width={theme.spacing(5)}
          />
        </StyledIconStack>
      </Stack>
    </StyledStack>
  )
}

export default TableHeader
