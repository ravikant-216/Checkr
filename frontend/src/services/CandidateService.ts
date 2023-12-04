import { fetchCandidateDetailById, updateCandidateDetailById } from '@/api/api'
import { CandidateDetail } from '@/utils/types'

const getCandidateById = async (id: string) => {
  const response = await fetchCandidateDetailById(id)
  return response.data as CandidateDetail
}
const updateCandidateById = async (
  id: string,
  body: Partial<CandidateDetail>
) => {
  await updateCandidateDetailById(body, id)
}

export default {
  getCandidateById,
  updateCandidateById,
}
