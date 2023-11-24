import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material'

import { TypographyVariant } from '@/utils/types'

interface TypographyProps extends MuiTypographyProps {
  children: React.ReactNode
  variant?: TypographyVariant
}

const Typography = ({ children, ...props }: TypographyProps) => {
  return <MuiTypography {...props}>{children}</MuiTypography>
}

export default Typography
