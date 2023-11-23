import {
  DateValidationError,
  LocalizationProvider,
  DatePicker as MuiDatePicker,
  PickerChangeHandlerContext,
  pickersCalendarHeaderClasses,
  pickersDayClasses,
} from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CalenderIcon from '@Assets/icons/Calendar-1.svg'
import LeftIcon from '@Assets/icons/Arrow_Left.svg'
import RightIcon from '@Assets/icons/ArrowRight.svg'
import { Icon } from '@/components/atoms/Icon'
import { Box, SxProps, Theme } from '@mui/material'
import theme from '@/themes'

interface DatePickerProps {
  sx?: SxProps<Theme>
  onChange: (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void
  disabled?: boolean
  label?: string
  minDate?: string
  maxDate?: string
  onError?: (error: DateValidationError, value: unknown) => void
}

const ArrowIcon = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Box
      p={2.5}
      border={`1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`}
      width={theme.spacing(8)}
      height={theme.spacing(8)}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={1}
    >
      <Icon src={src} height={12} width={12} alt={alt} />
    </Box>
  )
}

const SwitchViewIcon = () => <></>

const OpenPickerIcon = () => (
  <Icon
    src={CalenderIcon}
    alt="Date Picker Icon"
    style={{
      marginRight: theme.spacing(1),
    }}
  />
)

const LeftArrowIcon = () => <ArrowIcon src={LeftIcon} alt="LeftIcon" />

const RightArrowIcon = () => <ArrowIcon src={RightIcon} alt="RightIcon" />

const DatePicker: React.FC<DatePickerProps> = ({
  minDate,
  maxDate,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        slots={{
          openPickerIcon: OpenPickerIcon,
          switchViewIcon: SwitchViewIcon,
          leftArrowIcon: LeftArrowIcon,
          rightArrowIcon: RightArrowIcon,
        }}
        slotProps={{
          day: {
            sx: {
              borderRadius: 1,
              [`& .${pickersDayClasses.selected}`]: {
                borderRadius: 1,
              },
            },
          },
          calendarHeader: {
            sx: {
              [`& .${pickersCalendarHeaderClasses.labelContainer}`]: {
                ...theme.typography.h2,
                width: '100%',
                [`.${pickersCalendarHeaderClasses.label}`]: {
                  position: 'relative',
                  left: theme.spacing(17),
                  zIndex: 100,
                },
              },
              '& .MuiPickersArrowSwitcher-root ': {
                ml: -6,
              },
              '& .MuiPickersArrowSwitcher-root .MuiButtonBase-root:nth-of-type(1)':
                {
                  position: 'relative',
                  right: theme.spacing(54.5),
                },
            },
          },
        }}
        views={['month', 'year', 'day']}
        minDate={minDate ? dayjs(minDate) : undefined}
        maxDate={maxDate ? dayjs(maxDate) : undefined}
        {...props}
      />
    </LocalizationProvider>
  )
}

export default DatePicker
