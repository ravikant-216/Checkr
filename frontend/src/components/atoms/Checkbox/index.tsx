import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import theme from '../../../themes/index'

const CheckBox = ({ ...props }: CheckboxProps) => {
  return (
    <Checkbox
      checked={props.checked}
      style={{ color: theme.palette.primary[500] }}
      {...props}
    />
  )
}

export default CheckBox
