import { ButtonComponent } from '@/components/atoms/Button'
import DatePicker from '@/components/molecules/DatePicker'
import {
  EXPORT_CSV,
  EXPORT_REPORT,
  REPORTS_FROM,
  REPORTS_TO,
} from '@/strings/constant'
import styled from '@emotion/styled'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

interface ExportCandidateModalProps {
  open: boolean
  onClose: () => void
  handleExport: (fromDate: string, toDate: string) => void
}

const StyledDatePicker = styled(DatePicker)({
  width: '325px',
})
const ExportCandidateModal = ({
  open,
  onClose,
  handleExport,
}: ExportCandidateModalProps) => {
  const [reportsFromDate, setReportsFromDate] = useState<Dayjs | null>(null)
  const [reportsToDate, setReportsToDate] = useState<Dayjs | null>(null)

  const handleReportsFromDateChange = (date: unknown) => {
    setReportsFromDate(dayjs(date as Date))
  }
  const handleReportsToDateChange = (date: unknown) => {
    setReportsToDate(dayjs(date as Date))
  }

  const isButtonDisabled = reportsFromDate === null || reportsToDate === null

  const handleSubmit = () => {
    if (reportsFromDate && reportsToDate) {
      handleExport(reportsFromDate.toString(), reportsToDate.toString())
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle>{EXPORT_CSV}</DialogTitle>
      <DialogContent dividers>
        <Stack direction="row" gap={6.25} height="280px">
          <Stack>
            <Typography>{REPORTS_FROM}</Typography>
            <StyledDatePicker
              onChange={handleReportsFromDateChange}
              maxDate={new Date().toISOString()}
            />
          </Stack>
          <Stack>
            <Typography>{REPORTS_TO}</Typography>
            <StyledDatePicker
              onChange={handleReportsToDateChange}
              minDate={reportsFromDate?.toString()}
              maxDate={new Date().toISOString()}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Stack>
          <ButtonComponent
            buttonText={EXPORT_REPORT}
            buttonVariant="contained"
            disabled={isButtonDisabled}
            onClick={handleSubmit}
          />
        </Stack>
      </DialogActions>
    </Dialog>
  )
}

export default ExportCandidateModal
