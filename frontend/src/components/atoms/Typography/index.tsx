import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  TypographyVariant,
} from '@mui/material'

interface TypographyProps extends MuiTypographyProps {
  children: React.ReactNode
  variant?: TypographyVariant
}

const Typography = ({ children, ...props }: TypographyProps) => {
  return <MuiTypography {...props}>{children}</MuiTypography>
}

export default Typography
