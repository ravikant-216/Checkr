/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  exportCandidate,
  fetchCandidateDetailById,
  updateCandidateDetailById,
} from '@/api/api'
import { CandidateDetail } from '@/utils/types'
import autoTable from 'jspdf-autotable'
import jsPDF from 'jspdf'

const getCandidateById = async (id: string) => {
  const response = await fetchCandidateDetailById(id)
  const data = response.data as CandidateDetail
  data.email = 'Darron88@gmail.com'
  return data
}
const updateCandidateById = async (
  id: string,
  body: Partial<CandidateDetail>
) => {
  await updateCandidateDetailById(body, id)
}

const exportAllCandidate = async (startDate: string, endDate: string) => {
  try {
    const res = await exportCandidate(startDate, endDate)
    const data = res.data as CandidateDetail[]
    const doc = new jsPDF()

    // Define table headers
    const headers = ['Nname', 'Adjudication', 'Status', 'Location', 'Date']

    // Create table body
    const body = data.map((candidate) => [
      candidate.name,
      candidate.adjudication ?? '-',
      candidate.status.value,
      candidate.location,
      candidate.dob,
    ])

    // Add page title and table headers
    doc.text('Candidate List', 10, 10)
    autoTable(doc, {
      head: [headers],
      body: body as any,
      startY: 20,
    })

    // Save the PDF
    doc.save(`candidates-${startDate}-${endDate}.pdf`)
  } catch (error) {
    console.log(error)
  }
}

export default {
  getCandidateById,
  updateCandidateById,
  exportAllCandidate,
}
