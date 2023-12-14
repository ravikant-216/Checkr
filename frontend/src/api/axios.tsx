import { BASE_URL } from '@/utils/env'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: BASE_URL,
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiClient
