import React from 'react'
import { ButtonComponent } from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import { Box, Modal, styled } from '@mui/material'
import { LogoutModalDetails } from '@/strings/constant'

const ModalBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '450px',
  height: '152px',
  borderRadius: '8px',
  background: theme.palette.structural.STRUCTURAL_WHITE,
  padding: '20px',
})

const TextBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '8px',
})

const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
})

export interface LogoutModelProps {
  handleClose?: () => void
  handleLogout?: () => void
  open: boolean
}

export const LogoutModal = ({
  open,
  handleClose,
  handleLogout,
}: LogoutModelProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalBox>
        <TextBox>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.highEmphasis}
          >
            {LogoutModalDetails.Heading}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.mediumEmphasis}>
            {LogoutModalDetails.Subheading}
          </Typography>
        </TextBox>
        <ButtonBox>
          <ButtonComponent
            buttonVariant="outlined"
            onClick={handleClose}
            buttonText={LogoutModalDetails.cancel}
            buttonBorder={`1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`}
            buttonTextColor={theme.palette.text.mediumEmphasis}
            borderRadius={6}
            backgroundColor={theme.palette.structural.STRUCTURAL_WHITE}
          />
          <ButtonComponent
            buttonVariant="contained"
            onClick={handleLogout}
            buttonText={LogoutModalDetails.logout}
            buttonTextColor={theme.palette.structural.STRUCTURAL_WHITE}
            borderRadius={6}
            backgroundColor={theme.palette.primary[500]}
          />
        </ButtonBox>
      </ModalBox>
    </Modal>
  )
}
