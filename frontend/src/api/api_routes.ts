const CANDIDATE = '/candidate'

const GET_CANDIDAT_BY_ID = (id: string) => `${CANDIDATE}/${id}`
const GET_USER_BY_EMAIL_AND_PASSWORD = (email: string, password: string) =>
  `/users?email=${email}&password=${password}`
const GET_USER_BY_EMAIL = (email: string) => `/users?email=${email}`
const ADD_USER = '/users'
const ADVERSE_ACTION = '/userActions'
const LOGIN = '/user/login'
const SIGN_UP = '/user/signup'
const FORGOT_PASSWORD = '/user/reset-password'
const CANDIDATE_EXPORT = `${CANDIDATE}/report`
export default {
  CANDIDATE,
  GET_CANDIDAT_BY_ID,
  GET_USER_BY_EMAIL_AND_PASSWORD,
  GET_USER_BY_EMAIL,
  ADD_USER,
  ADVERSE_ACTION,
  LOGIN,
  SIGN_UP,
  FORGOT_PASSWORD,
  CANDIDATE_EXPORT,
}
