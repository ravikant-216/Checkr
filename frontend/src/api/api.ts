/* eslint-disable @typescript-eslint/no-explicit-any */
import { CandidateDetail, User, AdverseactionDetail } from '@/utils/types'
import api_routes from './api_routes'
import apiClient from './axios'
import { AderseActionData } from '@/__mocks__'
export const checkUser = async (email: string, password: string) => {
  try {
    const res = await apiClient.post(api_routes.LOGIN, {
      password,
      email,
    })
    localStorage.setItem('token', res.data.token)
    return res.data.token
  } catch (error) {
    console.error('Error while checking user:', error)
  }
  return false
}

export const addAuthUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post(api_routes.SIGN_UP, {
      email,
      password,
      name: 'John',
    })
    localStorage.setItem('token', response.data.token)
    return response.data.token
  } catch (error) {
    console.log(error)
  }
  return false
}

export const checkUserByEmail = (email: string) => {
  return apiClient.post(api_routes.FORGOT_PASSWORD, {
    email,
  })
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
  const res = Promise.resolve(AderseActionData as any)
  return res
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
export const exportCandidate = (startDate: string, endDate: string) => {
  return apiClient.post(api_routes.CANDIDATE_EXPORT, {
    startDate,
    endDate,
  })
}
