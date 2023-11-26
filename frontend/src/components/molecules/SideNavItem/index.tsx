import { Icon } from '@/components/atoms/Icon'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import { Stack, Box } from '@mui/material'
export interface CardProps {
  src?: string
  alt?: string
  heading: string
  selected?: boolean
  onClick?: () => void
}
const Card = ({ src, alt, heading, selected, onClick }: CardProps) => {
  return (
    <Box
      sx={{
        padding: ` ${theme.spacing(2.5)} ${theme.spacing(3)}`,
        borderRadius: theme.spacing(1.25),
        background: selected
          ? theme.palette.primary[300]
          : theme.palette.structural.STRUCTURAL_WHITE,
      }}
      onClick={onClick}
    >
      <Stack direction={'row'} sx={{ alignItems: 'center' }}>
        <Icon
          src={src}
          alt={alt}
          height={theme.spacing(6)}
          width={theme.spacing(6)}
        />
        <Stack pl={2}>
          <Typography
            variant="body1"
            color={
              selected
                ? theme.palette.primary[500]
                : theme.palette.text.highEmphasis
            }
          >
            {heading}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Card
