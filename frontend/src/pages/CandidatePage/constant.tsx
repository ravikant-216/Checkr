import Chip from '@/components/atoms/Chip'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import { formatDate } from '@/utils/function'
import { CandidateDetail, TableColumn } from '@/utils/types'
import { Stack } from '@mui/material'

export const ColumnDefination: TableColumn<CandidateDetail>[] = [
  {
    label: 'NAME',
    key: 'name',
    customDefination: (row) => (
      <Typography variant="body1" color={theme.palette.primary[500]}>
        {row.name}
      </Typography>
    ),
  },
  {
    label: 'ADJUDICATION',
    key: 'adjudication',
    customDefination: (row) =>
      row?.adjudication === 'ADVERSE_ACTION' ||
      row?.adjudication === 'ENGAGE' ? (
        <Chip
          label={row.adjudication}
          color={
            row.adjudication === 'ADVERSE_ACTION' ? 'secondary' : 'primary'
          }
        />
      ) : (
        <Typography variant="body1" textAlign="center">
          -
        </Typography>
      ),
  },
  {
    label: 'STATUS',
    key: 'status',
    customDefination: (row) => (
      <Chip
        label={row.status.value}
        color={row.status.value === 'CLEAR' ? 'primary' : 'secondary'}
      />
    ),
  },
  {
    label: 'LOCATION',
    key: 'location',
  },
  {
    label: 'DATE',
    key: 'date',
    customDefination: (row) => (
      <Typography variant="body1">{formatDate(row.date)}</Typography>
    ),
    align: 'right',
  },
  {
    label: '',
    key: 'zipcode',
    customDefination: () => <Stack width="200px"></Stack>,
  },
]
