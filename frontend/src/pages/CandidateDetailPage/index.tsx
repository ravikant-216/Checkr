import Accordions from '@/components/organisms/Accordian'
import HomePageTeamplates from '@/components/templates/HomePageTemplates'
import BackIcon from '@Assets/icons/Back.svg'
import { Stack, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card, { CardProps } from '@/components/molecules/Card'
import {
  CANDIDATE_INFO,
  ENGAGE,
  PRE_ADERVE_ACTION,
  REPORT_INFORMATION,
  REPORT_INFORMATION_TEXT,
} from '@/strings/constant'
import { CandidateInforHeader } from '@/components/molecules/CandidateInformationHeader'
import { CandidateDetail } from '@/utils/types'
import Table from '@/components/organisms/Table'
import { CANDIDATES, COURT_RECORD } from '@/__mocks__'
import { getCandidateInFormation } from '@/utils/function'
import { useNavigate, useParams } from 'react-router-dom'
import CandidateService from '@/services/CandidateService'
import { courtSearchColumnDefination } from './constant'

const CardGrid = ({ cardData }: { cardData: CardProps[] }) => {
  return (
    <Grid container spacing={4} padding={2}>
      {cardData.map((data) => (
        <Grid item xs={12} sm={6} md={4} key={data.heading}>
          <Card {...data} />
        </Grid>
      ))}
    </Grid>
  )
}

const CandidateDetailPage = () => {
  const [accordian1, setAccordian1] = useState(false)
  const [accordian2, setAccordian2] = useState(false)
  const [candidate, setCandidate] = useState<CandidateDetail>(CANDIDATES[0])

  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const getCandidateById = useCallback(async () => {
    const data = await CandidateService.getCandidateById(id as string)
    setCandidate(data)
  }, [id])

  useEffect(() => {
    getCandidateById()
  }, [getCandidateById])

  const handleAccordianChange1 = (isExpanded: boolean) => {
    setAccordian1(isExpanded)
  }
  const handleAccordianChange2 = (isExpanded: boolean) => {
    setAccordian2(isExpanded)
  }

  const preAdverseOnClick = () => {
    navigate('/pre-adverse-action', {
      state: candidate,
    })
  }

  const engageOnClick = async () => {
    await CandidateService.updateCandidateById(id as string, {
      adjudication: 'ENGAGE',
    })
    navigate('/dashboard')
  }

  return (
    <HomePageTeamplates label="Candidates">
      <Stack gap={6} mt={6.5}>
        <CandidateInforHeader
          onBackIconClick={() => navigate(-1)}
          backIcon={BackIcon}
          heading={candidate.name}
          onfirstButtonclick={preAdverseOnClick}
          onSecondButtonclick={engageOnClick}
          firstButtonName={PRE_ADERVE_ACTION}
          secondButtonName={ENGAGE}
          disabledSecondButton={candidate.adjudication === 'ENGAGE'}
        />
        <Accordions
          heading={CANDIDATE_INFO}
          width="100%"
          expanded={accordian1}
          setExpanded={handleAccordianChange1}
        >
          <Stack>
            <CardGrid cardData={getCandidateInFormation(candidate)} />
          </Stack>
        </Accordions>
        <Accordions
          heading={REPORT_INFORMATION_TEXT}
          width="100%"
          expanded={accordian2}
          setExpanded={handleAccordianChange2}
        >
          <Stack>
            <CardGrid cardData={REPORT_INFORMATION} />
          </Stack>
        </Accordions>
        <Table
          tableHeader={
            <Stack p={4}>
              <Typography variant="subtitle1">Court Searches</Typography>
            </Stack>
          }
          height="fit-content"
          data={COURT_RECORD}
          columns={courtSearchColumnDefination}
          showPagination={false}
        />
      </Stack>
    </HomePageTeamplates>
  )
}

export default CandidateDetailPage
