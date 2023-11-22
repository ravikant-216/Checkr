import { Avatar as AvatarComponent, AvatarProps } from '@mui/material'
import theme from '../../../themes/index'

interface MyAvatarProps extends AvatarProps {
  width?: string
  height?: string
}

const Avatar = ({
  height = theme.spacing(9),
  width = theme.spacing(9),
  ...props
}: MyAvatarProps) => {
  return <AvatarComponent sx={{ height, width }} {...props} />
}

export default Avatar
