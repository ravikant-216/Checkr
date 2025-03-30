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

export type StatusType = 'CLEAR' | 'CONSIDER'
export type AdveractionStatusType = 'SCHEDULED'
export interface Adveraction {
  id: number
  name: string
  status: 'SCHEDULED'
  prenoticedate: string
  postnoticedate: string
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

export type ADVERSE_ACTION = 'ADVERSE_ACTION' | '-' | 'ENGAGE'

export type Status = {
  id: string
  status: StatusType
}

export type CandidateDetail = {
  id: string
  name: string
  adjudication?: ADVERSE_ACTION
  status: Status
  location: string
  date: string
  email: string
  dob: string
  phone_number: string
  zipcode: string
  social_security: string
  driver_license: string
  created_at: string
  package: string
  report_created_at: string
  report_completion_date: string
  turn_around_time: string
}

export type AdverseactionDetail = {
  id: string
  name: string
  status: AdveractionStatusType
  pre_notice_date: string
  post_notice_date: string
}
export interface User {
  id: string
  name: string
  email: string
  password: string
}
export interface Count_Records {
  id: string
  search: string
  status: 'CLEAR' | 'CONSIDER'
  date: string
}
