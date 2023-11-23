import { Icon } from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import { Stack, Box } from '@mui/material'
interface CardProps {
  src?: string
  alt?: string
  heading: string
  subheading: string
  width?: string
}
const Card = ({ src, alt, heading, subheading, width }: CardProps) => {
  return (
    <Box
      sx={{
        borderRadius: theme.spacing(3),
        border: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
        background: theme.palette.primary[50],
        padding: theme.spacing(3),
        width: width,
      }}
    >
      <Stack direction={'row'} sx={{ alignItems: 'center' }}>
        <Box
          borderRadius={theme.spacing(2.5)}
          padding={theme.spacing(2.5)}
          border={`1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`}
          sx={{
            background: theme.palette.structural.STRUCTURAL_WHITE,
          }}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Icon
            src={src}
            alt={alt}
            height={theme.spacing(6)}
            width={theme.spacing(6)}
          />
        </Box>
        <Stack pl={3}>
          <Typography
            variant="body2"
            color={theme.palette.text.mediumEmphasis}
            sx={{ pb: 1 }}
          >
            {heading}
          </Typography>
          <Typography variant="body1" color={theme.palette.text.highEmphasis}>
            {subheading}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Card
