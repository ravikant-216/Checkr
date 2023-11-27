import theme from '@/themes'
import { CandidateInformation, TableColumn } from '@/utils/types'
import { Button, Chip, Typography } from '@mui/material'

export const CandidateInformationTableColumnDefination: TableColumn<CandidateInformation>[] =
  [
    {
      key: 'name',
      label: 'Name',
      customDefination: (item) => <Button>{item.name}</Button>,
    },

    {
      key: 'adjudication',
      label: 'Adjudication',
    },
    {
      key: 'status',
      label: 'Status',
      customDefination: (item) => (
        <Chip
          data-testid="custom-chip"
          label={item.status}
          sx={{
            color:
              theme.palette.accent[
                item.status === 'CLEAR' ? 'ACCENT_GREEN' : 'ACCENT_YELLOW'
              ],
            backgroundColor:
              theme.palette.accent[
                item.status === 'CLEAR'
                  ? 'ACCENT_LIGHT_GREEN'
                  : 'ACCENT_LIGHT_YELLOW'
              ],
          }}
        />
      ),
    },
    {
      key: 'location',
      label: 'Location',
    },
    {
      key: 'date',
      label: 'Date',
      customDefination: (item) => <Typography>{item.date}</Typography>,
    },
  ]

export const CANDIDATE: CandidateInformation[] = [
  {
    id: 1,
    name: 'John Smith',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Barrouallie',
    date: '2/22/2022',
  },
  {
    id: 2,
    name: 'Serene',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Vänersborg',
    date: '3/13/2022',
  },
  {
    id: 3,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
  {
    id: 4,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
  {
    id: 5,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
  {
    id: 6,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
  {
    id: 7,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
  {
    id: 8,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
  {
    id: 9,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
  {
    id: 10,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022',
  },
]
