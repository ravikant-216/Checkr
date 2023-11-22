import { Dialog, DialogProps, Stack, Typography } from '@mui/material'
import Gif from '@Assets/gif/CheckGif.gif'
import { Image } from '@/components/atoms/Image'
import theme from '@/themes'
import { PRE_ADVANCE_ACTION_NOTICE_SENT } from '@/strings/constant'

interface StatusModalProps extends DialogProps {
  open: boolean
}

const StatusModal = ({ open, ...props }: StatusModalProps) => {
  return (
    <Dialog open={open} {...props}>
      <Stack
        alignItems="center"
        justifyContent="center"
        py={20.25}
        maxWidth={theme.spacing(174)}
        paddingX={25}
        gap={8.5}
      >
        <Image src={Gif} alt="gif" width={200} height={200} />
        <Typography textAlign="center" variant="h2">
          {PRE_ADVANCE_ACTION_NOTICE_SENT}
        </Typography>
      </Stack>
    </Dialog>
  )
}

export default StatusModal
