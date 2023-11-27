import { useState, ChangeEvent } from 'react'
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/utils/regex'

export interface AuthState {
  email: string
  isValidEmail: boolean
  password: string
  isValidPassword: boolean
  handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const useAuthState = (): AuthState => {
  const [email, setEmail] = useState<string>('')
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
  const [password, setPassword] = useState<string>('')
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true)

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value
    setEmail(newEmail)
    setIsValidEmail(EMAIL_REGEX.test(newEmail))
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredPassword = event.target.value
    setPassword(enteredPassword)
    setIsValidPassword(PASSWORD_REGEX.test(enteredPassword))
  }

  return {
    email,
    isValidEmail,
    password,
    isValidPassword,
    handleEmailChange,
    handlePasswordChange,
  }
}
