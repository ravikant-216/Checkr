/* eslint-disable @typescript-eslint/no-explicit-any */
import Chip from '@/components/atoms/Chip'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import { formatDate } from '@/utils/function'
import { Count_Records, TableColumn } from '@/utils/types'
import { Stack } from '@mui/material'

export const courtSearchColumnDefination: TableColumn<Count_Records>[] = [
  {
    key: 'search',
    label: 'Search',
    customDefination: (item) => (
      <Typography color={theme.palette.primary[500]} variant="body1">
        {item.search}
      </Typography>
    ),
  },
  {
    key: 'status',
    label: 'Status',
    customDefination: (item) => (
      <Chip
        label={item.status}
        color={item.status === 'CLEAR' ? 'primary' : 'secondary'}
      />
    ),
  },
  {
    key: 'date',
    label: 'Date',
    align: 'right',
    customDefination: (item) => (
      <Typography color={theme.palette.primary[500]} variant="body1">
        {formatDate(item.date)}
      </Typography>
    ),
  },
  {
    key: 'dated' as any,
    label: '',
    align: 'right',
    customDefination: () => <Stack width="200px"></Stack>,
  },
  {
    key: 'datedsdfdf' as any,
    label: '',
    align: 'left',
    customDefination: () => <Stack width="200px"></Stack>,
  },
]
