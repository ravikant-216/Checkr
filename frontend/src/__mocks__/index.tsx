/* eslint-disable @typescript-eslint/no-explicit-any */
import theme from '@/themes'
import {
  CandidateDetail,
  CandidateInformation,
  Count_Records,
  TableColumn,
} from '@/utils/types'
import { Button, Chip, Stack, Typography } from '@mui/material'

export const CandidateInformationTableColumnDefination: TableColumn<CandidateInformation>[] =
  [
    {
      key: 'name',
      label: 'Name',
      customDefination: (item) => (
        <Button>
          <Typography variant="body2">{item.name}</Typography>
        </Button>
      ),
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
      customDefination: (item) => (
        <Typography textAlign="right">{item.date}</Typography>
      ),
      align: 'right',
    },
    {
      key: 'dateff' as any,
      label: '',
      customDefination: () => <Stack width="30px"></Stack>,
      align: 'left',
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

export const CANDIDATES: CandidateDetail[] = [
  {
    id: 'f4aed27a-4322-46fd-aae4-db4620df2aa3',
    name: 'Christy',
    adjudication: 'ADVERSE_ACTION',
    status: {
      id: '39f2a67b-c969-4ff0-836b-c173beb2ccae',
      value: 'CONSIDER',
    },
    location: 'New Virginieland',
    date: '2024-05-12T02:49:03.746Z',
    email: 'Dimitri88@yahoo.com',
    dob: '2023-03-30T04:38:53.099Z',
    phone_number: '453-629-3863 x44786',
    zipcode: '30288-7163',
    social_security: '0',
    driver_license: '1',
    created_at: '2023-07-09T16:22:29.646Z',
    package: 'Premium',
    report_created_at: '2023-09-07T11:46:53.734Z',
    report_completion_date: '2023-01-02T14:54:17.464Z',
    turn_around_time: '4',
  },
  {
    id: 'f465f0cc-8d71-4852-9bef-70a369ae35d2',
    name: 'Jessika',
    adjudication: 'ADVERSE_ACTION',
    status: {
      id: '39f2a67b-c969-4ff0-836b-c173beb2ccae',
      value: 'CONSIDER',
    },
    location: 'Fort Queeniefurt',
    date: '2024-02-29T16:12:05.949Z',
    email: 'Otho_Beier@gmail.com',
    dob: '2023-06-29T04:44:21.390Z',
    phone_number: '674.772.4234 x76555',
    zipcode: '65679',
    social_security: '5',
    driver_license: '6',
    created_at: '2023-02-03T12:51:30.901Z',
    package: 'Basic',
    report_created_at: '2023-04-17T04:33:54.501Z',
    report_completion_date: '2023-05-23T23:17:06.966Z',
    turn_around_time: '2',
  },
  {
    id: 'bcb64129-2539-4e07-98b5-643d5f238ac0',
    name: 'Chester',
    adjudication: 'ADVERSE_ACTION',
    status: {
      id: 'ed9a8121-82f1-4f8a-a300-7572f2a323d7',
      value: 'CLEAR',
    },
    location: 'Kautzertown',
    date: '2024-07-01T20:57:49.678Z',
    email: 'Darron88@gmail.com',
    dob: '2023-11-13T17:16:05.165Z',
    phone_number: '1-237-817-1777',
    zipcode: '81431-6902',
    social_security: '6',
    driver_license: '6',
    created_at: '2023-06-17T08:15:08.045Z',
    package: 'Basic',
    report_created_at: '2023-06-27T06:43:42.211Z',
    report_completion_date: '2023-03-19T12:49:03.642Z',
    turn_around_time: '1',
  },
  {
    id: 'f750cdb5-bede-49f4-8309-6ff0472523a7',
    name: 'Cleve',
    adjudication: '-',
    status: {
      id: '3c32d82f-6a3a-454c-ace6-d53883b48aeb',
      value: 'CONSIDER',
    },
    location: 'Schmittchester',
    date: '2024-05-21T03:17:01.240Z',
    email: 'Olin_Cummerata@gmail.com',
    dob: '2023-03-27T22:29:57.675Z',
    phone_number: '(214) 345-8612 x8267',
    zipcode: '83363',
    social_security: '0',
    driver_license: '8',
    created_at: '2023-11-16T01:05:27.188Z',
    package: 'Premium',
    report_created_at: '2022-12-21T01:29:45.564Z',
    report_completion_date: '2023-02-28T15:19:33.457Z',
    turn_around_time: '0',
  },
]
export const COURT_RECORD: Count_Records[] = [
  {
    id: 'fe05ff66-eb9e-4713-924b-4b22667d82a7',
    search: 'SSN Verification',
    status: 'CLEAR',
    date: '2023-07-24T01:15:48.057Z',
  },
  {
    id: 'e6d70a0a-8005-491d-8b14-077108abf9c4',
    search: 'Sex Offender',
    status: 'CONSIDER',
    date: '2023-08-26T02:22:58.139Z',
  },
  {
    id: '6bbc4489-5415-4a4a-bfce-f21a7852bbcf',
    search: 'Global Watchlist',
    status: 'CLEAR',
    date: '2023-07-06T10:17:25.480Z',
  },
  {
    id: 'e67545d3-2b23-4e4d-891b-d4c9b3a0ff92',
    search: 'Federal Criminal',
    status: 'CLEAR',
    date: '2023-09-20T00:52:33.939Z',
  },
  {
    id: '4e8ebb6d-ad4e-43a9-a1e8-1d781e8d797a',
    search: 'County Criminal',
    status: 'CLEAR',
    date: '2023-07-28T17:36:01.489Z',
  },
]

export const AderseActionData = [
  {
    id: '5d1f55ca-91b7-4dfa-8228-7c15094a8a91',
    name: 'Arianna',
    status: 'SCHEDULED',
    pre_notice_date: '2023-06-01T18:40:52.658Z',
    post_notice_date: '2023-04-23T01:18:18.280Z',
  },
  {
    id: 'dfdbc813-421a-4435-987a-a36dbd57f336',
    name: 'Rickie',
    status: 'SCHEDULED',
    pre_notice_date: '2023-03-21T01:51:33.023Z',
    post_notice_date: '2023-10-02T04:39:38.218Z',
  },
  {
    id: 'c02c36c6-d9cc-47a7-9cbd-0af05d086a31',
    name: 'Dayana',
    status: 'SCHEDULED',
    pre_notice_date: '2023-09-17T11:57:18.947Z',
    post_notice_date: '2022-12-27T17:02:57.178Z',
  },
  {
    id: '4f498527-7a4f-4364-b979-76beaedbfc0d',
    name: 'Virginie',
    status: 'SCHEDULED',
    pre_notice_date: '2023-10-13T03:17:35.279Z',
    post_notice_date: '2023-11-27T06:00:33.629Z',
  },
  {
    id: '317cdff1-1eec-4501-9b7d-d3f5555c4438',
    name: 'Berry',
    status: 'SCHEDULED',
    pre_notice_date: '2023-07-02T12:03:44.298Z',
    post_notice_date: '2023-10-25T16:09:55.696Z',
  },
  {
    id: '3ec89038-87fd-49a3-861e-6ad2efa6780e',
    name: 'Garth',
    status: 'SCHEDULED',
    pre_notice_date: '2023-04-10T08:52:28.691Z',
    post_notice_date: '2023-10-04T13:01:48.464Z',
  },
  {
    id: '5f060116-7b5a-4300-854b-e129be729ef3',
    name: 'Johnnie',
    status: 'SCHEDULED',
    pre_notice_date: '2023-01-12T22:50:54.466Z',
    post_notice_date: '2023-02-17T18:39:10.089Z',
  },
  {
    id: 'f7a20b47-ded0-49b2-9553-19bb82e78df7',
    name: 'Kaylie',
    status: 'SCHEDULED',
    pre_notice_date: '2023-11-23T12:02:02.858Z',
    post_notice_date: '2023-11-06T02:39:06.173Z',
  },
  {
    id: '7ef321ad-7e6d-45c9-9077-0aff969d5e5b',
    name: 'Shania',
    status: 'SCHEDULED',
    pre_notice_date: '2023-09-27T03:10:47.852Z',
    post_notice_date: '2023-03-24T04:31:34.904Z',
  },
  {
    id: '2f191390-a642-42bd-b4ca-66698f50e8a3',
    name: 'Ahmed',
    status: 'SCHEDULED',
    pre_notice_date: '2023-06-30T10:04:27.727Z',
    post_notice_date: '2023-01-14T12:27:34.315Z',
  },
]
