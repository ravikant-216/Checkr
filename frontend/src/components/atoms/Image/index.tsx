import { SxProps } from '@mui/material'

export interface ImgProps {
  src?: string
  width?: string | number
  height?: string | number
  onClick?: () => void
  style?: React.CSSProperties
  alt?: string
  sx?: SxProps
}

export const Image = (props: ImgProps) => {
  return <img {...props} data-testid="image" alt={props.alt} />
}
