const CANDIDATE = '/candidates'
const GET_USER_BY_EMAIL_AND_PASSWORD = (email: string, password: string) =>
  `/users?email=${email}&password=${password}`
const GET_USER_BY_EMAIL = (email: string) => `/users?email=${email}`
const ADD_USER = '/users'
const ADVERSE_ACTION = '/application_status'
export default {
  CANDIDATE,
  GET_USER_BY_EMAIL_AND_PASSWORD,
  GET_USER_BY_EMAIL,
  ADD_USER,
  ADVERSE_ACTION,
}
