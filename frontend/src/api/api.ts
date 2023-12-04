import { CandidateDetail, User, AdverseactionDetail } from '@/utils/types'
import api_routes from './api_routes'
import apiClient from './axios'
export const checkUser = async (email: string, password: string) => {
  try {
    const res = await apiClient.get(
      api_routes.GET_USER_BY_EMAIL_AND_PASSWORD(email, password)
    )
    if (res.data.length > 0) {
      localStorage.setItem('token', res.data[0].email)
      return res.data[0]
    }
  } catch (error) {
    console.error('Error while checking user:', error)
  }
  return false
}

export const addAuthUser = async (email: string, password: string) => {
  try {
    const userResponse = await checkUserByEmail(email)

    if (userResponse.data.length === 0) {
      const newUserResponse = await addUser('admin', email, password)
      localStorage.setItem('user', JSON.stringify(newUserResponse))
      return newUserResponse
    }
  } catch (error) {
    console.log(error)
  }
  return false
}

export const checkUserByEmail = (email: string) => {
  return apiClient.get(api_routes.GET_USER_BY_EMAIL(email))
}
export const addUser = async (
  name: string,
  email: string,
  password: string
) => {
  const newUserResponse = await apiClient.post(api_routes.ADD_USER, {
    name: name,
    email: email,
    password: password,
  })

  return newUserResponse.data as User
}

export const getAllAdverseAction = async (): Promise<AdverseactionDetail[]> => {
  const res = await apiClient.get(api_routes.ADVERSE_ACTION)
  return res.data
}

export const fetchCandidateDetailById = (id: string) => {
  return apiClient.get(api_routes.GET_CANDIDAT_BY_ID(id))
}

export const updateCandidateDetailById = (
  body: Partial<CandidateDetail>,
  id: string
) => {
  return apiClient.patch(api_routes.GET_CANDIDAT_BY_ID(id), body)
}
