import Typography from '@/components/atoms/Typography'
import { FormControl, FormLabel, useTheme } from '@mui/material'
import EyeOpen from '@Assets/icons/Hide.svg'
import EyeClose from '@Assets/icons/unhide.svg'
import TextField, { TextFieldPropType } from '@/components/atoms/TextField'
import { Icon } from '@/components/atoms/Icon'
import { useState } from 'react'

interface InputFieldWithTypographyProps
  extends Omit<TextFieldPropType, 'onChange' | 'label'> {
  type: TextFieldPropType['type']
  onChange: TextFieldPropType['onChange']
  label: string
  placeholder?: string
}

const InputFieldWithTypography = ({
  type,
  onChange,
  label,
  ...props
}: InputFieldWithTypographyProps) => {
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const endIcon = showPassword ? EyeClose : EyeOpen

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const fieldType = showPassword ? 'text' : 'password'

  return (
    <FormControl sx={{ gap: 2.5 }}>
      <FormLabel>
        <Typography
          variant="subtitle1"
          color={theme.palette.text.mediumEmphasis}
        >
          {label}
        </Typography>
      </FormLabel>
      <TextField
        {...props}
        onChange={onChange}
        type={type === 'password' ? fieldType : type}
        endIcon={
          type === 'password' ? (
            <Icon
              src={endIcon}
              style={{ cursor: 'pointer' }}
              alt="endIcon"
              onClick={toggleShowPassword}
            />
          ) : (
            <></>
          )
        }
      />
    </FormControl>
  )
}

export default InputFieldWithTypography
