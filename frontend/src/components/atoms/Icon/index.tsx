import { SxProps, Theme } from '@mui/material'

export interface IconProps {
  height?: string | number
  width?: string | number
  src?: string
  alt?: string
  style?: React.CSSProperties
  sx?: SxProps<Theme>
  onClick?: () => void
}
export const Icon = (props: IconProps) => {
  return <img data-testid="icon" {...props} alt={props.alt} />
}
