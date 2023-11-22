import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import theme from '../../../themes/index'

const CheckBox = ({ ...props }: CheckboxProps) => {
  return (
    <Checkbox
      checked={props.checked}
      sx={{
        color: props.checked
          ? theme.palette.primary[500]
          : theme.palette.structural.STRUCTURAL_STROKE,
        '&.Mui-checked': {
          color: theme.palette.primary[500],
        },
      }}
      {...props}
    />
  )
}

export default CheckBox
