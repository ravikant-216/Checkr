import { addAuthUser, checkUserByEmail } from '@/api/api'
import { TOKEN } from '@/strings/constant'
import { User } from '@auth0/auth0-react'

const findUserByEmail = async (email: string) => {
  try {
    const res = await checkUserByEmail(email)
    return res.data.token
  } catch (err) {
    console.log(err)
  }
}

const chckUserExistOtherRegisterUser = async (user: User) => {
  try {
    const res = await findUserByEmail(user.email as string)
    if (res) {
      localStorage.setItem(TOKEN, res)
    } else {
      const res2 = await addAuthUser(user.email as string, 'Password@123')
      localStorage.setItem(TOKEN, res2)
    }
    return true
  } catch {
    return false
  }
}

export default {
  findUserByEmail,
  chckUserExistOtherRegisterUser,
}
