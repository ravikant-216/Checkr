import Chip from '@/components/atoms/Chip'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import { formatDate } from '@/utils/function'
import { CandidateDetail, TableColumn } from '@/utils/types'

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
      row.adjudication === 'ADVERSE ACTION' || row.adjudication === 'ENGAGE' ? (
        <Chip
          label={row.adjudication}
          color={
            row.adjudication === 'ADVERSE ACTION' ? 'secondary' : 'primary'
          }
        />
      ) : (
        <Typography variant="body1">{row.adjudication}</Typography>
      ),
  },
  {
    label: 'STATUS',
    key: 'status',
    customDefination: (row) => (
      <Chip
        label={row.status.status}
        color={row.status.status === 'CLEAR' ? 'primary' : 'secondary'}
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
    customDefination: () => '',
  },
]
