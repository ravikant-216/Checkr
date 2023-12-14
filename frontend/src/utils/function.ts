import { CardProps } from '@/components/molecules/Card'
import ProfileIcon from '@Assets/icons/user.svg'
import Emailicon from '@Assets/icons/Email.svg'
import NameIcon from '@Assets/icons/Name.svg'
import PhoneIcon from '@Assets/icons/Phone.svg'
import LocationIcon from '@Assets/icons/Location.svg'
import SecurityIcon from '@Assets/icons/Security.svg'
import CanderIcon from '@Assets/icons/Calendar.svg'

import { CandidateDetail } from './types'
import dayjs from 'dayjs'

export const formatDate = (date: string) => {
  const dateObj = dayjs(date)
  const month = dateObj.month() + 1
  const day = String(dateObj.date()).padStart(2, '0')
  const year = dateObj.year()
  const output = `${month}/${day}/${year}`
  return output
}

export const getCandidateInFormation = (
  candidate: CandidateDetail
): CardProps[] => {
  return [
    { heading: 'Name', subheading: candidate.name, src: ProfileIcon },
    {
      heading: 'Email',
      subheading: candidate.email,
      src: Emailicon,
    },
    {
      heading: 'Dob',
      subheading: '1990-09-10 (26)',
      src: NameIcon,
    },
    {
      heading: 'Phone',
      subheading: '(555) 555-5555',
      src: PhoneIcon,
    },
    {
      heading: 'ZipCode',
      subheading: '94158',
      src: LocationIcon,
    },
    {
      heading: 'Social Security',
      subheading: 'XXX-XX-6789',
      src: SecurityIcon,
    },
    {
      heading: 'Driver License',
      subheading: 'FTEST1111 (CA)',
      src: NameIcon,
    },
    {
      heading: 'Created At',
      subheading: 'Nov 29,2016 11:05:57 AM',
      src: CanderIcon,
    },
  ]
}
