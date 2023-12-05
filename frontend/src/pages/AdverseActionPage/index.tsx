import Table from '@/components/organisms/Table'
import TableHeader from '@/components/organisms/TableHeader'
import HomePageTeamplates from '@/components/templates/HomePageTemplates'
import { ADVERSE_ACTIONS, STATUSES } from '@/strings/constant'
import theme from '@/themes'
import { Box, Typography, styled } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { ColumnDefination } from './constant'
import { getAllAdverseAction } from '@/api/api'
import { AdverseactionDetail } from '@/utils/types'

export interface AdverseActionProps {}
const StyledBox = styled(Box)({
  padding: '20px 15px 0 15px',
})
const TypoStyle = styled(Box)({
  padding: '0 15px 20px 0px',
})
export const AdverseActionPage = () => {
  const [data, setData] = useState<AdverseactionDetail[]>([])

  const fetchAllAdverseAction = useCallback(async () => {
    const response = await getAllAdverseAction()
    setData(response)
  }, [])

  useEffect(() => {
    fetchAllAdverseAction()
  }, [fetchAllAdverseAction])

  return (
    <HomePageTeamplates label={'Adverse Actions'}>
      <StyledBox>
        <TypoStyle>
          <Typography variant="h1" color={theme.palette.text.highEmphasis}>
            {ADVERSE_ACTIONS}
          </Typography>
        </TypoStyle>
        <Table
          columns={ColumnDefination}
          height="fit-content"
          data={data}
          tableHeader={
            <TableHeader
              handleSearchChange={() => {}}
              onSelectedItemsChange={() => {}}
              statuses={STATUSES}
            />
          }
        />
      </StyledBox>
    </HomePageTeamplates>
  )
}
