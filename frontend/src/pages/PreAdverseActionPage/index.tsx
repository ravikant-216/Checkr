import StatusModal from '@/components/molecules/StatusModal'
import PreAdverseCard from '@/components/organisms/PreAdverseCard'
import { PreviewNoticeModal } from '@/components/organisms/PreviewNoticeModal'
import HomePageTeamplates from '@/components/templates/HomePageTemplates'
import { CandidateDetail } from '@/utils/types'
import { Box, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const StyledBox = styled(Box)({
  width: '100%',
})

export const PreAdverseActionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
  const navigate = useNavigate()
  const { state } = useLocation() as { state?: CandidateDetail }
  const handlePreviewClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const handleStatusModalClose = () => {
    setIsStatusModalOpen(false)
  }

  const handlePreviewSubmit = () => {
    setIsModalOpen(false)
    setIsStatusModalOpen(true)
    setTimeout(() => {
      setIsStatusModalOpen(false)
      navigate('dashboard') // Linking page
    }, 3000)
  }

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])
  return (
    <HomePageTeamplates label={'Candidates'}>
      <StyledBox>
        <PreAdverseCard
          onBackClick={() => {
            navigate(-1)
          }}
          onPreviewClick={handlePreviewClick}
        />
        <PreviewNoticeModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          handleSubmit={handlePreviewSubmit}
          email={state?.email}
          name={state?.name}
        />
        <StatusModal
          open={isStatusModalOpen}
          onClose={handleStatusModalClose}
        />
      </StyledBox>
    </HomePageTeamplates>
  )
}
