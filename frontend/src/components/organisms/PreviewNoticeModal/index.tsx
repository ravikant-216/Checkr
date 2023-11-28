import { Box, Divider, Modal, styled } from '@mui/material'
import Close from '@Assets/icons/Close.svg'
import Attachment from '@Assets/icons/Attachment.svg'
import {
  ASSAULTTYPE,
  ATTACHMENTS,
  ATTACHMENT_DETAILS,
  DETAILS,
  EMAIL_BODY,
  NOTICE_MODAL_TITILE,
  SALUTATION,
  STATEMENTS,
  SUBJECT,
  SUBMIT_NOTICE_BUTTON,
  USER_EMAIL_INFO,
} from '@/strings/constant'
import theme from '@/themes'
import Typography from '@/components/atoms/Typography'
import { Icon } from '@/components/atoms/Icon'
import { ButtonComponent } from '@/components/atoms/Button'

export interface PreviewNoticeModalProps {
  open: boolean
  email?: string
  name?: string
  handleSubmit?: () => void
  handleClose?: () => void
}

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:focus': {
    outline: 'none',
  },
})

const Wrapper = styled(Box)({
  backgroundColor: `${theme.palette.structural.STRUCTURAL_WHITE}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: theme.spacing(174),
  height: theme.spacing(171.5),
  borderRadius: theme.spacing(2),
})

const StyledDivider = styled(Divider)({
  color: theme.palette.structural.STRUCTURAL_STROKE,
})

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(3.75),
})

const Body = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: theme.spacing(3.75),
  height: theme.spacing(135.75),
  gap: theme.spacing(2),
})

const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(2.5),
})

const StyledBox = styled(Box)({
  display: 'span',
})

const Lists = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: theme.spacing(148.5),
  height: theme.spacing(17.75),
  borderRadius: theme.spacing(1),
  paddingLeft: theme.spacing(7.5),
  background: theme.palette.accent.ACCENT_LIGHT_RED,
})

const UnorderedList = styled('li')({
  color: theme.palette.accent.ACCENT_RED,
})

const EmailContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(3.75),
})

const AttachmentsWrapper = styled(Box)({
  display: 'flex',
  gap: theme.spacing(3),
})

const DetailsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.25),
})

export const PreviewNoticeModal = ({
  open,
  handleSubmit,
  handleClose,
  email,
  name,
}: PreviewNoticeModalProps) => {
  return (
    <StyledModal open={open} onClose={handleClose}>
      <Wrapper>
        <Header>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.highEmphasis}
          >
            {NOTICE_MODAL_TITILE}
          </Typography>
          <Icon
            src={Close}
            alt="Close Icon"
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          />
        </Header>

        <StyledDivider />

        <Body>
          <StyledBox>
            <Typography
              variant="caption1"
              color={theme.palette.text.highEmphasis}
            >
              {DETAILS[0]}
            </Typography>
            <Typography
              variant="caption1"
              color={theme.palette.text.mediumEmphasis}
            >
              {USER_EMAIL_INFO}
            </Typography>
          </StyledBox>
          <StyledBox>
            <Typography
              variant="caption1"
              color={theme.palette.text.highEmphasis}
            >
              {DETAILS[1]}
            </Typography>
            <Typography
              variant="caption1"
              color={theme.palette.text.mediumEmphasis}
            >
              {email}
            </Typography>
          </StyledBox>
          <StyledBox>
            <Typography
              variant="caption1"
              color={theme.palette.text.highEmphasis}
            >
              {DETAILS[2]}
            </Typography>
            <Typography
              variant="caption1"
              color={theme.palette.text.mediumEmphasis}
            >
              {SUBJECT}
            </Typography>
          </StyledBox>

          <Lists>
            <ul>
              <UnorderedList>
                <Typography variant="caption1" sx={{ whiteSpace: 'pre-line' }}>
                  {STATEMENTS[0]}
                </Typography>
              </UnorderedList>
              <UnorderedList>
                <Typography variant="caption1" sx={{ whiteSpace: 'pre-line' }}>
                  {STATEMENTS[1]}
                </Typography>
              </UnorderedList>
            </ul>
          </Lists>

          <EmailContentBox>
            <Typography
              variant="caption1"
              color={theme.palette.text.mediumEmphasis}
              sx={{ whiteSpace: 'pre-line' }}
            >
              {SALUTATION[0]} {name},
            </Typography>
          </EmailContentBox>
          <EmailContentBox>
            <Typography
              variant="caption1"
              color={theme.palette.text.mediumEmphasis}
            >
              {SALUTATION[1]}
            </Typography>
          </EmailContentBox>

          <ul
            style={{
              color: theme.palette.text.mediumEmphasis,
              marginLeft: theme.spacing(7.5),
            }}
          >
            <li>
              <Typography
                variant="caption1"
                sx={{ color: theme.palette.text.mediumEmphasis }}
              >
                {ASSAULTTYPE}
              </Typography>
            </li>
          </ul>

          <EmailContentBox>
            <Typography
              variant="caption1"
              color={theme.palette.text.mediumEmphasis}
            >
              {EMAIL_BODY[0]}
            </Typography>
          </EmailContentBox>
          <EmailContentBox>
            <Typography
              variant="caption1"
              color={theme.palette.text.mediumEmphasis}
            >
              {EMAIL_BODY[1]}
            </Typography>
          </EmailContentBox>

          <Typography
            variant="caption1"
            sx={{
              color: theme.palette.text.highEmphasis,
              marginTop: theme.spacing(2.5),
            }}
          >
            {ATTACHMENTS}
          </Typography>

          <DetailsBox>
            <AttachmentsWrapper>
              <Icon src={Attachment} alt="AttachmentPin" />
              <Typography
                variant="caption2"
                sx={{ color: theme.palette.text.mediumEmphasis }}
              >
                {ATTACHMENT_DETAILS[0]}
              </Typography>
            </AttachmentsWrapper>
            <AttachmentsWrapper>
              <Icon src={Attachment} alt="AttachmentPin" />
              <Typography
                variant="caption2"
                color={theme.palette.text.mediumEmphasis}
              >
                {ATTACHMENT_DETAILS[1]}
              </Typography>
            </AttachmentsWrapper>
          </DetailsBox>
        </Body>

        <StyledDivider />

        <Footer>
          <ButtonComponent
            buttonVariant="contained"
            onClick={handleSubmit}
            buttonText={SUBMIT_NOTICE_BUTTON}
            borderRadius={6}
            backgroundColor={theme.palette.primary[500]}
          />
        </Footer>
      </Wrapper>
    </StyledModal>
  )
}
