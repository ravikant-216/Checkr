import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material'

interface ChipProps extends MuiChipProps {
  label: string
}

const Chip = ({ label, ...props }: ChipProps) => {
  return <MuiChip label={label} {...props} />
}

export default Chip
