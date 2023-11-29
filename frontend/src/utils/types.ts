import { TableCellProps } from '@mui/material'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'subtitle1'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'caption2'

export interface TableColumn<I> {
  key: keyof I
  label: string
  customDefination?: (row: I) => React.ReactNode
  align?: TableCellProps['align']
}

export interface CandidateInformation {
  id: number
  name: string
  adjudication: string
  status: 'CLEAR' | 'CONSIDER'
  location: string
  date: string
}

export type NavbarLabel = 'Candidates' | 'Adverse Actions'
