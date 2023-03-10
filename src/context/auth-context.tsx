import React, { ReactNode, useState } from 'react'
import * as auth from 'auth-provider'
import { User } from 'screens/project-list/search-panel'

interface AuthForm {
  username: string
  password: string
}

const AuthContext = React.createContext<{ user: User | null; login: (form: AuthForm) => Promise<void>; register: (form: AuthForm) => Promise<void>; logout: () => Promise<void> } | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  //point free (user) => setUser(user) 等价于 setUser
  const login = (form: AuthForm) => auth.login(form).then(setUser)
  const register = (form: AuthForm) => auth.register(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))
  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须要在AuthProvider中使用')
  }
  return context
}
