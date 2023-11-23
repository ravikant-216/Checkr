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
