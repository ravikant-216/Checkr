import StatusModal from '@/components/molecules/StatusModal'
import PreAdverseCard from '@/components/organisms/PreAdverseCard'
import { PreviewNoticeModal } from '@/components/organisms/PreviewNoticeModal'
import HomePageTeamplates from '@/components/templates/HomePageTemplates'
import { Box, styled } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export interface PreAdverseActionProps {
  email?: string
  name?: string
}
const StyledBox = styled(Box)({
  padding: '20px 15px 0 15px',
  width: '100%',
})

export const PreAdverseActionPage = ({
  email,
  name,
}: PreAdverseActionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
  const navigate = useNavigate()
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
      navigate('') // Linking page
    }, 3000)
  }
  return (
    <HomePageTeamplates label={'Candidates'}>
      <StyledBox>
        <PreAdverseCard
          onBackClick={() => {
            navigate('')
          }}
          onPreviewClick={() => handlePreviewClick()}
        />
        <PreviewNoticeModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          handleSubmit={handlePreviewSubmit}
          email={email}
          name={name}
        />
        <StatusModal
          open={isStatusModalOpen}
          onClose={handleStatusModalClose}
        />
      </StyledBox>
    </HomePageTeamplates>
  )
}
