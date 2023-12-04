import { BASE_URL } from '@/utils/env'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: BASE_URL,
})

export default apiClient
