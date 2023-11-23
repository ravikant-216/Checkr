import * as React from 'react'
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'

export interface CustomizedAccordionsProps {
  width?: string
  heading: string
  children: React.ReactNode
  expanded?: boolean
  setExpanded?: React.Dispatch<React.SetStateAction<boolean>>
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))({
  borderRadius: theme.spacing(2),
  background: theme.palette.structural.STRUCTURAL_WHITE,
  border: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
})

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    paddingRight: theme.spacing(1),
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
})

const AccordionDetails = styled(MuiAccordionDetails)({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
})

export default function CustomizedAccordions({
  width = '98vw',
  expanded = false,
  setExpanded,
  ...props
}: Readonly<CustomizedAccordionsProps>) {
  const handleChange = (_: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded?.(newExpanded)
  }

  return (
    <div>
      <Accordion
        sx={{ width: width }}
        expanded={expanded}
        onChange={handleChange}
      >
        <AccordionSummary>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.highEmphasis}
          >
            {props.heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{props.children}</AccordionDetails>
      </Accordion>
    </div>
  )
}
