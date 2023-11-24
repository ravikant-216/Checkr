import { CardProps } from '@/components/molecules/Card'
import name from '@Assets/icons/Name.svg'
import email from '@Assets/icons/Email.svg'
import phone from '@Assets/icons/Phone.svg'
import DOB from '@Assets/icons/DOB.svg'
import location from '@Assets/icons/Location.svg'
import security from '@Assets/icons/Security.svg'
import calendar from '@Assets/icons/Calendar.svg'

export const EXPORT_SUCCESS =
  'Download link was successfully sent to your email'
export const PRE_ADVANCE_ACTION_NOTICE_SENT =
  'Pre-Advance Action notice successfully sent'

export const CANDIDATE_DATA: CardProps[] = [
  {
    src: name,
    alt: 'name',
    heading: 'Name',
    subheading: 'John Smith',
  },
  {
    src: email,
    alt: 'email',
    heading: 'Email',
    subheading: 'John.smith@checkr.com',
  },
  {
    src: DOB,
    alt: 'dob',
    heading: 'DOB',
    subheading: '1990-09-10 (26)',
  },
  {
    src: phone,
    alt: 'phone',
    heading: 'Phone',
    subheading: '(555) 555-5555',
  },
  {
    src: location,
    alt: 'zipcode',
    heading: 'Zipcode',
    subheading: '94198',
  },
  {
    src: security,
    alt: 'security',
    heading: 'Social Security',
    subheading: 'XXX-XX-6789',
  },
  {
    src: DOB,
    alt: 'driving license',
    heading: 'Driving License',
    subheading: 'FTEST1111 (CA)',
  },
  {
    src: calendar,
    alt: 'created at',
    heading: 'Created At',
    subheading: 'Nov 29,2016 11:05:57 AM',
  },
]
export const FILTER = 'Filter'
export const TITLE = 'Pre-Adverse Action Notice'
export const FROM_LABEL = 'From:'
export const FROM_EMAIL = 'kyle@checkr.com'
export const TO_LABEL = 'To:'
export const TO_EMAIL = 'john.smith@checkr.com'
export const SUBJECT_LABEL = 'Subject:'
export const SUBJECT_TEXT = 'Pre-adverse action notice - checkr-bpo'
export const GREETING = 'Dear John Smith,'
export const INTRO_TEXT =
  'You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.'
export const CHARGES_LABEL = 'Select the charges for the pre adverse action'
export const CHARGE_1 = 'Driving while license suspended'
export const CHARGE_2 = 'Assault Domestic Violence'
export const CHARGE_3 = 'Unable to verify employment history at Dunder Mifflin'
export const DISPUTE_TEXT =
  'If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.'
export const SIGN_OFF = 'Sincerely,'
export const SIGN_OFF_NAME = 'Checkr-bpo'
export const AUTO_SEND_LABEL = 'Auto send post adverse action'
export const AUTO_SEND_DAYS = '7'
export const AUTO_SEND_DAYS_LABEL = 'days'
export const BUTTON_TEXT = 'Preview Notice'
export const STATUS = ['All Status', 'Clear', 'Consider']
export const ADJUDICATION = ['All', 'Engaged', 'Pre adverse action']
export const STATUSES = [
  'All Status',
  'Pending',
  'Scheduled',
  'Dispute',
  'Canceled',
  'Undeliverable',
]
export const CANDIDATE_INFO = 'Candidate Information'
export const CANDIDATE_SEARCH = 'Search any candidate'
export const ADJUDICATION_LABEL = 'Adjudication'
export const STATUS_LABEL = 'Status'
export const ADJUDICATION_LABEL_S = 'Adjudication'
export const STATUS_LABEL_S = 'Status'
