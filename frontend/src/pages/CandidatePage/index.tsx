/* eslint-disable @typescript-eslint/no-unused-vars */
import api_routes from '@/api/api_routes'
import { CandidateInforHeader } from '@/components/molecules/CandidateInformationHeader'
import StatusModal from '@/components/molecules/StatusModal'
import ExportCandidateModal from '@/components/organisms/ExportCandidateModal'
import Table from '@/components/organisms/Table'
import TableHeader from '@/components/organisms/TableHeader'
import HomePageTeamplates from '@/components/templates/HomePageTemplates'
import ExportIcon from '@Assets/icons/Export.svg'
import AddIcon from '@Assets/icons/AddBox.svg'
import usePagination from '@/hooks/usePagination'
import { ADJUDICATION, STATUSES } from '@/strings/constant'
import { CandidateDetail } from '@/utils/types'
import { Stack } from '@mui/material'
import { useMemo, useState } from 'react'
import { ColumnDefination } from './constant'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@/components/atoms/Icon'

const CandidatePage = () => {
  const { data, fetchParticularPage, page } = usePagination<CandidateDetail>(
    api_routes.CANDIDATE
  )

  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [statusItems, setStatusItems] = useState<string[]>([])
  const [adjudicationItems, setAdjudicationItems] = useState<string[]>([])
  const [showExportModal, setShowExportModal] = useState(false)
  const [showStatusModal, setShowStatusModal] = useState(false)

  const toggleExportModal = () => {
    setShowExportModal(!showExportModal)
  }

  const toogleStatusModal = () => {
    setShowStatusModal(!showStatusModal)
  }

  const handleSearchChange = (val: string) => {
    setSearch(val)
  }

  const handleStatusAndAdjudicationChange = (
    statusItem: string[],
    adjudicationItems: string[]
  ) => {
    setStatusItems(statusItem)
    setAdjudicationItems(adjudicationItems)
  }

  const filterData = useMemo<CandidateDetail[] | undefined>(() => {
    if (
      search === '' &&
      statusItems.length === 0 &&
      adjudicationItems.length === 0
    )
      return undefined
    return data.filter((item) => {
      const option1 =
        search !== '' && item.name.toLowerCase().includes(search.toLowerCase())

      const option2 =
        statusItems.length !== 0 &&
        statusItems.some(
          (status) => status.toLowerCase() === item.status.status.toLowerCase()
        )

      const option3 =
        adjudicationItems.length !== 0 &&
        adjudicationItems.some(
          (adjudication) =>
            adjudication.toLowerCase() === item.adjudication.toLowerCase()
        )

      return option1 || option2 || option3
    })
  }, [data, search, statusItems, adjudicationItems])

  const handleRowClick = (row: CandidateDetail) => {
    //Will be redirect to candidate detail page
    navigate(`/candidate/${row.id}`)
  }

  const handleExport = (_startDate: string, _endDate: string) => {
    //Will be export after backend is done
    toggleExportModal()
    toogleStatusModal()
  }

  return (
    <HomePageTeamplates label="Candidates">
      <Stack gap={2}>
        <CandidateInforHeader
          heading="Candidates"
          firstButtonIcon={<Icon src={ExportIcon} alt="Export Icon" />}
          secondButtonIcon={<Icon src={AddIcon} alt="Add Icon" />}
          firstButtonName="Export"
          secondButtonName="Manual Order"
          onfirstButtonclick={toggleExportModal}
        />
        <Table
          height="fit-content"
          tableHeader={
            <TableHeader
              statuses={STATUSES}
              adjudication={ADJUDICATION}
              handleSearchChange={handleSearchChange}
              onSelectedItemsChange={handleStatusAndAdjudicationChange}
            />
          }
          page={page}
          pageCount={filterData?.length ?? 10}
          onPageChange={(page) => {
            fetchParticularPage(page)
          }}
          onRowClick={handleRowClick}
          isFiltered={filterData !== undefined}
          columns={ColumnDefination}
          data={filterData ?? data}
        />
        <ExportCandidateModal
          open={showExportModal}
          onClose={toggleExportModal}
          handleExport={handleExport}
        />
        <StatusModal open={showStatusModal} onClose={toogleStatusModal} />
      </Stack>
    </HomePageTeamplates>
  )
}

export default CandidatePage
