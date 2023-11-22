import { CheckboxProps } from '@mui/material/Checkbox'
import theme from '../../../themes/index'
import { Stack, Typography, TypographyProps } from '@mui/material'
import CheckBox from '@/components/atoms/Checkbox'

export interface CheckboxLabelsProps extends CheckboxProps {
  label?: string
  checked?: boolean
  labelColor?: string
  variant?: TypographyProps['variant']
}

const CheckboxLabels = ({
  label,
  variant = 'body1',
  checked = true,
  labelColor = theme.palette.text.mediumEmphasis,
  ...restProps
}: CheckboxLabelsProps) => {
  return (
    <Stack direction="row" spacing={1} alignItems={'center'}>
      <CheckBox checked={checked} {...restProps} />
      <Typography variant={variant} color={labelColor}>
        {label}
      </Typography>
    </Stack>
  )
}

export default CheckboxLabels
