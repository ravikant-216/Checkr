import userService from '@/services/user.service'
import { TOKEN } from '@/strings/constant'
import { User, useAuth0 } from '@auth0/auth0-react'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'

type AuthContext = {
  isAuthenticate: boolean
  setIsAuthenticate: (val: boolean) => void
}

const authContext = createContext<AuthContext | null>(null)

const AuthContextProvider = ({ children }: { children: React.JSX.Element }) => {
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false)

  const { user } = useAuth0()
  const checkUser = useCallback(async () => {
    setIsAuthenticate(
      await userService.chckUserExistOtherRegisterUser(user as User)
    )
  }, [user])

  useEffect(() => {
    if (user !== undefined) {
      checkUser()
    }
  }, [checkUser, user])

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    setIsAuthenticate(token !== null)
  }, [])
  return (
    <authContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
      {children}
    </authContext.Provider>
  )
}
export default AuthContextProvider

export const useAuthContext = () => useContext(authContext) as AuthContext
