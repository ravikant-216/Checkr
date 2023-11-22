import React from 'react'
import { Box, Typography } from '@mui/material'
import theme from '@/themes'
import GenericModal, { GenericModalProps } from './modal'
import { EXPORT_SUCCESS } from '@/strings/constant'

const ModalBox: React.FC<GenericModalProps> = ({
  height = theme.spacing(106),
  width = theme.spacing(174),
  ...props
}: GenericModalProps) => {
  return (
    <GenericModal {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          width: width,
          height: height,
        }}
      >
        <Typography variant="h2" sx={{ padding: theme.spacing(20.25) }}>
          {EXPORT_SUCCESS}
        </Typography>
      </Box>
    </GenericModal>
  )
}

export default ModalBox
