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
export const FORGOT_PASSWORD = 'Forgot Password?'
export const NO_WORRIES_WE_LLC = 'No worries, we’ll send you reset instructions'
export const PLEASE_ENTER_OTP = 'Please enter OTP'
export const GO_BACK = 'Go Back'
export const OTP_SENT = 'OTP has been sent to your email'
export const RESET_PASSWORD = 'Reset Password'
export const CONTINUE = 'Continue'
export const DONT_RECEIVE_OTP = 'Didn’t receive the OTP? '
export const RESEND_OTP = 'Resend OTP'
export const EMAIL_PLACEHOLDER = 'Example@gmail.com'
export const INVALID_EMAIL = 'Invalid email'

export const paginationcardDetails = {
  count: '10',
  result: 'out of 84 results',
  Perpage: '10 per page',
  resultsfound: 'Results Found',
}
export const LogoutModalDetails = {
  Heading: 'Confirm Logout',
  Subheading: 'Are you sure you want to logout?',
  cancel: 'Cancel',
  logout: 'Logout',
}

import home from '@Assets/icons/Dashboard.svg'
import candidates from '@Assets/icons/Contacts.svg'
import actions from '@Assets/icons/hammer.svg'
import analytics from '@Assets/icons/Analytics.svg'
import logs from '@Assets/icons/logs.svg'
import account from '@Assets/icons/Account.svg'
import screenings from '@Assets/icons/Screening.svg'

export const navItems = [
  { id: 1, heading: 'Home', src: home },
  { id: 2, heading: 'Candidates', src: candidates },
  { id: 3, heading: 'Adverse Actions', src: actions },
  { id: 4, heading: 'Logs', src: logs },
  { id: 5, heading: 'Analytics', src: analytics },
  { id: 6, heading: 'Account', src: account },
  { id: 7, heading: 'Screenings', src: screenings },
]
export const RECRUIT = 'RECRUIT'
export const SIGN_IN = 'Sign In'
export const PLEASE_ENTER_CREDENTIALS = 'Please enter your login credentials'
export const EMAIL_LABEL = 'Email'
export const INVALID_EMAIL_FORMAT = 'Invalid email format'
export const PASSWORD_LABEL = 'Password'
export const INVALID_PASSWORD = 'Enter a valid password'
export const REMEMBER_ME = 'Remember me'
export const FORGT_PASSWORD = 'Forgot Password?'
export const SIGN_IN_BUTTON = 'Sign In'
export const OR = 'or'
export const SIGN_IN_WITH_GOOGLE = 'Sign in with Google'
export const SIGN_IN_WITH_GITHUB = 'Sign in with Github'
export const DONT_HAVE_ACCOUNT = "Don't have an account?"
export const SIGN_UP = 'Sign up'
export const EMAIL_PLACEHOLDR = 'abc@gmail.com'
export const PASSWORD_PLACEHOLDER = '********'
