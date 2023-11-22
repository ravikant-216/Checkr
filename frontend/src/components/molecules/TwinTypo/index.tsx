import { Box, Typography, styled } from '@mui/material'
import { TypographyVariant } from '@/utils/types'

interface StyledBoxProps {
  gap?: string
}
export interface TwinTypoProps {
  typoOne: React.ReactNode
  typoTwo: React.ReactNode
  variantOne?: TypographyVariant
  variantTwo?: TypographyVariant
  TypoOneColor?: string
  TypoTwoColor?: string
  gap?: string
}
const StyledBox = styled(Box)<StyledBoxProps>(({ gap }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: gap ?? '4px',
}))

export const TwinTypo = ({
  typoOne,
  typoTwo,
  variantOne,
  variantTwo,
  TypoOneColor,
  TypoTwoColor,
  gap,
}: TwinTypoProps) => {
  return (
    <StyledBox gap={gap}>
      <Typography variant={variantOne} color={TypoOneColor}>
        {typoOne}
      </Typography>
      <Typography variant={variantTwo} color={TypoTwoColor}>
        {typoTwo}
      </Typography>
    </StyledBox>
  )
}
