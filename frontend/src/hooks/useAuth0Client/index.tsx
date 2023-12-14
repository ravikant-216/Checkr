import { useAuthContext } from '@/context/AuthContext'
import { checkUser, addAuthUser } from '../../api/api'
export interface LoginAndPasswordBody {
  email: string
  password: string
}

const useManualLogin = () => {
  const { setIsAuthenticate } = useAuthContext()
  const handleLogin = async ({ email, password }: LoginAndPasswordBody) => {
    try {
      const user = await checkUser(email, password)
      if (user) {
        localStorage.setItem('token', user)
        setIsAuthenticate(true)
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
        localStorage.setItem('token', user)
        setIsAuthenticate(true)
        return user
      } else return null
    } catch (error) {
      console.log(error)
    }
  }

  return { handleLogin, handleSignUp }
}

export default useManualLogin
