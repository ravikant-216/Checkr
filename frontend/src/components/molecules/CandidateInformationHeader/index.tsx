import { ButtonComponent } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import { Box, styled } from '@mui/material'
const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})
const InnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
})
const HeadingBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '200px',
  marginLeft: '0px',
})
export interface CandidateInforHeaderProps {
  heading: string
  firstButtonName: string
  secondButtonName: string
  firstButtonIcon?: React.ReactNode
  secondButtonIcon?: React.ReactNode
  onfirstButtonclick?: () => void
  onSecondButtonclick?: () => void
  backIcon?: string
}
export const CandidateInforHeader = ({
  heading,
  firstButtonName,
  secondButtonName,
  firstButtonIcon,
  secondButtonIcon,
  onfirstButtonclick,
  onSecondButtonclick,
  backIcon,
}: CandidateInforHeaderProps) => {
  return (
    <StyledBox>
      {backIcon && (
        <HeadingBox>
          <Icon src={backIcon} style={{ padding: '0 15px 0 0' }} />
          <Typography
            variant="h1"
            color={theme.palette.text.highEmphasis}
            style={{ textAlign: 'center' }}
          >
            {heading}
          </Typography>
        </HeadingBox>
      )}
      <HeadingBox>
        {!backIcon && (
          <Typography variant="h1" color={theme.palette.text.highEmphasis}>
            {heading}
          </Typography>
        )}
      </HeadingBox>
      <InnerBox>
        <ButtonComponent
          buttonVariant="outlined"
          buttonBorder={`1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`}
          buttonText={firstButtonName}
          buttonIcon={firstButtonIcon}
          onClick={onfirstButtonclick}
          buttonTextColor={theme.palette.text.mediumEmphasis}
          borderRadius={6}
          backgroundColor={theme.palette.structural.STRUCTURAL_WHITE}
        />
        <ButtonComponent
          buttonVariant="contained"
          buttonText={secondButtonName}
          buttonIcon={secondButtonIcon}
          onClick={onSecondButtonclick}
          buttonTextColor={theme.palette.structural.STRUCTURAL_WHITE}
          borderRadius={6}
          backgroundColor={theme.palette.primary[500]}
        />
      </InnerBox>
    </StyledBox>
  )
}
