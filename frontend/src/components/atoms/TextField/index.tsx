/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable multiline-ternary */
import theme from '@/themes'
import { InputAdornment, TextField as MuiTextField } from '@mui/material'
import React, { ComponentProps } from 'react'

export interface TextFieldPropType extends ComponentProps<typeof MuiTextField> {
  startIcon?: React.JSX.Element
  endIcon?: React.JSX.Element
  placeholder?: string
  defaultValue?: string
  label?: string | React.ReactNode
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({
  startIcon = undefined,
  endIcon = undefined,
  InputProps,
  ...props
}: TextFieldPropType): React.JSX.Element => {
  const customInputProps = {
    startAdornment: startIcon ? (
      <InputAdornment position="start">{startIcon}</InputAdornment>
    ) : null,
    endAdornment: endIcon ? (
      <InputAdornment position="end">{endIcon}</InputAdornment>
    ) : null,
  }

  return (
    <MuiTextField
      InputProps={InputProps ?? customInputProps}
      InputLabelProps={{
        sx: {
          ...theme.typography.body2,
          color: theme.palette.text.lowEmphasis,
        },
      }}
      {...props}
    />
  )
}

export default TextField
