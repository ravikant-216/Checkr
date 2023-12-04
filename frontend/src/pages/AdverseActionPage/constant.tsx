/* eslint-disable @typescript-eslint/no-explicit-any */
import Chip from '@/components/atoms/Chip'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import { formatDate } from '@/utils/function'
import { AdverseactionDetail, TableColumn } from '@/utils/types'
import { Stack } from '@mui/material'

export const ColumnDefination: TableColumn<AdverseactionDetail>[] = [
  {
    label: 'NAME',
    key: 'name',
    customDefination: (row) => (
      <Typography variant="body1" color={theme.palette.primary[500]}>
        {row.name}
      </Typography>
    ),
    align: 'left',
  },
  {
    label: 'STATUS',
    key: 'status',
    customDefination: (row) => <Chip label={row.status} color={'info'} />,
    align: 'left',
  },
  {
    label: 'PRE NOTICE DATE',
    key: 'pre_notice_date',
    customDefination: (row) => (
      <Typography variant="body1">{formatDate(row.pre_notice_date)}</Typography>
    ),
    align: 'right',
  },
  {
    label: 'POST NOTICE DATE',
    key: 'post_notice_date',
    customDefination: (row) => (
      <Typography variant="body1">
        {formatDate(row.post_notice_date)}
      </Typography>
    ),
    align: 'right',
  },
  {
    key: 'datedsdfdf' as any,
    label: '',
    align: 'left',
    customDefination: () => <Stack width="200px"></Stack>,
  },
]
