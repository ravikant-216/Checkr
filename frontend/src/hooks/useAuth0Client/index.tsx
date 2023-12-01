import { checkUser, addAuthUser } from '../../api/api'
export interface LoginAndPasswordBody {
  email: string
  password: string
}

const useManualLogin = () => {
  const handleLogin = async ({ email, password }: LoginAndPasswordBody) => {
    try {
      const user = await checkUser(email, password)
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        return user
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignUp = async ({ email, password }: LoginAndPasswordBody) => {
    try {
      const user = await addAuthUser(email, password)
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        return user
      } else return null
    } catch (error) {
      console.log(error)
    }
  }

  return { handleLogin, handleSignUp }
}

export default useManualLogin
